from pathlib import Path
from textwrap import dedent

import pytest

from markdown_it import MarkdownIt
from markdown_it.utils import read_fixture_file
from markdown_it.extensions.tasklists import tasklists_plugin

FIXTURE_PATH = Path(__file__).parent.joinpath("fixtures", "tasklists.md")


def test_plugin_parse(data_regression):
    md = MarkdownIt().use(tasklists_plugin)
    tokens = md.parse(
        dedent(
            """\
    * [ ] Task incomplete
    * [x] Task complete
      * [ ] Indented task incomplete
      * [x] Indented task complete
    """
        )
    )
    data_regression.check([t.as_dict() for t in tokens])


@pytest.mark.parametrize("line,title,input,expected", read_fixture_file(FIXTURE_PATH))
def test_all(line, title, input, expected):
    md = MarkdownIt("commonmark").use(tasklists_plugin)
    md.options["xhtmlOut"] = False
    text = md.render(input)
    print(text)
    assert text.rstrip() == expected.rstrip()
