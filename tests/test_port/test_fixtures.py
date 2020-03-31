from pathlib import Path

import pytest

from markdown_it import MarkdownIt
from markdown_it.utils import read_fixture_file

FIXTURE_PATH = Path(__file__).parent.joinpath("fixtures")


@pytest.mark.parametrize(
    "line,title,input,expected", read_fixture_file(FIXTURE_PATH.joinpath("tables.md"))
)
def test_title(line, title, input, expected):
    md = MarkdownIt().enable("table")
    text = md.render(input)
    assert text.rstrip() == expected.rstrip()


@pytest.mark.parametrize(
    "line,title,input,expected",
    read_fixture_file(FIXTURE_PATH.joinpath("commonmark_extras.md")),
)
def test_commonmark_extras(line, title, input, expected):
    if line in [74, 88]:
        # TODO fix failing escaping tests
        # probably requires a fix of common.utils.stripEscape
        pytest.skip("escaping entities in link titles / fence.info")
    md = MarkdownIt("commonmark")
    md.options["langPrefix"] = ""
    text = md.render(input)
    if text.rstrip() != expected.rstrip():
        print(text)
    assert text.rstrip() == expected.rstrip()


@pytest.mark.parametrize(
    "line,title,input,expected",
    read_fixture_file(FIXTURE_PATH.joinpath("normalize.md")),
)
def test_normalize_url(line, title, input, expected):
    md = MarkdownIt("commonmark")
    text = md.render(input)
    assert text.rstrip() == expected.rstrip()


@pytest.mark.parametrize(
    "line,title,input,expected", read_fixture_file(FIXTURE_PATH.joinpath("fatal.md"))
)
def test_fatal(line, title, input, expected):
    if line in [1, 17, 25]:
        # TODO fix failing url escaping tests
        pytest.skip("url normalisation")
    md = MarkdownIt("commonmark")
    text = md.render(input)
    if text.rstrip() != expected.rstrip():
        print(text)
    assert text.rstrip() == expected.rstrip()


@pytest.mark.parametrize(
    "line,title,input,expected",
    read_fixture_file(FIXTURE_PATH.joinpath("strikethrough.md")),
)
def test_strikethrough(line, title, input, expected):
    md = MarkdownIt().enable("strikethrough")
    text = md.render(input)
    assert text.rstrip() == expected.rstrip()
