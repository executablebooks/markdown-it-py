import pytest

from markdown_it import MarkdownIt


@pytest.mark.parametrize(
    "input,expected",
    [
        ("#", "<h1></h1>\n"),
        ("###", "<h3></h3>\n"),
        ("` `", "<p><code> </code></p>\n"),
        ("``````", "<pre><code></code></pre>\n"),
        ("-", "<ul>\n<li></li>\n</ul>\n"),
        ("1.", "<ol>\n<li></li>\n</ol>\n"),
        (">", "<blockquote></blockquote>\n"),
        ("---", "<hr />\n"),
        ("<h1></h1>", "<h1></h1>"),
        ("p", "<p>p</p>\n"),
        ("[reference]: /url", ""),
        ("    indented code block", "<pre><code>indented code block\n</code></pre>\n"),
        ("> test\n>", "<blockquote>\n<p>test</p>\n</blockquote>\n"),
    ],
)
def test_no_end_newline(input, expected):
    md = MarkdownIt()
    text = md.render(input)
    assert text == expected
