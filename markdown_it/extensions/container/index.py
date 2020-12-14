"""Process block-level custom containers."""
from math import floor
from typing import Callable, Optional

from markdown_it import MarkdownIt
from markdown_it.common.utils import charCodeAt
from markdown_it.rules_block import StateBlock


def container_plugin(
    md: MarkdownIt,
    name: str,
    marker: str = ":",
    validate: Optional[Callable[[str, str], bool]] = None,
    render=None,
):
    """Plugin ported from
    `markdown-it-container <https://github.com/markdown-it/markdown-it-container>`__.

    It is a plugin for creating block-level custom containers:

    .. code-block:: md

        :::: name
        ::: name
        *markdown*
        :::
        ::::

    :param name: the name of the container to parse
    :param marker: the marker character to use
    :param validate: func(marker, param) -> bool, default matches against the name
    :param render: render func

    """

    def validateDefault(params: str, *args):
        return params.strip().split(" ", 2)[0] == name

    def renderDefault(self, tokens, idx, _options, env):
        # add a class to the opening tag
        if tokens[idx].nesting == 1:
            tokens[idx].attrJoin("class", name)

        return self.renderToken(tokens, idx, _options, env)

    min_markers = 3
    marker_str = marker
    marker_char = charCodeAt(marker_str, 0)
    marker_len = len(marker_str)
    validate = validate or validateDefault
    render = render or renderDefault

    def container_func(state: StateBlock, startLine: int, endLine: int, silent: bool):

        auto_closed = False
        start = state.bMarks[startLine] + state.tShift[startLine]
        maximum = state.eMarks[startLine]

        # Check out the first character quickly,
        # this should filter out most of non-containers
        if marker_char != state.srcCharCode[start]:
            return False

        # Check out the rest of the marker string
        pos = start + 1
        while pos <= maximum:
            try:
                character = state.src[pos]
            except IndexError:
                break
            if marker_str[(pos - start) % marker_len] != character:
                break
            pos += 1

        marker_count = floor((pos - start) / marker_len)
        if marker_count < min_markers:
            return False
        pos -= (pos - start) % marker_len

        markup = state.src[start:pos]
        params = state.src[pos:maximum]
        assert validate is not None
        if not validate(params, markup):
            return False

        # Since start is found, we can report success here in validation mode
        if silent:
            return True

        # Search for the end of the block
        nextLine = startLine

        while True:
            nextLine += 1
            if nextLine >= endLine:
                # unclosed block should be autoclosed by end of document.
                # also block seems to be autoclosed by end of parent
                break

            start = state.bMarks[nextLine] + state.tShift[nextLine]
            maximum = state.eMarks[nextLine]

            if start < maximum and state.sCount[nextLine] < state.blkIndent:
                # non-empty line with negative indent should stop the list:
                # - ```
                #  test
                break

            if marker_char != state.srcCharCode[start]:
                continue

            if state.sCount[nextLine] - state.blkIndent >= 4:
                # closing fence should be indented less than 4 spaces
                continue

            pos = start + 1
            while pos <= maximum:
                try:
                    character = state.src[pos]
                except IndexError:
                    break
                if marker_str[(pos - start) % marker_len] != character:
                    break
                pos += 1

            # closing code fence must be at least as long as the opening one
            if floor((pos - start) / marker_len) < marker_count:
                continue

            # make sure tail has spaces only
            pos -= (pos - start) % marker_len
            pos = state.skipSpaces(pos)

            if pos < maximum:
                continue

            # found!
            auto_closed = True
            break

        old_parent = state.parentType
        old_line_max = state.lineMax
        state.parentType = "container"

        # this will prevent lazy continuations from ever going past our end marker
        state.lineMax = nextLine

        token = state.push(f"container_{name}_open", "div", 1)
        token.markup = markup
        token.block = True
        token.info = params
        token.map = [startLine, nextLine]

        state.md.block.tokenize(state, startLine + 1, nextLine)

        token = state.push(f"container_{name}_close", "div", -1)
        token.markup = state.src[start:pos]
        token.block = True

        state.parentType = old_parent
        state.lineMax = old_line_max
        state.line = nextLine + (1 if auto_closed else 0)

        return True

    md.block.ruler.before(
        "fence",
        "container_" + name,
        container_func,
        {"alt": ["paragraph", "reference", "blockquote", "list"]},
    )
    md.add_render_rule(f"container_{name}_open", render)
    md.add_render_rule(f"container_{name}_close", render)
