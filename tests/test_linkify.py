import pytest

from markdown_it import MarkdownIt

pytest.importorskip("linkify_it")


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


@pytest.mark.parametrize(
    "src,expected",
    [
        # the scheme is read backwards from `://`, and must still be found
        ("http://a.com", '<a href="http://a.com">http://a.com</a>'),
        ("x http://a.com", 'x <a href="http://a.com">http://a.com</a>'),
        ("(http://a.com", '(<a href="http://a.com">http://a.com</a>'),
        # not a scheme: starts with a digit, or there is nothing before `://`
        ("0http://a.com", "0http://a.com"),
        ("://a.com", "://a.com"),
        # a run of scheme characters longer than any schema linkify-it knows
        ("abcdefghijkl://a.com", "abcdefghijkl://a.com"),
        ("a" * 50 + "://a.com", "a" * 50 + "://a.com"),
        # the scheme may not reach back past the start of the pending text
        ("`c`http://a.com", '<code>c</code><a href="http://a.com">http://a.com</a>'),
    ],
)
def test_scheme_backscan(src, expected):
    """The scheme before `://` is found (or rejected) as before."""
    md = MarkdownIt(options_update={"linkify": True}).enable("linkify")
    assert md.renderInline(src) == expected


def test_long_scheme_backscan_runs_are_linear():
    """A long run of `://` preceded by scheme characters must stay linear.

    The scheme used to be matched with a `$`-anchored regex over the whole of
    `state.pending`, which is O(len) per `://` and so quadratic over a run of
    them.  The backscan is now bounded by `MAX_SCHEME_LENGTH`.  This input
    exceeds the suite's 10 s timeout without that bound.
    """
    md = MarkdownIt(options_update={"linkify": True}).enable("linkify")
    assert md.renderInline("a://" * 20_000) == "a://" * 20_000


def test_many_linkified_text_tokens_are_linear():
    """Many separate text tokens with links in one block must stay linear.

    The core rule used to splice each match into the inline token's children
    with `arrayReplaceAt`, rebuilding the whole list every time, which is
    quadratic in the number of matches.  This input exceeds the suite's 10 s
    timeout without the single-pass rebuild.
    """
    md = MarkdownIt(options_update={"linkify": True}).enable("linkify")
    html = md.renderInline("*x* a.com " * 20_000)
    assert html.count('<a href="http://a.com">') == 20_000
    assert html.count("<em>x</em>") == 20_000


def test_linkify_keeps_token_order_across_several_text_tokens():
    """The single-pass rebuild must keep the children in source order, and
    leave the tokens it skips (markdown and html links) untouched."""
    md = MarkdownIt(options_update={"linkify": True}).enable("linkify")
    src = "a.com *e* [t](b.com) <a href='c.com'>c.com</a> d.com"
    children = md.parseInline(src)[0].children
    assert children is not None
    assert [(t.type, t.markup, t.level) for t in children] == [
        ("link_open", "linkify", 0),
        ("text", "", 1),
        ("link_close", "linkify", 0),
        ("text", "", 0),
        ("em_open", "*", 0),
        ("text", "", 1),
        ("em_close", "*", 0),
        ("text", "", 0),
        ("link_open", "", 0),
        ("text", "", 1),
        ("link_close", "", 0),
        ("text", "", 0),
        ("html_inline", "", 0),
        ("text", "", 0),
        ("html_inline", "", 0),
        ("text", "", 0),
        ("link_open", "linkify", 0),
        ("text", "", 1),
        ("link_close", "linkify", 0),
    ]
