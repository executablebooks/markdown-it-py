import warnings

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
