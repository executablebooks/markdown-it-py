from pathlib import Path
from textwrap import dedent

import pytest

from markdown_it import MarkdownIt
from markdown_it.extensions.amsmath import amsmath_plugin
from markdown_it.utils import read_fixture_file

FIXTURE_PATH = Path(__file__).parent


def test_plugin_parse(data_regression):
    md = MarkdownIt().use(amsmath_plugin)
    tokens = md.parse(
        dedent(
            """\
    a
    \\begin{equation}
    b=1
    c=2
    \\end{equation}
    d
    """
        )
    )
    data_regression.check([t.as_dict() for t in tokens])


@pytest.mark.parametrize(
    "line,title,input,expected",
    read_fixture_file(FIXTURE_PATH.joinpath("fixtures", "amsmath.md")),
)
def test_fixtures(line, title, input, expected):
    md = MarkdownIt("commonmark").use(amsmath_plugin)
    md.options["xhtmlOut"] = False
    text = md.render(input)
    print(text)
    assert text.rstrip() == expected.rstrip()
