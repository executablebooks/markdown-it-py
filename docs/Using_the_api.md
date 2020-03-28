---
jupyter:
  jupytext:
    formats: ipynb,md
    text_representation:
      extension: .md
      format_name: markdown
      format_version: '1.2'
      jupytext_version: 1.4.1
  kernelspec:
    display_name: Python 3
    language: python
    name: python3
---

# Using `markdown_it`

> This document can be opened to execute with [Jupytext](https://jupytext.readthedocs.io)!

markdown-it-py may be used as an API *via* the `markdown_it` package.

The raw text is first parsed to syntax 'tokens',
then these are converted to other formats using 'renderers'.


## Quick-Start

The simplest way to understand how text will be parsed is using:

```python
from markdown_it import MarkdownIt
```

```python
md = MarkdownIt()
md.render("some *text*")
```

```python
for token in md.parse("some *text*"):
    print(token)
    print()
```

## The Parser


The `MarkdownIt` class is instantiated with parsing configuration options,
dictating the syntax rules and additional options for the parser and renderer.
You can define this configuration *via* a preset name (`'zero'`, `'commonmark'` or `'default'`),
or by directly supplying a dictionary.

```python
from markdown_it.presets import zero
zero.make()
```

```python
md = MarkdownIt("zero")
md.options
```

```python
print(md.get_active_rules())
```

```python
print(md.get_all_rules())
```

You can find all the parsing rules in the source code:
`parser_core.py`, `parser_block.py`,
`parser_inline.py`.
Any of the parsing rules can be enabled/disabled, and these methods are chainable:

```python
md.render("- __*emphasise this*__")
```

```python
md.enable(["list", "emphasis"]).render("- __*emphasise this*__")
```

You can temporarily modify rules with the `reset_rules` context manager.

```python
with md.reset_rules():
    md.disable("emphasis")
    print(md.render("__*emphasise this*__"))
md.render("__*emphasise this*__")
```

Additionally `renderInline` runs the parser with all block syntax rules disabled.

```python
md.renderInline("__*emphasise this*__")
```


### Plugins load

Plugins load collections of additional syntax rules and render methods into the parser

```python
from markdown_it import MarkdownIt
from markdown_it.extensions.front_matter import front_matter_plugin
from markdown_it.extensions.footnote import footnote_plugin

md = (
    MarkdownIt()
    .use(front_matter_plugin)
    .use(footnote_plugin)
    .enable('table')
)
text = ("""
---
a: 1
---

a | b
- | -
1 | 2

A footnote [^1]

[^1]: some details
""")
md.render(text)
```


## The Token Stream




Before rendering, the text is parsed to a flat token stream of block level syntax elements, with nesting defined by opening (1) and closing (-1) attributes:

```python
md = MarkdownIt("commonmark")
tokens = md.parse("""
Here's some *text*

1. a list

> a *quote*""")
[(t.type, t.nesting) for t in tokens]
```

Naturally all openings should eventually be closed,
such that:

```python
sum([t.nesting for t in tokens]) == 0
```

All tokens are the same class, which can also be created outside the parser:

```python
tokens[0]
```

```python
from markdown_it.token import Token
token = Token("paragraph_open", "p", 1, block=True, map=[1, 2])
token == tokens[0]
```

The `'inline'` type token contain the inline tokens as children:

```python
tokens[1]
```

You can serialize a token (and its children) to a JSONable dictionary using:

```python
print(tokens[1].as_dict())
```

This dictionary can also be deserialized:

```python
Token.from_dict(tokens[1].as_dict())
```

In some use cases `nest_tokens` may be useful, to collapse the opening/closing tokens into single tokens:

```python
from markdown_it.token import nest_tokens
nested_tokens = nest_tokens(tokens)
[t.type for t in nested_tokens]
```

This introduces a single additional class `NestedTokens`,
containing an `opening`, `closing` and `children`, which can be a list of mixed
`Token` and `NestedTokens`.

```python
nested_tokens[0]
```

## Renderers

<!-- #region -->
After the token stream is generated, it's passed to a [renderer](https://github.com/ExecutableBookProject/markdown-it-py/tree/master/markdown_it/renderer.py).
It then plays all the tokens, passing each to a rule with the same name as token type.

Renderer rules are located in `md.renderer.rules` and are simple functions
with the same signature:

```python
def function(renderer, tokens, idx, options, env):
  return htmlResult
```
<!-- #endregion -->

You can inject render methods into the instantiated render class.

```python
md = MarkdownIt("commonmark")

def render_em_open(self, tokens, idx, options, env):
    return '<em class="myclass">'

md.add_render_rule("em_open", render_em_open)
md.render("*a*")
```

This is a slight change to the JS version, where the renderer argument is at the end.
Also `add_render_rule` method is specific to Python, rather than adding directly to the `md.renderer.rules`, this ensures the method is bound to the renderer.


You can also subclass a render and add the method there:

```python
from markdown_it.renderer import RendererHTML

class MyRenderer(RendererHTML):
    def em_open(self, tokens, idx, options, env):
        return '<em class="myclass">'

md = MarkdownIt("commonmark", renderer_cls=MyRenderer)
md.render("*a*")
```

Plugins can support multiple render types, using the `__ouput__` attribute (this is currently a Python only feature).

```python
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

```python
import re
from markdown_it import MarkdownIt

vimeoRE = re.compile(r'^https?:\/\/(www\.)?vimeo.com\/(\d+)($|\/)')

def render_vimeo(self, tokens, idx, options, env):
    token = tokens[idx]
    aIndex = token.attrIndex('src')
    if (vimeoRE.match(token.attrs[aIndex][1])):

        ident = vimeoRE.match(token.attrs[aIndex][1])[2]

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

```python
from markdown_it import MarkdownIt

def render_blank_link(self, tokens, idx, options, env):
    aIndex = tokens[idx].attrIndex('target')
    if (aIndex < 0):
        tokens[idx].attrPush(['target', '_blank']) # add new attribute
    else:
        tokens[idx].attrs[aIndex][1] = '_blank'  # replace value of existing attr

    # pass token to default renderer.
    return self.renderToken(tokens, idx, options, env)

md = MarkdownIt("commonmark")
md.add_render_rule("link_open", render_blank_link)
print(md.render("[a]\n\n[a]: b"))
```
