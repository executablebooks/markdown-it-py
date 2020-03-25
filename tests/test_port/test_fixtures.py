from pathlib import Path

import pytest

from markdown_it import MarkdownIt
from markdown_it.utils import read_fixture_file

FIXTURE_PATH = Path(__file__).parent.joinpath("fixtures")


@pytest.mark.parametrize(
    "line,title,input,expected", read_fixture_file(FIXTURE_PATH.joinpath("tables.md"))
)
def test_title(line, title, input, expected):
    md = MarkdownIt("working")
    text = md.render(input)
    assert text.rstrip() == expected.rstrip()


@pytest.mark.parametrize(
    "line,title,input,expected",
    read_fixture_file(FIXTURE_PATH.joinpath("commonmark_extras.md")),
)
def test_commonmark_extras(line, title, input, expected):
    md = MarkdownIt("commonmark")
    text = md.render(input)
    assert text.rstrip() == expected.rstrip()


@pytest.mark.parametrize(
    "line,title,input,expected", read_fixture_file(FIXTURE_PATH.joinpath("fatal.md"))
)
def test_fatal(line, title, input, expected):
    md = MarkdownIt("commonmark")
    text = md.render(input)
    assert text.rstrip() == expected.rstrip()
