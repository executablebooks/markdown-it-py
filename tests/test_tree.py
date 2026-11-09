import pytest

from markdown_it import MarkdownIt
from markdown_it.tree import SyntaxTreeNode

EXAMPLE_MARKDOWN = """
## Heading here

Some paragraph text and **emphasis here** and more text here.
"""


def test_tree_to_tokens_conversion():
    tokens = MarkdownIt().parse(EXAMPLE_MARKDOWN)
    serialized_tokens = [token.as_dict() for token in tokens]
    tokens_after_roundtrip = SyntaxTreeNode(tokens).to_tokens()
    assert tokens == tokens_after_roundtrip
    assert [token.as_dict() for token in tokens_after_roundtrip] == serialized_tokens
    assert all(
        before is after
        for before, after in zip(tokens, tokens_after_roundtrip, strict=True)
    )


def _node_at(tree, path):
    node = tree
    for index in path:
        node = node[index]
    return node


@pytest.mark.parametrize(
    "source,path,expected",
    [
        ("one\n\ntwo", (), "<p>two</p>\n<p>one</p>\n"),
        (
            "before *nested* after",
            (0, 0),
            "<p> after<em>nested</em>before </p>\n",
        ),
        (
            "![before *nested* after](image.png)",
            (0, 0, 0),
            '<p><img src="image.png" alt=" afternestedbefore " /></p>\n',
        ),
    ],
    ids=["blocks", "inline", "image"],
)
def test_tree_to_tokens_reordered_children(source, path, expected):
    md = MarkdownIt()
    tree = SyntaxTreeNode(md.parse(source))
    _node_at(tree, path).children.reverse()

    assert md.renderer.render(tree.to_tokens(), md.options, {}) == expected


@pytest.mark.parametrize(
    "source,path,expected",
    [
        ("before *nested* after", (0, 0), "<p></p>\n"),
        ("before *nested* after", (0, 0, 1), "<p>before <em></em> after</p>\n"),
        (
            "![old alt](image.png)",
            (0, 0, 0),
            '<p><img src="image.png" alt="" /></p>\n',
        ),
    ],
    ids=["inline", "nested-inline", "image"],
)
def test_tree_to_tokens_cleared_children(source, path, expected):
    md = MarkdownIt()
    tree = SyntaxTreeNode(md.parse(source))
    _node_at(tree, path).children.clear()

    assert md.renderer.render(tree.to_tokens(), md.options, {}) == expected


def test_tree_to_tokens_replaced_empty_inline_children():
    md = MarkdownIt()
    tree = SyntaxTreeNode(md.parseInline(""))
    replacement = SyntaxTreeNode(md.parseInline("*new*"))
    tree[0].children = replacement[0].children

    assert md.renderer.render(tree.to_tokens(), md.options, {}) == "<em>new</em>"


def test_tree_to_tokens_leaves_original_tokens_unchanged():
    """Edits reach the output of ``to_tokens``, not the tokens the tree came from.

    An inline token whose children were edited is copied, so the original stream
    still renders the source, while unedited tokens are reused as they are.
    """
    md = MarkdownIt()
    tokens = md.parse("before *nested* after")
    original_children = tokens[1].children
    original_dicts = [token.as_dict() for token in tokens]
    tree = SyntaxTreeNode(tokens)
    tree[0][0].children.clear()

    result = tree.to_tokens()

    assert md.renderer.render(result, md.options, {}) == "<p></p>\n"
    assert result[0] is tokens[0]
    assert result[1] is not tokens[1]
    assert result[1].children == []
    assert result[2] is tokens[2]
    assert tokens[1].children is original_children
    assert [token.as_dict() for token in tokens] == original_dicts
    assert (
        md.renderer.render(tokens, md.options, {})
        == "<p>before <em>nested</em> after</p>\n"
    )


def test_tree_to_tokens_output_is_stable():
    """A returned token list is not changed by a later ``to_tokens`` call.

    Two trees built from the same tokens are edited differently;
    converting the second must not undo the edit in the first one's output.
    """
    md = MarkdownIt()
    tokens = md.parse("before *nested* after")
    first = SyntaxTreeNode(tokens)
    first[0][0].children.pop()
    result = first.to_tokens()

    second = SyntaxTreeNode(tokens)
    second[0][0].children.reverse()
    second.to_tokens()
    unedited = SyntaxTreeNode(tokens)
    unedited.to_tokens()

    expected = "<p>before <em>nested</em></p>\n"
    assert md.renderer.render(result, md.options, {}) == expected
    assert md.renderer.render(first.to_tokens(), md.options, {}) == expected


def test_tree_to_tokens_unedited_reuses_tokens():
    """An unedited round trip returns the original tokens and child lists.

    Copies are only made for edited children, so nothing is copied or written
    here, including the nested inline and image tokens.
    """

    def flatten(tokens):
        for token in tokens:
            yield token, token.children
            if token.children is not None:
                yield from flatten(token.children)

    md = MarkdownIt()
    tokens = md.parse("before *nested* after\n\n![alt *x*](image.png)\n")
    before = list(flatten(tokens))

    after = list(flatten(SyntaxTreeNode(tokens).to_tokens()))

    assert len(after) == len(before)
    for (token_before, children_before), (token_after, children_after) in zip(
        before, after, strict=True
    ):
        assert token_after is token_before
        assert children_after is children_before
        assert token_before.children is children_before


def test_tree_to_tokens_nested_image_edit():
    """An edit inside an image nested in an inline token reaches the output.

    The image token is copied, which changes the inline token's children,
    so the inline token is copied too; the original tokens are untouched.
    """
    md = MarkdownIt()
    tokens = md.parse("before ![alt *x*](image.png)")
    inline_children = tokens[1].children
    assert inline_children is not None
    text, image = inline_children
    assert image.type == "image"
    tree = SyntaxTreeNode(tokens)
    tree[0][0][1].children.reverse()

    result = tree.to_tokens()

    assert (
        md.renderer.render(result, md.options, {})
        == '<p>before <img src="image.png" alt="xalt " /></p>\n'
    )
    assert result[1] is not tokens[1]
    result_children = result[1].children
    assert result_children is not None
    assert result_children[0] is text
    assert result_children[1] is not image
    assert tokens[1].children is inline_children
    assert inline_children == [text, image]
    assert (
        md.renderer.render(tokens, md.options, {})
        == '<p>before <img src="image.png" alt="alt x" /></p>\n'
    )


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
