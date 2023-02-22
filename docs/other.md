(md/security)=

# Security

Many people don't understand that markdown format does not care much about security.
In many cases you have to pass output to sanitizers.
`markdown-it` provides 2 possible strategies to produce safe output:

1. Don't enable HTML. Extend markup features with [plugins](md/plugins).
   We think it's the best choice and use it by default.
   - That's ok for 99% of user needs.
   - Output will be safe without sanitizer.
2. Enable HTML and use external sanitizer package(s).

Also by default `markdown-it` prohibits some kind of links, which could be used
for XSS:

- `javascript:`, `vbscript:`
- `file:`
- `data:`, except some images (gif/png/jpeg/webp).

So, by default `markdown-it` should be safe. We care about it.

If you find a security problem - contact us via <executablebooks@gmail.com>.
Such reports are fixed with top priority.

## Plugins

Usually, plugins operate with tokenized content, and that's enough to provide safe output.

But there is one non-evident case you should know - don't allow plugins to generate arbitrary element `id` and `name`.
If those depend on user input - always add prefixes to avoid DOM clobbering.
See [discussion](https://github.com/markdown-it/markdown-it/issues/28) for details.

So, if you decide to use plugins that add extended class syntax or autogenerating header anchors - be careful.

(md/performance)=

# Performance

You can view our continuous integration benchmarking analysis at: <https://executablebooks.github.io/markdown-it-py/dev/bench/>,
or you can run it for yourself within the repository:

```console
$ tox -e py38-bench-packages -- --benchmark-columns mean,stddev

Name (time in ms)             Mean             StdDev
---------------------------------------------------------------
test_mistune               70.3272 (1.0)       0.7978 (1.0)
test_mistletoe            116.0919 (1.65)      6.2870 (7.88)
test_markdown_it_py       152.9022 (2.17)      4.2988 (5.39)
test_commonmark_py        326.9506 (4.65)     15.8084 (19.81)
test_pymarkdown           368.2712 (5.24)      7.5906 (9.51)
test_pymarkdown_extra     640.4913 (9.11)     15.1769 (19.02)
test_panflute             678.3547 (9.65)      9.4622 (11.86)
---------------------------------------------------------------
```

As you can see, `markdown-it-py` doesn't pay with speed for it's flexibility.

```{note}
`mistune` is not CommonMark compliant, which is what allows for its
faster parsing, at the expense of issues, for example, with nested inline parsing.
See [mistletoes's explanation](https://github.com/miyuchina/mistletoe/blob/master/performance.md)
for further details.
```
