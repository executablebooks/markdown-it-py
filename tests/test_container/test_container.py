from textwrap import dedent

from markdown_it import MarkdownIt
from markdown_it.extensions.container import container_plugin


def test_plugin_parse(data_regression):
    md = MarkdownIt().use(container_plugin, "name")
    tokens = md.parse(
        dedent(
            """\
    ::: name
    *content*
    :::
    """
        )
    )
    data_regression.check([t.as_dict() for t in tokens])
