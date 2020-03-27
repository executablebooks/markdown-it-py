from pathlib import Path
from textwrap import dedent

import pytest

from markdown_it import MarkdownIt
from markdown_it.rules_inline import StateInline
from markdown_it.rules_block import StateBlock
from markdown_it.extensions.texmath import index as main
from markdown_it.extensions.texmath import texmath_plugin
from markdown_it.utils import read_fixture_file

FIXTURE_PATH = Path(__file__).parent


def test_inline_func():

    inline_func = main.make_inline_func(main.rules.dollars.inline[0])

    md = MarkdownIt()
    src = r"$a=1$ $b=2$"
    tokens = []
    state = StateInline(src, md, {}, tokens)
    inline_func(state, False)
    assert tokens[0].as_dict() == {
        "type": "math_inline",
        "tag": "math",
        "nesting": 0,
        "attrs": None,
        "map": None,
        "level": 0,
        "children": None,
        "content": "a=1",
        "markup": "$",
        "info": "",
        "meta": {},
        "block": False,
        "hidden": False,
    }
    assert state.pos == 5


def test_block_func():
    block_func = main.make_block_func(main.rules.dollars.block[0])
    md = MarkdownIt()
    src = r"$$\na=1\n\nc\nb=2$$ (abc)"
    tokens = []
    state = StateBlock(src, md, {}, tokens)
    block_func(state, 0, 10, False)
    assert tokens[0].as_dict() == {
        "type": "math_block_eqno",
        "tag": "math",
        "nesting": 0,
        "attrs": None,
        "map": None,
        "level": 0,
        "children": None,
        "content": "\\na=1\\n\\nc\\nb=2",
        "markup": "$$",
        "info": "abc",
        "meta": {},
        "block": True,
        "hidden": False,
    }


def test_plugin_parse(data_regression):
    md = MarkdownIt().use(texmath_plugin)
    tokens = md.parse(
        dedent(
            """\
    $$
    a=1
    b=2
    $$ (abc)

    - ab $c=1$ d
    """
        )
    )
    data_regression.check([t.as_dict() for t in tokens])


@pytest.mark.parametrize(
    "line,title,input,expected",
    read_fixture_file(FIXTURE_PATH.joinpath("fixtures_dollar.md")),
)
def test_dollar_fixtures(line, title, input, expected):
    md = MarkdownIt("commonmark").use(texmath_plugin)
    md.options["xhtmlOut"] = False
    text = md.render(input)
    print(text)
    assert text.rstrip() == expected.rstrip()


@pytest.mark.parametrize(
    "line,title,input,expected",
    read_fixture_file(FIXTURE_PATH.joinpath("fixtures_bracket.md")),
)
def test_bracket_fixtures(line, title, input, expected):
    md = MarkdownIt("commonmark").use(texmath_plugin, delimiters="brackets")
    md.options["xhtmlOut"] = False
    text = md.render(input)
    print(text)
    assert text.rstrip() == expected.rstrip()
