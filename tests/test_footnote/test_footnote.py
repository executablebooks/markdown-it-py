from textwrap import dedent

from markdown_it import MarkdownIt
from markdown_it.token import Token
from markdown_it.rules_inline import StateInline
from markdown_it.rules_block import StateBlock
from markdown_it.extensions.footnote import index
from markdown_it.extensions.footnote import footnote_plugin


def test_footnote_def():

    md = MarkdownIt()
    src = r"[^a]: xyz"
    tokens = []
    state = StateBlock(src, md, {}, tokens)
    index.footnote_def(state, 0, 1, False)
    assert [t.as_dict() for t in tokens] == [
        {
            "type": "footnote_reference_open",
            "tag": "",
            "nesting": 1,
            "attrs": None,
            "map": None,
            "level": 0,
            "children": None,
            "content": "",
            "markup": "",
            "info": "",
            "meta": {"label": "a"},
            "block": False,
            "hidden": False,
        },
        {
            "type": "paragraph_open",
            "tag": "p",
            "nesting": 1,
            "attrs": None,
            "map": [0, 1],
            "level": 1,
            "children": None,
            "content": "",
            "markup": "",
            "info": "",
            "meta": {},
            "block": True,
            "hidden": False,
        },
        {
            "type": "inline",
            "tag": "",
            "nesting": 0,
            "attrs": None,
            "map": [0, 1],
            "level": 2,
            "children": [],
            "content": "xyz",
            "markup": "",
            "info": "",
            "meta": {},
            "block": True,
            "hidden": False,
        },
        {
            "type": "paragraph_close",
            "tag": "p",
            "nesting": -1,
            "attrs": None,
            "map": None,
            "level": 1,
            "children": None,
            "content": "",
            "markup": "",
            "info": "",
            "meta": {},
            "block": True,
            "hidden": False,
        },
        {
            "type": "footnote_reference_close",
            "tag": "",
            "nesting": -1,
            "attrs": None,
            "map": None,
            "level": 0,
            "children": None,
            "content": "",
            "markup": "",
            "info": "",
            "meta": {},
            "block": False,
            "hidden": False,
        },
    ]
    assert state.env == {"footnotes": {"refs": {":a": -1}}}


def test_footnote_ref():

    md = MarkdownIt()
    src = r"[^a]"
    tokens = []
    state = StateInline(src, md, {}, tokens)
    state.env = {"footnotes": {"refs": {":a": -1}}}
    index.footnote_ref(state, False)
    # print([t.as_dict() for t in tokens])
    assert [t.as_dict() for t in tokens] == [
        {
            "type": "footnote_ref",
            "tag": "",
            "nesting": 0,
            "attrs": None,
            "map": None,
            "level": 0,
            "children": None,
            "content": "",
            "markup": "",
            "info": "",
            "meta": {"id": 0, "subId": 0, "label": "a"},
            "block": False,
            "hidden": False,
        }
    ]
    assert state.env == {
        "footnotes": {"refs": {":a": 0}, "list": {0: {"label": "a", "count": 1}}}
    }


def test_footnote_inline():

    md = MarkdownIt().use(footnote_plugin)
    src = r"^[a]"
    tokens = []
    state = StateInline(src, md, {}, tokens)
    state.env = {"footnotes": {"refs": {":a": -1}}}
    index.footnote_inline(state, False)
    # print([t.as_dict() for t in tokens])
    assert [t.as_dict() for t in tokens] == [
        {
            "type": "footnote_ref",
            "tag": "",
            "nesting": 0,
            "attrs": None,
            "map": None,
            "level": 0,
            "children": None,
            "content": "",
            "markup": "",
            "info": "",
            "meta": {"id": 0},
            "block": False,
            "hidden": False,
        }
    ]
    assert state.env == {
        "footnotes": {
            "refs": {":a": -1},
            "list": {
                0: {
                    "content": "a",
                    "tokens": [
                        Token(
                            type="text",
                            tag="",
                            nesting=0,
                            attrs=None,
                            map=None,
                            level=0,
                            children=None,
                            content="a",
                            markup="",
                            info="",
                            meta={},
                            block=False,
                            hidden=False,
                        )
                    ],
                }
            },
        }
    }


def test_footnote_tail():
    md = MarkdownIt()

    tokens = [
        Token(
            **{
                "type": "footnote_reference_open",
                "tag": "",
                "nesting": 1,
                "attrs": None,
                "map": None,
                "level": 0,
                "children": None,
                "content": "",
                "markup": "",
                "info": "",
                "meta": {"label": "a"},
                "block": False,
                "hidden": False,
            }
        ),
        Token(
            **{
                "type": "paragraph_open",
                "tag": "p",
                "nesting": 1,
                "attrs": None,
                "map": [0, 1],
                "level": 1,
                "children": None,
                "content": "",
                "markup": "",
                "info": "",
                "meta": {},
                "block": True,
                "hidden": False,
            }
        ),
        Token(
            **{
                "type": "inline",
                "tag": "",
                "nesting": 0,
                "attrs": None,
                "map": [0, 1],
                "level": 2,
                "children": [],
                "content": "xyz",
                "markup": "",
                "info": "",
                "meta": {},
                "block": True,
                "hidden": False,
            }
        ),
        Token(
            **{
                "type": "paragraph_close",
                "tag": "p",
                "nesting": -1,
                "attrs": None,
                "map": None,
                "level": 1,
                "children": None,
                "content": "",
                "markup": "",
                "info": "",
                "meta": {},
                "block": True,
                "hidden": False,
            }
        ),
        Token(
            **{
                "type": "footnote_reference_close",
                "tag": "",
                "nesting": -1,
                "attrs": None,
                "map": None,
                "level": 0,
                "children": None,
                "content": "",
                "markup": "",
                "info": "",
                "meta": {},
                "block": False,
                "hidden": False,
            }
        ),
        Token("other", "", 0),
    ]
    env = {"footnotes": {"refs": {":a": 0}, "list": {0: {"label": "a", "count": 1}}}}
    state = StateBlock("", md, env, tokens)
    index.footnote_tail(state)
    assert state.tokens == [
        Token(
            type="other",
            tag="",
            nesting=0,
            attrs=None,
            map=None,
            level=0,
            children=None,
            content="",
            markup="",
            info="",
            meta={},
            block=False,
            hidden=False,
        ),
        Token(
            type="footnote_block_open",
            tag="",
            nesting=1,
            attrs=None,
            map=None,
            level=0,
            children=None,
            content="",
            markup="",
            info="",
            meta={},
            block=False,
            hidden=False,
        ),
        Token(
            type="footnote_open",
            tag="",
            nesting=1,
            attrs=None,
            map=None,
            level=0,
            children=None,
            content="",
            markup="",
            info="",
            meta={"id": 0, "label": "a"},
            block=False,
            hidden=False,
        ),
        Token(
            type="paragraph_open",
            tag="p",
            nesting=1,
            attrs=None,
            map=[0, 1],
            level=1,
            children=None,
            content="",
            markup="",
            info="",
            meta={},
            block=True,
            hidden=False,
        ),
        Token(
            type="inline",
            tag="",
            nesting=0,
            attrs=None,
            map=[0, 1],
            level=2,
            children=[],
            content="xyz",
            markup="",
            info="",
            meta={},
            block=True,
            hidden=False,
        ),
        Token(
            type="footnote_anchor",
            tag="",
            nesting=0,
            attrs=None,
            map=None,
            level=0,
            children=None,
            content="",
            markup="",
            info="",
            meta={"id": 0, "subId": 0, "label": "a"},
            block=False,
            hidden=False,
        ),
        Token(
            type="paragraph_close",
            tag="p",
            nesting=-1,
            attrs=None,
            map=None,
            level=1,
            children=None,
            content="",
            markup="",
            info="",
            meta={},
            block=True,
            hidden=False,
        ),
        Token(
            type="footnote_close",
            tag="",
            nesting=-1,
            attrs=None,
            map=None,
            level=0,
            children=None,
            content="",
            markup="",
            info="",
            meta={},
            block=False,
            hidden=False,
        ),
        Token(
            type="footnote_block_close",
            tag="",
            nesting=-1,
            attrs=None,
            map=None,
            level=0,
            children=None,
            content="",
            markup="",
            info="",
            meta={},
            block=False,
            hidden=False,
        ),
    ]


def test_plugin_render():
    md = MarkdownIt().use(footnote_plugin)
    text = md.render(
        dedent(
            """\
    [^1] ^[a] [^a] [^a]

    [^1]: abc
    [^a]: xyz
    """
        )
    )
    assert text == (
        dedent(
            """\
    <p><sup class="footnote-ref"><a href="#fn1" id="fnref1">[1]</a></sup> <sup class="footnote-ref"><a href="#fn2" id="fnref2">[2]</a></sup> <sup class="footnote-ref"><a href="#fn3" id="fnref3">[3]</a></sup> <sup class="footnote-ref"><a href="#fn3" id="fnref3:1">[3:1]</a></sup></p>
    <hr class="footnotes-sep" />
    <section class="footnotes">
    <ol class="footnotes-list">
    <li id="fn1" class="footnote-item"><p>abc <a href="#fnref1" class="footnote-backref">↩︎</a></p>
    </li>
    <li id="fn2" class="footnote-item"><p>a <a href="#fnref2" class="footnote-backref">↩︎</a></p>
    </li>
    <li id="fn3" class="footnote-item"><p>xyz <a href="#fnref3" class="footnote-backref">↩︎</a> <a href="#fnref3:1" class="footnote-backref">↩︎</a></p>
    </li>
    </ol>
    </section>
    """  # noqa: E501
        )
    )


# def test_plugin_other():
#     md = MarkdownIt().use(footnote_plugin)
#     env = {}
#     tokens = md.parse(
#         dedent(
#             """\
#     [^xxxxx] [^xxxxx]

#     [^xxxxx]: foo
#     """
#         ),
#         env=env,
#     )
#     for t in tokens:
#         if "footnote" in t.type:
#             print(t)
