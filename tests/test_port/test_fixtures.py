from importlib.util import find_spec
from pathlib import Path

import pytest

from markdown_it import MarkdownIt
from markdown_it.utils import read_fixture_file

FIXTURE_PATH = Path(__file__).parent.joinpath("fixtures")

# gfm-like2 enables linkify, which needs linkify-it-py. These inputs contain no
# linkable text, so without it they run with linkify off rather than being skipped.
GFM_LIKE2_OPTIONS: dict[str, bool] = (
    {} if find_spec("linkify_it") else {"linkify": False}
)


@pytest.mark.parametrize(
    "line,title,input,expected",
    read_fixture_file(FIXTURE_PATH.joinpath("linkify.md")),
)
def test_linkify(line, title, input, expected):
    pytest.importorskip("linkify_it")
    md = MarkdownIt().enable("linkify")
    md.options["linkify"] = True
    text = md.render(input)
    assert text.rstrip() == expected.rstrip()


@pytest.mark.parametrize(
    "line,title,input,expected",
    read_fixture_file(FIXTURE_PATH.joinpath("linkify.md")),
)
def test_linkify_not_installed(line, title, input, expected):
    """Linkify enabled without linkify-it-py raises, instead of leaving links unlinked."""
    md = MarkdownIt().enable("linkify")
    md.options["linkify"] = True
    md.linkify = None  # as when linkify-it-py is not installed
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
    read_fixture_file(FIXTURE_PATH.joinpath("strikethrough_single_tilde.md")),
)
def test_strikethrough_single_tilde(line, title, input, expected):
    md = MarkdownIt("gfm-like2", GFM_LIKE2_OPTIONS)
    text = md.render(input)
    assert text.rstrip() == expected.rstrip()


@pytest.mark.parametrize(
    "line,title,input,expected",
    read_fixture_file(FIXTURE_PATH.joinpath("disable_code_block.md")),
)
def test_disable_code_block(line, title, input, expected):
    md = MarkdownIt().enable("table").disable("code")
    text = md.render(input)
    print(text.rstrip())
    assert text.rstrip() == expected.rstrip()


@pytest.mark.parametrize(
    "line,title,input,expected",
    read_fixture_file(FIXTURE_PATH.joinpath("tasklists.md")),
)
def test_tasklists(line, title, input, expected):
    md = MarkdownIt("gfm-like2", GFM_LIKE2_OPTIONS)
    text = md.render(input)
    assert text.rstrip() == expected.rstrip()


@pytest.mark.parametrize(
    "line,title,input,expected",
    read_fixture_file(FIXTURE_PATH.joinpath("alerts.md")),
)
def test_alerts(line, title, input, expected):
    md = MarkdownIt("gfm-like2", GFM_LIKE2_OPTIONS)
    text = md.render(input)
    assert text.rstrip() == expected.rstrip()


@pytest.mark.parametrize(
    "line,title,input,expected",
    read_fixture_file(FIXTURE_PATH.joinpath("issue-fixes.md")),
)
def test_issue_fixes(line, title, input, expected):
    md = MarkdownIt()
    text = md.render(input)
    print(text)
    assert text.rstrip() == expected.rstrip()
