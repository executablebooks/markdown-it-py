# Process front matter and pass to cb
from math import floor

from markdown_it import MarkdownIt
from markdown_it.rules_block import StateBlock
from markdown_it.common.utils import charCodeAt


def front_matter_plugin(md: MarkdownIt):
    """Plugin ported from
    `markdown-it-front-matter <https://github.com/ParkSB/markdown-it-front-matter>`__.

    It parses initial metadata, stored between opening/closing dashes:

    .. code-block:: md

        ---
        valid-front-matter: true
        ---

    """
    frontMatter = make_front_matter_rule()
    md.block.ruler.before(
        "table",
        "front_matter",
        frontMatter,
        {"alt": ["paragraph", "reference", "blockquote", "list"]},
    )


def make_front_matter_rule():
    min_markers = 3
    marker_str = "-"
    marker_char = charCodeAt(marker_str, 0)
    marker_len = len(marker_str)

    def frontMatter(state: StateBlock, startLine: int, endLine: int, silent: bool):
        auto_closed = False
        start = state.bMarks[startLine] + state.tShift[startLine]
        maximum = state.eMarks[startLine]

        # Check out the first character of the first line quickly,
        # this should filter out non-front matter
        if startLine != 0 or marker_char != state.srcCharCode[0]:
            return False

        # Check out the rest of the marker string
        # while pos <= 3
        pos = start + 1
        while pos <= maximum:
            if marker_str[(pos - start) % marker_len] != state.src[pos]:
                start_content = pos + 1
                break
            pos += 1

        marker_count = floor((pos - start) / marker_len)

        if marker_count < min_markers:
            return False

        pos -= (pos - start) % marker_len

        # Since start is found, we can report success here in validation mode
        if silent:
            return True

        # Search for the end of the block
        nextLine = startLine

        while True:
            nextLine += 1
            if nextLine >= endLine:
                # unclosed block should be autoclosed by end of document.
                return False

            if state.src[start:maximum] == "...":
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
            while pos < maximum:
                if marker_str[(pos - start) % marker_len] != state.src[pos]:
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

        token = state.push("front_matter", "", 0)
        token.hidden = True
        token.markup = marker_str * min_markers
        token.content = state.src[
            state.bMarks[startLine + 1] : state.eMarks[nextLine - 1]
        ]
        token.block = True
        token.meta = state.src[start_content : start - 1]

        state.parentType = old_parent
        state.lineMax = old_line_max
        state.line = nextLine + (1 if auto_closed else 0)
        token.map = [startLine, state.line]

        return True

    return frontMatter
