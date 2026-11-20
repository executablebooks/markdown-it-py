"""Convert straight quotation marks to typographic ones"""

from __future__ import annotations

import re
from typing import Any

from ..common.utils import charCodeAt, isMdAsciiPunct, isPunctChar, isWhiteSpace
from ..token import Token
from .state_core import StateCore

QUOTE_TEST_RE = re.compile(r"['\"]")
QUOTE_RE = re.compile(r"['\"]")
APOSTROPHE = "\u2019"  # ’


def replaceAt(string: str, index: int, ch: str) -> str:
    # When the index is negative, the behavior is different from the js version.
    # But basically, the index will not be negative.
    assert index >= 0
    return string[:index] + ch + string[index + 1 :]


def applyReplacements(string: str, replacements: list[tuple[int, str]]) -> str:
    """Replace the characters at the given positions in one pass."""
    result: list[str] = []
    lastPos = 0
    for pos, ch in sorted(replacements):
        result.append(string[lastPos:pos])
        result.append(ch)
        lastPos = pos + 1
    result.append(string[lastPos:])
    return "".join(result)


def process_inlines(tokens: list[Token], state: StateCore) -> None:
    stack: list[dict[str, Any]] = []
    # token index -> replacements in that token's original content, applied at
    # the end: rebuilding the content for every quote is quadratic
    replacements: dict[int, list[tuple[int, str]]] = {}

    for i, token in enumerate(tokens):
        thisLevel = token.level

        j = 0
        for j in range(len(stack))[::-1]:
            if stack[j]["level"] <= thisLevel:
                break
        else:
            # When the loop is terminated without a "break".
            # Subtract 1 to get the same index as the js version.
            j -= 1

        del stack[j + 1 :]

        if token.type != "text":
            continue

        text = token.content
        pos = 0
        maximum = len(text)

        while pos < maximum:
            t = QUOTE_RE.search(text, pos)
            if not t:
                break

            canOpen = canClose = True
            pos = t.start(0) + 1
            isSingle = t.group(0) == "'"

            # Find previous character,
            # default to space if it's the beginning of the line
            lastChar: int | None = 0x20

            if t.start(0) - 1 >= 0:
                lastChar = charCodeAt(text, t.start(0) - 1)
            else:
                for j in range(i)[::-1]:
                    if tokens[j].type == "softbreak" or tokens[j].type == "hardbreak":
                        break
                    # should skip all tokens except 'text', 'html_inline' or 'code_inline'
                    if not tokens[j].content:
                        continue

                    lastChar = charCodeAt(tokens[j].content, len(tokens[j].content) - 1)
                    break

            # Find next character,
            # default to space if it's the end of the line
            nextChar: int | None = 0x20

            if pos < maximum:
                nextChar = charCodeAt(text, pos)
            else:
                for j in range(i + 1, len(tokens)):
                    # nextChar defaults to 0x20
                    if tokens[j].type == "softbreak" or tokens[j].type == "hardbreak":
                        break
                    # should skip all tokens except 'text', 'html_inline' or 'code_inline'
                    if not tokens[j].content:
                        continue

                    nextChar = charCodeAt(tokens[j].content, 0)
                    break

            isLastPunctChar = lastChar is not None and (
                isMdAsciiPunct(lastChar) or isPunctChar(chr(lastChar))
            )
            isNextPunctChar = nextChar is not None and (
                isMdAsciiPunct(nextChar) or isPunctChar(chr(nextChar))
            )

            isLastWhiteSpace = lastChar is not None and isWhiteSpace(lastChar)
            isNextWhiteSpace = nextChar is not None and isWhiteSpace(nextChar)

            if isNextWhiteSpace:  # noqa: SIM114
                canOpen = False
            elif isNextPunctChar and not (isLastWhiteSpace or isLastPunctChar):
                canOpen = False

            if isLastWhiteSpace:  # noqa: SIM114
                canClose = False
            elif isLastPunctChar and not (isNextWhiteSpace or isNextPunctChar):
                canClose = False

            if nextChar == 0x22 and t.group(0) == '"':  # 0x22: "  # noqa: SIM102
                if (
                    lastChar is not None and lastChar >= 0x30 and lastChar <= 0x39
                ):  # 0x30: 0, 0x39: 9
                    # special case: 1"" - count first quote as an inch
                    canClose = canOpen = False

            if canOpen and canClose:
                # Replace quotes in the middle of punctuation sequence, but not
                # in the middle of the words, i.e.:
                #
                # 1. foo " bar " baz - not replaced
                # 2. foo-"-bar-"-baz - replaced
                # 3. foo"bar"baz     - not replaced
                canOpen = isLastPunctChar
                canClose = isNextPunctChar

            if not canOpen and not canClose:
                # middle of word
                if isSingle:
                    replacements.setdefault(i, []).append((t.start(0), APOSTROPHE))
                continue

            if canClose and stack:
                # this could be a closing quote, find the innermost opener of the
                # same kind. Levels on the stack never decrease towards the top and
                # never exceed thisLevel, so that is where a rewind of the stack
                # would stop; "other" jumps to it instead of rescanning the stack
                # for every unmatched closer.
                j = len(stack) - 1
                if stack[j]["single"] != isSingle:
                    j = stack[j]["other"]
                if j >= 0 and stack[j]["level"] == thisLevel:
                    item = stack[j]

                    if isSingle:
                        openQuote = state.md.options.quotes[2]
                        closeQuote = state.md.options.quotes[3]
                    else:
                        openQuote = state.md.options.quotes[0]
                        closeQuote = state.md.options.quotes[1]

                    replacements.setdefault(i, []).append((t.start(0), closeQuote))
                    replacements.setdefault(item["token"], []).append(
                        (item["pos"], openQuote)
                    )

                    del stack[j:]
                    continue

            if canOpen:
                # index of the nearest opener below this one of the other kind
                other = len(stack) - 1
                if stack and stack[-1]["single"] == isSingle:
                    other = stack[-1]["other"]
                stack.append(
                    {
                        "token": i,
                        "pos": t.start(0),
                        "single": isSingle,
                        "level": thisLevel,
                        "other": other,
                    }
                )
            elif canClose and isSingle:
                replacements.setdefault(i, []).append((t.start(0), APOSTROPHE))

    for i, items in replacements.items():
        tokens[i].content = applyReplacements(tokens[i].content, items)


def smartquotes(state: StateCore) -> None:
    if not state.md.options.typographer:
        return

    for token in state.tokens:
        if token.type != "inline" or not QUOTE_RE.search(token.content):
            continue
        if token.children is not None:
            process_inlines(token.children, state)
