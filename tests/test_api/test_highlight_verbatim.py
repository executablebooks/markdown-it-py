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
    assert md.render("```python\nhl\n```") == "<div class='hl'>hl\n</div>\n"


def test_verbatim_passes_through_pre_output():
    """With highlight_verbatim, <pre output is passed through as before."""

    def highlight(content, lang, attrs):
        return f"<pre class='hl'>{content}</pre>"

    md = _md(highlight, highlight_verbatim=True)
    assert md.render("```python\nhl\n```") == "<pre class='hl'>hl\n</pre>\n"


def test_verbatim_skips_lang_class_injection():
    """With highlight_verbatim, no language class is injected into the output."""

    def highlight(content, lang, attrs):
        assert lang == "python"
        return f"<div>{content}</div>"

    md = _md(highlight, highlight_verbatim=True)
    assert md.render("```python\nhl\n```") == "<div>hl\n</div>\n"


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
    assert md.render("```\nhl\n```") == "<div>hl\n</div>\n"
    md.options["highlight_verbatim"] = False
    assert md.render("```\nhl\n```") == "<pre><code><div>hl\n</div></code></pre>\n"


def test_verbatim_output_ends_with_newline():
    """A trailing newline is added, matching the pre-continues heuristic."""

    def highlight(content, lang, attrs):
        return "<div>hl</div>"  # no trailing newline

    md = _md(highlight, highlight_verbatim=True)
    assert md.render("```\nhl\n```") == "<div>hl</div>\n"
