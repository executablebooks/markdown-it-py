# markdown-it-py

[![Github-CI][github-ci]][github-link]
[![Coverage Status][codecov-badge]][codecov-link]
[![PyPI][pypi-badge]][pypi-link]
[![Conda][conda-badge]][conda-link]
[![Code style: black][black-badge]][black-link]

> Markdown parser done right.

- Follows the __[CommonMark spec](http://spec.commonmark.org/)__ for baseline parsing
- Configurable syntax: you can add new rules and even replace existing ones.
- Pluggable: Adds syntax extensions to extend the parser (see the [plugin list][md-plugins]).
- High speed (see our [benchmarking tests][md-performance])
- [Safe by default][md-security]

This is a Python port of [markdown-it], and some of its associated plugins.
For more details see: <https://markdown-it-py.readthedocs.io>.

For details on [markdown-it] itself, see:

- The __[Live demo](https://markdown-it.github.io)__
- [The markdown-it README][markdown-it-readme]

## Installation

```bash
conda install -c conda-forge markdown-it-py
```

or

```bash
pip install markdown-it-py
```

## Basic usage

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

## References / Thanks

Big thanks to the authors of [markdown-it]:

- Alex Kocharin [github/rlidwka](https://github.com/rlidwka)
- Vitaly Puzrin [github/puzrin](https://github.com/puzrin)

Also [John MacFarlane](https://github.com/jgm) for his work on the CommonMark spec and reference implementations.

[github-ci]: https://github.com/ExecutableBookProject/markdown-it-py/workflows/Python%20package/badge.svg?branch=master
[github-link]: https://github.com/ExecutableBookProject/markdown-it-py
[pypi-badge]: https://img.shields.io/pypi/v/markdown-it-py.svg
[pypi-link]: https://pypi.org/project/markdown-it-py
[conda-badge]: https://anaconda.org/conda-forge/markdown-it-py/badges/version.svg
[conda-link]: https://anaconda.org/conda-forge/markdown-it-py
[codecov-badge]: https://codecov.io/gh/ExecutableBookProject/markdown-it-py/branch/master/graph/badge.svg
[codecov-link]: https://codecov.io/gh/ExecutableBookProject/markdown-it-py
[black-badge]: https://img.shields.io/badge/code%20style-black-000000.svg
[black-link]: https://github.com/ambv/black

[CommonMark spec]: http://spec.commonmark.org/
[markdown-it]: https://github.com/markdown-it/markdown-it
[markdown-it-readme]: https://github.com/markdown-it/markdown-it/blob/master/README.md
[md-security]: https://github.com/ExecutableBookProject/markdown-it-py/tree/master/docs/security.md
[md-performance]: https://markdown-it-py.readthedocs.io/en/latest/security.html
[md-plugins]: https://markdown-it-py.readthedocs.io/en/latest/plugins.html
