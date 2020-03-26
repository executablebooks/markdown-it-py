from markdown_it import MarkdownIt


def test_load_presets():
    md = MarkdownIt("zero")
    assert md.get_active_rules() == {
        "block": ["paragraph"],
        "core": ["normalize", "block", "inline"],
        "inline": ["text"],
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
    }


def test_enable():
    md = MarkdownIt("zero").enable("heading")
    assert md.get_active_rules() == {
        "block": ["heading", "paragraph"],
        "core": ["normalize", "block", "inline"],
        "inline": ["text"],
    }
    md.enable(["backticks", "autolink"])
    assert md.get_active_rules() == {
        "block": ["heading", "paragraph"],
        "core": ["normalize", "block", "inline"],
        "inline": ["text", "backticks", "autolink"],
    }


def test_disable():
    md = MarkdownIt("zero").disable("inline")
    assert md.get_active_rules() == {
        "block": ["paragraph"],
        "core": ["normalize", "block"],
        "inline": ["text"],
    }
    md.disable(["text"])
    assert md.get_active_rules() == {
        "block": ["paragraph"],
        "core": ["normalize", "block"],
        "inline": [],
    }
