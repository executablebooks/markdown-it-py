"""
These tests are in response to reports from:
https://github.com/google/oss-fuzz/tree/master/projects/markdown-it-py

In the future, perhaps atheris could be directly used here,
but it was not directly apparent how to integrate it into pytest.
"""

import pytest

from markdown_it import MarkdownIt

TESTS = {
    55363: (">```\n>", "<blockquote>\n<pre><code></code></pre>\n</blockquote>\n"),
    55367: (">-\n>\n>", "<blockquote>\n<ul>\n<li></li>\n</ul>\n</blockquote>\n"),
    55371: ("[](so&#4H0;!", "<p>[](so&amp;#4H0;!</p>\n"),
    # 55401: (("?c_" * 100000) + "c_", ""),  TODO this does not fail, just takes a long time
}


@pytest.mark.parametrize("raw_input,expected", TESTS.values(), ids=TESTS.keys())
def test_fuzzing(raw_input, expected):
    md = MarkdownIt()
    md.parse(raw_input)
    assert md.render(raw_input) == expected


# Input that ends on a blockquote marker while a table is open inside the quote
# used to raise ``IndexError: string index out of range`` from the terminator
# rules ``html_block`` and ``heading`` (gh-issue 415). ``table`` must be enabled
# for the terminator rules to run on that line.
GH_415_INPUT = "> | a | b |\n> |---|---|\n>"


def test_gh_415_table_in_blockquote_at_eof_html_block() -> None:
    # html_block runs first, so with html enabled it is the rule that used to raise
    md = MarkdownIt().enable("table")
    md.render(GH_415_INPUT)  # must not raise IndexError


def test_gh_415_table_in_blockquote_at_eof_heading() -> None:
    # with html disabled, html_block bails at its options check and heading is
    # the terminator rule that used to raise
    md = MarkdownIt("commonmark", {"html": False}).enable("table")
    md.render(GH_415_INPUT)  # must not raise IndexError
