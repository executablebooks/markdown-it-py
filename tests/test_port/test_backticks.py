"""Code span padding uses U+0020 spaces, not Python's whitespace set."""

import pytest

from markdown_it import MarkdownIt


@pytest.mark.parametrize("marker", ["`", "``"])
@pytest.mark.parametrize(
    "content,expected",
    [
        pytest.param(" \t ", "\t", id="tab"),
        pytest.param(" \v ", "\v", id="vertical-tab"),
        pytest.param(" \f ", "\f", id="form-feed"),
        pytest.param(" \x1c ", "\x1c", id="file-separator"),
        pytest.param(" \x85 ", "\x85", id="next-line"),
        pytest.param(" \xa0 ", "\xa0", id="no-break-space"),
        pytest.param(" \u2003 ", "\u2003", id="em-space"),
        pytest.param(" \u2028 ", "\u2028", id="line-separator"),
        pytest.param(" \u3000 ", "\u3000", id="ideographic-space"),
        pytest.param(" \t\xa0 ", "\t\xa0", id="mixed-whitespace"),
        pytest.param("  \t  ", " \t ", id="one-space-per-side"),
        pytest.param(" ", " ", id="one-space"),
        pytest.param("  ", "  ", id="two-spaces"),
        pytest.param("   ", "   ", id="three-spaces"),
        pytest.param("\t", "\t", id="bare-tab"),
        pytest.param("\xa0", "\xa0", id="bare-no-break-space"),
        pytest.param(" \t", " \t", id="leading-space-only"),
        pytest.param("\t ", "\t ", id="trailing-space-only"),
        pytest.param("\t text \t", "\t text \t", id="non-space-edges"),
        pytest.param(" text ", "text", id="text-padding"),
        pytest.param("a \t b", "a \t b", id="internal-whitespace"),
        pytest.param("\n", " ", id="newline-only"),
        pytest.param(" \n ", "   ", id="spaces-and-newline"),
        pytest.param("\n\t\n", "\t", id="newline-padding"),
        pytest.param("\r\t\r", "\t", id="carriage-return-padding"),
        pytest.param("\r\n\t\r\n", "\t", id="crlf-padding"),
    ],
)
def test_code_span_space_padding(marker, content, expected):
    """Strip one surrounding space unless the normalized content is all spaces."""
    md = MarkdownIt("commonmark")
    source = f"{marker}{content}{marker}"

    assert md.renderInline(source) == f"<code>{expected}</code>"
    children = md.parseInline(source)[0].children
    assert children is not None
    assert len(children) == 1
    assert children[0].type == "code_inline"
    assert children[0].markup == marker
    assert children[0].content == expected
