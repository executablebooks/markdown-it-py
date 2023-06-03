# Change Log

## 3.0.0 - 2023-06-03

⚠️ This release contains some minor breaking changes in the internal API and improvements to the parsing strictness.

**Full Changelog**: <https://github.com/executablebooks/markdown-it-py/compare/v2.2.0...v3.0.0>

### ⬆️ UPGRADE: Drop support for Python 3.7

Also add testing for Python 3.11

### ⬆️ UPGRADE: Update from upstream markdown-it `12.2.0` to `13.0.0`

A key change is the addition of a new `Token` type, `text_special`, which is used to represent HTML entities and backslash escaped characters.
This ensures that (core) typographic transformation rules are not incorrectly applied to these texts.
The final core rule is now the new `text_join` rule, which joins adjacent `text`/`text_special` tokens,
and so no `text_special` tokens should be present in the final token stream.
Any custom typographic rules should be inserted before `text_join`.

A new `linkify` rule has also been added to the inline chain, which will linkify full URLs (e.g. `https://example.com`),
and fixes collision of emphasis and linkifier (so `http://example.org/foo._bar_-_baz` is now a single link, not emphasized).
Emails and fuzzy links are not affected by this.

* ♻️ Refactor backslash escape logic, add `text_special` [#276](https://github.com/executablebooks/markdown-it-py/pull/276)
* ♻️ Parse entities to `text_special` token [#280](https://github.com/executablebooks/markdown-it-py/pull/280)
* ♻️ Refactor: Add linkifier rule to inline chain for full links [#279](https://github.com/executablebooks/markdown-it-py/pull/279)
* ‼️ Remove `(p)` => `§` replacement in typographer [#281](https://github.com/executablebooks/markdown-it-py/pull/281)
* ‼️ Remove unused `silent` arg in `ParserBlock.tokenize` [#284](https://github.com/executablebooks/markdown-it-py/pull/284)
* 🐛 FIX: numeric character reference passing [#272](https://github.com/executablebooks/markdown-it-py/pull/272)
* 🐛 Fix: tab preventing paragraph continuation in lists [#274](https://github.com/executablebooks/markdown-it-py/pull/274)
* 👌 Improve nested emphasis parsing [#273](https://github.com/executablebooks/markdown-it-py/pull/273)
* 👌 fix possible ReDOS in newline rule [#275](https://github.com/executablebooks/markdown-it-py/pull/275)
* 👌 Improve performance of `skipSpaces`/`skipChars` [#271](https://github.com/executablebooks/markdown-it-py/pull/271)
* 👌 Show text of `text_special` in `tree.pretty` [#282](https://github.com/executablebooks/markdown-it-py/pull/282)

### ♻️ REFACTOR: Replace most character code use with strings

The use of `StateBase.srcCharCode` is deprecated (with backward-compatibility), and all core uses are replaced by `StateBase.src`.

Conversion of source string characters to an integer representing the Unicode character is prevalent in the upstream JavaScript implementation, to improve performance.
However, it is unnecessary in Python and leads to harder to read code and performance deprecations (during the conversion in the `StateBase` initialisation).

See [#270](https://github.com/executablebooks/markdown-it-py/pull/270), thanks to [@hukkinj1](https://github.com/hukkinj1).

### ♻️ Centralise indented code block tests

For CommonMark, the presence of indented code blocks prevent any other block element from having an indent of greater than 4 spaces.
Certain Markdown flavors and derivatives, such as mdx and djot, disable these code blocks though, since it is more common to use code fences and/or arbitrary indenting is desirable.
Previously, disabling code blocks did not remove the indent limitation, since most block elements had the 3 space limitation hard-coded.
This change centralised the logic of applying this limitation (in `StateBlock.is_code_block`), and only applies it when indented code blocks are enabled.

This allows for e.g.

```md
<div>
  <div>

    I can indent as much as I want here.

  <div>
<div>
```

See [#260](https://github.com/executablebooks/markdown-it-py/pull/260)

### 🔧 Maintenance changes

Strict type annotation checking has been applied to the whole code base,
[ruff](https://github.com/charliermarsh/ruff) is now used for linting,
and fuzzing tests have been added to the CI, to integrate with Google [OSS-Fuzz](https://github.com/google/oss-fuzz/tree/master/projects/markdown-it-py) testing, thanks to [@DavidKorczynski](https://github.com/DavidKorczynski).

* 🔧 MAINTAIN: Make type checking strict [#](https://github.com/executablebooks/markdown-it-py/pull/267)
* 🔧 Add typing of rule functions [#283](https://github.com/executablebooks/markdown-it-py/pull/283)
* 🔧 Move linting from flake8 to ruff [#268](https://github.com/executablebooks/markdown-it-py/pull/268)
* 🧪 CI: Add fuzzing workflow for PRs [#262](https://github.com/executablebooks/markdown-it-py/pull/262)
* 🔧 Add tox env for fuzz testcase run [#263](https://github.com/executablebooks/markdown-it-py/pull/263)
* 🧪 Add OSS-Fuzz set up by @DavidKorczynski in [#255](https://github.com/executablebooks/markdown-it-py/pull/255)
* 🧪 Fix fuzzing test failures [#254](https://github.com/executablebooks/markdown-it-py/pull/254)

## 2.2.0 - 2023-02-22

### What's Changed

* ⬆️ UPGRADE: Allow linkify-it-py v2 by @hukkin in [#218](https://github.com/executablebooks/markdown-it-py/pull/218)
* 🐛 FIX: CVE-2023-26303 by @chrisjsewell in [#246](https://github.com/executablebooks/markdown-it-py/pull/246)
* 🐛 FIX: CLI crash on non-utf8 character by @chrisjsewell in [#247](https://github.com/executablebooks/markdown-it-py/pull/247)
* 📚 DOCS: Update the example by @redstoneleo in [#229](https://github.com/executablebooks/markdown-it-py/pull/229)
* 📚 DOCS: Add section about markdown renderer by @holamgadol in [#227](https://github.com/executablebooks/markdown-it-py/pull/227)
* 🔧 Create SECURITY.md by @chrisjsewell in [#248](https://github.com/executablebooks/markdown-it-py/pull/248)
* 🔧 MAINTAIN: Update mypy's additional dependencies by @hukkin in [#217](https://github.com/executablebooks/markdown-it-py/pull/217)
* Fix typo by @jwilk in [#230](https://github.com/executablebooks/markdown-it-py/pull/230)
* 🔧 Bump GH actions by @chrisjsewell in [#244](https://github.com/executablebooks/markdown-it-py/pull/244)
* 🔧 Update benchmark pkg versions by @chrisjsewell in [#245](https://github.com/executablebooks/markdown-it-py/pull/245)

### New Contributors

Thanks to 🎉

* @jwilk made their first contribution in [#230](https://github.com/executablebooks/markdown-it-py/pull/230)
* @holamgadol made their first contribution in [#227](https://github.com/executablebooks/markdown-it-py/pull/227)
* @redstoneleo made their first contribution in [#229](https://github.com/executablebooks/markdown-it-py/pull/229)

**Full Changelog**: <https://github.com/executablebooks/markdown-it-py/compare/v2.1.0...v2.2.0>

## 2.1.0 - 2022-04-15

This release is primarily to replace the `attrs` package dependency,
with the built-in Python `dataclasses` package.

This should not be a breaking change, for most use cases.

- ⬆️ UPGRADE: Drop support for EOL Python 3.6 (#194)
- ♻️ REFACTOR: Move `Rule`/`Delimiter` classes from `attrs` to `dataclass` (#211)
- ♻️ REFACTOR: Move `Token` class from `attrs` to `dataclass` (#211)
- ‼️ Remove deprecated `NestedTokens` and `nest_tokens`
- ✨ NEW: Save ordered list numbering (#192)
- 🐛 FIX: Combination of blockquotes, list and newlines causes `IndexError` (#207)

## 2.0.1 - 2022-24-01

- 🐛 FIX: Crash when file ends with empty blockquote line.
- ✨ NEW: Add `inline_definitions` option.
  This option allows for `definition` token to be inserted into the token stream, at the point where the definition is located in the source text.
  It is useful for cases where one wishes to capture a "loseless" syntax tree of the parsed Markdown (in conjunction with the `store_labels` option).

## 2.0.0 - 2021-12-03

- ⬆️ Update: Sync with markdown-it v12.1.0 and CommonMark v0.30
- ♻️ REFACTOR: Port `mdurl` and `punycode` for URL normalisation (thanks to @hukkin!).
  This port fixes the outstanding CommonMark compliance tests.
- ♻️ REFACTOR: Remove `AttrDict`.
  This is no longer used is core or mdit-py-plugins, instead standard dictionaries are used.
- 👌 IMPROVE: Use `__all__` to signal re-exports

## 1.1.0 - 2021-05-08

 ⬆️ UPGRADE: `attrs` -> v21 (#165)

This release has no breaking changes
(see: <https://github.com/python-attrs/attrs/blob/main/CHANGELOG.rst>)

## 1.0.0 - 2021-05-02

[Full commit log](https://github.com/executablebooks/markdown-it-py/compare/v0.6.2...v1.0.0)

The first stable release of markdown-it-py 🎉

See the changes in the beta releases below,
thanks to all the [contributors](https://github.com/executablebooks/markdown-it-py/graphs/contributors?from=2020-03-22&to=2021-05-02&type=c) in the last year!

## 1.0.0b3 - 2021-05-01

- 👌 IMPROVE: Add `RendererProtocol` type, for typing renderers (thanks to [@hukkinj1](https://github.com/hukkinj1))
- 🔧 MAINTAIN: `None` is no longer allowed as a valid `src` input for `StateBase` subclasses

## 1.0.0b2 - 2021-04-25

‼️ BREAKING: Move `mdit-py-plugins` out of the core install requirements and into a `plugins` extra.

Synchronised code with the upstream Markdown-It `v12.0.6`:

- 🐛 FIX: Raise HTML blocks priority to resolve conflict with headings
- 🐛 FIX: Newline not rendered in image alt attribute

## 1.0.0b1 - 2021-03-31

[Full commit log](https://github.com/executablebooks/markdown-it-py/compare/v0.6.2...9ecda04)

This is the first beta release of the stable v1.x series.

There are four notable (and breaking) changes:

1. The code has been synchronised with the upstream Markdown-It `v12.0.4`.
   In particular, this update alters the parsing of tables to be consistent with the GFM specification: <https://github.github.com/gfm/#tables-extension->
   A number of parsing performance and validation improvements are also included.
2. `Token.attrs` are now stored as dictionaries, rather than a list of lists.
   This is a departure from upstream Markdown-It, allowed by Pythons guarantee of ordered dictionaries (see [#142](https://github.com/markdown-it/markdown-it/issues/142)), and is the more natural representation.
   Note `attrGet`, `attrSet`, `attrPush` and `attrJoin` methods remain identical to those upstream,
   and `Token.as_dict(as_upstream=True)` will convert the token back to a directly comparable dict.
3. The use of `AttrDict` has been replaced:
   For `env` any Python mutable mapping is now allowed, and so attribute access to keys is not (differing from the Javascript dictionary).
   For `MarkdownIt.options` it is now set as an `OptionsDict`, which is a dictionary sub-class, with attribute access only for core MarkdownIt configuration keys.
4. Introduction of the `SyntaxTreeNode`.
   This is a more comprehensive replacement for `nest_tokens` and `NestedTokens` (which are now deprecated).
   It allows for the `Token` stream to be converted to/from a nested tree structure, with opening/closing tokens collapsed into a single `SyntaxTreeNode` and the intermediate tokens set as children.
   See [Creating a syntax tree](https://markdown-it-py.readthedocs.io/en/latest/using.html#creating-a-syntax-tree) documentation for details.

### Additional Fixes 🐛

- Fix exception due to empty lines after blockquote+footnote
- Fix linkify link nesting levels
- Fix the use of `Ruler.at` for plugins
- Avoid fenced token mutations during rendering
- Fix CLI version info and correct return of exit codes

## 0.6.2 - 2021-02-07

This release brings Markdown-It-Py inline with Markdown-It v11.0.1 (2020-09-14), applying two fixes:

- Fix blockquote lazy newlines, [[#696](https://github.com/markdown-it/markdown-it/issues/696)].
- Fix missed mappings for table rows, [[#705](https://github.com/markdown-it/markdown-it/issues/705)].

Thanks to [@hukkinj1](https://github.com/hukkinj1)!

## 0.6.1 - 2021-01-01

This release provides some improvements to the code base:

- 🐛 FIX: Do not resolve backslash escapes inside auto-links
- 🐛 FIX: Add content to image tokens
- 👌 IMPROVE: Add more type annotations, thanks to [@hukkinj1](https://github.com/hukkinj1)

## 0.6.0 - 2020-12-15

🗑 DEPRECATE: Move plugins to `mdit_py_plugins`

Plugins (in `markdown_it.extensions`) have now been moved to [executablebooks/mdit-py-plugins](https://github.com/executablebooks/mdit-py-plugins).
This will allow for their maintenance to occur on a different cycle to the core code, facilitating the release of a v1.0.0 for this package

🔧 MAINTAIN: Add [mypy](https://mypy.readthedocs.io) type-checking, thanks to [@hukkinj1](https://github.com/hukkinj1).

## 0.5.8 - 2020-12-13

✨ NEW: Add linkify, thanks to [@tsutsu3](https://github.com/tsutsu3).

This extension uses [linkify-it-py](https://github.com/tsutsu3/linkify-it-py) to identify URL links within text:

- `github.com` -> `<a href="http://github.com">github.com</a>`

**Important:** To use this extension you must install linkify-it-py; `pip install markdown-it-py[linkify]`

It can then be activated by:

```python
from markdown_it import MarkdownIt
md = MarkdownIt().enable("linkify")
md.options["linkify"] = True
```

## 0.5.7 - 2020-12-13

✨ NEW: Add smartquotes, thanks to [@tsutsu3](https://github.com/tsutsu3).

This extension will convert basic quote marks to their opening and closing variants:

- 'single quotes' -> ‘single quotes’
- "double quotes" -> “double quotes”

It can be activated by:

```python
from markdown_it import MarkdownIt
md = MarkdownIt().enable("smartquotes")
md.options["typographer"] = True
```

✨ NEW: Add markdown-it-task-lists plugin, thanks to [@wna-se](https://github.com/wna-se).

This is a port of the JS [markdown-it-task-lists](https://github.com/revin/markdown-it-task-lists),
for building task/todo lists out of markdown lists with items starting with `[ ]` or `[x]`.
For example:

```markdown
- [ ] An item that needs doing
- [x] An item that is complete
```

This plugin can be activated by:

```python
from markdown_it import MarkdownIt
from markdown_it.extensions.tasklists import tasklists_plugin
md = MarkdownIt().use(tasklists_plugin)
```

🐛 Various bug fixes, thanks to [@hukkinj1](https://github.com/hukkinj1):

- Do not copy empty `env` arg in `MarkdownIt.render`
- `_Entities.__contains__` fix return data
- Parsing of unicode ordinals
- Handling of final character in `skipSpacesBack` and `skipCharsBack` methods
- Avoid exception when document ends in heading/blockquote marker

🧪 TESTS: Add CI for Python 3.9 and PyPy3

## 0.5.6 - 2020-10-21

- ✨ NEW: Add simple typographic replacements, thanks to [@tsutsu3](https://github.com/tsutsu3):
  This allows you to add the `typographer` option to the parser, to replace particular text constructs:

  - ``(c)``, ``(C)`` → ©
  - ``(tm)``, ``(TM)`` → ™
  - ``(r)``, ``(R)`` → ®
  - ``(p)``, ``(P)`` → §
  - ``+-`` → ±
  - ``...`` → …
  - ``?....`` → ?..
  - ``!....`` → !..
  - ``????????`` → ???
  - ``!!!!!`` → !!!
  - ``,,,`` → ,
  - ``--`` → &ndash
  - ``---`` → &mdash

  ```python
  md = MarkdownIt().enable("replacements")
  md.options["typographer"] = True
  ```

- 📚 DOCS: Improve documentation for CLI, thanks to [@westurner](https://github.com/westurner)
- 👌 IMPROVE: Use `re.sub()` instead of `re.subn()[0]`, thanks to [@hukkinj1](https://github.com/hukkinj1)
- 🐛 FIX: An exception raised by having multiple blank lines at the end of some files

## 0.5.5 - 2020-09-27

👌 IMPROVE: Add `store_labels` option.

This allows for storage of original reference label in link/image token's metadata,
which can be useful for renderers.

## 0.5.4 - 2020-09-08

✨ NEW: Add `anchors_plugin` for headers, which can produce:

```html
<h1 id="title-string">Title String <a class="header-anchor" href="#title-string">¶</a></h1>
```

## 0.5.3 - 2020-09-04

🐛 Fixed an undefined variable in the reference block.

## 0.5.2 - 2020-08-22

🐛 Fixed an `IndexError` in `container_plugin`, when there is no newline on the closing tag line.

## 0.5.1 - 2020-08-21

⬆️ UPGRADE: attrs -> v20

This is not breaking, since it only deprecates Python 3.4 (see [CHANGELOG.rst](https://github.com/python-attrs/attrs/blob/master/CHANGELOG.rst))

## 0.5.0 - 2020-08-18

### Added ✨

- `deflist` and `dollarmath` plugins (see [plugins list](https://markdown-it-py.readthedocs.io/en/latest/plugins.html)).

### Improved 👌

- Added benchmarking tests and CI (see <https://executablebooks.github.io/markdown-it-py/dev/bench/>)
- Improved performance of computing ordinals (=> 10-15% parsing speed increase).
  Thanks to [@sildar](https://github.com/sildar)!

### Fixed 🐛

- Stopped empty lines at the end of the document, after certain list blocks, raising an exception (#36).
- Allow myst-role to accept names containing digits (0-9).

## 0.4.9 - 2020-08-11

### Added ✨

- `containers` plugin (see [plugins list](https://markdown-it-py.readthedocs.io/en/latest/plugins.html))

### Documented 📚

- Plugins and improved contributing section
