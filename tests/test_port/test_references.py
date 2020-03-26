from markdown_it import MarkdownIt
from markdown_it.token import Token
from markdown_it.utils import AttrDict


def test_ref_definitions():

    md = MarkdownIt()
    src = "[a]: abc\n\n[b]: xyz\n\n[b]: ijk"
    env = AttrDict()
    tokens = md.parse(src, env)
    assert tokens == []
    assert env == {
        "references": {
            "A": {"title": "", "href": "abc", "map": [0, 1]},
            "B": {"title": "", "href": "xyz", "map": [2, 3]},
        },
        "duplicate_refs": [{"href": "ijk", "label": "B", "map": [4, 5], "title": ""}],
    }


def test_use_existing_env():
    md = MarkdownIt()
    src = "[a]\n\n[c]: ijk"
    env = AttrDict(
        {
            "references": {
                "A": {"title": "", "href": "abc", "map": [0, 1]},
                "B": {"title": "", "href": "xyz", "map": [2, 3]},
            }
        }
    )
    tokens = md.parse(src, env)
    print(tokens)
    assert tokens == [
        Token(
            type="paragraph_open",
            tag="p",
            nesting=1,
            attrs=None,
            map=[0, 1],
            level=0,
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
            level=1,
            children=[
                Token(
                    type="link_open",
                    tag="a",
                    nesting=1,
                    attrs=[["href", "abc"]],
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
                    type="text",
                    tag="",
                    nesting=0,
                    attrs=None,
                    map=None,
                    level=1,
                    children=None,
                    content="a",
                    markup="",
                    info="",
                    meta={},
                    block=False,
                    hidden=False,
                ),
                Token(
                    type="link_close",
                    tag="a",
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
            ],
            content="[a]",
            markup="",
            info="",
            meta={},
            block=True,
            hidden=False,
        ),
        Token(
            type="paragraph_close",
            tag="p",
            nesting=-1,
            attrs=None,
            map=None,
            level=0,
            children=None,
            content="",
            markup="",
            info="",
            meta={},
            block=True,
            hidden=False,
        ),
    ]
    assert env == {
        "references": {
            "A": {"title": "", "href": "abc", "map": [0, 1]},
            "B": {"title": "", "href": "xyz", "map": [2, 3]},
            "C": {"title": "", "href": "ijk", "map": [2, 3]},
        }
    }
