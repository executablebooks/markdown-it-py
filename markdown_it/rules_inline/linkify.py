"""Process links like https://example.org/"""

from .state_inline import StateInline

# RFC3986: scheme = ALPHA *( ALPHA / DIGIT / "+" / "-" / "." )
#
# The backscan for the scheme is bounded, so that a long run of scheme
# characters before each `://` cannot make it quadratic.  No schema linkify-it
# recognises is this long.
MAX_SCHEME_LENGTH = 10


def isAsciiAlpha(ch: str) -> bool:
    return ("a" <= ch <= "z") or ("A" <= ch <= "Z")


def isSchemeChar(ch: str) -> bool:
    return (
        ("a" <= ch <= "z")
        or ("A" <= ch <= "Z")
        or ("0" <= ch <= "9")
        or ch in ("+", "-", ".")
    )


def linkify(state: StateInline, silent: bool) -> bool:
    """Rule for identifying plain-text links."""
    if not state.md.options.linkify:
        return False
    if state.linkLevel > 0:
        return False
    if not state.md.linkify:
        raise ModuleNotFoundError("Linkify enabled but not installed.")

    pos = state.pos
    maximum = state.posMax

    if (
        (pos + 3) > maximum
        or state.src[pos] != ":"
        or state.src[pos + 1] != "/"
        or state.src[pos + 2] != "/"
    ):
        return False

    # Search backwards for the scheme, but no further than MAX_SCHEME_LENGTH
    # characters, the start of the pending string, or the start of the source.
    # `state.src` is scanned rather than `state.pending` because it is cheaper
    # to index.
    protoMin = pos - min(MAX_SCHEME_LENGTH, len(state.pending), pos)
    protoStart = pos
    while protoStart > protoMin and isSchemeChar(state.src[protoStart - 1]):
        protoStart -= 1

    if protoStart == pos or not isAsciiAlpha(state.src[protoStart]):
        return False

    protoLength = pos - protoStart

    if not (link := state.md.linkify.match_at_start(state.src[protoStart:])):
        return False
    url: str = link.url

    # invalid link, but still detected by linkify somehow;
    # need to check to prevent the position from moving backwards below
    if len(url) <= protoLength:
        return False

    # disallow '*' at the end of the link (conflicts with emphasis)
    url = url.rstrip("*")

    full_url = state.md.normalizeLink(url)
    if not state.md.validateLink(full_url):
        return False

    if not silent:
        state.pending = state.pending[:-protoLength]

        token = state.push("link_open", "a", 1)
        token.attrs = {"href": full_url}
        token.markup = "linkify"
        token.info = "auto"

        token = state.push("text", "", 0)
        token.content = state.md.normalizeLinkText(url)

        token = state.push("link_close", "a", -1)
        token.markup = "linkify"
        token.info = "auto"

    state.pos += len(url) - protoLength
    return True
