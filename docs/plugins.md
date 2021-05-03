(md/plugins)=

# Plugin extensions

The following plugins are embedded within the core package:

- [tables](https://help.github.com/articles/organizing-information-with-tables/) (GFM)
- [strikethrough](https://help.github.com/articles/basic-writing-and-formatting-syntax/#styling-text) (GFM)

These can be enabled individually:

```python
from markdown_it import MarkdownIt
md = MarkdownIt("commonmark").enable('table')
```

or as part of a configuration:

```python
from markdown_it import MarkdownIt
md = MarkdownIt("gfm-like")
```

```{seealso}
See [](using.md)
```

Many other plugins are then available *via* the `mdit-py-plugins` package, including:

- Front-matter
- Footnotes
- Definition lists
- Task lists
- Heading anchors
- LaTeX math
- Containers
- Word count

For full information see: <https://mdit-py-plugins.readthedocs.io>

Or you can write them yourself!

They can be chained and loaded *via*:

```python
from markdown_it import MarkdownIt
from mdit_py_plugins import plugin1, plugin2
md = MarkdownIt().use(plugin1, keyword=value).use(plugin2, keyword=value)
html_string = md.render("some *Markdown*")
```
