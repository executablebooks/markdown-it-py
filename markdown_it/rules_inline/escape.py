"""
Process escaped chars and hardbreaks
"""
from ..common.utils import isStrSpace
from .state_inline import StateInline

_ESCAPED = {
    "!",
    '"',
    "#",
    "$",
    "%",
    "&",
    "'",
    "(",
    ")",
    "*",
    "+",
    ",",
    "-",
    ".",
    "/",
    ":",
    ";",
    "<",
    "=",
    ">",
    "?",
    "@",
    "[",
    "\\",
    "]",
    "^",
    "_",
    "`",
    "{",
    "|",
    "}",
    "~",
}


def escape(state: StateInline, silent: bool) -> bool:
    pos = state.pos
    maximum = state.posMax

    if state.src[pos] != "\\":
        return False

    pos += 1

    if pos < maximum:
        ch = state.src[pos]

        if ch in _ESCAPED:
            if not silent:
                state.pending += state.src[pos]
            state.pos += 2
            return True

        if ch == "\n":
            if not silent:
                state.push("hardbreak", "br", 0)

            pos += 1
            # skip leading whitespaces from next line
            while pos < maximum:
                ch = state.src[pos]
                if not isStrSpace(ch):
                    break
                pos += 1

            state.pos = pos
            return True

    if not silent:
        state.pending += "\\"
    state.pos += 1
    return True
