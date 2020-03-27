"""Block-level tokenizer."""
import logging
from typing import List

from .ruler import Ruler
from .token import Token
from .rules_block.state_block import StateBlock
from . import rules_block

LOGGER = logging.getLogger(__name__)


_rules = [
    # First 2 params - rule name & source. Secondary array - list of rules,
    # which can be terminated by this one.
    ["table", rules_block.table, ["paragraph", "reference"]],
    ["code", rules_block.code],
    ["fence", rules_block.fence, ["paragraph", "reference", "blockquote", "list"]],
    [
        "blockquote",
        rules_block.blockquote,
        ["paragraph", "reference", "blockquote", "list"],
    ],
    ["hr", rules_block.hr, ["paragraph", "reference", "blockquote", "list"]],
    ["list", rules_block.list_block, ["paragraph", "reference", "blockquote"]],
    ["reference", rules_block.reference],
    ["heading", rules_block.heading, ["paragraph", "reference", "blockquote"]],
    ["lheading", rules_block.lheading],
    ["html_block", rules_block.html_block, ["paragraph", "reference", "blockquote"]],
    ["paragraph", rules_block.paragraph],
]


class ParserBlock:
    """
    ParserBlock#ruler -> Ruler

    [[Ruler]] instance. Keep configuration of block rules.
    """

    def __init__(self):
        self.ruler = Ruler()
        for data in _rules:
            name = data[0]
            rule = data[1]
            self.ruler.push(name, rule, {"alt": data[2] if len(data) > 2 else []})

    def tokenize(
        self, state: StateBlock, startLine: int, endLine: int, silent: bool = False
    ):
        """Generate tokens for input range."""
        rules = self.ruler.getRules("")
        line = startLine
        maxNesting = state.md.options.maxNesting
        hasEmptyLines = False

        while line < endLine:
            state.line = line = state.skipEmptyLines(line)
            if line >= endLine:
                break
            if state.sCount[line] < state.blkIndent:
                # Termination condition for nested calls.
                # Nested calls currently used for blockquotes & lists
                break
            if state.level >= maxNesting:
                # If nesting level exceeded - skip tail to the end.
                # That's not ordinary situation and we should not care about content.
                state.line = endLine
                break

            # Try all possible rules.
            # On success, rule should:
            # - update `state.line`
            # - update `state.tokens`
            # - return True
            for rule in rules:
                if rule(state, line, endLine, False):
                    break

            # set state.tight if we had an empty line before current tag
            # i.e. latest empty line should not count
            state.tight = not hasEmptyLines

            # paragraph might "eat" one newline after it in nested lists
            if state.isEmpty(state.line - 1):
                hasEmptyLines = True

            line = state.line

            if line < endLine and state.isEmpty(line):
                hasEmptyLines = True
                line += 1
                state.line = line

    def parse(self, src: str, md, env, outTokens: List[Token]):
        """Process input string and push block tokens into `outTokens`."""
        if not src:
            return
        state = StateBlock(src, md, env, outTokens)
        self.tokenize(state, state.line, state.lineMax)
        return state.tokens
