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
