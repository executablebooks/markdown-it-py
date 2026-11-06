import pickle
from types import MethodType

import pytest

from markdown_it import MarkdownIt
from markdown_it.renderer import RendererHTML
from markdown_it.token import Token


@pytest.mark.parametrize("method", ["render", "renderInline"])
def test_render_rule_string_subclass(method):
    class Wrapped(str):
        def __radd__(self, other):
            return Wrapped(other + "<" + str(self) + ">")

        def __add__(self, other):
            return Wrapped(str(self) + "{" + str(other) + "}")

    renderer = RendererHTML()
    values = ["a", Wrapped("b"), "c"]
    renderer.rules["custom"] = MethodType(
        lambda self, tokens, idx, opts, env: values[idx], renderer
    )
    tokens = [Token("custom", "", 0) for _ in values]
    result = getattr(renderer, method)(tokens, MarkdownIt().options, {})
    assert type(result) is Wrapped
    assert result == "a<b>{c}"


@pytest.mark.parametrize("method", ["render", "renderInline"])
def test_render_rule_invalid_result_stops_callbacks(method):
    renderer = RendererHTML()
    calls = []

    def rule(self, tokens, idx, opts, env):
        calls.append(idx)
        return "first" if idx == 0 else None

    renderer.rules["custom"] = MethodType(rule, renderer)
    tokens = [Token("custom", "", 0) for _ in range(3)]
    with pytest.raises(TypeError):
        getattr(renderer, method)(tokens, MarkdownIt().options, {})
    assert calls == [0, 1]


def test_render_private_methods_are_not_rules():
    class CustomRenderer(RendererHTML):
        def _custom(self, tokens, idx, options, env):
            return "private method"

    renderer = CustomRenderer()
    assert "_custom" not in renderer.rules
    assert all(not key.startswith("_") for key in renderer.rules)


@pytest.mark.parametrize("protocol", range(pickle.HIGHEST_PROTOCOL + 1))
def test_renderer_pickle(protocol):
    renderer = RendererHTML()
    restored = pickle.loads(pickle.dumps(renderer, protocol))
    assert sorted(restored.rules) == sorted(renderer.rules)
    tokens = [Token("text", "", 0, content="a&b")]
    assert restored.renderInline(tokens, MarkdownIt().options, {}) == "a&amp;b"


@pytest.mark.parametrize("method", ["render", "renderInline"])
@pytest.mark.parametrize("empty_before", [False, True])
@pytest.mark.parametrize("empty_after", [False, True])
def test_render_rule_prefix_identity(method, empty_before, empty_after):
    source = "".join(["original", " fragment" * 10])

    class InspectPrefix(str):
        def __radd__(self, other):
            return "original object" if other is source else "new object"

    values = ([""] if empty_before else []) + [source]
    if empty_after:
        values.append("")
    values.append(InspectPrefix("probe"))
    expected = ""
    for value in values:
        expected += value

    renderer = RendererHTML()
    renderer.rules["custom"] = MethodType(
        lambda self, tokens, idx, opts, env: values[idx], renderer
    )
    tokens = [Token("custom", "", 0) for _ in values]
    assert getattr(renderer, method)(tokens, MarkdownIt().options, {}) == expected


@pytest.mark.parametrize("method", ["render", "renderInline"])
def test_render_single_fragment_identity(method):
    source = "".join(["original", " fragment" * 10])
    expected = ""
    expected += source
    renderer = RendererHTML()
    renderer.rules["custom"] = MethodType(
        lambda self, tokens, idx, opts, env: source, renderer
    )
    result = getattr(renderer, method)(
        [Token("custom", "", 0)], MarkdownIt().options, {}
    )
    assert result == expected
    assert (result is source) == (expected is source)
