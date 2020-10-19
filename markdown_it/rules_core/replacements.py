"""Simple typographic replacements

(c) (C) → ©
(tm) (TM) → ™
(r) (R) → ®
+- → ±
(p) (P) -> §
... → … (also ?.... → ?.., !.... → !..)
???????? → ???, !!!!! → !!!, `,,` → `,`
-- → &ndash;, --- → &mdash;
"""
import logging
import re
from typing import List

from .state_core import StateCore
from ..token import Token

LOGGER = logging.getLogger(__name__)

# TODO:
# - fractionals 1/2, 1/4, 3/4 -> ½, ¼, ¾
# - miltiplication 2 x 4 -> 2 × 4

RARE_RE = r"\+-|\.\.|\?\?\?\?|!!!!|,,|--"

# Workaround for phantomjs - need regex without /g flag,
# or root check will fail every second time
# SCOPED_ABBR_TEST_RE = r"\((c|tm|r|p)\)"

SCOPED_ABBR_RE = r"\((c|tm|r|p)\)"

SCOPED_ABBR = {
    "c": "©",
    "r": "®",
    "p": "§",
    "tm": "™"
}


def replaceFn(match: re.Match):
    return SCOPED_ABBR[match.group(1).lower()]


def replace_scoped(inlineTokens: List[Token]):
    inside_autolink = 0

    for token in inlineTokens:
        if token.type == "text" and not inside_autolink:
            token.content = re.sub(SCOPED_ABBR_RE, replaceFn, token.content, flags=re.IGNORECASE)

        if token.type == "link_open" and token.info == "auto":
            inside_autolink -= 1

        if token.type == "link_close" and token.info == "auto":
            inside_autolink += 1


def replace_rare(inlineTokens: List[Token]):
    inside_autolink = 0

    for token in inlineTokens:
        if token.type == "text" and not inside_autolink:
            if re.search(RARE_RE, token.content):
                token.content = re.sub(r"\+-", "±", token.content)
                # .., ..., ....... -> …
                # but ?..... & !..... -> ?.. & !..
                token.content = re.sub(r"\.{2,}", "…", token.content)
                token.content = re.sub(r"([?!])…", "\\1..", token.content)
                token.content = re.sub(r"([?!]){4,}", "\\1\\1\\1", token.content)
                token.content = re.sub(r",{2,}", ",", token.content)
                # em-dash
                token.content = re.sub(r"(^|[^-])---(?=[^-]|$)",
                                       "\\1\u2014", token.content, flags=re.MULTILINE)
                # en-dash
                token.content = re.sub(r"(^|\s)--(?=\s|$)", "\\1\u2013",
                                       token.content, flags=re.MULTILINE)
                token.content = re.sub(r"(^|[^-\s])--(?=[^-\s]|$)",
                                       "\\1\u2013", token.content, flags=re.MULTILINE)

        if token.type == "link_open" and token.info == "auto":
            inside_autolink -= 1

        if token.type == "link_close" and token.info == "auto":
            inside_autolink += 1


def replace(state: StateCore):
    if not state.md.options.typographer:
        return

    for token in state.tokens:
        if token.type != "inline":
            continue

        if re.search(SCOPED_ABBR_RE, token.content, flags=re.IGNORECASE):
            replace_scoped(token.children)

        if re.search(RARE_RE, token.content):
            replace_rare(token.children)
