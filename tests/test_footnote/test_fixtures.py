from pathlib import Path

import pytest

from markdown_it import MarkdownIt
from markdown_it.utils import read_fixture_file
from markdown_it.extensions.footnote import footnote_plugin

FIXTURE_PATH = Path(__file__).parent.joinpath("fixtures.md")


@pytest.mark.parametrize("line,title,input,expected", read_fixture_file(FIXTURE_PATH))
def test_all(line, title, input, expected):
    md = MarkdownIt("commonmark").use(footnote_plugin)
    md.options["xhtmlOut"] = False
    text = md.render(input)
    print(text)
    assert text.rstrip().replace("↩︎", "<-").replace(
        "↩", "<-"
    ) == expected.rstrip().replace("↩︎", "<-").replace("↩", "<-")
