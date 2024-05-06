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
