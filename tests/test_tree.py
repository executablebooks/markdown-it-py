from markdown_it import MarkdownIt
from markdown_it.tree import SyntaxTreeNode

EXAMPLE_MARKDOWN = """
## Heading here

Some paragraph text and **emphasis here** and more text here.
"""


def test_tree_to_tokens_conversion():
    tokens = MarkdownIt().parse(EXAMPLE_MARKDOWN)
    tokens_after_roundtrip = SyntaxTreeNode(tokens).to_tokens()
    assert tokens == tokens_after_roundtrip


def test_property_passthrough():
    tokens = MarkdownIt().parse(EXAMPLE_MARKDOWN)
    heading_open = tokens[0]
    tree = SyntaxTreeNode(tokens)
    heading_node = tree.children[0]
    assert heading_open.tag == heading_node.tag
    assert tuple(heading_open.map or ()) == heading_node.map
    assert heading_open.level == heading_node.level
    assert heading_open.content == heading_node.content
    assert heading_open.markup == heading_node.markup
    assert heading_open.info == heading_node.info
    assert heading_open.meta == heading_node.meta
    assert heading_open.block == heading_node.block
    assert heading_open.hidden == heading_node.hidden


def test_type():
    tokens = MarkdownIt().parse(EXAMPLE_MARKDOWN)
    tree = SyntaxTreeNode(tokens)
    # Root type is "root"
    assert tree.type == "root"
    # "_open" suffix must be stripped from nested token type
    assert tree.children[0].type == "heading"
    assert tree[0].type == "heading"
    # For unnested tokens, node type must remain same as token type
    assert tree.children[0].children[0].type == "inline"


def test_sibling_traverse():
    tokens = MarkdownIt().parse(EXAMPLE_MARKDOWN)
    tree = SyntaxTreeNode(tokens)
    paragraph_inline_node = tree.children[1].children[0]
    text_node = paragraph_inline_node.children[0]
    assert text_node.type == "text"
    strong_node = text_node.next_sibling
    assert strong_node
    assert strong_node.type == "strong"
    another_text_node = strong_node.next_sibling
    assert another_text_node
    assert another_text_node.type == "text"
    assert another_text_node.next_sibling is None
    assert another_text_node.previous_sibling.previous_sibling == text_node  # type: ignore
    assert text_node.previous_sibling is None


def test_pretty(file_regression):
    md = MarkdownIt("commonmark")
    tokens = md.parse(
        """
# Header

Here's some text and an image ![title](image.png)

1. a **list**

> a *quote*
    """
    )
    node = SyntaxTreeNode(tokens)
    file_regression.check(node.pretty(indent=2, show_text=True), extension=".xml")


def test_pretty_text_special(file_regression):
    md = MarkdownIt()
    md.disable("text_join")
    tree = SyntaxTreeNode(md.parse("foo &copy; bar \\("))
    file_regression.check(tree.pretty(show_text=True), extension=".xml")


def test_walk():
    tokens = MarkdownIt().parse(EXAMPLE_MARKDOWN)
    tree = SyntaxTreeNode(tokens)
    expected_node_types = (
        "root",
        "heading",
        "inline",
        "text",
        "paragraph",
        "inline",
        "text",
        "strong",
        "text",
        "text",
    )
    for node, expected_type in zip(tree.walk(), expected_node_types):
        assert node.type == expected_type
