# markdown-it-py

[![Github-DI][github-ci]][github-link]
[![Coverage Status][cov-badge]][cov-link]
[![PyPI][pypi-badge]][pypi-link]
[![Code style: black][black-badge]][black-link]

> Markdown parser done right. Fast and easy to extend.

- Follows the __[CommonMark spec]__ + adds syntax extensions & sugar (URL autolinking, typographer).
- Configurable syntax! You can add new rules and even replace existing ones.
- High speed.
- [Safe][security-doc] by default.
- Pluginable


This is a Python port of [markdown-it],
and some of its associated plugins.
It is still under development, so for now should be used with caution.

For details on [markdown-it] itself, see:

- The __[Live demo](https://markdown-it.github.io)__
- [The markdown-it README][markdown-it-readme]


__Table of content__

- [markdown-it-py](#markdown-it-py)
  - [The Port](#the-port)
  - [Install](#install)
  - [Basic usage](#basic-usage)
  - [Benchmarking](#benchmarking)
  - [Syntax extensions](#syntax-extensions)
  - [Authors](#authors)
  - [References / Thanks](#references--thanks)
    - [Related Links](#related-links)
    - [Other Ports](#other-ports)


## The Port

Details of the port can be found in `markdown_it/port.yaml` and in `port.yaml`
within the extension folders. But the driving design philosophy has been to change as little of the
fundamental code structure (file names, function name, etc) as possible, just sprinkling in a little Python syntactic sugar.
It is very simple to write complimentary extensions for both language implementations!


## Install

```bash
pip install markdown-it-py
```


## Basic usage

See also:

- [Using the api] - for an executable notebook guide to the API
- [Development info] - for plugins writers.

```python
from markdown_it import MarkdownIt
from markdown_it.extensions.front_matter import front_matter_plugin
from markdown_it.extensions.footnote import footnote_plugin

md = (
    MarkdownIt()
    .use(front_matter_plugin)
    .use(footnote_plugin)
    .disable('image')
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
tokens = md.parse(text)
html_text = md.render(text)
```

Also you can use it from the command-line:

```console
$ markdown-it
markdown-it-py [version 0.1.0] (interactive)
Type Ctrl-D to complete input, or Ctrl-C to exit.
>>> > **hallo** there!
...
<blockquote>
<p><strong>hallo</strong> there!</p>
</blockquote>
```

## Benchmarking

markdown-it-py is the fastest _**CommonMark compliant**_ parser written in python!

```console
$ markdown-it-bench -n 30
Test document: spec.md
Test iterations: 30
Running 7 test(s) ...
=====================
[mistune         (0.8.4): 3.62 s]*
markdown-it-py   (0.1.0): 9.03 s
mistletoe        (0.10.0): 9.89 s
commonmark-py    (0.9.1): 20.82 s
pymarkdown       (3.2.1): 34.50 s
pymarkdown:extra (3.2.1): 41.86 s
panflute         (1.12.5): 35.02 s
```

As you can see, `markdown-it-py` doesn't pay with speed for it's flexibility.

\*Note `mistune` is not CommonMark compliant, which is what allows for its
faster parsing, at the expense of issues, for example, with nested inline parsing.
See [mistletoes's explanation](https://github.com/miyuchina/mistletoe#performance)
for further details.


## Syntax extensions

Embedded (enabled when using the `"default"` preset configuration):

- [Tables](https://help.github.com/articles/organizing-information-with-tables/) (GFM)
- [Strikethrough](https://help.github.com/articles/basic-writing-and-formatting-syntax/#styling-text) (GFM)

*Via* plugins:

A list of plugins that have/can be ported:

- [subscript](https://github.com/markdown-it/markdown-it-sub)
- [superscript](https://github.com/markdown-it/markdown-it-sup)
- [footnote](https://github.com/markdown-it/markdown-it-footnote)
- [definition list](https://github.com/markdown-it/markdown-it-deflist)
- [abbreviation](https://github.com/markdown-it/markdown-it-abbr)
- [emoji](https://github.com/markdown-it/markdown-it-emoji)
- [custom container](https://github.com/markdown-it/markdown-it-container)
- [insert](https://github.com/markdown-it/markdown-it-ins)
- [mark](https://github.com/markdown-it/markdown-it-mark)
- ... and [others](https://www.npmjs.org/browse/keyword/markdown-it-plugin)


## Authors

- Chris Sewell [github/chrisjsewell](https://github.com/chrisjsewell)

## References / Thanks

Big thanks to the authors of [markdown-it]

- Alex Kocharin [github/rlidwka](https://github.com/rlidwka)
- Vitaly Puzrin [github/puzrin](https://github.com/puzrin)

Also [John MacFarlane](https://github.com/jgm) for his work on the
CommonMark spec and reference implementations.

### Related Links

- https://github.com/jgm/CommonMark - reference CommonMark implementations in C & JS,
  also contains latest spec & online demo.
- http://talk.commonmark.org - CommonMark forum, good place to collaborate
  developers' efforts.

### Other Ports

- [motion-markdown-it](https://github.com/digitalmoksha/motion-markdown-it) - Ruby/RubyMotion


[github-ci]: https://github.com/ExecutableBookProject/markdown-it-py/workflows/Python%20package/badge.svg?branch=master
[github-link]: https://github.com/ExecutableBookProject/markdown-it-py
[pypi-badge]: https://img.shields.io/pypi/v/markdown-it-py.svg
[pypi-link]: https://pypi.org/project/markdown-it-py
[cov-badge]: https://coveralls.io/repos/github/ExecutableBookProject/markdown-it-py/badge.svg?branch=master
[cov-link]: https://coveralls.io/github/ExecutableBookProject/markdown-it-py?branch=master
[black-badge]: https://img.shields.io/badge/code%20style-black-000000.svg
[black-link]: https://github.com/ambv/black

[CommonMark spec]: http://spec.commonmark.org/
[markdown-it]: https://github.com/markdown-it/markdown-it
[markdown-it-readme]: https://github.com/markdown-it/markdown-it/blob/master/README.md
[security-doc]: https://github.com/ExecutableBookProject/markdown-it-py/tree/master/docs/security.md
[Using the api]: https://github.com/ExecutableBookProject/markdown-it-py/tree/master/docs/Using_the_api.md
[Development info]: https://github.com/ExecutableBookProject/markdown-it-py/tree/master/docs/development.md
