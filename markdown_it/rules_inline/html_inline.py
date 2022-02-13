# Process html tags
from .state_inline import StateInline
from ..common.html_re import HTML_TAG_RE


def isLetter(ch: int):
    lc = ch | 0x20  # to lower case
    # /* a */ and /* z */
    return (lc >= 0x61) and (lc <= 0x7A)


def html_inline(state: StateInline, silent: bool):

    pos = state.pos

    if not state.md.options.get("html", None):
        return False

    # Check start
    maximum = state.posMax
    if state.src[pos] != "<" or pos + 2 >= maximum:
        return False

    # Quick fail on second char
    ch = state.src[pos + 1]
    if ch != "!" and ch != "?" and ch != "/" and not isLetter(ord(ch)):
        return False

    match = HTML_TAG_RE.search(state.src[pos:])
    if not match:
        return False

    if not silent:
        token = state.push("html_inline", "", 0)
        token.content = state.src[pos : pos + len(match.group(0))]

    state.pos += len(match.group(0))
    return True
