# Process html tags
from ..common.html_re import HTML_TAG_RE
from ..common.utils import isLinkClose, isLinkOpen
from .state_inline import StateInline


def isLetter(ch: int) -> bool:
    lc = ch | 0x20  # to lower case
    # /* a */ and /* z */
    return (lc >= 0x61) and (lc <= 0x7A)


def html_inline(state: StateInline, silent: bool) -> bool:
    pos = state.pos

    if not state.md.options.get("html", None):
        return False

    # Check start
    src = state.src
    maximum = state.posMax
    if src[pos] != "<" or pos + 2 >= maximum:
        return False

    # Quick fail on second char
    ch = src[pos + 1]
    if ch not in ("!", "?", "/") and not isLetter(ord(ch)):  # /* / */
        return False

    # Every alternative of the tag regex ends with a specific terminator, at a
    # known minimum offset from `pos`.  If that terminator does not occur
    # anywhere at or after this offset, no match is possible; bail out before
    # running the regex, whose lazy sub-patterns would scan to the end of the
    # input.  Without this, a run of unterminated openers is quadratic.
    if src.startswith("<!--", pos):
        # `<!-->` / `<!--->`, else `<!--` ... `-->` (`<!---->` is the shortest)
        if state.html_terminator_last(">") < pos + 4:
            return False
        if (
            not src.startswith("<!-->", pos)
            and not src.startswith("<!--->", pos)
            and state.html_terminator_last("-->") < pos + 4
        ):
            return False
    elif src.startswith("<![CDATA[", pos):
        if state.html_terminator_last("]]>") < pos + 9:  # `<![CDATA[]]>`
            return False
    elif ch == "?":
        if state.html_terminator_last("?>") < pos + 2:  # `<??>`
            return False
    elif ch == "!":
        if state.html_terminator_last(">") < pos + 3:  # `<!a>`
            return False
    elif state.html_terminator_last(">") < pos + 2:  # `<a>`, `</a>`
        return False

    match = HTML_TAG_RE.match(src, pos)
    if not match:
        return False

    if not silent:
        token = state.push("html_inline", "", 0)
        token.content = src[pos : pos + len(match.group(0))]

        if isLinkOpen(token.content):
            state.linkLevel += 1
        if isLinkClose(token.content):
            state.linkLevel -= 1

    state.pos += len(match.group(0))
    return True
