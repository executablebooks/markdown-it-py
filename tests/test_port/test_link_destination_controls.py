from itertools import product

from markdown_it import MarkdownIt


def test_angle_destination_cannot_escape_a_line_ending() -> None:
    for prefix, newline in product(("", "!"), ("\n", "\r\n", "\r")):
        source = prefix + "[link](<foo\\" + newline + "bar>)"
        result = MarkdownIt("commonmark").render(source)
        assert "<a " not in result, source
        assert "<img " not in result, source


def test_bare_destination_cannot_escape_ascii_controls() -> None:
    for prefix, control in product(("", "!"), ("\n", "\t", "\x01", "\x7f")):
        source = prefix + "[link](foo\\" + control + "bar)"
        result = MarkdownIt("commonmark").render(source)
        assert "<a " not in result, source
        assert "<img " not in result, source


def test_literal_backslash_can_precede_a_trailing_separator() -> None:
    for separator in ("\n", "\t"):
        source = "[link](foo\\" + separator + ")"
        assert (
            MarkdownIt("commonmark").render(source)
            == '<p><a href="foo%5C">link</a></p>\n'
        )


def test_punctuation_escapes_and_tabs_in_angle_destinations_still_work() -> None:
    md = MarkdownIt("commonmark")
    assert md.render(r"[link](a\(b\))") == '<p><a href="a(b)">link</a></p>\n'
    assert (
        md.render("[link](<foo\\\tbar>)") == '<p><a href="foo%5C%09bar">link</a></p>\n'
    )
