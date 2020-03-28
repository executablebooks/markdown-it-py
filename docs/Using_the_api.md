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


Todo ...
