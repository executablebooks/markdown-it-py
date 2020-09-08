from pathlib import Path

import pytest

from markdown_it import MarkdownIt
from markdown_it.extensions.anchors import anchors_plugin
from markdown_it.utils import read_fixture_file

FIXTURE_PATH = Path(__file__).parent


@pytest.mark.parametrize(
    "line,title,input,expected",
    read_fixture_file(FIXTURE_PATH.joinpath("fixtures", "anchors.md")),
)
def test_fixtures(line, title, input, expected):
    md = MarkdownIt("commonmark").use(
        anchors_plugin,
        permalink="(permalink" in title,
        permalinkBefore="before)" in title,
    )
    text = md.render(input)
    assert text.rstrip() == expected.rstrip()
