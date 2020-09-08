(md/plugins)=

# Plugin extensions

The following plugins are embedded within the core package (enabled when using the `"default"` preset configuration):

- [tables](https://help.github.com/articles/organizing-information-with-tables/) (GFM)
- [strikethrough](https://help.github.com/articles/basic-writing-and-formatting-syntax/#styling-text) (GFM)

Other plugins are then available *via* the `markdown_it.extensions` package.
They can be chained and loaded *via*:

```python
from markdown_it import MarkdownIt
md = MarkdownIt().use(plugin1, keyword=value).use(plugin2, keyword=value)
html_string = md.render("some *Markdown*")
```

```{eval-rst}
.. autofunction:: markdown_it.extensions.anchors.anchors_plugin
    :noindex:

.. autofunction:: markdown_it.extensions.footnote.footnote_plugin
    :noindex:

.. autofunction:: markdown_it.extensions.front_matter.front_matter_plugin
    :noindex:

.. autofunction:: markdown_it.extensions.container.container_plugin
    :noindex:

.. autofunction:: markdown_it.extensions.deflist.deflist_plugin
    :noindex:

.. autofunction:: markdown_it.extensions.texmath.texmath_plugin
    :noindex:

.. autofunction:: markdown_it.extensions.dollarmath.dollarmath_plugin
    :noindex:

.. autofunction:: markdown_it.extensions.amsmath.amsmath_plugin
    :noindex:
```

`myst_blocks` and `myst_role` plugins are also available, for utilisation by the [MyST renderer](https://myst-parser.readthedocs.io/en/latest/using/syntax.html)

There are also many other plugins which could easily be ported (and hopefully will be):

- [subscript](https://github.com/markdown-it/markdown-it-sub)
- [superscript](https://github.com/markdown-it/markdown-it-sup)
- [abbreviation](https://github.com/markdown-it/markdown-it-abbr)
- [emoji](https://github.com/markdown-it/markdown-it-emoji)
- [insert](https://github.com/markdown-it/markdown-it-ins)
- [mark](https://github.com/markdown-it/markdown-it-mark)
- ... and [others](https://www.npmjs.org/browse/keyword/markdown-it-plugin)
