from markdown_it import MarkdownIt
from markdown_it.token import Token
from markdown_it.rules_core import StateCore
from markdown_it.utils import AttrDict


def test_get_rules():
    md = MarkdownIt("zero")
    # print(md.get_all_rules())
    assert md.get_all_rules() == {
        "core": ["normalize", "block", "inline", "replacements", "smartquotes"],
        "block": [
            "table",
            "code",
            "fence",
            "blockquote",
            "hr",
            "list",
            "reference",
            "heading",
            "lheading",
            "html_block",
            "paragraph",
        ],
        "inline": [
            "text",
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
        "inline2": ["balance_pairs", "strikethrough", "emphasis", "text_collapse"],
    }


def test_load_presets():
    md = MarkdownIt("zero")
    assert md.get_active_rules() == {
        "block": ["paragraph"],
        "core": ["normalize", "block", "inline"],
        "inline": ["text"],
        "inline2": ["balance_pairs", "text_collapse"],
    }
    md = MarkdownIt("commonmark")
    assert md.get_active_rules() == {
        "core": ["normalize", "block", "inline"],
        "block": [
            "code",
            "fence",
            "blockquote",
            "hr",
            "list",
            "reference",
            "heading",
            "lheading",
            "html_block",
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
        "inline2": ["balance_pairs", "emphasis", "text_collapse"],
    }


def test_enable():
    md = MarkdownIt("zero").enable("heading")
    assert md.get_active_rules() == {
        "block": ["heading", "paragraph"],
        "core": ["normalize", "block", "inline"],
        "inline": ["text"],
        "inline2": ["balance_pairs", "text_collapse"],
    }
    md.enable(["backticks", "autolink"])
    assert md.get_active_rules() == {
        "block": ["heading", "paragraph"],
        "core": ["normalize", "block", "inline"],
        "inline": ["text", "backticks", "autolink"],
        "inline2": ["balance_pairs", "text_collapse"],
    }


def test_disable():
    md = MarkdownIt("zero").disable("inline")
    assert md.get_active_rules() == {
        "block": ["paragraph"],
        "core": ["normalize", "block"],
        "inline": ["text"],
        "inline2": ["balance_pairs", "text_collapse"],
    }
    md.disable(["text"])
    assert md.get_active_rules() == {
        "block": ["paragraph"],
        "core": ["normalize", "block"],
        "inline": [],
        "inline2": ["balance_pairs", "text_collapse"],
    }


def test_reset():
    md = MarkdownIt("zero")
    with md.reset_rules():
        md.disable("inline")
        assert md.get_active_rules() == {
            "block": ["paragraph"],
            "core": ["normalize", "block"],
            "inline": ["text"],
            "inline2": ["balance_pairs", "text_collapse"],
        }
    assert md.get_active_rules() == {
        "block": ["paragraph"],
        "core": ["normalize", "block", "inline"],
        "inline": ["text"],
        "inline2": ["balance_pairs", "text_collapse"],
    }


def test_parseInline():
    md = MarkdownIt()
    tokens = md.parseInline("abc\n\n> xyz")
    assert tokens == [
        Token(
            type="inline",
            tag="",
            nesting=0,
            attrs=None,
            map=[0, 1],
            level=0,
            children=[
                Token(
                    type="text",
                    tag="",
                    nesting=0,
                    attrs=None,
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
                    attrs=None,
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
                    attrs=None,
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
                    attrs=None,
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
            attrs=None,
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


def test_noneState():
    md = MarkdownIt()
    state = StateCore(None, md, {}, [])

    # Remove normalizing rule
    rules = md.core.ruler.get_active_rules()
    md.core.ruler.enableOnly(rules[rules.index("inline") :])

    # Check that we can process None str with empty env and block_tokens
    md.core.process(state)


def test_empty_env():
    """Test that an empty `env` is mutated, not copied and mutated."""
    md = MarkdownIt()

    env = AttrDict()
    md.render("[foo]: /url\n[foo]", env)
    assert "references" in env

    env = AttrDict()
    md.parse("[foo]: /url\n[foo]", env)
    assert "references" in env
