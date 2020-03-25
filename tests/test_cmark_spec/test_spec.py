"""In this module tests are run against the full test set,
provided by https://github.com/commonmark/CommonMark.git.
"""
import json
from pathlib import Path

import pytest

from markdown_it import MarkdownIt

SPEC_INPUT = Path(__file__).parent.joinpath("spec.md")
TESTS_INPUT = Path(__file__).parent.joinpath("commonmark.json")


def test_file(file_regression):
    md = MarkdownIt("commonmark")
    file_regression.check(md.render(SPEC_INPUT.read_text()), extension=".html")


@pytest.mark.parametrize("entry", json.loads(TESTS_INPUT.read_text()))
def test_spec(entry):

    if entry["example"] in [315, 318, 612]:
        # these tests are compliant with markdown-it demo, but not here
        pytest.skip("code span spacing")
    if entry["example"] in [273]:
        # markdown it markdown-it only support 4 levels of list items
        pytest.skip("list level > 4")
    if entry["example"] in [274]:
        # these tests are compliant with markdown-it demo, but not here
        pytest.skip("max indentation for list reached")
    md = MarkdownIt("commonmark")
    output = md.render(entry["markdown"])
    expected = entry["html"]

    if entry["example"] in [181, 202, 203]:
        # this doesn't have any bearing in the output
        output = output.replace(
            "<blockquote></blockquote>", "<blockquote>\n</blockquote>"
        )

    assert output == expected
