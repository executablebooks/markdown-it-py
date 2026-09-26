"""CommonMark HTML block starts use ASCII letters for tag and declarations."""

from markdown_it import MarkdownIt


def test_ascii_declaration_ends_paragraph() -> None:
    md = MarkdownIt("commonmark")
    for declaration in ("<!doctype html>", "<!DOCTYPE html>"):
        assert md.render(f"para\n{declaration}\n") == f"<p>para</p>\n{declaration}\n"


def test_unicode_casefold_does_not_start_html_block() -> None:
    md = MarkdownIt("commonmark")
    for tag in ("\u017fcript", "\u017ftyle", "d\u0130v", "d\u0131v"):
        assert md.render(f"para\n<{tag}>\ntext\n") == (
            f"<p>para\n&lt;{tag}&gt;\ntext</p>\n"
        )


def test_ascii_mixed_case_tag_still_starts_html_block() -> None:
    md = MarkdownIt("commonmark")
    assert md.render("para\n<ScRiPt>\ntext\n</sCrIpT>\n") == (
        "<p>para</p>\n<ScRiPt>\ntext\n</sCrIpT>\n"
    )
