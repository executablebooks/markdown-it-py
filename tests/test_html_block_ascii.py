"""CommonMark HTML block starts use ASCII letters for tag and declarations."""

import pytest

from markdown_it import MarkdownIt


@pytest.mark.parametrize("declaration", ["<!doctype html>", "<!DOCTYPE html>"])
def test_ascii_declaration_ends_paragraph(declaration: str) -> None:
    md = MarkdownIt("commonmark")
    assert md.render(f"para\n{declaration}\n") == f"<p>para</p>\n{declaration}\n"


@pytest.mark.parametrize("tag", ["\u017fcript", "\u017ftyle", "d\u0130v", "d\u0131v"])
def test_unicode_casefold_does_not_start_html_block(tag: str) -> None:
    md = MarkdownIt("commonmark")
    assert md.render(f"para\n<{tag}>\ntext\n") == (
        f"<p>para\n&lt;{tag}&gt;\ntext</p>\n"
    )


def test_ascii_mixed_case_tag_still_starts_html_block() -> None:
    md = MarkdownIt("commonmark")
    assert md.render("para\n<ScRiPt>\ntext\n</sCrIpT>\n") == (
        "<p>para</p>\n<ScRiPt>\ntext\n</sCrIpT>\n"
    )
