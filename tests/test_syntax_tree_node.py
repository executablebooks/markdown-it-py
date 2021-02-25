from markdown_it import MarkdownIt
from markdown_it.token import SyntaxTreeNode

EXAMPLE_MARKDOWN = """
## Heading here

Some paragraph text and **emphasis here**
"""


def test_tree_to_tokens_conversion():
    mdit = MarkdownIt()
    tokens = mdit.parse(EXAMPLE_MARKDOWN)
    tokens_after_roundtrip = SyntaxTreeNode.from_tokens(tokens).to_tokens()
    assert tokens == tokens_after_roundtrip
