"""Paragraph."""

import logging

from ..common.utils import mdTrim
from .html_block import html_block_starts
from .state_block import StateBlock

LOGGER = logging.getLogger(__name__)


def paragraph(state: StateBlock, startLine: int, endLine: int, silent: bool) -> bool:
    LOGGER.debug(
        "entering paragraph: %s, %s, %s, %s", state, startLine, endLine, silent
    )

    nextLine = startLine + 1
    ruler = state.md.block.ruler
    terminatorRules = ruler.getRules("paragraph")
    endLine = state.lineMax

    oldParentType = state.parentType
    state.parentType = "paragraph"

    # jump line-by-line until empty one or EOF
    while nextLine < endLine:
        if state.isEmpty(nextLine):
            break
        # this would be a code block normally, but after paragraph
        # it's considered a lazy continuation regardless of what's there
        if state.sCount[nextLine] - state.blkIndent > 3:
            nextLine += 1
            continue

        # quirk for blockquotes, this line should already be checked by that rule
        if state.sCount[nextLine] < 0:
            nextLine += 1
            continue

        # An HTML block start on a line under-indented for the current
        # container is not a lazy continuation: like cmark, end the paragraph
        # here so the line can open a block in an outer container (issue
        # #434). At the same container level a type-7 sequence still does not
        # interrupt the paragraph, which the terminator rules below handle.
        if state.sCount[nextLine] < state.blkIndent and html_block_starts(
            state, nextLine
        ):
            break

        # Some tags can terminate paragraph without empty line.
        terminate = False
        for terminatorRule in terminatorRules:
            if terminatorRule(state, nextLine, endLine, True):
                terminate = True
                break

        if terminate:
            break

        nextLine += 1

    content = mdTrim(state.getLines(startLine, nextLine, state.blkIndent, False))

    state.line = nextLine

    token = state.push("paragraph_open", "p", 1)
    token.map = [startLine, state.line]

    token = state.push("inline", "", 0)
    token.content = content
    token.map = [startLine, state.line]
    token.children = []

    token = state.push("paragraph_close", "p", -1)

    state.parentType = oldParentType

    return True
