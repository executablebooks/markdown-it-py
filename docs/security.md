(md/security)=

# Security

By default, the `MarkdownIt` parser is initialised to comply with the [CommonMark spec](https://spec.commonmark.org/), which allows for parsing arbitrary HTML tags.
This can be useful for many use cases, for example when writing articles for one's own blog or composing technical documentation for a software package.

However, extra precautions are needed when parsing content from untrusted sources.
Generally, the output should be run through sanitizers to ensure safety and prevent vulnerabilities like cross-site scripting (XSS).
With `markdown-it`/`markdown-it-py`, there are two strategies for doing this:

1. Enable HTML (as is needed for full CommonMark compliance), and then use external sanitizer package(s).
2. Disable HTML, and then use [plugins](md/plugins) to selectively enable markup features.
   This removes the need for further sanitizing.

```{warning}
Unlike the original `markdown-it` JavaScript project, which uses the second, safe-by-default strategy, `markdown-it-py` enables the more convenient, but less secure, CommonMark-compliant settings by default.

This is not safe when using `markdown-it-py` in web applications that parse user-submitted content.
In such cases, [using the `js-default` preset](using.md) is strongly recommended.
For example:

```python
from markdown_it import MarkdownIt
MarkdownIt("js-default").render("*user-submitted* text")
```

Note that even with the default configuration, `markdown-it-py` prohibits some kinds of links which could be used for XSS:

- `javascript:`, `vbscript:`
- `file:`
- `data:` (except some images: gif/png/jpeg/webp)

If you find a security problem, please report it to <executablebooks@gmail.com>.

## Plugins

Usually, plugins operate with tokenized content, and that's enough to provide safe output.

But there is one non-evident case you should know - don't allow plugins to generate arbitrary `id` and `name` attributes.
If those depend on user input - always add prefixes to avoid DOM clobbering.
See [discussion](https://github.com/markdown-it/markdown-it/issues/28) for details.

So, if you decide to use plugins that add extended class syntax or autogenerate header anchors - be careful.
