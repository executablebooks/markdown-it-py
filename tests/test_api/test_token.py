from markdown_it.token import Token, nest_tokens, NestedTokens


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
    token.attrPush(["x", "y"])
    assert token.attrGet("x") == "y"
    assert token.attrIndex("a") == 0
    assert token.attrIndex("x") == 1
    assert token.attrIndex("j") == -1


def test_nest_tokens():
    tokens = nest_tokens(
        [
            Token("start", "", 0),
            Token("open", "", 1),
            Token("open_inner", "", 1),
            Token("inner", "", 0),
            Token("close_inner", "", -1),
            Token("close", "", -1),
            Token("end", "", 0),
        ]
    )
    assert [t.type for t in tokens] == ["start", "open", "end"]
    assert isinstance(tokens[0], Token)
    assert isinstance(tokens[1], NestedTokens)
    assert isinstance(tokens[2], Token)

    nested = tokens[1]
    assert nested.opening.type == "open"
    assert nested.closing.type == "close"
    assert len(nested.children) == 1
    assert nested.children[0].type == "open_inner"

    nested2 = nested.children[0]
    assert nested2.opening.type == "open_inner"
    assert nested2.closing.type == "close_inner"
    assert len(nested2.children) == 1
    assert nested2.children[0].type == "inner"
