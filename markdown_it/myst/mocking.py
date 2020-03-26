import re
import sys
from typing import List, Optional

from docutils import nodes
from docutils.parsers.rst.states import Inliner, RSTStateMachine, Body
from docutils.statemachine import StringList

# from docutils.parsers.rst.directives.misc import Include


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

    def __init__(self, renderer, state_machine: "MockStateMachine", lineno: int, token):
        self._renderer = renderer
        self._lineno = lineno
        self._token = token
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
        # TODO propagate line numbers to children (make separate function)

        # here we instantiate a new renderer,
        # so that the nested parse does not effect the current renderer,
        # but we use the same env, so that link references, etc
        # are added to the global parse.
        from .renderer import DocRenderer

        nested_renderer = DocRenderer(
            self._renderer.md, document=self.document, current_node=paragraph
        )
        nested_renderer.run_render(tokens, self._renderer.env)
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

        # TODO to allow to access like attributes like input_lines,
        # we would need to store the input lines,
        # probably via the `Document` token,
        # and maybe self._lines = lines[:], then for AstRenderer,
        # ignore private attributes

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
