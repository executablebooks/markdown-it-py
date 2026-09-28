"""Regression tests for HTML blocks interacting with list items (#434)."""

from markdown_it import MarkdownIt


def test_html_block_under_indented_closes_list() -> None:
    """A type-7 HTML block at outer indentation ends the list, like cmark."""
    md = MarkdownIt("commonmark", {"html": True})
    assert md.render("## Opts\n\n- a\n<br>\n## Next\n") == (
        "<h2>Opts</h2>\n<ul>\n<li>a</li>\n</ul>\n<br>\n## Next\n"
    )


def test_html_block_at_item_indent_is_lazy_continuation() -> None:
    """At the item's content indent, type 7 cannot interrupt the paragraph."""
    md = MarkdownIt("commonmark", {"html": True})
    assert md.render("- a\n  <br>\n") == "<ul>\n<li>a\n<br></li>\n</ul>\n"


def test_html_block_cannot_interrupt_top_level_paragraph() -> None:
    md = MarkdownIt("commonmark", {"html": True})
    assert md.render("para\n<br>\n") == "<p>para\n<br></p>\n"


def test_plain_text_is_still_lazy_continuation() -> None:
    md = MarkdownIt("commonmark", {"html": True})
    assert md.render("- a\nb\n") == "<ul>\n<li>a\nb</li>\n</ul>\n"


def test_type_6_html_block_closes_list() -> None:
    md = MarkdownIt("commonmark", {"html": True})
    assert md.render("- a\n<div>\n") == "<ul>\n<li>a</li>\n</ul>\n<div>\n"
