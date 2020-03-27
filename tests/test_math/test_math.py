import json
from pathlib import Path
from textwrap import dedent

import pytest

from markdown_it import MarkdownIt
from markdown_it.rules_inline import StateInline
from markdown_it.rules_block import StateBlock
from markdown_it.extensions.texmath import index as main
from markdown_it.extensions.texmath import texmath_plugin


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


def test_plugin_render():
    md = MarkdownIt().use(texmath_plugin)
    text = md.render(
        dedent(
            """\
    $$
    a=1 \\\\
    b=2
    $$ (abc)

    - ab $c=1$ d
    """
        )
    )
    assert text == (
        dedent(
            """\
    <section>
    <eqn>
    a=1 \\\\
    b=2
    </eqn>
    </section>
    <ul>
    <li>ab <eq>c=1</eq> d</li>
    </ul>
    """
        )
    )


def test_plugin_render_with_brackets():
    md = MarkdownIt().use(texmath_plugin, delimiters="brackets")
    text = md.render(r"\[a=1\]")
    assert text == ("<section><eqn>a=1</eqn></section>")


@pytest.mark.parametrize(
    "index,comment,src,valid",
    [
        [index, d["comment"], d["src"], d["valid"]]
        for index, d in enumerate(
            json.loads(Path(__file__).parent.joinpath("test_fixtures.json").read_text())
        )
    ],
)
def test_fixtures(index, comment, src, valid, data_regression):
    md = MarkdownIt().use(texmath_plugin)
    tokens = md.parse(src)
    if tokens[0].type == "paragraph_open":
        tokens = tokens[1:-1]
    data_regression.check(
        [t.as_dict() for t in tokens], basename=f"{index}_{str(valid)}_{comment[:15]}"
    )


# def test_a():
#     md = MarkdownIt().use(texmath_plugin)
#     tokens = md.parse("$1+1=\\n2$")
#     print(tokens)
#     raise
