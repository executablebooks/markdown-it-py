import re

from markdown_it import MarkdownIt
from markdown_it.rules_inline import StateInline
from markdown_it.rules_block import StateBlock
from markdown_it.common.utils import isWhiteSpace


def dollarmath_plugin(
    md: MarkdownIt, allow_labels=True, allow_space=True, allow_digits=True
):
    """Plugin for parsing dollar enclosed math, e.g. ``$a=1$``.

    This is an improved version of ``texmath``; it is more performant,
    and handles ``\\`` escaping properly and allows for more configuration.

    :param allow_labels: Capture math blocks with label suffix, e.g. ``$$a=1$$ (eq1)``
    :param allow_space: Parse inline math when there is space
        after/before the opening/closing ``$``, e.g. ``$ a $``
    :param allow_digits: Parse inline math when there is a digit
        before/after the opening/closing ``$``, e.g. ``1$`` or ``$2``.
        This is useful when also using currency.
    """

    md.inline.ruler.before(
        "escape", "math_inline", math_inline_dollar(allow_space, allow_digits)
    )
    md.add_render_rule("math_inline", render_math_inline)

    md.block.ruler.before("fence", "math_block", math_block_dollar(allow_labels))
    md.add_render_rule("math_block", render_math_block)
    md.add_render_rule("math_block_eqno", render_math_block_eqno)


def render_math_inline(self, tokens, idx, options, env):
    return "<eq>{0}</eq>".format(tokens[idx].content)


def render_math_block(self, tokens, idx, options, env):
    return "<section>\n<eqn>{0}</eqn>\n</section>\n".format(tokens[idx].content)


def render_math_block_eqno(self, tokens, idx, options, env):
    return '<section>\n<eqn>{0}</eqn>\n<span class="eqno">({1})</span>\n</section>\n'.format(
        tokens[idx].content, tokens[idx].info
    )


def is_escaped(state: StateInline, back_pos: int, mod: int = 0):
    # count how many \ are before the current position
    backslashes = 0
    while back_pos >= 0:
        back_pos = back_pos - 1
        if state.srcCharCode[back_pos] == 0x5C:  # /* \ */
            backslashes += 1
        else:
            break

    if not backslashes:
        return

    # if an odd number of \ then ignore
    if (backslashes % 2) != mod:
        return True

    return False


def math_inline_dollar(allow_space=True, allow_digits=True):
    def _math_inline_dollar(state: StateInline, silent: bool):

        # TODO options:
        # even/odd backslash escaping
        # allow $$ blocks

        if state.srcCharCode[state.pos] != 0x24:  # /* $ */
            return False

        if not allow_space:
            # whitespace not allowed straight after opening $
            try:
                if isWhiteSpace(state.srcCharCode[state.pos + 1]):
                    return False
            except IndexError:
                return False

        if not allow_digits:
            # digit not allowed straight before opening $
            try:
                if state.src[state.pos - 1].isdigit():
                    return False
            except IndexError:
                pass

        if is_escaped(state, state.pos):
            return False

        # find closing $
        pos = state.pos + 1
        found_closing = False
        while True:
            try:
                end = state.srcCharCode.index(0x24, pos)
            except ValueError:
                return False

            if is_escaped(state, end):
                pos = end + 1
            else:
                found_closing = True
                break

        if not found_closing:
            return False

        if not allow_space:
            # whitespace not allowed straight before closing $
            try:
                if isWhiteSpace(state.srcCharCode[end - 1]):
                    return False
            except IndexError:
                return False

        if not allow_digits:
            # digit not allowed straight after closing $
            try:
                if state.src[end + 1].isdigit():
                    return False
            except IndexError:
                pass

        text = state.src[state.pos + 1 : end]

        # ignore empty
        if not text:
            return False

        if not silent:
            token = state.push("math_inline", "math", 0)
            token.content = text
            token.markup = "$"

        state.pos = end + 1

        return True

    return _math_inline_dollar


# reversed end of block dollar equation, with equation label
DOLLAR_EQNO_REV = re.compile(r"^\s*\)([^)$\r\n]+?)\(\s*\${2}")


def math_block_dollar(allow_labels=True):
    def _math_block_dollar(
        state: StateBlock, startLine: int, endLine: int, silent: bool
    ):

        # TODO internal backslash escaping

        haveEndMarker = False
        startPos = state.bMarks[startLine] + state.tShift[startLine]
        end = state.eMarks[startLine]

        # if it's indented more than 3 spaces, it should be a code block
        if state.sCount[startLine] - state.blkIndent >= 4:
            return False

        if startPos + 2 > end:
            return False

        if (
            state.srcCharCode[startPos] != 0x24
            or state.srcCharCode[startPos + 1] != 0x24
        ):  # /* $ */
            return False

        # search for end of block
        nextLine = startLine
        label = None

        # search for end of block on same line
        lineText = state.src[startPos:end]
        if len(lineText.strip()) > 3:
            lineText = state.src[startPos:end]
            if lineText.strip().endswith("$$"):
                haveEndMarker = True
                end = end - 2 - (len(lineText) - len(lineText.strip()))
            elif allow_labels:
                # reverse the line and match
                eqnoMatch = DOLLAR_EQNO_REV.match(lineText[::-1])
                if eqnoMatch:
                    haveEndMarker = True
                    label = eqnoMatch.group(1)[::-1]
                    end = end - eqnoMatch.end()

        # search for end of block on subsequent line
        if not haveEndMarker:
            while True:
                nextLine += 1
                if nextLine >= endLine:
                    break

                start = state.bMarks[nextLine] + state.tShift[nextLine]
                end = state.eMarks[nextLine]

                if end - start < 2:
                    continue

                lineText = state.src[start:end]

                if lineText.strip().endswith("$$"):
                    haveEndMarker = True
                    end = end - 2 - (len(lineText) - len(lineText.strip()))
                    break

                # reverse the line and match
                if allow_labels:
                    eqnoMatch = DOLLAR_EQNO_REV.match(lineText[::-1])
                    if eqnoMatch:
                        haveEndMarker = True
                        label = eqnoMatch.group(1)[::-1]
                        end = end - eqnoMatch.end()
                        break

        if not haveEndMarker:
            return False

        state.line = nextLine + (1 if haveEndMarker else 0)

        token = state.push("math_block_eqno" if label else "math_block", "math", 0)
        token.block = True
        token.content = state.src[startPos + 2 : end]
        token.markup = "$$"
        token.map = [startLine, state.line]
        if label:
            token.info = label

        return True

    return _math_block_dollar
