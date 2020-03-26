from markdown_it import MarkdownIt


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
