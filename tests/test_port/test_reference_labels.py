import pytest

from markdown_it import MarkdownIt
from markdown_it.utils import EnvType


@pytest.mark.parametrize(
    ("label", "expected_key"),
    [
        pytest.param("a" * 999, "A" * 999, id="ascii-999"),
        pytest.param("a" * 1000, None, id="ascii-1000"),
        pytest.param("😀" * 999, "😀" * 999, id="astral-999"),
        pytest.param("😀" * 1000, None, id="astral-1000"),
        pytest.param("ß" * 999, "SS" * 999, id="casefold-999"),
        pytest.param("ß" * 1000, None, id="casefold-1000"),
        pytest.param(r"\]" * 499 + "a", r"\]" * 499 + "A", id="escaped-999"),
        pytest.param(r"\]" * 500, None, id="escaped-1000"),
        pytest.param(
            "a" * 498 + "\n" + "b" * 500,
            "A" * 498 + " " + "B" * 500,
            id="multiline-999",
        ),
        pytest.param("a" * 499 + "\n" + "b" * 500, None, id="multiline-1000"),
        pytest.param("a" + " " * 998, "A", id="whitespace-999"),
        pytest.param("a" + " " * 999, None, id="whitespace-1000"),
    ],
)
def test_reference_label_codepoint_limit(label, expected_key):
    """Count raw Unicode code points, before case or whitespace normalization."""
    source = f"[{label}]: /target\n"
    env: EnvType = {}
    tokens = MarkdownIt().parse(source, env)
    if expected_key is None:
        assert env == {}
        assert [token.type for token in tokens] == [
            "paragraph_open",
            "inline",
            "paragraph_close",
        ]
        assert tokens[1].content == source[:-1]
    else:
        assert tokens == []
        assert env == {
            "references": {
                expected_key: {
                    "title": "",
                    "href": "/target",
                    "map": [0, label.count("\n") + 1],
                }
            }
        }


@pytest.mark.parametrize("inline_definitions", [False, True])
@pytest.mark.parametrize("prefix", ["", "> ", "- "])
@pytest.mark.parametrize("length", [999, 1000])
def test_reference_label_limit_in_containers(prefix, length, inline_definitions):
    """The same boundary applies inside lists and blockquotes, with source maps."""
    md = MarkdownIt("commonmark", {"inline_definitions": inline_definitions})
    env: EnvType = {}
    tokens = md.parse(f"{prefix}[{'a' * length}]: /target\n", env)
    accepted = length == 999
    assert bool(env.get("references")) is accepted
    definitions = [token for token in tokens if token.type == "definition"]
    assert len(definitions) == int(accepted and inline_definitions)
    if accepted:
        assert env["references"]["A" * length]["map"] == [0, 1]
    if definitions:
        assert definitions[0].map == [0, 1]


@pytest.mark.parametrize("inline_definitions", [False, True])
def test_oversized_label_does_not_create_duplicate_reference(inline_definitions):
    """An invalid long label must not affect later definitions or duplicate maps."""
    oversized = "ok" + " " * 998
    source = (
        f"[ok]: /first\n\n[{oversized}]: /discard\n\n"
        "[ok]: /second\n\n[short]: /last\n\n[ok] [short]\n"
    )
    md = MarkdownIt("commonmark", {"inline_definitions": inline_definitions})
    env: EnvType = {}
    tokens = md.parse(source, env)
    assert env == {
        "references": {
            "OK": {"title": "", "href": "/first", "map": [0, 1]},
            "SHORT": {"title": "", "href": "/last", "map": [6, 7]},
        },
        "duplicate_refs": [
            {"title": "", "href": "/second", "label": "OK", "map": [4, 5]}
        ],
    }
    assert any(token.content == f"[{oversized}]: /discard" for token in tokens)
    assert md.render(source).endswith(
        '<p><a href="/first">ok</a> <a href="/last">short</a></p>\n'
    )
