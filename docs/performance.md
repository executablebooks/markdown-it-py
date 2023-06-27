(md/performance)=

# Performance

You can view our continuous integration benchmarking analysis at: <https://executablebooks.github.io/markdown-it-py/dev/bench/>,
or you can run it for yourself within the repository:

```bash
tox -e py311-bench-packages -- --benchmark-columns mean,stddev
```

|       package        | version | mean (ms) | stddev  |
| -------------------- | ------- | --------- | ------- |
| markdown-it-pyrs[^1] | 0.2.1   | 6.410     | 0.426   |
| mistune[^2]          | 3.0.1   | 80.409    | 2.335   |
| **markdown-it-py**   | 3.0.0   | 97.242    | 4.427   |
| mistletoe            | 1.1.0   | 99.633    | 4.628   |
| commonmark-py        | 0.9.1   | 300.403   | 9.706   |
| pymarkdown           | 3.4.3   | 387.775   | 10.394  |
| pymarkdown (+extras) | 3.4.3   | 646.564   | 11.316  |
| panflute             | 2.3.0   | 860.105   | 208.607 |

As you can see, `markdown-it-py` doesn't pay with speed for it's flexibility.

[^1]: `markdown-it-pyrs` is a Rust implementation of `markdown-it-py`'s parser, in beta development, check it out at: <https://github.com/chrisjsewell/markdown-it-pyrs>
[^2]: `mistune` is not CommonMark compliant, which is what allows for its
faster parsing, at the expense of issues, for example, with nested inline parsing.
See [mistletoes's explanation](https://github.com/miyuchina/mistletoe/blob/master/performance.md) for further details.
