(md/performance)=

# Performance

You can view our continuous integration benchmarking analysis at: <https://executablebooks.github.io/markdown-it-py/dev/bench/>,
or you can run it for yourself within the repository:

```bash
tox -e py311-bench-packages -- --benchmark-columns mean,stddev
```

|       package        | version | mean (ms) | stddev |
| -------------------- | ------- | --------- | ------ |
| pyromark[^1]         | 0.2.0   | 1.123     | 0.029  |
| markdown-it-pyrs[^2] | 0.2.2   | 5.167     | 0.159  |
| **markdown-it-py**   | 3.0.0   | 84.969    | 3.028  |
| mistletoe            | 1.1.0   | 86.625    | 2.830  |
| mistune[^3]          | 3.0.1   | 92.804    | 2.495  |
| commonmark-py        | 0.9.1   | 258.978   | 9.344  |
| pymarkdown           | 3.4.3   | 334.764   | 0.325  |
| pymarkdown (+extras) | 3.4.3   | 595.462   | 11.333 |
| panflute             | 2.3.0   | 1020.401  | 2.806  |

As you can see, `markdown-it-py` doesn't pay with speed for it's flexibility.

[^1]: `pyromark` is written in Rust. It wins in performance, but is currently inferior in advanced functionality.
[^2]: `markdown-it-pyrs` is a Rust implementation of `markdown-it-py`'s parser, in beta development, check it out at: <https://github.com/chrisjsewell/markdown-it-pyrs>
[^3]: `mistune` is not CommonMark compliant, which is what allows for its
faster parsing, at the expense of issues, for example, with nested inline parsing.
See [mistletoes's explanation](https://github.com/miyuchina/mistletoe/blob/master/performance.md) for further details.
