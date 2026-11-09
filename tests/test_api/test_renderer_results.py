"""How the renderer combines the strings returned by its rules."""

from types import MethodType

import pytest

from markdown_it import MarkdownIt
from markdown_it.renderer import RendererHTML
from markdown_it.token import Token


def _renderer_with(values):
    """A renderer whose ``custom`` rule returns ``values[idx]`` for token ``idx``."""
    renderer = RendererHTML()
    renderer.rules["custom"] = MethodType(
        lambda self, tokens, idx, opts, env: values[idx], renderer
    )
    return renderer, [Token("custom", "", 0) for _ in values]


class Wrapped(str):
    """A ``str`` subclass whose overloaded addition must not be used."""

    def __radd__(self, other):
        raise AssertionError("not called")

    __add__ = __radd__


@pytest.mark.parametrize("method", ["render", "renderInline"])
def test_render_rule_results_are_joined_into_a_plain_str(method):
    # The fragments are joined in order, and the result is a plain ``str``
    # even when a rule returns a ``str`` subclass (overloaded addition is not used).
    renderer, tokens = _renderer_with(["a", Wrapped("b"), "c"])
    result = getattr(renderer, method)(tokens, MarkdownIt().options, {})
    assert type(result) is str
    assert result == "abc"


@pytest.mark.parametrize("method", ["render", "renderInline"])
def test_render_rule_invalid_result_raises(method):
    renderer, tokens = _renderer_with(["first", None, "third"])
    with pytest.raises(TypeError):
        getattr(renderer, method)(tokens, MarkdownIt().options, {})


def test_render_inline_as_text_is_joined_into_a_plain_str():
    # Image ``alt`` text is collected the same way: joined in order into a plain
    # ``str``, without using a ``str`` subclass's overloaded addition.
    def text(content):
        token = Token("text", "", 0)
        token.content = content
        return token

    tokens = [text("y"), Token("softbreak", "br", 0), text(Wrapped("x"))]
    result = RendererHTML().renderInlineAsText(tokens, MarkdownIt().options, {})
    assert type(result) is str
    assert result == "y\nx"
