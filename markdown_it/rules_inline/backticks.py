# Parse backticks
import re

from .state_inline import StateInline

regex = re.compile("^ (.+) $")


def backtick(state: StateInline, silent: bool):

    pos = state.pos
    ch = state.srcCharCode[pos]

    # /* ` */
    if ch != 0x60:
        return False

    start = pos
    pos += 1
    maximum = state.posMax

    # /* ` */
    while pos < maximum and (state.srcCharCode[pos] == 0x60):
        pos += 1

    marker = state.src[start:pos]

    matchStart = matchEnd = pos

    while True:
        try:
            matchStart = state.src.index("`", matchEnd)
        except ValueError:
            break
        matchEnd = matchStart + 1
        # /* ` */
        while matchEnd < maximum and (state.srcCharCode[matchEnd] == 0x60):
            matchEnd += 1

        if matchEnd - matchStart == len(marker):
            if not silent:
                token = state.push("code_inline", "code", 0)
                token.markup = marker
                token.content = state.src[pos:matchStart].replace("\n", " ")
                if (
                    token.content.startswith(" ")
                    and token.content.endswith(" ")
                    and len(token.content.strip()) > 0
                ):
                    token.content = token.content[1:-1]
            state.pos = matchEnd
            return True

    if not silent:
        state.pending += marker
    state.pos += len(marker)
    return True
