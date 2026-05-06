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
