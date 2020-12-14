(md/plugins)=

# Plugin extensions

The following plugins are embedded within the core package (enabled when using the `"default"` preset configuration):

- [tables](https://help.github.com/articles/organizing-information-with-tables/) (GFM)
- [strikethrough](https://help.github.com/articles/basic-writing-and-formatting-syntax/#styling-text) (GFM)

Other plugins are then available *via* the [`mdit_py_plugins`](https://github.com/executablebooks/mdit-py-plugins).

```{important}
``markdown_it.extensions`` is now deprecated and plugins have been moved to
[`mdit_py_plugins`](https://github.com/executablebooks/mdit-py-plugins)
```

They can be chained and loaded *via*:

```python
from markdown_it import MarkdownIt
from mdit_py_plugins import plugin1, plugin2
md = MarkdownIt().use(plugin1, keyword=value).use(plugin2, keyword=value)
html_string = md.render("some *Markdown*")
```

```{eval-rst}
.. autofunction:: mdit_py_plugins.anchors.anchors_plugin
    :noindex:

.. autofunction:: mdit_py_plugins.footnote.footnote_plugin
    :noindex:

.. autofunction:: mdit_py_plugins.front_matter.front_matter_plugin
    :noindex:

.. autofunction:: mdit_py_plugins.container.container_plugin
    :noindex:

.. autofunction:: mdit_py_plugins.deflist.deflist_plugin
    :noindex:

.. autofunction:: mdit_py_plugins.texmath.texmath_plugin
    :noindex:

.. autofunction:: mdit_py_plugins.dollarmath.dollarmath_plugin
    :noindex:

.. autofunction:: mdit_py_plugins.amsmath.amsmath_plugin
    :noindex:

.. autofunction:: mdit_py_plugins.tasklists.tasklists_plugin
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
