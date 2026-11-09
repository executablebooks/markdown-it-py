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


def test_no_block_rule_matched() -> None:
    """Without the paragraph fallback, a line no rule accepts must raise, not hang."""
    md = MarkdownIt("commonmark").disable("paragraph")

    with pytest.raises(RuntimeError, match=r"none of the block rules matched"):
        md.parse("text\n")


def test_inline_ok_is_reset_at_max_nesting() -> None:
    """A match must not carry over to an iteration where nesting skips the rules.

    The rule below opens a ``sup`` token and never closes it, so with
    ``maxNesting=1`` the next iteration skips every rule. The text must then
    fall through as plain text, as in markdown-it, instead of looping.
    """

    def caret(state: StateInline, silent: bool) -> bool:
        if state.src[state.pos] != "^":
            return False
        if not silent:
            state.push("sup_open", "sup", 1)
        state.pos += 1
        return True

    md = MarkdownIt("commonmark", {"maxNesting": 1})
    md.inline.ruler.before("text", "caret", caret)

    assert md.render("^ab\n") == "<p><sup>ab</p>\n"
