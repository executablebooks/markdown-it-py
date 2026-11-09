from importlib.util import find_spec

import pytest

from markdown_it import MarkdownIt, presets
from markdown_it.rules_inline.backticks import backtick
from markdown_it.rules_inline.state_inline import StateInline
from markdown_it.token import Token

NO_LINKIFY: dict[str, bool] = {} if find_spec("linkify_it") else {"linkify": False}


def test_highlight_arguments():
    def highlight_func(str_, lang, attrs):
        assert lang == "a"
        assert attrs == "b  c  d"
        return "<pre><code>==" + str_ + "==</code></pre>"

    conf = presets.commonmark.make()
    conf["options"]["highlight"] = highlight_func
    md = MarkdownIt(config=conf)
    assert md.render("``` a  b  c  d \nhl\n```") == "<pre><code>==hl\n==</code></pre>\n"


def test_ordered_list_info():
    def type_filter(tokens, type_):
        return [t for t in tokens if t.type == type_]

    md = MarkdownIt()

    tokens = md.parse("1. Foo\n2. Bar\n20. Fuzz")
    assert len(type_filter(tokens, "ordered_list_open")) == 1
    tokens = type_filter(tokens, "list_item_open")
    assert len(tokens) == 3
    assert tokens[0].info == "1"
    assert tokens[0].markup == "."
    assert tokens[1].info == "2"
    assert tokens[1].markup == "."
    assert tokens[2].info == "20"
    assert tokens[2].markup == "."

    tokens = md.parse(" 1. Foo\n2. Bar\n  20. Fuzz\n 199. Flp")
    assert len(type_filter(tokens, "ordered_list_open")) == 1
    tokens = type_filter(tokens, "list_item_open")
    assert len(tokens) == 4
    assert tokens[0].info == "1"
    assert tokens[0].markup == "."
    assert tokens[1].info == "2"
    assert tokens[1].markup == "."
    assert tokens[2].info == "20"
    assert tokens[2].markup == "."
    assert tokens[3].info == "199"
    assert tokens[3].markup == "."


@pytest.mark.parametrize("editable", [False, True])
@pytest.mark.parametrize(
    "source,code",
    [
        ("-     [x] literal\n", "[x] literal\n"),
        ("-      [ ] literal\n", " [ ] literal\n"),
        ("1.     [X] literal\n", "[X] literal\n"),
        ("-\t\t[x] literal\n", "  [x] literal\n"),
        ("> -     [X] literal\n", "[X] literal\n"),
        ("- outer\n  -     [ ] literal\n", "[ ] literal\n"),
    ],
)
def test_task_marker_in_indented_code(source, code, editable):
    """Task detection must preserve literal markers and indentation in code."""
    md = MarkdownIt("gfm-like2", {**NO_LINKIFY, "tasklists_editable": editable})
    tokens = md.parse(source)
    assert [token.content for token in tokens if token.type == "code_block"] == [code]
    assert all("checked" not in token.meta for token in tokens)
    assert md.render(source) == MarkdownIt(
        "gfm-like2", {**NO_LINKIFY, "tasklists": False}
    ).render(source)


@pytest.mark.parametrize("spacing", [" ", "    ", "\t"])
@pytest.mark.parametrize("code_enabled", [False, True])
def test_task_marker_in_paragraph(spacing, code_enabled):
    """Keep recognizing tasks up to the paragraph indentation boundary."""
    md = MarkdownIt("gfm-like2", NO_LINKIFY)
    if not code_enabled:
        md.disable("code")
    tokens = md.parse(f"-{spacing}[x] task\n")
    item = next(token for token in tokens if token.type == "list_item_open")
    assert item.meta["checked"] is True
    assert not any(token.type == "code_block" for token in tokens)


def test_indented_task_marker_with_code_disabled():
    """Without the code rule, the indented text is still eligible for a task."""
    md = MarkdownIt("gfm-like2", NO_LINKIFY).disable("code")
    tokens = md.parse("-     [x] task\n")
    item = next(token for token in tokens if token.type == "list_item_open")
    assert item.meta["checked"] is True


@pytest.mark.parametrize(
    ("src", "pos_max"),
    [
        # the closer run starts inside the parse range but ends beyond posMax
        pytest.param("``a``", 4, id="closer-straddles-posMax"),
        # a run straddling posMax is measured in full, not up to posMax,
        # so its in-range part cannot pass for a closer of the opener's length
        # (the trailing run keeps a same-length closer in the backticks cache)
        pytest.param("``a``` ``", 5, id="closer-measured-in-full"),
    ],
)
def test_backtick_closer_must_end_within_pos_max(src, pos_max):
    """A code span closer must lie entirely within the current parse range
    (as in markdown-it 15.0.3), so a nested parse or lookahead bounded by
    posMax cannot take a closer from beyond it.
    Core rules never set posMax inside a backtick run, so this drives the rule
    directly."""
    tokens: list[Token] = []
    state = StateInline(src, MarkdownIt("commonmark"), {}, tokens)
    state.posMax = pos_max
    assert backtick(state, False)
    assert tokens == []
    assert state.pending == "``"
    assert state.pos == 2


def test_backtick_closer_ending_at_pos_max():
    """Counterpart: a closer that ends exactly at posMax still closes the span."""
    tokens: list[Token] = []
    state = StateInline("``a`` b", MarkdownIt("commonmark"), {}, tokens)
    state.posMax = 5
    assert backtick(state, False)
    assert [(t.type, t.content, t.markup) for t in tokens] == [
        ("code_inline", "a", "``")
    ]
    assert state.pos == 5
