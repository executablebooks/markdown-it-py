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
