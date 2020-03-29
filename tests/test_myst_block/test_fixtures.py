from pathlib import Path

import pytest

from markdown_it import MarkdownIt
from markdown_it.token import Token
from markdown_it.utils import read_fixture_file
from markdown_it.extensions.myst_blocks import myst_block_plugin

FIXTURE_PATH = Path(__file__).parent.joinpath("fixtures.md")


@pytest.mark.parametrize("line,title,input,expected", read_fixture_file(FIXTURE_PATH))
def test_all(line, title, input, expected):
    md = MarkdownIt("commonmark").use(myst_block_plugin)
    md.options["xhtmlOut"] = False
    text = md.render(input)
    print(text)
    assert text.rstrip() == expected.rstrip()


def test_block_token():
    md = MarkdownIt("commonmark").use(myst_block_plugin)
    tokens = md.parse("+++")
    assert tokens == [
        Token(
            type="myst_block_break",
            tag="hr",
            nesting=0,
            attrs=[["class", "myst-block"]],
            map=[0, 1],
            level=0,
            children=None,
            content="",
            markup="+++",
            info="",
            meta={},
            block=True,
            hidden=False,
        )
    ]

    tokens = md.parse("\n+ + + abc")
    assert tokens == [
        Token(
            type="myst_block_break",
            tag="hr",
            nesting=0,
            attrs=[["class", "myst-block"]],
            map=[1, 2],
            level=0,
            children=None,
            content="abc",
            markup="+++",
            info="",
            meta={},
            block=True,
            hidden=False,
        )
    ]


def test_comment_token():
    md = MarkdownIt("commonmark").use(myst_block_plugin)
    tokens = md.parse("\n\n% abc")
    assert tokens == [
        Token(
            type="myst_line_comment",
            tag="",
            nesting=0,
            attrs=[["class", "myst-line-comment"]],
            map=[2, 3],
            level=0,
            children=None,
            content="abc",
            markup="%",
            info="",
            meta={},
            block=True,
            hidden=False,
        )
    ]
