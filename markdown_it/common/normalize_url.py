import html
import re
from typing import Callable, Optional
from urllib.parse import urlparse, urlunparse, quote, unquote  # noqa: F401

import mdurl

from .utils import ESCAPABLE
from .. import _punycode


#  ################# Copied from Commonmark.py #################

ENTITY = "&(?:#x[a-f0-9]{1,6}|#[0-9]{1,7}|[a-z][a-z0-9]{1,31});"
reBackslashOrAmp = re.compile(r"[\\&]")
reEntityOrEscapedChar = re.compile(
    "\\\\" + "[" + ESCAPABLE + "]|" + ENTITY, re.IGNORECASE
)


def unescape_char(s: str) -> str:
    if s[0] == "\\":
        return s[1]
    else:
        return html.unescape(s)


def unescape_string(s: str) -> str:
    """Replace entities and backslash escapes with literal characters."""
    if re.search(reBackslashOrAmp, s):
        return re.sub(reEntityOrEscapedChar, lambda m: unescape_char(m.group()), s)
    else:
        return s


def normalize_uri(uri: str) -> str:
    return quote(uri, safe="/@:+?=&()%#*,")


##################


RECODE_HOSTNAME_FOR = ("http", "https", "mailto")


def unescape_normalize_uri(x: str) -> str:
    return normalize_uri(unescape_string(x))


def normalizeLink(url: str) -> str:
    """Normalize destination URLs in links

    ::

        [label]:   destination   'title'
                ^^^^^^^^^^^
    """
    parsed = mdurl.parse(url, slashes_denote_host=True)

    if parsed.hostname:
        # Encode hostnames in urls like:
        # `http://host/`, `https://host/`, `mailto:user@host`, `//host/`
        #
        # We don't encode unknown schemas, because it's likely that we encode
        # something we shouldn't (e.g. `skype:name` treated as `skype:host`)
        #
        if not parsed.protocol or parsed.protocol in RECODE_HOSTNAME_FOR:
            try:
                parsed.hostname = _punycode.to_ascii(parsed.hostname)
            except Exception:
                pass

    return mdurl.encode(mdurl.format(parsed))


def unescape_unquote(x: str) -> str:
    return unquote(unescape_string(x))


def normalizeLinkText(url: str) -> str:
    """Normalize autolink content

    ::

        <destination>
         ~~~~~~~~~~~
    """
    parsed = mdurl.parse(url, slashes_denote_host=True)

    if parsed.hostname:
        # Encode hostnames in urls like:
        # `http://host/`, `https://host/`, `mailto:user@host`, `//host/`
        #
        # We don't encode unknown schemas, because it's likely that we encode
        # something we shouldn't (e.g. `skype:name` treated as `skype:host`)
        #
        if not parsed.protocol or parsed.protocol in RECODE_HOSTNAME_FOR:
            try:
                parsed.hostname = _punycode.to_unicode(parsed.hostname)
            except Exception:
                pass

    # add '%' to exclude list because of https://github.com/markdown-it/markdown-it/issues/720
    return mdurl.decode(mdurl.format(parsed), mdurl.DECODE_DEFAULT_CHARS + "%")


BAD_PROTO_RE = re.compile(r"^(vbscript|javascript|file|data):")
GOOD_DATA_RE = re.compile(r"^data:image\/(gif|png|jpeg|webp);")


def validateLink(url: str, validator: Optional[Callable] = None) -> bool:
    """Validate URL link is allowed in output.

    This validator can prohibit more than really needed to prevent XSS.
    It's a tradeoff to keep code simple and to be secure by default.

    Note: url should be normalized at this point, and existing entities decoded.
    """
    if validator is not None:
        return validator(url)
    url = url.strip().lower()
    return bool(GOOD_DATA_RE.search(url)) if BAD_PROTO_RE.search(url) else True
