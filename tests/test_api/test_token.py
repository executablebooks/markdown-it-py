from typing import TYPE_CHECKING
import warnings

import pytest

from markdown_it import MarkdownIt
from markdown_it.rules_block.state_block import StateBlock
from markdown_it.token import MappedToken, Token

if TYPE_CHECKING:
    from typing_extensions import assert_type

    def check_mapped_token_type(source: str) -> None:
        for token in MarkdownIt().parse(source):
            if isinstance(token, MappedToken):
                assert_type(token.map, list[int])
                assert_type(token.copy(), MappedToken)


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
    ("source", "token_type", "source_map"),
    [
        ("```python\npass\n```\n", "fence", [0, 3]),
        ("<!-- comment -->\n", "html_block", [0, 1]),
    ],
)
def test_builtin_mapped_tokens(source, token_type, source_map):
    token = MarkdownIt().parse(source)[0]
    assert isinstance(token, MappedToken)
    assert token.type == token_type
    assert token.map == source_map
    assert token == Token(
        token_type,
        token.tag,
        token.nesting,
        map=source_map,
        content=token.content,
        markup=token.markup,
        info=token.info,
        block=True,
    )


def test_mapped_token_requires_map():
    with pytest.raises(TypeError):
        MappedToken.from_dict({"type": "fence", "tag": "code", "nesting": 0})
    with pytest.raises(TypeError, match="requires a source map"):
        MappedToken.from_dict(
            {"type": "fence", "tag": "code", "nesting": 0, "map": None}
        )


def test_mapped_token_serialization_with_unmapped_child():
    token = MappedToken("custom", "", 0, map=[0, 1], children=[Token("text", "", 0)])
    assert MappedToken.from_dict(token.as_dict()) == token
    assert Token.from_dict(token.as_dict()) == token
    copied = token.copy()
    assert isinstance(copied, MappedToken)
    assert copied == token
    assert copied is not token


def test_push_mapped_preserves_block_nesting():
    tokens: list[Token] = []
    state = StateBlock("", MarkdownIt(), {}, tokens)
    opening = state.push_mapped("custom_open", "div", 1, map=[0, 1])
    closing = state.push_mapped("custom_close", "div", -1, map=[0, 1])
    assert opening.level == closing.level == state.level == 0
    assert tokens == [opening, closing]
