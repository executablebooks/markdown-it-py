"""Whitespace handling must match upstream markdown-it, not Python's ``str``.

``str.strip()`` and ``str.split()`` without arguments use :py:meth:`str.isspace`,
which additionally treats U+001C, U+001D, U+001E, U+001F and U+0085 as
whitespace. CommonMark and ``String.prototype.trim`` do not, so relying on them
drops those characters from the output and folds two distinct reference labels
into one.

The expected values below are what upstream markdown-it produces for the same
input: ``14.1.0`` for reference labels and fence info, and ``15.0.x`` for block
content, where only ASCII whitespace is trimmed from headings and paragraphs
(upstream #1074, released in 14.2.0).
"""

import pytest

from markdown_it import MarkdownIt

#: Characters Python calls whitespace and CommonMark does not.
EXTRA = ["\x1c", "\x1d", "\x1e", "\x1f", "\x85"]


@pytest.mark.parametrize("char", EXTRA)
def test_reference_label_is_not_folded(char):
    """A definition whose label differs must not supply a different usage.

    Before this was fixed, ``[a<char>b]`` and ``[a b]`` normalized to the same
    label, so the definition resolved a usage that does not name it.
    """
    md = MarkdownIt("js-default")
    assert md.render(f"[a b]\n\n[a{char}b]: http://example.com") == "<p>[a b]</p>\n"
    assert (
        md.render(f"[a{char}b]\n\n[a b]: http://example.com") == f"<p>[a{char}b]</p>\n"
    )


def test_reference_label_still_collapses_real_whitespace():
    """Control: labels differing only in real whitespace still match."""
    md = MarkdownIt("js-default")
    assert (
        md.render("[a b]\n\n[a\tb]: http://example.com")
        == '<p><a href="http://example.com">a b</a></p>\n'
    )


@pytest.mark.parametrize("char", EXTRA)
def test_character_survives_in_output(char):
    """The character is content, so it has to reach the output."""
    md = MarkdownIt("js-default")
    assert md.render(f"x{char}") == f"<p>x{char}</p>\n"
    assert md.render(f"{char}x") == f"<p>{char}x</p>\n"
    assert md.render(f"# h{char}") == f"<h1>h{char}</h1>\n"
    assert md.render(f"h{char}\n===") == f"<h1>h{char}</h1>\n"


def test_real_whitespace_is_still_trimmed():
    """Control: what CommonMark does call whitespace is still removed."""
    md = MarkdownIt("js-default")
    for char in ["\t", " "]:
        assert md.render(f"# h{char}") == "<h1>h</h1>\n", repr(char)


@pytest.mark.parametrize("char", ["\xa0", "\u3000"])
def test_non_ascii_whitespace_is_preserved_in_blocks(char):
    """Unicode whitespace is content, so it is not trimmed from blocks (#1074)."""
    md = MarkdownIt("js-default")
    assert md.render(f"# h{char}") == f"<h1>h{char}</h1>\n"
    assert md.render(f"h{char}\n===") == f"<h1>h{char}</h1>\n"
    assert md.render(f"{char}x{char}") == f"<p>{char}x{char}</p>\n"


def test_non_ascii_trim_matches_upstream_fixture():
    """The fixture added upstream in markdown-it #1074 (issue #1067)."""
    md = MarkdownIt("js-default")
    src = (
        "# \u3000U+3000\u3000  \n"
        "\n"
        "  \u3000U+3000\u3000  \n"
        "=\n"
        "\n"
        "  \u3000U+3000\u3000  \n"
    )
    assert md.render(src) == (
        "<h1>\u3000U+3000\u3000</h1>\n"
        "<h1>\u3000U+3000\u3000</h1>\n"
        "<p>\u3000U+3000\u3000</p>\n"
    )


def test_fence_info_is_not_split_on_it():
    """``str.split()`` would split the info string on U+0085."""
    md = MarkdownIt("js-default")
    assert (
        md.render("```py\x85rest\nx\n```")
        == '<pre><code class="language-py\x85rest">x\n</code></pre>\n'
    )


def test_fence_info_still_splits_on_whitespace():
    """Control: a real space still separates language from attributes."""
    md = MarkdownIt("js-default")
    assert (
        md.render("```py extra\nx\n```")
        == '<pre><code class="language-py">x\n</code></pre>\n'
    )


def test_table_cell_keeps_the_character():
    md = MarkdownIt("js-default").enable("table")
    assert "c\x85" in md.render("|a|\n|---|\n|c\x85|")
