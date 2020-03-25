# GFM table, non-standard
import re

from .state_block import StateBlock
from ..common.utils import isSpace, charCodeAt


headerLineRe = re.compile(r"^:?-+:?$")
enclosingPipesRe = re.compile(r"^\||\|$")


def getLine(state: StateBlock, line: int):
    pos = state.bMarks[line] + state.blkIndent
    maximum = state.eMarks[line]

    # return state.src.substr(pos, max - pos)
    return state.src[pos:maximum]


def escapedSplit(string):
    result = []
    pos = 0
    max = len(string)
    escapes = 0
    lastPos = 0
    backTicked = False
    lastBackTick = 0
    ch = charCodeAt(string, pos)

    while pos < max:
        if ch == 0x60:  # /* ` */
            if backTicked:
                # make \` close code sequence, but not open it;
                # the reason is: `\` is correct code block
                backTicked = False
                lastBackTick = pos
            elif escapes % 2 == 0:
                backTicked = True
                lastBackTick = pos
        # /* | */
        elif ch == 0x7C and (escapes % 2 == 0) and not backTicked:
            result.append(string[lastPos:pos])
            lastPos = pos + 1

        if ch == 0x5C:  # /* \ */
            escapes += 1
        else:
            escapes = 0

        pos += 1

        # If there was an un-closed backtick, go back to just after
        # the last backtick, but as if it was a normal character
        if pos == max and backTicked:
            backTicked = False
            pos = lastBackTick + 1

        ch = charCodeAt(string, pos)

    result.append(string[lastPos:])

    return result


def table(state: StateBlock, startLine: int, endLine: int, silent: bool):

    # should have at least two lines
    if startLine + 2 > endLine:
        return False

    nextLine = startLine + 1

    if state.sCount[nextLine] < state.blkIndent:
        return False

    # if it's indented more than 3 spaces, it should be a code block
    if state.sCount[nextLine] - state.blkIndent >= 4:
        return False

    # first character of the second line should be '|', '-', ':',
    # and no other characters are allowed but spaces;
    # basically, this is the equivalent of /^[-:|][-:|\s]*$/ regexp

    pos = state.bMarks[nextLine] + state.tShift[nextLine]
    if pos >= state.eMarks[nextLine]:
        return False

    ch = charCodeAt(state.src, pos)
    pos += 1
    # /* | */ /* - */ /* : */
    if ch != 0x7C and ch != 0x2D and ch != 0x3A:
        return False

    while pos < state.eMarks[nextLine]:
        ch = charCodeAt(state.src, pos)

        # /* | */  /* - */ /* : */
        if ch != 0x7C and ch != 0x2D and ch != 0x3A and not isSpace(ch):
            return False

        pos += 1

    lineText = getLine(state, startLine + 1)

    columns = lineText.split("|")
    aligns = []
    for i in range(len(columns)):
        t = columns[i].strip()
        if not t:
            # allow empty columns before and after table, but not in between columns;
            # e.g. allow ` |---| `, disallow ` ---||--- `
            if i == 0 or i == len(columns) - 1:
                continue
            else:
                return False

        if not headerLineRe.search(t):
            return False
        if charCodeAt(t, len(t) - 1) == 0x3A:  # /* : */
            # /* : */
            aligns.append("center" if charCodeAt(t, 0) == 0x3A else "right")
        elif charCodeAt(t, 0) == 0x3A:  # /* : */
            aligns.append("left")
        else:
            aligns.append("")

    lineText = getLine(state, startLine).strip()
    if "|" not in lineText:
        return False
    if state.sCount[startLine] - state.blkIndent >= 4:
        return False
    columns = escapedSplit(enclosingPipesRe.subn("", lineText)[0])

    # header row will define an amount of columns in the entire table,
    # and align row shouldn't be smaller than that (the rest of the rows can)
    columnCount = len(columns)
    if columnCount > len(aligns):
        return False

    if silent:
        return True

    token = state.push("table_open", "table", 1)
    token.map = tableLines = [startLine, 0]

    token = state.push("thead_open", "thead", 1)
    token.map = [startLine, startLine + 1]

    token = state.push("tr_open", "tr", 1)
    token.map = [startLine, startLine + 1]

    for i in range(len(columns)):
        token = state.push("th_open", "th", 1)
        token.map = [startLine, startLine + 1]
        if aligns[i]:
            token.attrs = [["style", "text-align:" + aligns[i]]]

        token = state.push("inline", "", 0)
        token.content = columns[i].strip()
        token.map = [startLine, startLine + 1]
        token.children = []

        token = state.push("th_close", "th", -1)

    token = state.push("tr_close", "tr", -1)
    token = state.push("thead_close", "thead", -1)

    token = state.push("tbody_open", "tbody", 1)
    token.map = tbodyLines = [startLine + 2, 0]

    nextLine = startLine + 2
    while nextLine < endLine:
        if state.sCount[nextLine] < state.blkIndent:
            break

        lineText = getLine(state, nextLine).strip()
        if "|" not in lineText:
            break
        if state.sCount[nextLine] - state.blkIndent >= 4:
            break
        columns = escapedSplit(enclosingPipesRe.subn("", lineText)[0])

        token = state.push("tr_open", "tr", 1)
        for i in range(columnCount):
            token = state.push("td_open", "td", 1)
            if aligns[i]:
                token.attrs = [["style", "text-align:" + aligns[i]]]

            token = state.push("inline", "", 0)
            try:
                token.content = columns[i].strip() if columns[i] else ""
            except IndexError:
                token.content = ""
            token.children = []

            token = state.push("td_close", "td", -1)

        token = state.push("tr_close", "tr", -1)

        nextLine += 1

    token = state.push("tbody_close", "tbody", -1)
    token = state.push("table_close", "table", -1)

    tableLines[1] = tbodyLines[1] = nextLine
    state.line = nextLine
    return True
