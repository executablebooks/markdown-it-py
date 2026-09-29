"""Regression tests for #441: guards against block/inline rules that report a
match without advancing ``state.line`` / ``state.pos`` (which would otherwise
make the parser loop forever, exhausting memory).

Ported from markdown-it JS, which has thrown on this since 13.0.2.
"""

import pytest

from markdown_it import MarkdownIt
from markdown_it.rules_inline.state_inline import StateInline


def test_block_rule_guard_raises():
    md = MarkdownIt("commonmark")
    # A block rule that claims a match but never advances state.line.
    md.block.ruler.before("paragraph", "stuck", lambda state, start, end, silent: True)
    with pytest.raises(RuntimeError):
        md.parse("text\n")


def test_inline_tokenize_guard_raises():
    md = MarkdownIt("commonmark")
    # An inline rule that claims a match but never advances state.pos.
    md.inline.ruler.before("text", "stuck", lambda state, silent: True)
    with pytest.raises(RuntimeError):
        md.parse("text\n")


def test_inline_skip_token_guard_raises():
    md = MarkdownIt("commonmark")
    md.inline.ruler.before("text", "stuck", lambda state, silent: True)
    state = StateInline("text", md, {}, [])
    with pytest.raises(RuntimeError):
        md.inline.skipToken(state)


def test_builtin_rules_still_advance():
    # Sanity check: normal parsing is unaffected by the new guards.
    md = MarkdownIt("commonmark")
    out = md.render("# Hello\n\nA paragraph with *em* and `code`.")
    assert "<h1" in out
    assert "<em>em</em>" in out
    assert "<code>code</code>" in out
