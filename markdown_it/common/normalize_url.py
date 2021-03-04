import html
import re
from typing import Callable, Optional
from urllib.parse import urlparse, urlunparse, quote, unquote  # noqa: F401

from .utils import ESCAPABLE

# TODO below we port the use of the JS packages:
# var mdurl        = require('mdurl')
# var punycode     = require('punycode')
#
# e.g. mdurl: parsed = mdurl.parse(url, True)
#
# but need to check these fixes from https://www.npmjs.com/package/mdurl:
#
# Parse url string. Similar to node's url.parse,
# but without any normalizations and query string parse.
#    url - input url (string)
#    slashesDenoteHost - if url starts with //, expect a hostname after it. Optional, false.
# Difference with node's url:

# No leading slash in paths, e.g. in url.parse('http://foo?bar') pathname is ``, not /
# Backslashes are not replaced with slashes, so http:\\example.org\ is treated like a relative path
# Trailing colon is treated like a part of the path, i.e. in http://example.org:foo pathname is :foo
# Nothing is URL-encoded in the resulting object,
# (in joyent/node some chars in auth and paths are encoded)
# url.parse() does not have parseQueryString argument
# Removed extraneous result properties: host, path, query, etc.,
# which can be constructed using other parts of the url.


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
    (scheme, netloc, path, params, query, fragment) = urlparse(url)
    if scheme in RECODE_HOSTNAME_FOR:
        url = urlunparse(
            (
                scheme,
                unescape_normalize_uri(netloc),
                normalize_uri(path),
                unescape_normalize_uri(params),
                normalize_uri(query),
                unescape_normalize_uri(fragment),
            )
        )
    else:
        url = unescape_normalize_uri(url)

    return url

    # TODO the selective encoding below should probably be done here,
    # something like:
    # url_check = urllib.parse.urlparse(destination)
    # if url_check.scheme in RECODE_HOSTNAME_FOR: ...

    # parsed = urlparse(url)
    # if parsed.hostname:
    #     # Encode hostnames in urls like:
    #     # `http:#host/`, `https:#host/`, `mailto:user@host`, `#host/`
    #     #
    #     # We don't encode unknown schemas, because it's likely that we encode
    #     # something we shouldn't (e.g. `skype:name` treated as `skype:host`)
    #     #
    #     if (not parsed.scheme) or parsed.scheme in RECODE_HOSTNAME_FOR:
    #         try:
    #             parsed.hostname = punycode.toASCII(parsed.hostname)
    #         except Exception:
    #             pass
    # return quote(urlunparse(parsed))


def unescape_unquote(x: str) -> str:
    return unquote(unescape_string(x))


def normalizeLinkText(link: str) -> str:
    """Normalize autolink content

    ::

        <destination>
         ~~~~~~~~~~~
    """
    (scheme, netloc, path, params, query, fragment) = urlparse(link)
    if scheme in RECODE_HOSTNAME_FOR:
        url = urlunparse(
            (
                scheme,
                unescape_unquote(netloc),
                unquote(path),
                unescape_unquote(params),
                unquote(query),
                unescape_unquote(fragment),
            )
        )
    else:
        url = unescape_unquote(link)
    return url

    # TODO the selective encoding below should probably be done here,
    # something like:
    # url_check = urllib.parse.urlparse(destination)
    # if url_check.scheme in RECODE_HOSTNAME_FOR: ...

    # parsed = urlparse(url)
    # if parsed.hostname:
    #     # Encode hostnames in urls like:
    #     # `http:#host/`, `https:#host/`, `mailto:user@host`, `#host/`
    #     #
    #     # We don't encode unknown schemas, because it's likely that we encode
    #     # something we shouldn't (e.g. `skype:name` treated as `skype:host`)
    #     #
    #     if (not parsed.protocol) or parsed.protocol in RECODE_HOSTNAME_FOR:
    #         try:
    #             parsed.hostname = punycode.toUnicode(parsed.hostname)
    #         except Exception:
    #             pass
    # return unquote(urlunparse(parsed))


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
