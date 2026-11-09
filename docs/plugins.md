(md/plugins)=

# Plugin extensions

The following plugins are embedded within the core package:

- [tables](https://help.github.com/articles/organizing-information-with-tables/) (GFM)
- [strikethrough](https://help.github.com/articles/basic-writing-and-formatting-syntax/#styling-text) (GFM)
- [task lists](https://docs.github.com/en/get-started/writing-on-github/working-with-advanced-formatting/about-task-lists) (GFM) — `- [x] done`
- [alerts](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax#alerts) (GFM) — `> [!NOTE]`

These can be enabled individually:

```python
from markdown_it import MarkdownIt

md = MarkdownIt("commonmark").enable("table")
```

or as part of a configuration:

```python
from markdown_it import MarkdownIt

md = MarkdownIt("gfm-like")  # tables, strikethrough, linkify
md = MarkdownIt("gfm-like2")  # + task lists, alerts, single-tilde strikethrough
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

(md/third-party)=

## Third-party renderers and plugins

markdown-it-py renders HTML, and the core package holds only the syntax plugins above.
Other packages build on it.

Syntax plugins:

- [mdit-py-plugins](https://github.com/executablebooks/mdit-py-plugins): the plugin collection described above.

Renderers, which turn the token stream into another format:

- [mdformat](https://github.com/hukkin/mdformat) (Markdown to Markdown): a CommonMark formatter,
  whose `mdformat.renderer.MDRenderer` renders tokens back to Markdown (see [](md/markdown-renderer)).
- [mdit_plain](https://github.com/elespike/mdit_plain) (Markdown to plain text): `mdit_plain.renderer.RendererPlain` drops all markup,
  for example to prepare text for natural language processing.
- [MyST-Parser](https://github.com/executablebooks/MyST-Parser) (Markdown to docutils, for Sphinx):
  `myst_parser.mdit_to_docutils.base.DocutilsRenderer` builds a docutils document,
  using syntax plugins from mdit-py-plugins.

A renderer is passed to `MarkdownIt` as `renderer_cls`:

```python
from markdown_it import MarkdownIt
from mdit_plain.renderer import RendererPlain

md = MarkdownIt("commonmark", renderer_cls=RendererPlain)
md.render("Some **bold** [text](https://example.com)")  # 'Some bold text'
```

If you maintain a renderer or plugin package that should be listed here, please open a pull request.

### Writing your own renderer

A renderer does not need to subclass `RendererHTML`.
Any class that satisfies {py:class}`~markdown_it.renderer.RendererProtocol` works:

- a class attribute `__output__`, a string naming the output format (`"html"` for `RendererHTML`);
- a method `render(tokens, options, env)`, which returns the output for a list of tokens.

`MarkdownIt.render` and `MarkdownIt.renderInline` call only `render`,
with the tokens from `parse` (or `parseInline`), `md.options` and the `env`.
`MarkdownIt` creates the renderer as `renderer_cls(md)`, so the constructor must accept the parser instance as its one argument.

```{jupyter-execute}
from markdown_it import MarkdownIt

class RendererText:
    """Render only the text of each block, starting each block on a new line."""

    __output__ = "text"
    breaks = {"softbreak": " ", "hardbreak": "\n"}

    def __init__(self, parser=None):
        pass

    def render(self, tokens, options, env):
        lines = []
        for token in tokens:
            if token.type == "inline":
                lines.append("".join(
                    child.content
                    if child.type in ("text", "code_inline")
                    else self.breaks.get(child.type, "")
                    for child in token.children
                ))
            elif token.type in ("fence", "code_block"):
                lines.append(token.content.rstrip("\n"))
        return "\n".join(lines)

md = MarkdownIt("commonmark", renderer_cls=RendererText)
print(md.render("# Title\n\nSome *emphasised*\n`code`.\n\n    indented code"))
```

Plugins add render rules with `md.add_render_rule(name, function, fmt="html")`,
which only takes effect when `fmt` equals the renderer's `__output__`,
and then stores the rule in `md.renderer.rules[name]`.
So rules that plugins register for HTML are ignored by a renderer for another format,
and a renderer that should accept plugin rules for its own format needs a `rules` dictionary that its `render` consults,
as `RendererHTML` does (see [](using.md)).
