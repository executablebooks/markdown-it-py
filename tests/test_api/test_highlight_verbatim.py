"""Tests for the ``highlight_verbatim`` option (markdown-it-py#256)."""

from __future__ import annotations

from collections.abc import Callable
from typing import Any

from markdown_it import MarkdownIt


def _md(
    highlight: Callable[[str, str, str], str] | None = None, **options: Any
) -> MarkdownIt:
    return MarkdownIt("commonmark", {"highlight": highlight, **options})


def test_default_wraps_non_pre_output():
    """Default behavior: highlighter output not starting with <pre is wrapped."""

    def highlight(content, lang, attrs):
        return f"<div class='hl'>{content}</div>"

    md = _md(highlight)
    assert md.render("```python\nhl\n```") == (
        "<pre><code class=\"language-python\"><div class='hl'>hl\n</div></code></pre>\n"
    )


def test_default_pre_continues_heuristic():
    """Default behavior: output starting with <pre is passed through verbatim."""

    def highlight(content, lang, attrs):
        return f"<pre class='hl'>{content}</pre>"

    md = _md(highlight)
    assert md.render("```python\nhl\n```") == "<pre class='hl'>hl\n</pre>\n"


def test_verbatim_passes_through_non_pre_output():
    """With highlight_verbatim, non-<pre output is passed through unwrapped."""

    def highlight(content, lang, attrs):
        return f"<div class='hl'>{content}</div>"

    md = _md(highlight, highlight_verbatim=True)
    assert md.render("```python\nhl\n```") == "<div class='hl'>hl\n</div>"


def test_verbatim_passes_through_pre_output():
    """With highlight_verbatim, <pre output is passed through as before."""

    def highlight(content, lang, attrs):
        return f"<pre class='hl'>{content}</pre>"

    md = _md(highlight, highlight_verbatim=True)
    assert md.render("```python\nhl\n```") == "<pre class='hl'>hl\n</pre>"


def test_verbatim_skips_lang_class_injection():
    """With highlight_verbatim, no language class is injected into the output."""

    def highlight(content, lang, attrs):
        assert lang == "python"
        return f"<div>{content}</div>"

    md = _md(highlight, highlight_verbatim=True)
    assert md.render("```python\nhl\n```") == "<div>hl\n</div>"


def test_verbatim_falls_back_when_highlighter_returns_empty():
    """Falsy highlighter output still falls back to the escaped <pre><code> wrapper."""

    def highlight(content, lang, attrs):
        return ""

    md = _md(highlight, highlight_verbatim=True)
    assert md.render("```python\nhl\n```") == (
        '<pre><code class="language-python">hl\n</code></pre>\n'
    )


def test_verbatim_without_highlighter_uses_default_wrapper():
    """Without a highlighter, highlight_verbatim has no effect."""

    md = _md(None, highlight_verbatim=True)
    assert md.render("```python\nhl\n```") == (
        '<pre><code class="language-python">hl\n</code></pre>\n'
    )


def test_verbatim_can_be_set_after_construction():
    """The option can be toggled on the instance after construction."""

    def highlight(content, lang, attrs):
        return f"<div>{content}</div>"

    md = _md(highlight)
    assert md.render("```\nhl\n```") == "<pre><code><div>hl\n</div></code></pre>\n"
    md.options["highlight_verbatim"] = True
    assert md.render("```\nhl\n```") == "<div>hl\n</div>"
    md.options["highlight_verbatim"] = False
    assert md.render("```\nhl\n```") == "<pre><code><div>hl\n</div></code></pre>\n"


def test_verbatim_preserves_absence_of_trailing_newline():
    """No trailing newline is added — verbatim is byte-exact.

    The pre-continues heuristic path keeps its historical ``+ "\\n"``
    (wrapped blocks are renderer-owned); the verbatim path returns the
    highlighter's bytes untouched, newline or none.
    """

    def highlight(content, lang, attrs):
        return "<div>hl</div>"  # no trailing newline

    md = _md(highlight, highlight_verbatim=True)
    assert md.render("```\nhl\n```") == "<div>hl</div>"


def test_verbatim_is_byte_exact():
    """Verbatim means byte-exact: render output == highlighter return.

    Regression for the trailing-newline defect (matrix-03): with
    highlight_verbatim, the renderer must not append, strip, or alter
    a single byte of the highlighter's return value — with or without
    a trailing newline.
    """

    def hl_no_nl(content, lang, attrs):
        return "<div>no-newline</div>"

    def hl_with_nl(content, lang, attrs):
        return "<div>with-newline</div>\n"

    assert (
        _md(hl_no_nl, highlight_verbatim=True).render("```x\nc\n```")
        == "<div>no-newline</div>"
    )
    assert (
        _md(hl_with_nl, highlight_verbatim=True).render("```x\nc\n```")
        == "<div>with-newline</div>\n"
    )
