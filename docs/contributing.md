# Contribute

We welcome all contributions! ✨

See the [EBP Contributing Guide](https://executablebooks.org/en/latest/contribute/) for general details, and below for guidance specific to markdown-it-py.

Before continuing, make sure you've read:

1. [Architecture description](md/architecture)
2. [Security considerations](md/security)
3. [API documentation](api/markdown_it)

## Development guidance

Details of the port can be found in the `markdown_it/port.yaml` and in `port.yaml` files, within the extension folders.

## Code Style

Code style is tested using [ruff](https://github.com/astral-sh/ruff), with the configuration set in `pyproject.toml`, and code formatted with [black](https://github.com/ambv/black).

Installing with `markdown-it-py[code_style]` makes the [pre-commit](https://pre-commit.com/) package available, which will ensure this style is met before commits are submitted, by reformatting the code and testing for lint errors.
It can be setup by:

```shell
>> cd markdown-it-py
>> pre-commit install
```

Editors like VS Code also have automatic code reformat utilities, which can adhere to this standard.

All functions and class methods should be annotated with types and include a docstring.

## Testing

For code tests, markdown-it-py uses [pytest](https://docs.pytest.org):

```shell
>> cd markdown-it-py
>> pytest
```

You can also use [tox](https://tox.readthedocs.io), to run the tests in multiple isolated environments (see the `tox.ini` file for available test environments):

```shell
>> cd markdown-it-py
>> tox -p
```

This can also be used to run benchmarking tests using [pytest-benchmark](https://pytest-benchmark.readthedocs.io):

```shell
>> cd markdown-it-py
tox -e py39-bench-packages -- --benchmark-min-rounds 50
```

For documentation build tests:

```shell
>> cd markdown-it-py/docs
>> make clean
>> make html-strict
```

## Contributing a plugin

1. Does it already exist as JavaScript implementation ([see npm](https://www.npmjs.com/search?q=keywords:markdown-it-plugin))?
   Where possible try to port directly from that.
   It is usually better to modify existing code, instead of writing all from scratch.
2. Try to find the right place for your plugin rule:
  - Will it conflict with existing markup (by priority)?
    - If yes - you need to write an inline or block rule.
    - If no - you can morph tokens within core chains.
  - Remember that token morphing in core chains is always more simple than writing
    block or inline rules, if you don't copy existing ones. However,
    block and inline rules are usually faster.
  - Sometimes, it's enough to only modify the renderer, for example, to add
    header IDs or `target="_blank"` for the links.

## FAQ

### I need async rule, how to do it?

Sorry. You can't do it directly. All complex parsers are sync by nature. But you
can use workarounds:

1. On parse phase, replace content by random number and store it in `env`.
2. Do async processing over collected data.
3. Render content and replace those random numbers with text; or replace first, then render.

Alternatively, you can render HTML, then parse it to DOM, or
[cheerio](https://github.com/cheeriojs/cheerio) AST, and apply transformations
in a more convenient way.

### How to replace part of text token with link?

The right sequence is to split text to several tokens and add link tokens in between.
The result will be: `text` + `link_open` + `text` + `link_close` + `text`.

See implementations of [linkify](https://github.com/markdown-it/markdown-it/blob/master/lib/rules_core/linkify.js) and [emoji](https://github.com/markdown-it/markdown-it-emoji/blob/master/lib/replace.js) - those do text token splits.

__Note:__ Don't try to replace text with HTML markup! That's not secure.

### Why is my inline rule not executed?

The inline parser skips pieces of texts to optimize speed. It stops only on [a small set of chars](https://github.com/markdown-it/markdown-it/blob/master/lib/rules_inline/text.js), which can be tokens. We did not made this list extensible for performance reasons too.

If you are absolutely sure that something important is missing there - create a
ticket and we will consider adding it as a new charcode.
