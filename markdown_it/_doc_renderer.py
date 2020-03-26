"""NOTE: this will eventually be moved out of core"""
from contextlib import contextmanager
import json
import sys
from typing import List

import yaml

from docutils import nodes
from docutils.frontend import OptionParser

from docutils.languages import get_language
from docutils.parsers.rst import roles  # directives, Directive, DirectiveError, roles
from docutils.parsers.rst import Parser as RSTParser

# from docutils.parsers.rst.directives.misc import Include
from docutils.parsers.rst.states import Inliner  # RSTStateMachine, Body

# from docutils.statemachine import StringList
from docutils.utils import new_document, Reporter

from markdown_it.token import Token, nest_tokens
from markdown_it.utils import AttrDict
from markdown_it.common.utils import escapeHtml


def make_document(source_path="notset") -> nodes.document:
    """Create a new docutils document."""
    settings = OptionParser(components=(RSTParser,)).get_default_values()
    return new_document(source_path, settings=settings)


class DocRenderer:
    __output__ = "docutils"

    def __init__(self, options=None, env=None):
        self.options = options or {}
        self.env = env or AttrDict()
        self.rules = {
            k: v
            for k, v in self.__class__.__dict__.items()
            if k.startswith("render_") and k != "render_children"
        }
        self.document = make_document()
        self.reporter = self.document.reporter  # type: Reporter
        self.current_node = self.document
        self.language_module = self.document.settings.language_code  # type: str
        get_language(self.language_module)
        # TODO merge these with self.env?
        self.config = {}
        self._level_to_elem = {0: self.document}

    def run_render(self, tokens: List[Token], env: AttrDict):
        """Run the render on a token stream.

        :param tokens: the token stream
        :param env: the environment sandbox associated with the tokens,
            containing additional metadata like reference info
        """
        self.env = env
        last_map = None
        # propagate line number down to inline elements
        for token in tokens:
            if token.map:
                last_map = token.map
            elif last_map:
                token.meta["parent_line"] = last_map[0]
            for child in token.children or []:
                child.meta["parent_line"] = last_map[0]
        tokens = nest_tokens(tokens)
        for i, token in enumerate(tokens):
            # skip hidden?
            if f"render_{token.type}" in self.rules:
                self.rules[f"render_{token.type}"](self, token)
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
                self.rules[f"render_{child.type}"](self, child)
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
        language = token.info.split()[0]
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
        # TODO I think this is maybe already handled at this point?
        # refuri = escape_url(token.target)
        # TODO identify cross-references
        refuri = target = token.attrGet("href")
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
        lineno = token.meta.get("parent_line", 0)
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

        # # TODO representing as literal for place-holder
        # node = nodes.literal(rawsource, rawsource)
        # self.add_line_and_source_path(node, token)
        # self.current_node.append(node)

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


class MockingError(Exception):
    """An exception to signal an error during mocking of docutils components."""


class MockInliner:
    """A mock version of `docutils.parsers.rst.states.Inliner`.

    This is parsed to role functions.
    """

    def __init__(self, renderer: DocRenderer, lineno: int):
        self._renderer = renderer
        self.document = renderer.document
        self.reporter = renderer.document.reporter
        if not hasattr(self.reporter, "get_source_and_line"):
            # TODO this is called by some roles,
            # but I can't see how that would work in RST?
            self.reporter.get_source_and_line = lambda l: (self.document["source"], l)
        self.parent = renderer.current_node
        self.language = renderer.language_module
        self.rfc_url = "rfc%d.html"

    def problematic(self, text: str, rawsource: str, message: nodes.system_message):
        msgid = self.document.set_id(message, self.parent)
        problematic = nodes.problematic(rawsource, rawsource, refid=msgid)
        prbid = self.document.set_id(problematic)
        message.add_backref(prbid)
        return problematic

    # TODO add parse method

    def __getattr__(self, name):
        """This method is only be called if the attribute requested has not
        been defined. Defined attributes will not be overridden.
        """
        # TODO use document.reporter mechanism?
        if hasattr(Inliner, name):
            msg = "{cls} has not yet implemented attribute '{name}'".format(
                cls=type(self).__name__, name=name
            )
            raise MockingError(msg).with_traceback(sys.exc_info()[2])
        msg = "{cls} has no attribute {name}".format(cls=type(self).__name__, name=name)
        raise MockingError(msg).with_traceback(sys.exc_info()[2])
