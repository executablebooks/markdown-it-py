import warnings

import pytest

from markdown_it import MarkdownIt
from markdown_it.token import Token


def test_token():
    token = Token("name", "tag", 0)
    assert token.as_dict() == {
        "type": "name",
        "tag": "tag",
        "nesting": 0,
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
    token.attrSet("a", "b")
    assert token.attrGet("a") == "b"
    token.attrJoin("a", "c")
    assert token.attrGet("a") == "b c"
    token.attrPush(("x", "y"))
    assert token.attrGet("x") == "y"
    with warnings.catch_warnings():
        warnings.simplefilter("ignore")
        assert token.attrIndex("a") == 0
        assert token.attrIndex("x") == 1
        assert token.attrIndex("j") == -1


def test_serialization():
    token = Token("name", "tag", 0, children=[Token("other", "tag2", 0)])
    assert token == Token.from_dict(token.as_dict())


@pytest.mark.parametrize(
    "source,token_type,expected",
    [
        ("```python\nprint('hello')\n```\n", "fence", [0, 3]),
        ("<div>\nhello\n</div>\n", "html_block", [0, 3]),
    ],
)
def test_require_map_from_parser(source, token_type, expected):
    token = MarkdownIt().parse(source)[0]
    before = token.as_dict()

    assert token.type == token_type
    assert token.require_map() == expected
    assert token.require_map() is token.map
    assert token.as_dict() == before


@pytest.mark.parametrize("source_map", [[0, 2], [0, 0], []])
def test_require_map_returns_existing_list(source_map):
    token = Token("custom", "", 0, map=source_map)
    assert token.require_map() is source_map


def test_require_map_missing():
    inline = MarkdownIt().parseInline("text")[0]
    assert inline.children is not None
    token = inline.children[0]
    assert token.map is None

    with pytest.raises(ValueError, match="text"):
        token.require_map()
    assert token.map is None


def test_require_map_after_reassignment():
    token = Token("custom", "", 0, map=[0, 2])
    original = token.require_map()
    token.map = [3, 5]
    assert token.require_map() == [3, 5]
    assert token.require_map() is not original

    token.map = None
    with pytest.raises(ValueError, match="custom"):
        token.require_map()
