"""Regression tests for custom rules that claim a match without consuming input."""

import pytest

from markdown_it import MarkdownIt
from markdown_it.rules_inline.state_inline import StateInline


def test_block_rule_must_advance_line() -> None:
    md = MarkdownIt("commonmark")
    md.block.ruler.before("paragraph", "stuck", lambda state, start, end, silent: True)

    with pytest.raises(RuntimeError, match=r"block rule didn't increment state\.line"):
        md.parse("text\n")


def test_inline_rule_must_advance_position() -> None:
    md = MarkdownIt("commonmark")
    md.inline.ruler.before("text", "stuck", lambda state, silent: True)

    with pytest.raises(RuntimeError, match=r"inline rule didn't increment state\.pos"):
        md.parse("text")


def test_inline_validation_rule_must_advance_position() -> None:
    md = MarkdownIt("commonmark")
    md.inline.ruler.before("text", "stuck", lambda state, silent: True)
    state = StateInline("text", md, {}, [])

    with pytest.raises(RuntimeError, match=r"inline rule didn't increment state\.pos"):
        md.inline.skipToken(state)
