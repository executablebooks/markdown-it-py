from pathlib import Path
import re
import sys
from typing import List, Optional

from docutils import nodes
from docutils.parsers.rst.states import Inliner, RSTStateMachine, Body
from docutils.parsers.rst import DirectiveError
from docutils.parsers.rst.directives.misc import Include
from docutils.statemachine import StringList


class MockingError(Exception):
    """An exception to signal an error during mocking of docutils components."""


class MockInliner:
    """A mock version of `docutils.parsers.rst.states.Inliner`.

    This is parsed to role functions.
    """

    def __init__(self, renderer, lineno: int):
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


class MockState:
    """A mock version of `docutils.parsers.rst.states.RSTState`.

    This is parsed to the `Directives.run()` method,
    so that they may run nested parses on their content that will be parsed as markdown,
    rather than RST.
    """

    def __init__(self, renderer, state_machine: "MockStateMachine", lineno: int):
        self._renderer = renderer
        self._lineno = lineno
        self.document = renderer.document
        self.state_machine = state_machine

        class Struct:
            document = self.document
            reporter = self.document.reporter
            language = self.document.settings.language_code
            title_styles = []
            section_level = max(renderer._level_to_elem)
            section_bubble_up_kludge = False
            inliner = MockInliner(renderer, lineno)

        self.memo = Struct

    def nested_parse(
        self,
        block: StringList,
        input_offset: int,
        node: nodes.Element,
        match_titles: bool = False,
        state_machine_class=None,
        state_machine_kwargs=None,
    ):
        current_match_titles = self.state_machine.match_titles
        self.state_machine.match_titles = match_titles
        with self._renderer.current_node_context(node):
            self._renderer.nested_render_text(
                "\n".join(block), self._lineno + input_offset
            )
        self.state_machine.match_titles = current_match_titles

    def inline_text(self, text: str, lineno: int):
        # TODO return messages?
        messages = []
        paragraph = nodes.paragraph("")

        tokens = self._renderer.md.parseInline(text, self._renderer.env)
        for token in tokens:
            if token.map:
                token.map = [token.map[0] + lineno, token.map[1] + lineno]

        # here we instantiate a new renderer,
        # so that the nested parse does not effect the current renderer,
        # but we use the same env, so that link references, etc
        # are added to the global parse.
        from .renderer import DocRenderer

        nested_renderer = DocRenderer(
            self._renderer.md, document=self.document, current_node=paragraph
        )
        nested_renderer.run_render(tokens, self._renderer.env, ouput_footnotes=False)
        return paragraph.children, messages

    # U+2014 is an em-dash:
    attribution_pattern = re.compile("^((?:---?(?!-)|\u2014) *)(.+)")

    def block_quote(self, lines: List[str], line_offset: int):
        """Parse a block quote, which is a block of text,
        followed by an (optional) attribution.

        ::

           No matter where you go, there you are.

           -- Buckaroo Banzai
        """
        elements = []
        # split attribution
        last_line_blank = False
        blockquote_lines = lines
        attribution_lines = []
        attribution_line_offset = None
        # First line after a blank line must begin with a dash
        for i, line in enumerate(lines):
            if not line.strip():
                last_line_blank = True
                continue
            if not last_line_blank:
                last_line_blank = False
                continue
            last_line_blank = False
            match = self.attribution_pattern.match(line)
            if not match:
                continue
            attribution_line_offset = i
            attribution_lines = [match.group(2)]
            for at_line in lines[i + 1 :]:
                indented_line = at_line[len(match.group(1)) :]
                if len(indented_line) != len(at_line.lstrip()):
                    break
                attribution_lines.append(indented_line)
            blockquote_lines = lines[:i]
            break
        # parse block
        blockquote = nodes.block_quote()
        self.nested_parse(blockquote_lines, line_offset, blockquote)
        elements.append(blockquote)
        # parse attribution
        if attribution_lines:
            attribution_text = "\n".join(attribution_lines)
            lineno = self._lineno + line_offset + attribution_line_offset
            textnodes, messages = self.inline_text(attribution_text, lineno)
            attribution = nodes.attribution(attribution_text, "", *textnodes)
            (
                attribution.source,
                attribution.line,
            ) = self.state_machine.get_source_and_line(lineno)
            blockquote += attribution
            elements += messages
        return elements

    def build_table(self, tabledata, tableline, stub_columns=0, widths=None):
        return Body.build_table(self, tabledata, tableline, stub_columns, widths)

    def build_table_row(self, rowdata, tableline):
        return Body.build_table_row(self, rowdata, tableline)

    def __getattr__(self, name):
        """This method is only be called if the attribute requested has not
        been defined. Defined attributes will not be overridden.
        """
        if hasattr(Body, name):
            msg = "{cls} has not yet implemented attribute '{name}'".format(
                cls=type(self).__name__, name=name
            )
            raise MockingError(msg).with_traceback(sys.exc_info()[2])
        msg = "{cls} has no attribute {name}".format(cls=type(self).__name__, name=name)
        raise MockingError(msg).with_traceback(sys.exc_info()[2])


class MockStateMachine:
    """A mock version of `docutils.parsers.rst.states.RSTStateMachine`.

    This is parsed to the `Directives.run()` method.
    """

    def __init__(self, renderer, lineno: int):
        self._renderer = renderer
        self._lineno = lineno
        self.document = renderer.document
        self.reporter = self.document.reporter
        self.node = renderer.current_node
        self.match_titles = True

    def get_source(self, lineno: Optional[int] = None):
        """Return document source path."""
        return self.document["source"]

    def get_source_and_line(self, lineno: Optional[int] = None):
        """Return (source path, line) tuple for current or given line number."""
        return self.document["source"], lineno or self._lineno

    def __getattr__(self, name):
        """This method is only be called if the attribute requested has not
        been defined. Defined attributes will not be overridden.
        """
        if hasattr(RSTStateMachine, name):
            msg = "{cls} has not yet implemented attribute '{name}'".format(
                cls=type(self).__name__, name=name
            )
            raise MockingError(msg).with_traceback(sys.exc_info()[2])
        msg = "{cls} has no attribute {name}".format(cls=type(self).__name__, name=name)
        raise MockingError(msg).with_traceback(sys.exc_info()[2])


class MockIncludeDirective:
    """This directive uses a lot of statemachine logic that is not yet mocked.
    Therefore, we treat it as a special case (at least for now).

    See:
    https://docutils.sourceforge.io/docs/ref/rst/directives.html#including-an-external-document-fragment
    """

    def __init__(
        self,
        renderer,
        name: str,
        klass: Include,
        arguments: list,
        options: dict,
        body: List[str],
        token,
    ):
        self.renderer = renderer
        self.document = renderer.document
        self.name = name
        self.klass = klass
        self.arguments = arguments
        self.options = options
        self.body = body
        self.lineno = token.position.line_start
        self.token = token

    def run(self):

        from docutils.parsers.rst.directives.body import CodeBlock, NumberLines

        if not self.document.settings.file_insertion_enabled:
            raise DirectiveError(2, 'Directive "{}" disabled.'.format(self.name))

        source_dir = Path(self.document["source"]).absolute().parent
        include_arg = "".join([s.strip() for s in self.arguments[0].splitlines()])

        if include_arg.startswith("<") and include_arg.endswith(">"):
            # # docutils "standard" includes
            path = Path(self.klass.standard_include_path).joinpath(include_arg[1:-1])
        else:
            # if using sphinx interpret absolute paths "correctly",
            # i.e. relative to source directory
            try:
                sphinx_env = self.document.settings.env
                _, include_arg = sphinx_env.relfn2path(self.arguments[0])
                sphinx_env.note_included(include_arg)
            except AttributeError:
                pass
            path = Path(include_arg)
        path = source_dir.joinpath(path)

        # read file
        encoding = self.options.get("encoding", self.document.settings.input_encoding)
        error_handler = self.document.settings.input_encoding_error_handler
        # tab_width = self.options.get("tab-width", self.document.settings.tab_width)
        try:
            file_content = path.read_text(encoding=encoding, errors=error_handler)
        except Exception as error:
            raise DirectiveError(
                4,
                'Directive "{}": error reading file: {}\n{error}.'.format(
                    self.name, path, error
                ),
            )

        # get required section of text
        startline = self.options.get("start-line", None)
        endline = self.options.get("end-line", None)
        file_content = "\n".join(file_content.splitlines()[startline:endline])
        startline = startline or 0
        for split_on_type in ["start-after", "end-before"]:
            split_on = self.options.get(split_on_type, None)
            if not split_on:
                continue
            split_index = file_content.find(split_on)
            if split_index < 0:
                raise DirectiveError(
                    4,
                    'Directive "{}"; option "{}": text not found "{}".'.format(
                        self.name, split_on_type, split_on
                    ),
                )
            if split_on_type == "start-after":
                startline += split_index + len(split_on)
                file_content = file_content[split_index + len(split_on) :]
            else:
                file_content = file_content[:split_index]

        if "literal" in self.options:
            literal_block = nodes.literal_block(
                file_content, source=str(path), classes=self.options.get("class", [])
            )
            literal_block.line = 1  # TODO don;t think this should be 1?
            self.add_name(literal_block)
            if "number-lines" in self.options:
                try:
                    startline = int(self.options["number-lines"] or 1)
                except ValueError:
                    raise DirectiveError(
                        3, ":number-lines: with non-integer " "start value"
                    )
                endline = startline + len(file_content.splitlines())
                if file_content.endswith("\n"):
                    file_content = file_content[:-1]
                tokens = NumberLines([([], file_content)], startline, endline)
                for classes, value in tokens:
                    if classes:
                        literal_block += nodes.inline(value, value, classes=classes)
                    else:
                        literal_block += nodes.Text(value)
            else:
                literal_block += nodes.Text(file_content)
            return [literal_block]
        if "code" in self.options:
            self.options["source"] = str(path)
            state_machine = MockStateMachine(self.renderer, self.lineno)
            state = MockState(self.renderer, state_machine, self.lineno)
            codeblock = CodeBlock(
                name=self.name,
                arguments=[self.options.pop("code")],
                options=self.options,
                content=file_content.splitlines(),
                lineno=self.lineno,
                content_offset=0,
                block_text=file_content,
                state=state,
                state_machine=state_machine,
            )
            return codeblock.run()

        # Here we perform a nested render, but temporarily setup the document/reporter
        # with the correct document path and lineno for the included file.
        source = self.renderer.document["source"]
        rsource = self.renderer.reporter.source
        line_func = getattr(self.renderer.reporter, "get_source_and_line", None)
        try:
            self.renderer.document["source"] = str(path)
            self.renderer.reporter.source = str(path)
            self.renderer.reporter.get_source_and_line = lambda l: (str(path), l)
            self.renderer.nested_render_text(file_content, startline)
        finally:
            self.renderer.document["source"] = source
            self.renderer.reporter.source = rsource
            if line_func is not None:
                self.renderer.reporter.get_source_and_line = line_func
            else:
                del self.renderer.reporter.get_source_and_line
        return []

    def add_name(self, node):
        """Append self.options['name'] to node['names'] if it exists.

        Also normalize the name string and register it as explicit target.
        """
        if "name" in self.options:
            name = nodes.fully_normalize_name(self.options.pop("name"))
            if "name" in node:
                del node["name"]
            node["names"].append(name)
            self.renderer.document.note_explicit_target(node, node)
