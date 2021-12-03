# Lists
import logging

from .state_block import StateBlock
from ..common.utils import isSpace

LOGGER = logging.getLogger(__name__)


# Search `[-+*][\n ]`, returns next pos after marker on success
# or -1 on fail.
def skipBulletListMarker(state: StateBlock, startLine: int):

    pos = state.bMarks[startLine] + state.tShift[startLine]
    maximum = state.eMarks[startLine]

    marker = state.srcCharCode[pos]
    pos += 1
    # Check bullet /* * */ /* - */ /* + */
    if marker != 0x2A and marker != 0x2D and marker != 0x2B:
        return -1

    if pos < maximum:
        ch = state.srcCharCode[pos]

        if not isSpace(ch):
            # " -test " - is not a list item
            return -1

    return pos


# Search `\d+[.)][\n ]`, returns next pos after marker on success
# or -1 on fail.
def skipOrderedListMarker(state: StateBlock, startLine: int):

    start = state.bMarks[startLine] + state.tShift[startLine]
    pos = start
    maximum = state.eMarks[startLine]

    # List marker should have at least 2 chars (digit + dot)
    if pos + 1 >= maximum:
        return -1

    ch = state.srcCharCode[pos]
    pos += 1

    # /* 0 */  /* 9 */
    if ch < 0x30 or ch > 0x39:
        return -1

    while True:
        # EOL -> fail
        if pos >= maximum:
            return -1

        ch = state.srcCharCode[pos]
        pos += 1

        # /* 0 */  /* 9 */
        if ch >= 0x30 and ch <= 0x39:

            # List marker should have no more than 9 digits
            # (prevents integer overflow in browsers)
            if pos - start >= 10:
                return -1

            continue

        # found valid marker: /* ) */ /* . */
        if ch == 0x29 or ch == 0x2E:
            break

        return -1

    if pos < maximum:
        ch = state.srcCharCode[pos]

        if not isSpace(ch):
            # " 1.test " - is not a list item
            return -1

    return pos


def markTightParagraphs(state: StateBlock, idx: int):
    level = state.level + 2

    i = idx + 2
    length = len(state.tokens) - 2
    while i < length:
        if state.tokens[i].level == level and state.tokens[i].type == "paragraph_open":
            state.tokens[i + 2].hidden = True
            state.tokens[i].hidden = True
            i += 2
        i += 1


def list_block(state: StateBlock, startLine: int, endLine: int, silent: bool):

    LOGGER.debug("entering list: %s, %s, %s, %s", state, startLine, endLine, silent)

    isTerminatingParagraph = False
    tight = True

    # if it's indented more than 3 spaces, it should be a code block
    if state.sCount[startLine] - state.blkIndent >= 4:
        return False

    # Special case:
    #  - item 1
    #   - item 2
    #    - item 3
    #     - item 4
    #      - this one is a paragraph continuation
    if (
        state.listIndent >= 0
        and state.sCount[startLine] - state.listIndent >= 4
        and state.sCount[startLine] < state.blkIndent
    ):
        return False

    # limit conditions when list can interrupt
    # a paragraph (validation mode only)
    if silent and state.parentType == "paragraph":
        # Next list item should still terminate previous list item
        #
        # This code can fail if plugins use blkIndent as well as lists,
        # but I hope the spec gets fixed long before that happens.
        #
        if state.tShift[startLine] >= state.blkIndent:
            isTerminatingParagraph = True

    # Detect list type and position after marker
    posAfterMarker = skipOrderedListMarker(state, startLine)
    if posAfterMarker >= 0:
        isOrdered = True
        start = state.bMarks[startLine] + state.tShift[startLine]
        markerValue = int(state.src[start : posAfterMarker - 1])

        # If we're starting a new ordered list right after
        # a paragraph, it should start with 1.
        if isTerminatingParagraph and markerValue != 1:
            return False
    else:
        posAfterMarker = skipBulletListMarker(state, startLine)
        if posAfterMarker >= 0:
            isOrdered = False
        else:
            return False

    # If we're starting a new unordered list right after
    # a paragraph, first line should not be empty.
    if isTerminatingParagraph:
        if state.skipSpaces(posAfterMarker) >= state.eMarks[startLine]:
            return False

    # We should terminate list on style change. Remember first one to compare.
    markerCharCode = state.srcCharCode[posAfterMarker - 1]

    # For validation mode we can terminate immediately
    if silent:
        return True

    # Start list
    listTokIdx = len(state.tokens)

    if isOrdered:
        token = state.push("ordered_list_open", "ol", 1)
        if markerValue != 1:
            token.attrs = {"start": markerValue}

    else:
        token = state.push("bullet_list_open", "ul", 1)

    token.map = listLines = [startLine, 0]
    token.markup = chr(markerCharCode)

    #
    # Iterate list items
    #

    nextLine = startLine
    prevEmptyEnd = False
    terminatorRules = state.md.block.ruler.getRules("list")

    oldParentType = state.parentType
    state.parentType = "list"

    while nextLine < endLine:
        pos = posAfterMarker
        maximum = state.eMarks[nextLine]

        initial = offset = (
            state.sCount[nextLine]
            + posAfterMarker
            - (state.bMarks[startLine] + state.tShift[startLine])
        )

        while pos < maximum:
            ch = state.srcCharCode[pos]

            if ch == 0x09:  # \t
                offset += 4 - (offset + state.bsCount[nextLine]) % 4
            elif ch == 0x20:  # \s
                offset += 1
            else:
                break

            pos += 1

        contentStart = pos

        if contentStart >= maximum:
            # trimming space in "-    \n  3" case, indent is 1 here
            indentAfterMarker = 1
        else:
            indentAfterMarker = offset - initial

        # If we have more than 4 spaces, the indent is 1
        # (the rest is just indented code block)
        if indentAfterMarker > 4:
            indentAfterMarker = 1

        # "  -  test"
        #  ^^^^^ - calculating total length of this thing
        indent = initial + indentAfterMarker

        # Run subparser & write tokens
        token = state.push("list_item_open", "li", 1)
        token.markup = chr(markerCharCode)
        token.map = itemLines = [startLine, 0]

        # change current state, then restore it after parser subcall
        oldTight = state.tight
        oldTShift = state.tShift[startLine]
        oldSCount = state.sCount[startLine]

        #  - example list
        # ^ listIndent position will be here
        #   ^ blkIndent position will be here
        #
        oldListIndent = state.listIndent
        state.listIndent = state.blkIndent
        state.blkIndent = indent

        state.tight = True
        state.tShift[startLine] = contentStart - state.bMarks[startLine]
        state.sCount[startLine] = offset

        if contentStart >= maximum and state.isEmpty(startLine + 1):
            # workaround for this case
            # (list item is empty, list terminates before "foo"):
            # ~~~~~~~~
            #   -
            #
            #     foo
            # ~~~~~~~~
            state.line = min(state.line + 2, endLine)
        else:
            # NOTE in list.js this was:
            # state.md.block.tokenize(state, startLine, endLine, True)
            # but  tokeniz does not take the final parameter
            state.md.block.tokenize(state, startLine, endLine)

        # If any of list item is tight, mark list as tight
        if (not state.tight) or prevEmptyEnd:
            tight = False

        # Item become loose if finish with empty line,
        # but we should filter last element, because it means list finish
        prevEmptyEnd = (state.line - startLine) > 1 and state.isEmpty(state.line - 1)

        state.blkIndent = state.listIndent
        state.listIndent = oldListIndent
        state.tShift[startLine] = oldTShift
        state.sCount[startLine] = oldSCount
        state.tight = oldTight

        token = state.push("list_item_close", "li", -1)
        token.markup = chr(markerCharCode)

        nextLine = startLine = state.line
        itemLines[1] = nextLine

        if nextLine >= endLine:
            break

        contentStart = state.bMarks[startLine]

        #
        # Try to check if list is terminated or continued.
        #
        if state.sCount[nextLine] < state.blkIndent:
            break

        # if it's indented more than 3 spaces, it should be a code block
        if state.sCount[startLine] - state.blkIndent >= 4:
            break

        # fail if terminating block found
        terminate = False
        for terminatorRule in terminatorRules:
            if terminatorRule(state, nextLine, endLine, True):
                terminate = True
                break

        if terminate:
            break

        # fail if list has another type
        if isOrdered:
            posAfterMarker = skipOrderedListMarker(state, nextLine)
            if posAfterMarker < 0:
                break
        else:
            posAfterMarker = skipBulletListMarker(state, nextLine)
            if posAfterMarker < 0:
                break

        if markerCharCode != state.srcCharCode[posAfterMarker - 1]:
            break

    # Finalize list
    if isOrdered:
        token = state.push("ordered_list_close", "ol", -1)
    else:
        token = state.push("bullet_list_close", "ul", -1)

    token.markup = chr(markerCharCode)

    listLines[1] = nextLine
    state.line = nextLine

    state.parentType = oldParentType

    # mark paragraphs tight if needed
    if tight:
        markTightParagraphs(state, listTokIdx)

    return True
