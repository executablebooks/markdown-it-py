# Change Log

## 0.5.7 - 2020-12-13

✨ NEW: Add smartquotes, thanks to [@tsutsu3](https://github.com/tsutsu3).

This extension will convert basic quote marks to their opening and closing variants:

- 'single quotes' -> ‘single quotes’
- "double quotes" -> “double quotes”

It can be activated by:

```python
md = MarkdownIt().enable("replacements").enable("smartquotes")
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
