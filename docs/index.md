# markdown-it-py

> Markdown parser done right.

- {fa}`check,text-success mr-1` Follows the __[CommonMark spec](http://spec.commonmark.org/)__ for baseline parsing
- {fa}`check,text-success mr-1` Configurable syntax: you can add new rules and even replace existing ones.
- {fa}`check,text-success mr-1` Pluggable: Adds syntax extensions to extend the parser (see the [plugin list](md/plugins))
- {fa}`check,text-success mr-1` High speed (see our [benchmarking tests](md/performance))
- {fa}`check,text-success mr-1` [Safe by default](md/security)
- {fa}`check,text-success mr-1` Member of [Google's Assured Open Source Software](https://cloud.google.com/assured-open-source-software/docs/supported-packages)

For a good introduction to [markdown-it] see the __[Live demo](https://markdown-it.github.io)__.
This is a Python port of the well used [markdown-it], and some of its associated plugins.
The driving design philosophy of the port has been to change as little of the fundamental code structure (file names, function name, etc) as possible, just sprinkling in a little Python syntactical sugar ✨.
It is very simple to write complimentary extensions for both language implementations!

## References & Thanks

Big thanks to the authors of [markdown-it]

- Alex Kocharin [github/rlidwka](https://github.com/rlidwka)
- Vitaly Puzrin [github/puzrin](https://github.com/puzrin)

Also [John MacFarlane](https://github.com/jgm) for his work on the CommonMark spec and reference implementations.

## Related Links

- <https://github.com/jgm/CommonMark> - reference CommonMark implementations in C & JS, also contains latest spec & online demo.
- <http://talk.commonmark.org> - CommonMark forum, good place to collaborate developers' efforts.

```{toctree}
:maxdepth: 2

using
architecture
other
plugins
contributing
api/markdown_it
```

[markdown-it]: https://github.com/markdown-it/markdown-it
