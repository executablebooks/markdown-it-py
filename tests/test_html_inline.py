"""Tests for the `html_inline` rule."""

import pytest

from markdown_it import MarkdownIt


@pytest.mark.parametrize(
    "src",
    [
        "<a>",  # open tag
        "<a/>",  # self-closing open tag
        "</a>",  # close tag
        "<!-->",  # short comment
        "<!--->",  # short comment
        "<!---->",  # shortest full comment
        "<??>",  # empty processing instruction
        "<!a>",  # declaration
        "<![CDATA[]]>",  # empty CDATA section
    ],
)
def test_shortest_constructs(src: str) -> None:
    """The shortest legal form of each construct is passed through as raw html."""
    assert MarkdownIt("commonmark").renderInline(src) == src


@pytest.mark.parametrize("opener", ["<![CDATA[", "<!--", "<?", "<!a", "<a", "</a"])
def test_unterminated_openers_are_linear(opener: str) -> None:
    """A long run of openers that are never terminated must not be quadratic.

    Guarded by the global pytest timeout: before the terminator quick-reject
    these took minutes rather than milliseconds.
    """
    src = "x" + opener * 10_000  # leading "x" keeps it out of `html_block`
    MarkdownIt("commonmark").render(src)
