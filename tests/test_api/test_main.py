import pytest

from markdown_it import MarkdownIt
from markdown_it.token import Token


def test_get_rules():
    md = MarkdownIt("zero")
    # print(md.get_all_rules())
    assert md.get_all_rules() == {
        "core": [
            "normalize",
            "block",
            "inline",
            "linkify",
            "replacements",
            "smartquotes",
            "text_join",
        ],
        "block": [
            "table",
            "code",
            "fence",
            "blockquote",
            "hr",
            "list",
            "reference",
            "html_block",
            "heading",
            "lheading",
            "paragraph",
        ],
        "inline": [
            "text",
            "linkify",
            "newline",
            "escape",
            "backticks",
            "strikethrough",
            "emphasis",
            "link",
            "image",
            "autolink",
            "html_inline",
            "entity",
        ],
        "inline2": ["balance_pairs", "strikethrough", "emphasis", "fragments_join"],
    }


def test_load_presets():
    md = MarkdownIt("zero")
    assert md.get_active_rules() == {
        "block": ["paragraph"],
        "core": ["normalize", "block", "inline", "text_join"],
        "inline": ["text"],
        "inline2": ["balance_pairs", "fragments_join"],
    }
    md = MarkdownIt("commonmark")
    assert md.get_active_rules() == {
        "core": ["normalize", "block", "inline", "text_join"],
        "block": [
            "code",
            "fence",
            "blockquote",
            "hr",
            "list",
            "reference",
            "html_block",
            "heading",
            "lheading",
            "paragraph",
        ],
        "inline": [
            "text",
            "newline",
            "escape",
            "backticks",
            "emphasis",
            "link",
            "image",
            "autolink",
            "html_inline",
            "entity",
        ],
        "inline2": ["balance_pairs", "emphasis", "fragments_join"],
    }


def test_override_options():
    md = MarkdownIt("zero")
    assert md.options["maxNesting"] == 20
    md = MarkdownIt("zero", {"maxNesting": 99})
    assert md.options["maxNesting"] == 99


def test_gfm_like2_tasklists_editable():
    md_default = MarkdownIt("gfm-like2")
    assert md_default.options["tasklists_editable"] is False
    assert (
        '<input class="task-list-item-checkbox" disabled="" type="checkbox" checked="">'
        in md_default.render("- [x] done")
    )

    md_editable = MarkdownIt("gfm-like2", {"tasklists_editable": True})
    assert md_editable.options["tasklists_editable"] is True
    assert (
        '<input class="task-list-item-checkbox" type="checkbox" checked="">'
        in md_editable.render("- [x] done")
    )


def test_gfm_like2_alert_token_map():
    md = MarkdownIt("gfm-like2")
    tokens = md.parse("> [!NOTE]\n> body")
    assert tokens[0].type == "alert_open"
    assert tokens[0].map == [0, 2]


def test_enable():
    md = MarkdownIt("zero").enable("heading")
    assert md.get_active_rules() == {
        "block": ["heading", "paragraph"],
        "core": ["normalize", "block", "inline", "text_join"],
        "inline": ["text"],
        "inline2": ["balance_pairs", "fragments_join"],
    }
    md.enable(["backticks", "autolink"])
    assert md.get_active_rules() == {
        "block": ["heading", "paragraph"],
        "core": ["normalize", "block", "inline", "text_join"],
        "inline": ["text", "backticks", "autolink"],
        "inline2": ["balance_pairs", "fragments_join"],
    }


def test_disable():
    md = MarkdownIt("zero").disable("inline")
    assert md.get_active_rules() == {
        "block": ["paragraph"],
        "core": ["normalize", "block", "text_join"],
        "inline": ["text"],
        "inline2": ["balance_pairs", "fragments_join"],
    }
    md.disable(["text"])
    assert md.get_active_rules() == {
        "block": ["paragraph"],
        "core": ["normalize", "block", "text_join"],
        "inline": [],
        "inline2": ["balance_pairs", "fragments_join"],
    }


def test_reset():
    md = MarkdownIt("zero")
    with md.reset_rules():
        md.disable("inline")
        assert md.get_active_rules() == {
            "block": ["paragraph"],
            "core": ["normalize", "block", "text_join"],
            "inline": ["text"],
            "inline2": ["balance_pairs", "fragments_join"],
        }
    assert md.get_active_rules() == {
        "block": ["paragraph"],
        "core": ["normalize", "block", "inline", "text_join"],
        "inline": ["text"],
        "inline2": ["balance_pairs", "fragments_join"],
    }


def test_parseInline():
    md = MarkdownIt()
    tokens = md.parseInline("abc\n\n> xyz")
    assert tokens == [
        Token(
            type="inline",
            tag="",
            nesting=0,
            attrs={},
            map=[0, 1],
            level=0,
            children=[
                Token(
                    type="text",
                    tag="",
                    nesting=0,
                    attrs={},
                    map=None,
                    level=0,
                    children=None,
                    content="abc",
                    markup="",
                    info="",
                    meta={},
                    block=False,
                    hidden=False,
                ),
                Token(
                    type="softbreak",
                    tag="br",
                    nesting=0,
                    attrs={},
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
                    type="softbreak",
                    tag="br",
                    nesting=0,
                    attrs={},
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
                    attrs={},
                    map=None,
                    level=0,
                    children=None,
                    content="> xyz",
                    markup="",
                    info="",
                    meta={},
                    block=False,
                    hidden=False,
                ),
            ],
            content="abc\n\n> xyz",
            markup="",
            info="",
            meta={},
            block=False,
            hidden=False,
        )
    ]


def test_renderInline():
    md = MarkdownIt("zero")
    tokens = md.renderInline("abc\n\n*xyz*")
    assert tokens == "abc\n\n*xyz*"


def test_emptyStr():
    md = MarkdownIt()
    tokens = md.parseInline("")
    assert tokens == [
        Token(
            type="inline",
            tag="",
            nesting=0,
            attrs={},
            map=[0, 1],
            level=0,
            children=[],
            content="",
            markup="",
            info="",
            meta={},
            block=False,
            hidden=False,
        )
    ]


def test_empty_env():
    """Test that an empty `env` is mutated, not copied and mutated."""
    md = MarkdownIt()

    env = {}  # type: ignore
    md.render("[foo]: /url\n[foo]", env)
    assert "references" in env

    env = {}
    md.parse("[foo]: /url\n[foo]", env)
    assert "references" in env


def test_table_tokens(data_regression):
    md = MarkdownIt("js-default")
    tokens = md.parse(
        """
| Heading 1 | Heading 2
| --------- | ---------
| Cell 1    | Cell 2
| Cell 3    | Cell 4
    """
    )
    data_regression.check([t.as_dict() for t in tokens])


def test_fragments_join_merges_adjacent_text_tokens():
    """fragments_join should merge runs of adjacent text tokens into one.

    Underscore characters flanked by word characters (e.g. ``a_b``) are not
    valid emphasis delimiters in CommonMark, so the emphasis rule leaves each
    ``_`` as a plain text token adjacent to the surrounding text tokens,
    giving a run of five tokens: text("a"), text("_"), text("b c"),
    text("_"), text("d").

    Note: there is also a core-level ``text_join`` rule that collapses adjacent
    text tokens as a fallback.  We disable it here so that the assertions are
    sensitive only to ``fragments_join``.
    """
    src = "a_b c_d"

    # --- both rules disabled: five separate text tokens must survive ---
    md_both_off = MarkdownIt()
    md_both_off.disable(["text_join", "fragments_join"])
    children_both_off = md_both_off.parseInline(src)[0].children
    assert children_both_off is not None
    assert len(children_both_off) > 1, "expected multiple text tokens with no merging"
    assert all(t.type == "text" for t in children_both_off)

    # --- only fragments_join enabled (text_join still off): run must collapse ---
    md_fj_on = MarkdownIt()
    md_fj_on.disable("text_join")
    children_fj_on = md_fj_on.parseInline(src)[0].children
    assert children_fj_on is not None
    assert len(children_fj_on) == 1
    assert children_fj_on[0].type == "text"
    assert children_fj_on[0].content == "a_b c_d"


def test_text_join_merges_adjacent_text_special_tokens():
    """text_join should convert text_special tokens and merge runs into one.

    Backslash-escaped characters each produce a ``text_special`` token.
    ``fragments_join`` only merges ``text`` tokens, so a run of
    ``text_special`` tokens passes through it untouched.  ``text_join``
    must then convert them to ``text`` and collapse the run in a single
    pass rather than via pairwise concatenation.
    """
    # Three consecutive backslash escapes → three text_special tokens before
    # text_join runs.
    src = r"\*\*\*"

    # --- text_join disabled: three text_special tokens must survive ---
    md_off = MarkdownIt()
    md_off.disable("text_join")
    children_off = md_off.parseInline(src)[0].children
    assert children_off is not None
    assert len(children_off) > 1, "expected multiple text_special tokens before merging"
    assert all(t.type == "text_special" for t in children_off)

    # --- text_join enabled (default): must collapse to a single text token ---
    md_on = MarkdownIt()
    children_on = md_on.parseInline(src)[0].children
    assert children_on is not None
    assert len(children_on) == 1
    assert children_on[0].type == "text"
    assert children_on[0].content == "***"


def test_long_special_char_runs_render_correctly():
    """Runs of characters that begin an inline rule but do not form a construct
    render as literal text, however long the run.

    These inputs were previously tokenised in O(n^2) time (see
    `test_inline_rules_do_not_slice_remaining_source` and
    `test_pending_appends_do_not_materialise` for the invariants that keep them
    linear); this test pins the *output*.
    """
    md = MarkdownIt()

    for src, expected in [
        ("&" * 32, "&amp;" * 32),  # entity rule rejects, falls back to pending
        ("&amp;" * 8, "&amp;" * 8),  # NAMED_RE still matches
        ("&#35;" * 8, "#" * 8),  # DIGITAL_RE still matches
        ("&#x23;" * 8, "#" * 8),  # DIGITAL_RE, hex form
        ("&#" * 8, "&amp;#" * 8),  # `#` branch, no match
        ("&am" * 8, "&amp;am" * 8),  # named prefix, unterminated
        ("&nope;" * 4, "&amp;nope;" * 4),  # well-formed but unknown name
        ("<" * 16, "&lt;" * 16),  # html_inline rejects (html=False anyway)
        ("{" * 32, "{" * 32),  # no rule at all -> pure pending fallback
        ("~" * 16, "~" * 16),  # sub-length strikethrough delimiters
    ]:
        assert md.renderInline(src) == expected, src

    # Backtick markers also feed `pending`; unclosed runs stay literal.
    assert md.renderInline("`" * 3 + "a") == "```a"
    assert md.renderInline("`a``b") == "`a``b"
    # ...while a matched pair still becomes code.
    assert md.renderInline("`a`") == "<code>a</code>"

    # Longer runs, including the `html_inline` path (only reachable with
    # `html=True`; `<a<a...` is never a valid tag, so it renders escaped).
    assert md.renderInline("&" * 20_000) == "&amp;" * 20_000
    md_html = MarkdownIt("commonmark", {"html": True})
    assert md_html.renderInline("<a" * 10_000) == "&lt;a" * 10_000


class _SliceCountingStr(str):
    """A ``str`` that records the length of every slice taken from it."""

    slice_lengths: list[int]

    def __new__(cls, value: str) -> "_SliceCountingStr":
        self = super().__new__(cls, value)
        self.slice_lengths = []
        return self

    def __getitem__(self, key):
        if isinstance(key, slice):
            start, stop, _ = key.indices(len(self))
            self.slice_lengths.append(max(0, stop - start))
        return str.__getitem__(self, key)


@pytest.mark.parametrize(
    "preset,options,src",
    [
        ("commonmark", {}, "&" * 5_000),  # entity rule
        ("commonmark", {}, "&#" * 5_000),  # entity rule, numeric branch
        ("commonmark", {"html": True}, "<a" * 5_000),  # html_inline rule
    ],
    ids=["entity-named", "entity-numeric", "html_inline"],
)
def test_inline_rules_do_not_slice_remaining_source(preset, options, src):
    """Inline rules must not copy the rest of the source on every attempt.

    `entity` and `html_inline` used to match ``^``-anchored regexes against
    ``state.src[pos:]``, an O(len) copy per ``&`` / ``<`` and therefore O(n^2)
    over a run.  They now anchor with ``.match(src, pos)``.  A run of 5 000
    openers previously produced ~5 000 slices of up to 10 000 characters; the
    only slices left are the ``text`` rule's single-character chunks.
    """
    md = MarkdownIt(preset, options)
    counting = _SliceCountingStr(src)
    md.inline.parse(counting, md, {}, [])
    assert max(counting.slice_lengths, default=0) <= 1


def test_pending_appends_do_not_materialise():
    """`append_pending` must be amortised O(1): it buffers fragments and only
    builds the string when `pending` is read.

    The old ``state.pending += ch`` copied the whole accumulated string on
    every character (``str += x`` on an attribute cannot resize in place).
    """
    from markdown_it.rules_inline.state_inline import StateInline

    state = StateInline("", MarkdownIt(), {}, [])
    for _ in range(10_000):
        state.append_pending("x")
    assert len(state._pending_buffer) == 10_000
    assert state._pending == ""

    assert state.pending == "x" * 10_000
    assert state._pending_buffer == []

    state.pending = ""
    assert state.pending == ""


def test_state_inline_pending_buffer_semantics():
    """`StateInline.pending` is buffered internally but must behave exactly
    like the plain ``str`` attribute it replaced."""
    import copy

    from markdown_it.rules_inline.state_inline import StateInline

    md = MarkdownIt()
    state = StateInline("", md, {}, [])

    # append / read / append preserve order and the read materialises lazily
    state.append_pending("a")
    assert state.pending == "a"
    state.append_pending("b")
    state.append_pending("c")
    assert state.pending == "abc"

    # assignment replaces everything buffered so far
    state.pending = "xy"
    state.append_pending("z")
    assert state.pending == "xyz"
    state.pending = state.pending[:-1]
    assert state.pending == "xy"

    # flushing to a token empties both the string and the buffer
    token = state.pushPending()
    assert token.content == "xy"
    assert state.pending == ""
    assert not state._pending_buffer

    # a str handed out earlier is never mutated by later appends
    state.append_pending("hello")
    held = state.pending
    state.append_pending(" world")
    assert state.pending == "hello world"
    assert held == "hello"

    # a shallow copy must not share the pending buffer with its original
    state.pending = ""
    state.append_pending("q")
    clone = copy.copy(state)
    clone.append_pending("r")
    state.append_pending("s")
    assert (state.pending, clone.pending) == ("qs", "qr")

    # the setter works before __init__ has run (subclasses that set
    # `pending` before calling super().__init__(), or __new__ + assignment)
    bare = StateInline.__new__(StateInline)
    bare.pending = "pre"
    assert bare.pending == "pre"


def test_rule_reading_pending_each_char_renders_correctly():
    """A rule that reads ``state.pending`` on every character (as some
    attribute-syntax plugins do) interleaves reads with appends; the output
    must be unaffected."""
    seen: list[int] = []

    def peek_rule(state, silent):
        seen.append(len(state.pending))
        return False

    md = MarkdownIt()
    md.inline.ruler.before("text", "peek", peek_rule)
    src = "{" * 5_000 + "&" * 5_000
    assert md.renderInline(src) == "{" * 5_000 + "&amp;" * 5_000
    # the rule saw the text accumulate one character at a time
    assert seen[:4] == [0, 1, 2, 3]
    assert max(seen) == 9_999
