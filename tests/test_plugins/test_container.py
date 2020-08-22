from pathlib import Path
from textwrap import dedent

import pytest

from markdown_it import MarkdownIt
from markdown_it.utils import read_fixture_file
from markdown_it.extensions.container import container_plugin


def test_plugin_parse(data_regression):
    md = MarkdownIt().use(container_plugin, "name")
    tokens = md.parse(
        dedent(
            """\
    ::: name
    *content*
    :::
    """
        )
    )
    data_regression.check([t.as_dict() for t in tokens])


def test_no_new_line_issue(data_regression):
    """Fixed an IndexError when no newline on final line."""
    md = MarkdownIt().use(container_plugin, "name")
    tokens = md.parse(
        dedent(
            """\
    ::: name
    *content*
    :::"""
        )
    )
    data_regression.check([t.as_dict() for t in tokens])


FIXTURE_PATH = Path(__file__).parent.joinpath("fixtures", "container.md")


@pytest.mark.parametrize("line,title,input,expected", read_fixture_file(FIXTURE_PATH))
def test_all(line, title, input, expected):
    md = MarkdownIt("commonmark").use(container_plugin, "name")
    md.options["xhtmlOut"] = False
    text = md.render(input)
    print(text)
    assert text.rstrip() == expected.rstrip()
