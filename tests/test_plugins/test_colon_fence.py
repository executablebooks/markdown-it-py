from pathlib import Path
from textwrap import dedent

import pytest

from markdown_it import MarkdownIt
from markdown_it.utils import read_fixture_file
from markdown_it.extensions.colon_fence import colon_fence_plugin

FIXTURE_PATH = Path(__file__).parent.joinpath("fixtures", "colon_fence.md")


@pytest.mark.parametrize("line,title,input,expected", read_fixture_file(FIXTURE_PATH))
def test_fixtures(line, title, input, expected):
    md = MarkdownIt("commonmark").use(colon_fence_plugin)
    md.options["xhtmlOut"] = False
    text = md.render(input)
    try:
        assert text.rstrip() == expected.rstrip()
    except AssertionError:
        print(text)
        raise


def test_plugin_parse(data_regression):
    md = MarkdownIt().use(colon_fence_plugin)
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
