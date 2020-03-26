"""NOTE: this will eventually be moved out of core"""
from contextlib import contextmanager
import inspect
import json
from os.path import splitext
from typing import List, Optional
from urllib.parse import urlparse

import yaml

from docutils import nodes
from docutils.frontend import OptionParser

from docutils.languages import get_language
from docutils.parsers.rst import directives, Directive, DirectiveError, roles
from docutils.parsers.rst import Parser as RSTParser
from docutils.parsers.rst.directives.misc import Include
from docutils.statemachine import StringList
from docutils.utils import new_document, Reporter

from markdown_it import MarkdownIt
from markdown_it.token import Token, nest_tokens
from markdown_it.utils import AttrDict
from markdown_it.common.utils import escapeHtml

from .mocking import (
    MockInliner,
    MockState,
    MockStateMachine,
    MockingError,
    MockIncludeDirective,
)
from .parse_directives import parse_directive_text, DirectiveParsingError


def make_document(source_path="notset") -> nodes.document:
    """Create a new docutils document."""
    settings = OptionParser(components=(RSTParser,)).get_default_values()
    return new_document(source_path, settings=settings)


class DocutilsRenderer:
    __output__ = "docutils"

    def __init__(
        self,
        md: MarkdownIt,
        options=None,
        document: Optional[nodes.document] = None,
        current_node: Optional[nodes.Element] = None,
    ):
        self.md = md
        self.options = options or {}
        self.rules = {
            k: v
            for k, v in inspect.getmembers(self, predicate=inspect.ismethod)
            if k.startswith("render_") and k != "render_children"
        }
        self.document = document or make_document()
        self.reporter = self.document.reporter  # type: Reporter
        self.current_node = current_node or self.document
        self.language_module = self.document.settings.language_code  # type: str
        get_language(self.language_module)
        # TODO merge these with self.env?
        self.config = {}
        self._level_to_elem = {0: self.document}

    def run_render(self, tokens: List[Token], env: AttrDict, ouput_footnotes=True):
        """Run the render on a token stream.

        :param tokens: the token stream
        :param env: the environment sandbox associated with the tokens,
            containing additional metadata like reference info
        """
        self.env = env

        # propagate line number down to inline elements
        for token in tokens:
            for child in token.children or []:
                child.map = token.map

        # nest tokens
        tokens = nest_tokens(tokens)

        # move footnote definitions to env
        self.env.setdefault("foot_refs", [])
        new_tokens = []
        for token in tokens:
            if token.type == "footnote_reference_open":
                self.env["foot_refs"].append(token)
            else:
                new_tokens.append(token)
        tokens = new_tokens

        # render
        for i, token in enumerate(tokens):
            # skip hidden?
            if f"render_{token.type}" in self.rules:
                self.rules[f"render_{token.type}"](token)
            else:
                print(f"no render method for: {token.type}")

        # TODO log warning for duplicate references

        if not ouput_footnotes:
            return self.document

        # add footnotes
        referenced = {
            v["label"] for v in self.env.get("footnotes", {}).get("list", {}).values()
        }
        # only output referenced
        foot_refs = [f for f in self.env["foot_refs"] if f.meta["label"] in referenced]

        if foot_refs:
            self.current_node.append(nodes.transition())
        for footref in foot_refs:  # TODO sort by referenced
            self.render_footnote_reference_open(footref)

        return self.document

    def nested_render_text(self, text: str, lineno: int):
        """Render unparsed text."""

        # parse without front matter
        with self.md.reset_rules():
            self.md.disable("front_matter", True)
            tokens = self.md.parse(text, self.env)

        # set correct line numbers
        for token in tokens:
            if token.map:
                token.map = [token.map[0] + lineno, token.map[1] + lineno]
                for child in token.children or []:
                    child.map = token.map

        # nest tokens
        tokens = nest_tokens(tokens)

        # move footnote definitions to env
        self.env.setdefault("foot_refs", [])
        new_tokens = []
        for token in tokens:
            if token.type == "footnote_reference_open":
                self.env["foot_refs"].append(token)
            else:
                new_tokens.append(token)
        tokens = new_tokens

        # render
        for i, token in enumerate(tokens):
            # skip hidden?
            if f"render_{token.type}" in self.rules:
                self.rules[f"render_{token.type}"](token)
            else:
                print(f"no render method for: {token.type}")

    @contextmanager
    def current_node_context(self, node, append: bool = False):
        """Context manager for temporarily setting the current node."""
        if append:
            self.current_node.append(node)
        current_node = self.current_node
        self.current_node = node
        yield
        self.current_node = current_node

    def render_children(self, token):
        for i, child in enumerate(token.children or []):
            if f"render_{child.type}" in self.rules:
                self.rules[f"render_{child.type}"](child)
            else:
                print(f"no render method for: {child.type}")

    def add_line_and_source_path(self, node, token):
        """Copy the line number and document source path to the docutils node."""
        try:
            node.line = token.map[0] + 1
        except (AttributeError, TypeError):
            pass
        node.source = self.document["source"]

    def _is_section_level(self, level, section):
        return self._level_to_elem.get(level, None) == section

    def _add_section(self, section, level):
        parent_level = max(
            section_level
            for section_level in self._level_to_elem
            if level > section_level
        )
        parent = self._level_to_elem[parent_level]
        parent.append(section)
        self._level_to_elem[level] = section

        # Prune level to limit
        self._level_to_elem = dict(
            (section_level, section)
            for section_level, section in self._level_to_elem.items()
            if section_level <= level
        )

    def renderInlineAsText(self, tokens: List[Token]) -> str:
        """Special kludge for image `alt` attributes to conform CommonMark spec.

        Don't try to use it! Spec requires to show `alt` content with stripped markup,
        instead of simple escaping.
        """
        result = ""

        for token in tokens or []:
            if token.type == "text":
                result += token.content
            # elif token.type == "image":
            #     result += self.renderInlineAsText(token.children)
            else:
                result += self.renderInlineAsText(token.children)

        return result

    # ### render methods for commonmark tokens

    def render_paragraph_open(self, token):
        para = nodes.paragraph("")
        self.add_line_and_source_path(para, token)
        with self.current_node_context(para, append=True):
            self.render_children(token)

    def render_inline(self, token):
        self.render_children(token)

    def render_text(self, token):
        self.current_node.append(nodes.Text(token.content, token.content))

    def render_bullet_list_open(self, token):
        list_node = nodes.bullet_list()
        self.add_line_and_source_path(list_node, token)
        with self.current_node_context(list_node, append=True):
            self.render_children(token)

    def render_ordered_list_open(self, token):
        list_node = nodes.enumerated_list()
        self.add_line_and_source_path(list_node, token)
        with self.current_node_context(list_node, append=True):
            self.render_children(token)

    def render_list_item_open(self, token):
        item_node = nodes.list_item()
        self.add_line_and_source_path(item_node, token)
        with self.current_node_context(item_node, append=True):
            self.render_children(token)

    def render_em_open(self, token):
        node = nodes.emphasis()
        self.add_line_and_source_path(node, token)
        with self.current_node_context(node, append=True):
            self.render_children(token)

    def render_softbreak(self, token):
        self.current_node.append(nodes.Text("\n"))

    def render_strong_open(self, token):
        node = nodes.strong()
        self.add_line_and_source_path(node, token)
        with self.current_node_context(node, append=True):
            self.render_children(token)

    def render_blockquote_open(self, token):
        quote = nodes.block_quote()
        self.add_line_and_source_path(quote, token)
        with self.current_node_context(quote, append=True):
            self.render_children(token)

    def render_hr(self, token):
        node = nodes.transition()
        self.add_line_and_source_path(node, token)
        self.current_node.append(node)

    def render_code_inline(self, token):
        node = nodes.literal(token.content, token.content)
        self.add_line_and_source_path(node, token)
        self.current_node.append(node)

    def render_fence(self, token):
        text = token.content
        language = token.info.split()[0] if token.info else ""

        if language.startswith("{") and language.endswith("}"):
            return self.render_directive(token)

        if not language:
            try:
                sphinx_env = self.document.settings.env
                language = sphinx_env.temp_data.get(
                    "highlight_language", sphinx_env.config.highlight_language
                )
            except AttributeError:
                pass
        if not language:
            language = self.config.get("highlight_language", "")
        node = nodes.literal_block(text, text, language=language)
        self.add_line_and_source_path(node, token)
        self.current_node.append(node)

    def render_heading_open(self, token):
        # Test if we're replacing a section level first

        level = int(token.tag[1])
        if isinstance(self.current_node, nodes.section):
            if self._is_section_level(level, self.current_node):
                self.current_node = self.current_node.parent

        title_node = nodes.title()
        self.add_line_and_source_path(title_node, token)

        new_section = nodes.section()
        self.add_line_and_source_path(new_section, token)
        new_section.append(title_node)

        self._add_section(new_section, level)

        self.current_node = title_node
        self.render_children(token)

        assert isinstance(self.current_node, nodes.title)
        text = self.current_node.astext()
        # if self.translate_section_name:
        #     text = self.translate_section_name(text)
        name = nodes.fully_normalize_name(text)
        section = self.current_node.parent
        section["names"].append(name)
        self.document.note_implicit_target(section, section)
        self.current_node = section

    def render_link_open(self, token):
        if token.markup == "autolink":
            return self.render_autolink(token)

        ref_node = nodes.reference()
        self.add_line_and_source_path(ref_node, token)
        # Check destination is supported for cross-linking and remove extension
        # TODO escape urls?
        destination = token.attrGet("href")
        title = token.attrGet("title")
        _, ext = splitext(destination)
        # TODO check for other supported extensions, such as those specified in
        # the Sphinx conf.py file but how to access this information?
        # TODO this should probably only remove the extension for local paths,
        # i.e. not uri's starting with http or other external prefix.

        # if ext.replace('.', '') in self.supported:
        #     destination = destination.replace(ext, '')
        ref_node["refuri"] = destination
        print(token)
        if title:
            ref_node["title"] = title
        next_node = ref_node

        url_check = urlparse(destination)
        # If there's not a url scheme (e.g. 'https' for 'https:...' links),
        # or there is a scheme but it's not in the list of known_url_schemes,
        # then assume it's a cross-reference
        known_url_schemes = self.config.get("known_url_schemes", None)
        if known_url_schemes:
            scheme_known = url_check.scheme in known_url_schemes
        else:
            scheme_known = bool(url_check.scheme)

        if not url_check.fragment and not scheme_known:
            self.handle_cross_reference(token, destination)
        else:
            self.current_node.append(next_node)
            with self.current_node_context(ref_node):
                self.render_children(token)

    def handle_cross_reference(self, token, destination):
        # TODO use the docutils error reporting mechanisms, rather than raising
        if not self.config.get("ignore_missing_refs", False):
            raise NotImplementedError(
                "reference not found in current document: {} (lines: {})".format(
                    destination, token.map
                )
            )

    def render_autolink(self, token):
        refuri = target = escapeHtml(token.attrGet("href"))
        ref_node = nodes.reference(target, target, refuri=refuri)
        self.add_line_and_source_path(ref_node, token)
        self.current_node.append(ref_node)

    def render_html_inline(self, token):
        self.current_node.append(nodes.raw("", token.content, format="html"))

    def render_html_block(self, token):
        self.current_node.append(nodes.raw("", token.content, format="html"))

    def render_image(self, token):
        img_node = nodes.image()
        self.add_line_and_source_path(img_node, token)
        img_node["uri"] = token.attrGet("src")
        # TODO ideally we would render proper markup here
        img_node["alt"] = self.renderInlineAsText(token.children)

        self.current_node.append(img_node)

    # ### render methods for plugin tokens

    def render_front_matter(self, token):
        """Pass document front matter data

        For RST, all field lists are captured by
        ``docutils.docutils.parsers.rst.states.Body.field_marker``,
        then, if one occurs at the document, it is transformed by
        `docutils.docutils.transforms.frontmatter.DocInfo`, and finally
        this is intercepted by sphinx and added to the env in
        `sphinx.environment.collectors.metadata.MetadataCollector.process_doc`

        So technically the values should be parsed to AST, but this is redundant,
        since `process_doc` just converts them back to text.

        """
        try:
            data = yaml.safe_load(token.content)
        except (yaml.parser.ParserError, yaml.scanner.ScannerError) as error:
            msg_node = self.reporter.error(
                "Front matter block:\n" + str(error), line=token.map[0]
            )
            msg_node += nodes.literal_block(token.content, token.content)
            self.current_node += [msg_node]
            return

        docinfo = dict_to_docinfo(data)
        self.current_node.append(docinfo)

    # def render_table_open(self, token):
    #     # print(token)
    #     # raise

    #     table = nodes.table()
    #     table["classes"] += ["colwidths-auto"]
    #     self.add_line_and_source_path(table, token)

    #     thead = nodes.thead()
    #     # TODO there can never be more than one header row (at least in mardown-it)
    #     header = token.children[0].children[0]
    #     for hrow in header.children:
    #         nodes.t
    #         style = hrow.attrGet("style")

    #     tgroup = nodes.tgroup(cols)
    #     table += tgroup
    #     tgroup += thead

    def render_math_inline(self, token):
        content = token.content
        node = nodes.math(content, content)
        self.add_line_and_source_path(node, token)
        self.current_node.append(node)

    def render_math_block(self, token):
        content = token.content
        node = nodes.math_block(content, content, nowrap=False, number=None)
        self.add_line_and_source_path(node, token)
        self.current_node.append(node)

    def render_footnote_ref(self, token):
        """Footnote references are added as auto-numbered,
        .i.e. `[^a]` is read as rST `[#a]_`
        """
        # TODO we now also have ^[a] the inline version (currently disabled)
        # that would be rendered here
        target = token.meta["label"]
        refnode = nodes.footnote_reference("[^{}]".format(target))
        self.add_line_and_source_path(refnode, token)
        refnode["auto"] = 1
        refnode["refname"] = target
        # refnode += nodes.Text(token.target)
        self.document.note_autofootnote_ref(refnode)
        self.document.note_footnote_ref(refnode)
        self.current_node.append(refnode)

    def render_footnote_reference_open(self, token):
        target = token.meta["label"]
        footnote = nodes.footnote()
        self.add_line_and_source_path(footnote, token)
        footnote["names"].append(target)
        footnote["auto"] = 1
        self.document.note_autofootnote(footnote)
        self.document.note_explicit_target(footnote, footnote)
        with self.current_node_context(footnote, append=True):
            self.render_children(token)

    def render_myst_block_break(self, token):
        block_break = nodes.comment(token.content, token.content)
        block_break["classes"] += ["block_break"]
        self.add_line_and_source_path(block_break, token)
        self.current_node.append(block_break)

    def render_myst_target(self, token):
        text = token.content
        name = nodes.fully_normalize_name(text)
        target = nodes.target(text)
        target["names"].append(name)
        self.add_line_and_source_path(target, token)
        self.document.note_explicit_target(target, self.current_node)
        self.current_node.append(target)

    def render_myst_line_comment(self, token):
        self.current_node.append(nodes.comment(token.content, token.content))

    def render_myst_role(self, token):
        name = token.meta["name"]
        text = escapeHtml(token.content)  # TODO check this
        rawsource = f":{name}:`{token.content}`"
        lineno = token.map[0] if token.map else 0
        role_func, messages = roles.role(
            name, self.language_module, lineno, self.reporter
        )
        inliner = MockInliner(self, lineno)
        if role_func:
            nodes, messages2 = role_func(name, rawsource, text, lineno, inliner)
            # return nodes, messages + messages2
            self.current_node += nodes
        else:
            message = self.reporter.error(
                'Unknown interpreted text role "{}".'.format(name), line=lineno
            )
            problematic = inliner.problematic(text, rawsource, message)
            self.current_node += problematic

    def render_directive(self, token: Token):
        """Render special fenced code blocks as directives."""
        first_line = token.info.split(maxsplit=1)
        name = first_line[0][1:-1]
        arguments = "" if len(first_line) == 1 else first_line[1]
        # TODO directive name white/black lists
        content = token.content
        position = token.map[0]
        self.document.current_line = position

        # get directive class
        directive_class, messages = directives.directive(
            name, self.language_module, self.document
        )  # type: (Directive, list)
        if not directive_class:
            error = self.reporter.error(
                "Unknown directive type '{}'\n".format(name),
                # nodes.literal_block(content, content),
                line=position,
            )
            self.current_node += [error] + messages
            return

        try:
            arguments, options, body_lines = parse_directive_text(
                directive_class, arguments, content
            )
        except DirectiveParsingError as error:
            error = self.reporter.error(
                "Directive '{}':\n{}".format(name, error),
                nodes.literal_block(content, content),
                line=position,
            )
            self.current_node += [error]
            return

        # initialise directive
        if issubclass(directive_class, Include):
            directive_instance = MockIncludeDirective(
                self,
                name=name,
                klass=directive_class,
                arguments=arguments,
                options=options,
                body=body_lines,
                token=token,
            )
        else:
            state_machine = MockStateMachine(self, position)
            state = MockState(self, state_machine, position)
            directive_instance = directive_class(
                name=name,
                # the list of positional arguments
                arguments=arguments,
                # a dictionary mapping option names to values
                options=options,
                # the directive content line by line
                content=StringList(body_lines, self.document["source"]),
                # the absolute line number of the first line of the directive
                lineno=position,
                # the line offset of the first line of the content
                content_offset=0,  # TODO get content offset from `parse_directive_text`
                # a string containing the entire directive
                block_text="\n".join(body_lines),
                state=state,
                state_machine=state_machine,
            )

        # run directive
        try:
            result = directive_instance.run()
        except DirectiveError as error:
            msg_node = self.reporter.system_message(
                error.level, error.msg, line=position
            )
            msg_node += nodes.literal_block(content, content)
            result = [msg_node]
        except MockingError as exc:
            error = self.reporter.error(
                "Directive '{}' cannot be mocked:\n{}: {}".format(
                    name, exc.__class__.__name__, exc
                ),
                nodes.literal_block(content, content),
                line=position,
            )
            self.current_node += [error]
            return
        assert isinstance(
            result, list
        ), 'Directive "{}" must return a list of nodes.'.format(name)
        for i in range(len(result)):
            assert isinstance(
                result[i], nodes.Node
            ), 'Directive "{}" returned non-Node object (index {}): {}'.format(
                name, i, result[i]
            )
        self.current_node += result


def dict_to_docinfo(data):
    """Render a key/val pair as a docutils field node."""
    # TODO this data could be used to support default option values for directives
    docinfo = nodes.docinfo()

    for key, value in data.items():
        if not isinstance(value, (str, int, float)):
            value = json.dumps(value)
        value = str(value)
        field_node = nodes.field()
        field_node.source = value
        field_node += nodes.field_name(key, "", nodes.Text(key, key))
        field_node += nodes.field_body(value, nodes.Text(value, value))
        docinfo += field_node
    return docinfo
