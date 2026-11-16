import pytest

from markdown_it import MarkdownIt

pytest.importorskip("linkify_it")


@pytest.mark.parametrize(
    "scheme,prefix_length",
    [("http", 8), ("http", 9), ("https", 9), ("https", 10), ("ftp", 7), ("ftp", 8)],
)
@pytest.mark.parametrize(
    "source,expected",
    [
        ("{prefix}[{url}", "{prefix}[{link}"),
        ("{prefix}[{url}]", "{prefix}[{link}]"),
        (
            "{prefix}[{url}](https://example.org)",
            '{prefix}<a href="https://example.org">{url}</a>',
        ),
        (
            "{prefix}![{url}](image.png)",
            '{prefix}<img src="image.png" alt="{url}" />',
        ),
    ],
    ids=["unclosed", "closed", "link", "image"],
)
def test_linkify_in_link_label(scheme, prefix_length, source, expected):
    """Link-label lookahead must not stall on a stale pending scheme (#470)."""
    md = MarkdownIt("gfm-like")
    prefix = "a" * prefix_length
    url = f"{scheme}://s://"
    link = f'<a href="{scheme}://s">{scheme}://s</a>://'
    text = source.format(prefix=prefix, url=url)
    expected = expected.format(prefix=prefix, url=url, link=link)
    assert md.renderInline(text) == expected
    assert md.render(text) == f"<p>{expected}</p>\n"


@pytest.mark.parametrize("preset", ["commonmark", "gfm-like"])
def test_link_label_with_linkify_disabled(preset):
    """The progress check must not require linkifying ordinary label text."""
    md = MarkdownIt(preset, {"linkify": False})
    text = "abcdefgh[http://s://"
    assert md.renderInline(text) == text


def test_linkify_inside_emphasis() -> None:
    """Preserve normal linkification and trailing emphasis delimiters."""
    md = MarkdownIt("gfm-like")
    assert md.renderInline("*https://example.org/*") == (
        '<em><a href="https://example.org/">https://example.org/</a></em>'
    )


def test_token_levels():
    mdit = MarkdownIt(options_update={"linkify": True}).enable("linkify")
    tokens = mdit.parse("www.python.org")
    inline = tokens[1]
    assert inline.type == "inline"
    assert inline.children
    link_open = inline.children[0]
    assert link_open.type == "link_open"
    link_text = inline.children[1]
    assert link_text.type == "text"
    link_close = inline.children[2]
    assert link_close.type == "link_close"

    # Assert that linkify tokens have correct nesting levels
    assert link_open.level == 0
    assert link_text.level == 1
    assert link_close.level == 0
