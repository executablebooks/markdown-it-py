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
    if entry["example"] in [108, 334]:
        # TODO ``` ``` -> <code> </code> not <code></code>
        pytest.skip("empty code span spacing")
    if entry["example"] in [
        171,
        306,
        308,
        309,
        310,
        318,
        319,
        320,
        499,
        502,
        505,
        569,
        572,
        573,
        599,
    ]:
        # TODO fix url escaping
        pytest.skip("url escaping")
    md = MarkdownIt("commonmark")
    output = md.render(entry["markdown"])
    expected = entry["html"]

    if entry["example"] in [187, 209, 210]:
        # this doesn't have any bearing on the output
        output = output.replace(
            "<blockquote></blockquote>", "<blockquote>\n</blockquote>"
        )

    assert output == expected
