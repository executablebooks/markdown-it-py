"""Removing a task marker must not reinterpret its paragraph as a block."""

import pytest

from markdown_it import MarkdownIt


@pytest.mark.parametrize("text", ["# heading", "> quote", "- child", "1. child", "---"])
def test_task_content_stays_in_its_paragraph(text):
    md = MarkdownIt("gfm-like2", {"linkify": False})
    tokens = md.parse(f"- [x] {text}\n")
    assert [token.type for token in tokens] == [
        "bullet_list_open",
        "list_item_open",
        "paragraph_open",
        "inline",
        "paragraph_close",
        "list_item_close",
        "bullet_list_close",
    ]
    assert tokens[1].meta["checked"] is True
    assert tokens[3].content == text


def test_marker_in_a_setext_heading_is_literal() -> None:
    md = MarkdownIt("gfm-like2", {"linkify": False})
    tokens = md.parse("- [x] heading\n  ---\n")
    assert all("checked" not in token.meta for token in tokens)
    assert (
        next(token for token in tokens if token.type == "inline").content
        == "[x] heading"
    )
