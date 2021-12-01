from pathlib import Path

import pytest

from markdown_it import MarkdownIt
from markdown_it.utils import read_fixture_file

FIXTURE_PATH = Path(__file__).parent.joinpath("fixtures")


@pytest.mark.parametrize(
    "line,title,input,expected",
    read_fixture_file(FIXTURE_PATH.joinpath("linkify.md")),
)
def test_linkify(line, title, input, expected):
    md = MarkdownIt().enable("linkify")
    md.options["linkify"] = True
    text = md.render(input)
    assert text.rstrip() == expected.rstrip()

    # if not install linkify-it-py
    md.linkify = None
    with pytest.raises(ModuleNotFoundError):
        md.render(input)


@pytest.mark.parametrize(
    "line,title,input,expected",
    read_fixture_file(FIXTURE_PATH.joinpath("smartquotes.md")),
)
def test_smartquotes(line, title, input, expected):
    md = MarkdownIt().enable("replacements").enable("smartquotes")
    md.options["typographer"] = True
    text = md.render(input)
    assert text.rstrip() == expected.rstrip()


@pytest.mark.parametrize(
    "line,title,input,expected",
    read_fixture_file(FIXTURE_PATH.joinpath("typographer.md")),
)
def test_typographer(line, title, input, expected):
    md = MarkdownIt().enable("replacements")
    md.options["typographer"] = True
    text = md.render(input)
    assert text.rstrip() == expected.rstrip()


@pytest.mark.parametrize(
    "line,title,input,expected", read_fixture_file(FIXTURE_PATH.joinpath("tables.md"))
)
def test_table(line, title, input, expected):
    md = MarkdownIt().enable("table")
    text = md.render(input)
    try:
        assert text.rstrip() == expected.rstrip()
    except AssertionError:
        print(text)
        raise


@pytest.mark.parametrize(
    "line,title,input,expected",
    read_fixture_file(FIXTURE_PATH.joinpath("commonmark_extras.md")),
)
def test_commonmark_extras(line, title, input, expected):
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
    md = MarkdownIt("commonmark").enable("replacements")
    md.options["typographer"] = True
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


@pytest.mark.parametrize(
    "line,title,input,expected",
    read_fixture_file(FIXTURE_PATH.joinpath("issue-fixes.md")),
)
def test_issue_fixes(line, title, input, expected):
    md = MarkdownIt()
    text = md.render(input)
    assert text.rstrip() == expected.rstrip()
