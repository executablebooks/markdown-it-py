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

If you find a security problem - contact us via tracker or email.
Such reports are fixed with top priority.

## Plugins

Usually, plugins operate with tokenized content, and that's enough to provide safe output.

But there is one non-evident case you should know - don't allow plugins to generate arbitrary element `id` and `name`.
If those depend on user input - always add prefixes to avoid DOM clobbering.
See [discussion](https://github.com/markdown-it/markdown-it/issues/28) for details.

So, if you decide to use plugins that add extended class syntax or autogenerating header anchors - be careful.

(md/performance)=

# Performance

markdown-it-py is the fastest _**CommonMark compliant**_ parser written in python!

You can view our continuous integration benchmarking analysis at: <https://executablebooks.github.io/markdown-it-py/dev/bench/>,
or you can run it for yourself within the repository:

```console
$ tox -e py38-bench-packages -- --benchmark-columns mean,stddev

Name (time in ms)               Mean             StdDev
-----------------------------------------------------------------
test_mistune                 77.0086 (1.0)       0.9199 (1.0)
test_markdown_it_py         220.1133 (2.86)      6.8678 (7.47)
test_mistletoe              249.1983 (3.24)     20.6663 (22.47)
test_commonmark_py          503.5010 (6.54)     21.1818 (23.03)
test_panflute               988.7235 (12.84)    41.9010 (45.55)
test_pymarkdown           1,088.7477 (14.14)    59.3361 (64.51)
test_pymarkdown_extra     1,071.4707 (13.91)    38.1846 (41.51)
-----------------------------------------------------------------
```

As you can see, `markdown-it-py` doesn't pay with speed for it's flexibility.

```{note}
`mistune` is not CommonMark compliant, which is what allows for its
faster parsing, at the expense of issues, for example, with nested inline parsing.
See [mistletoes's explanation](https://github.com/miyuchina/mistletoe#performance)
for further details.
```
