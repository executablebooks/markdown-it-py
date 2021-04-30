# Change Log

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
