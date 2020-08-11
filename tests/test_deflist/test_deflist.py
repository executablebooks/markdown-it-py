from textwrap import dedent

from markdown_it import MarkdownIt
from markdown_it.extensions.deflist import deflist_plugin


def test_plugin_parse(data_regression):
    md = MarkdownIt().use(deflist_plugin)
    tokens = md.parse(
        dedent(
            """\
    Term 1

    : Definition 1

    Term 2
      ~ Definition 2a
      ~ Definition 2b
    """
        )
    )
    data_regression.check([t.as_dict() for t in tokens])
