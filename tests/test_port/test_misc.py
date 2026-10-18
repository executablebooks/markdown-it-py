from markdown_it import MarkdownIt, presets
from markdown_it.tree import SyntaxTreeNode


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


def test_no_empty_text_tokens_after_nested_emphasis():
    # Regression test for #374.
    #
    # `emphasis.postProcess` only turns the *first* marker of a `**` pair into
    # `strong_open` (and the *second* of the closing pair into `strong_close`),
    # blanking the content of the duplicate markers while leaving them as
    # `text` tokens. `fragments_join` folds most of that residue into adjacent
    # text, but a residue with no text neighbour survives: in `_li**ne**_` the
    # closing residue sits between `strong_close` and `em_close`, and in
    # `a **b**` the residue sits at the end of the token stream. The syntax
    # tree then exposes such residue as an extra empty `<text>` node.
    md = MarkdownIt("gfm-like").disable(["linkify"])
    sources = (
        "new _li**ne**_",
        "new _l**i**ne_",
        "new _**line**_",
        "new _li**ne**_\na",
    )
    for source in sources:
        tokens = md.parse(source)
        [inline] = [t for t in tokens if t.type == "inline"]
        empties = [
            c for c in (inline.children or []) if c.type == "text" and not c.content
        ]
        assert empties == [], f"empty text tokens left in stream for {source!r}"

        empty_tree_nodes = [
            node
            for node in SyntaxTreeNode(tokens).walk(include_self=False)
            if node.type == "text" and not node.content
        ]
        assert empty_tree_nodes == [], f"empty text nodes in tree for {source!r}"
