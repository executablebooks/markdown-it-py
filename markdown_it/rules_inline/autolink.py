# Process autolinks '<protocol:...>'
import re
from .state_inline import StateBase
from ..common.utils import charCodeAt
from ..common.normalize_url import normalizeLinkText, normalizeLink, validateLink

EMAIL_RE = re.compile(
    r"^<([a-zA-Z0-9.!#$%&\'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*)>"  # noqa: E501
)
AUTOLINK_RE = re.compile(r"^<([a-zA-Z][a-zA-Z0-9+.\-]{1,31}):([^<>\x00-\x20]*)>")


def autolink(state: StateBase, silent: bool):

    pos = state.pos

    if charCodeAt(state.src, pos) != 0x3C:  # /* < */
        return False

    tail = state.src[pos:]

    if ">" not in tail:
        return False

    linkMatch = AUTOLINK_RE.search(tail)
    if linkMatch is not None:

        url = linkMatch.group(0)[1:-1]
        fullUrl = normalizeLink(url)
        if not validateLink(fullUrl):
            return False

        if not silent:
            token = state.push("link_open", "a", 1)
            token.attrs = [["href", fullUrl]]
            token.markup = "autolink"
            token.info = "auto"

            token = state.push("text", "", 0)
            token.content = normalizeLinkText(url)

            token = state.push("link_close", "a", -1)
            token.markup = "autolink"
            token.info = "auto"

        state.pos += len(linkMatch.group(0))
        return True

    emailMatch = EMAIL_RE.search(tail)
    if emailMatch is not None:

        url = emailMatch.group(0)[1:-1]
        fullUrl = normalizeLink("mailto:" + url)
        if not validateLink(fullUrl):
            return False

        if not silent:
            token = state.push("link_open", "a", 1)
            token.attrs = [["href", fullUrl]]
            token.markup = "autolink"
            token.info = "auto"

            token = state.push("text", "", 0)
            token.content = normalizeLinkText(url)

            token = state.push("link_close", "a", -1)
            token.markup = "autolink"
            token.info = "auto"

        state.pos += len(emailMatch.group(0))
        return True

    return False
