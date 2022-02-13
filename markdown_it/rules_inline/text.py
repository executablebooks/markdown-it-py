# Skip text characters for text token, place those to pending buffer
# and increment current pos

import warnings

from .state_inline import StateInline


# Rule to skip pure text
# '{}$%@~+=:' reserved for extentions

# !, ", #, $, %, &, ', (, ), *, +, ,, -, ., /, :, ;, <, =, >, ?, @, [, \, ], ^, _, `, {, |, }, or ~

# !!!! Don't confuse with "Markdown ASCII Punctuation" chars
# http://spec.commonmark.org/0.15/#ascii-punctuation-character
def isTerminatorChar(ch: object) -> bool:
    terminator_chars = {
        "\n",
        "!",
        "#",
        "$",
        "%",
        "&",
        "*",
        "+",
        "-",
        ":",
        "<",
        "=",
        ">",
        "@",
        "[",
        "\\",
        "]",
        "^",
        "_",
        "`",
        "{",
        "}",
        "~",
    }
    if isinstance(ch, int):
        warnings.warn(
            "`int`s are deprecated as `isTerminatorChar` input",
            DeprecationWarning,
            stacklevel=2,
        )
        return ch in (ord(c) for c in terminator_chars)
    return ch in terminator_chars


def text(state: StateInline, silent: bool, **args):
    pos = state.pos
    posMax = state.posMax
    while (pos < posMax) and not isTerminatorChar(state.src[pos]):
        pos += 1

    if pos == state.pos:
        return False

    if not silent:
        state.pending += state.src[state.pos : pos]

    state.pos = pos

    return True
