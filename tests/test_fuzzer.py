"""
These tests are in response to reports from:
https://github.com/google/oss-fuzz/tree/master/projects/markdown-it-py

In the future, perhaps atheris could be directly used here,
but it was not directly apparent how to integrate it into pytest.
"""
import pytest

from markdown_it import MarkdownIt

TESTS = {
    55363: ">```\n>",
    55367: ">-\n>\n>",
    # 55371: "[](so&#4»0;!"  TODO this did not fail
    # 55401: "?c_" * 100_000  TODO this did not fail
}


@pytest.mark.parametrize("raw_input", TESTS.values(), ids=TESTS.keys())
def test_fuzzing(raw_input):
    md = MarkdownIt()
    md.parse(raw_input)
    print(md.render(raw_input))
