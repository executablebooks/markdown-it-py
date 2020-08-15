from pathlib import Path
from textwrap import dedent

import pytest

from markdown_it import MarkdownIt
from markdown_it.utils import read_fixture_file
from markdown_it.extensions.deflist import deflist_plugin

FIXTURE_PATH = Path(__file__).parent.joinpath("fixtures", "deflist.md")


def test_plugin_parse(data_regression):
    md = MarkdownIt().use(deflist_plugin)
    tokens = md.parse(
        dedent(
            """\
    Term 1

    : Definition 1

    Term 2
      ~ Definition 2a
      ~ Definition 2b
    """
        )
    )
    data_regression.check([t.as_dict() for t in tokens])


@pytest.mark.parametrize("line,title,input,expected", read_fixture_file(FIXTURE_PATH))
def test_all(line, title, input, expected):
    md = MarkdownIt("commonmark").use(deflist_plugin)
    md.options["xhtmlOut"] = False
    text = md.render(input)
    print(text)
    assert text.rstrip() == expected.rstrip()
