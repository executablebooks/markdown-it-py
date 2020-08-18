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

Name (time in ms)               Mean              StdDev
-----------------------------------------------------------------
test_mistune                 82.0024 (1.0)       10.7779 (1.61)
test_markdown_it_py         190.9571 (2.33)       6.6946 (1.0)
test_mistletoe              247.1633 (3.01)      16.3956 (2.45)
test_commonmark_py          482.6411 (5.89)      67.8219 (10.13)
test_panflute             1,043.0018 (12.72)    229.1034 (34.22)
test_pymarkdown             964.6831 (11.76)     77.2787 (11.54)
test_pymarkdown_extra     1,051.8680 (12.83)     32.2971 (4.82)
-----------------------------------------------------------------
```

As you can see, `markdown-it-py` doesn't pay with speed for it's flexibility.

```{note}
`mistune` is not CommonMark compliant, which is what allows for its
faster parsing, at the expense of issues, for example, with nested inline parsing.
See [mistletoes's explanation](https://github.com/miyuchina/mistletoe#performance)
for further details.
```
