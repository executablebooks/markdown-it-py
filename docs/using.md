---
jupytext:
  formats: ipynb,md:myst
  text_representation:
    extension: .md
    format_name: myst
    format_version: '0.8'
    jupytext_version: 1.4.2
kernelspec:
  display_name: Python 3
  language: python
  name: python3
---

# Using `markdown_it`

> This document can be opened to execute with [Jupytext](https://jupytext.readthedocs.io)!

markdown-it-py may be used as an API *via* the [`markdown-it-py`](https://pypi.org/project/markdown-it-py/) package.

The raw text is first parsed to syntax 'tokens',
then these are converted to other formats using 'renderers'.

+++

## Quick-Start

The simplest way to understand how text will be parsed is using:

```{jupyter-execute}
from pprint import pprint
from markdown_it import MarkdownIt
```

```{jupyter-execute}
md = MarkdownIt()
md.render("some *text*")
```

```{jupyter-execute}
for token in md.parse("some *text*"):
    print(token)
    print()
```

## The Parser

+++

The `MarkdownIt` class is instantiated with parsing configuration options,
dictating the syntax rules and additional options for the parser and renderer.
You can define this configuration *via* directly supplying a dictionary or a preset name:

- `zero`: This configures the minimum components to parse text (i.e. just paragraphs and text)
- `commonmark` (default): This configures the parser to strictly comply with the [CommonMark specification](http://spec.commonmark.org/).
- `js-default`: This is the default in the JavaScript version.
  Compared to `commonmark`, it disables HTML parsing and enables the table and strikethrough components.
- `gfm-like`: This configures the parser to approximately comply with the [GitHub Flavored Markdown specification](https://github.github.com/gfm/).
  Compared to `commonmark`, it enables the table, strikethrough and linkify components.
  **Important**, to use this configuration you must have `linkify-it-py` installed.

```{jupyter-execute}
from markdown_it.presets import zero
zero.make()
```

```{jupyter-execute}
md = MarkdownIt("zero")
md.options
```

You can also override specific options:

```{jupyter-execute}
md = MarkdownIt("zero", {"maxNesting": 99})
md.options
```

```{jupyter-execute}
pprint(md.get_active_rules())
```

You can find all the parsing rules in the source code:
`parser_core.py`, `parser_block.py`,
`parser_inline.py`.

```{jupyter-execute}
pprint(md.get_all_rules())
```

Any of the parsing rules can be enabled/disabled, and these methods are "chainable":

```{jupyter-execute}
md.render("- __*emphasise this*__")
```

```{jupyter-execute}
md.enable(["list", "emphasis"]).render("- __*emphasise this*__")
```

You can temporarily modify rules with the `reset_rules` context manager.

```{jupyter-execute}
with md.reset_rules():
    md.disable("emphasis")
    print(md.render("__*emphasise this*__"))
md.render("__*emphasise this*__")
```

Additionally `renderInline` runs the parser with all block syntax rules disabled.

```{jupyter-execute}
md.renderInline("__*emphasise this*__")
```

### Typographic components

The `smartquotes` and `replacements` components are intended to improve typography:

`smartquotes` will convert basic quote marks to their opening and closing variants:

- 'single quotes' -> ‘single quotes’
- "double quotes" -> “double quotes”

`replacements` will replace particular text constructs:

- ``(c)``, ``(C)`` → ©
- ``(tm)``, ``(TM)`` → ™
- ``(r)``, ``(R)`` → ®
- ``(p)``, ``(P)`` → §
- ``+-`` → ±
- ``...`` → …
- ``?....`` → ?..
- ``!....`` → !..
- ``????????`` → ???
- ``!!!!!`` → !!!
- ``,,,`` → ,
- ``--`` → &ndash
- ``---`` → &mdash

Both of these components require typography to be turned on, as well as the components enabled:

```{jupyter-execute}
md = MarkdownIt("commonmark", {"typographer": True})
md.enable(["replacements", "smartquotes"])
md.render("'single quotes' (c)")
```

### Linkify

The `linkify` component requires that [linkify-it-py](https://github.com/tsutsu3/linkify-it-py) be installed (e.g. *via* `pip install markdown-it-py[linkify]`).
This allows URI autolinks to be identified, without the need for enclosing in `<>` brackets:

```{jupyter-execute}
md = MarkdownIt("commonmark", {"linkify": True})
md.enable(["linkify"])
md.render("github.com")
```

### Plugins load

Plugins load collections of additional syntax rules and render methods into the parser.
A number of useful plugins are available in [`mdit_py_plugins`](https://github.com/executablebooks/mdit-py-plugins) (see [the plugin list](./plugins.md)),
or you can create your own (following the [markdown-it design principles](./architecture.md)).

```{jupyter-execute}
from markdown_it import MarkdownIt
import mdit_py_plugins
from mdit_py_plugins.front_matter import front_matter_plugin
from mdit_py_plugins.footnote import footnote_plugin

md = (
    MarkdownIt()
    .use(front_matter_plugin)
    .use(footnote_plugin)
    .enable('table')
)
text = ("""\
---
a: 1
---

a | b
- | -
1 | 2

A footnote [^1]

[^1]: some details
""")
print(md.render(text))
```

## The Token Stream

+++

Before rendering, the text is parsed to a flat token stream of block level syntax elements, with nesting defined by opening (1) and closing (-1) attributes:

```{jupyter-execute}
md = MarkdownIt("commonmark")
tokens = md.parse("""
Here's some *text*

1. a list

> a *quote*""")
[(t.type, t.nesting) for t in tokens]
```

Naturally all openings should eventually be closed,
such that:

```{jupyter-execute}
sum([t.nesting for t in tokens]) == 0
```

All tokens are the same class, which can also be created outside the parser:

```{jupyter-execute}
tokens[0]
```

```{jupyter-execute}
from markdown_it.token import Token
token = Token("paragraph_open", "p", 1, block=True, map=[1, 2])
token == tokens[0]
```

The `'inline'` type token contain the inline tokens as children:

```{jupyter-execute}
tokens[1]
```

You can serialize a token (and its children) to a JSONable dictionary using:

```{jupyter-execute}
print(tokens[1].as_dict())
```

This dictionary can also be deserialized:

```{jupyter-execute}
Token.from_dict(tokens[1].as_dict())
```

### Creating a syntax tree

```{versionchanged} 0.7.0
`nest_tokens` and `NestedTokens` are deprecated and replaced by `SyntaxTreeNode`.
```

In some use cases it may be useful to convert the token stream into a syntax tree,
with opening/closing tokens collapsed into a single token that contains children.

```{jupyter-execute}
from markdown_it.tree import SyntaxTreeNode

md = MarkdownIt("commonmark")
tokens = md.parse("""
# Header

Here's some text and an image ![title](image.png)

1. a **list**

> a *quote*
""")

node = SyntaxTreeNode(tokens)
print(node.pretty(indent=2, show_text=True))
```

You can then use methods to traverse the tree

```{jupyter-execute}
node.children
```

```{jupyter-execute}
print(node[0])
node[0].next_sibling
```

## Renderers

+++

After the token stream is generated, it's passed to a [renderer](https://github.com/executablebooks/markdown-it-py/tree/master/markdown_it/renderer.py).
It then plays all the tokens, passing each to a rule with the same name as token type.

Renderer rules are located in `md.renderer.rules` and are simple functions
with the same signature:

```python
def function(renderer, tokens, idx, options, env):
  return htmlResult
```

+++

You can inject render methods into the instantiated render class.

```{jupyter-execute}
md = MarkdownIt("commonmark")

def render_em_open(self, tokens, idx, options, env):
    return '<em class="myclass">'

md.add_render_rule("em_open", render_em_open)
md.render("*a*")
```

This is a slight change to the JS version, where the renderer argument is at the end.
Also `add_render_rule` method is specific to Python, rather than adding directly to the `md.renderer.rules`, this ensures the method is bound to the renderer.

+++

You can also subclass a render and add the method there:

```{jupyter-execute}
from markdown_it.renderer import RendererHTML

class MyRenderer(RendererHTML):
    def em_open(self, tokens, idx, options, env):
        return '<em class="myclass">'

md = MarkdownIt("commonmark", renderer_cls=MyRenderer)
md.render("*a*")
```

Plugins can support multiple render types, using the `__output__` attribute (this is currently a Python only feature).

```{jupyter-execute}
from markdown_it.renderer import RendererHTML

class MyRenderer1(RendererHTML):
    __output__ = "html1"

class MyRenderer2(RendererHTML):
    __output__ = "html2"

def plugin(md):
    def render_em_open1(self, tokens, idx, options, env):
        return '<em class="myclass1">'
    def render_em_open2(self, tokens, idx, options, env):
        return '<em class="myclass2">'
    md.add_render_rule("em_open", render_em_open1, fmt="html1")
    md.add_render_rule("em_open", render_em_open2, fmt="html2")

md = MarkdownIt("commonmark", renderer_cls=MyRenderer1).use(plugin)
print(md.render("*a*"))

md = MarkdownIt("commonmark", renderer_cls=MyRenderer2).use(plugin)
print(md.render("*a*"))
```

Here's a more concrete example; let's replace images with vimeo links to player's iframe:

```{jupyter-execute}
import re
from markdown_it import MarkdownIt

vimeoRE = re.compile(r'^https?:\/\/(www\.)?vimeo.com\/(\d+)($|\/)')

def render_vimeo(self, tokens, idx, options, env):
    token = tokens[idx]

    if vimeoRE.match(token.attrs["src"]):

        ident = vimeoRE.match(token.attrs["src"])[2]

        return ('<div class="embed-responsive embed-responsive-16by9">\n' +
               '  <iframe class="embed-responsive-item" src="//player.vimeo.com/video/' +
                ident + '"></iframe>\n' +
               '</div>\n')
    return self.image(tokens, idx, options, env)

md = MarkdownIt("commonmark")
md.add_render_rule("image", render_vimeo)
print(md.render("![](https://www.vimeo.com/123)"))
```

Here is another example, how to add `target="_blank"` to all links:

```{jupyter-execute}
from markdown_it import MarkdownIt

def render_blank_link(self, tokens, idx, options, env):
    tokens[idx].attrSet("target", "_blank")

    # pass token to default renderer.
    return self.renderToken(tokens, idx, options, env)

md = MarkdownIt("commonmark")
md.add_render_rule("link_open", render_blank_link)
print(md.render("[a]\n\n[a]: b"))
```

### Markdown renderer

You can also render a token stream directly to markdown via the `MDRenderer` class from [`mdformat`](https://github.com/executablebooks/mdformat):

```python
from markdown_it import MarkdownIt
from mdformat.renderer import MDRenderer

md = MarkdownIt("commonmark")

source_markdown = """
Here's some *text*

1. a list

> a *quote*"""

tokens = md.parse(source_markdown)

renderer = MDRenderer()
options = {}
env = {}

output_markdown = renderer.render(tokens, options, env)
```
