# Change Log

## 4.3.0 - 2026-11-10

This release fixes two quadratic-time parsing paths that let crafted input stall rendering for minutes (security),
aligns several parsing rules with CommonMark 0.31.2 and markdown-it 15.0.x,
turns parser rules that never advance into a `RuntimeError` instead of an infinite loop,
makes rendering linear on PyPy and free-threaded CPython, and adds support for Python 3.14.
Python 3.10 is still supported.
If you write plugins or render rules, or edit `SyntaxTreeNode` trees, please read the upgrade notes at the end.

### 🔒 Security

* 👌 Fix quadratic-time inline parsing of long runs of characters that start an inline rule without completing one (such as `&`, `<`, `~` or incomplete entities), which let a few hundred kilobytes of input stall rendering for seconds to minutes, in [#423](https://github.com/executablebooks/markdown-it-py/pull/423), thanks to [@hdimer](https://github.com/hdimer) ([#411](https://github.com/executablebooks/markdown-it-py/pull/411))
* 👌 Reject unterminated inline HTML (`<!--`, `<?`, `<![CDATA[`, `<!X`) in constant time when `html` is enabled (as in the default `commonmark` preset), instead of rescanning to the end of the input for every opener, in [#428](https://github.com/executablebooks/markdown-it-py/pull/428)

### ✨ New

* ✨ Add `--enable-tables` to the CLI for file, standard input and interactive parsing in [#425](https://github.com/executablebooks/markdown-it-py/pull/425), thanks to [@user01010111](https://github.com/user01010111) ([#422](https://github.com/executablebooks/markdown-it-py/pull/422)); requested by [@hartwork](https://github.com/hartwork) in [#352](https://github.com/executablebooks/markdown-it-py/issues/352)
* ⬆️ Add support for Python 3.14 in [#462](https://github.com/executablebooks/markdown-it-py/pull/462)

### 👌 Improved

* 👌 Raise `RuntimeError` instead of looping forever when a block or inline rule reports a match without advancing (or moves backwards), or when no block rule matches a line, as markdown-it does, in [#444](https://github.com/executablebooks/markdown-it-py/pull/444), thanks to [@rupayon123](https://github.com/rupayon123), [@hukkin](https://github.com/hukkin) ([#336](https://github.com/executablebooks/markdown-it-py/pull/336)) and [@inchang-ing](https://github.com/inchang-ing) ([#443](https://github.com/executablebooks/markdown-it-py/pull/443)); requested by [@acaprino](https://github.com/acaprino) in [#441](https://github.com/executablebooks/markdown-it-py/issues/441)
* 👌 Fix quadratic-time HTML rendering on PyPy, GraalPy and free-threaded CPython by joining the rendered fragments once, in [#458](https://github.com/executablebooks/markdown-it-py/pull/458), thanks to [@DicksonWu654](https://github.com/DicksonWu654)
* 👌 Make `StateBase.src` a plain attribute, for about 4–11% faster parsing on CPython, in [#450](https://github.com/executablebooks/markdown-it-py/pull/450), thanks to [@deadstrobe5](https://github.com/deadstrobe5)
* 👌 Build block line markers with one scan per line instead of one step per character in [#449](https://github.com/executablebooks/markdown-it-py/pull/449), thanks to [@John-Cusack](https://github.com/John-Cusack)
* 👌 Name the Windows end-of-input keys (Ctrl-Z then Enter) in the CLI's interactive prompt and `-h` text in [#463](https://github.com/executablebooks/markdown-it-py/pull/463)

### 🐛 Fixed

* 🐛 Fix HTML blocks of types 1–5 (comments, processing instructions, declarations, CDATA, `script`/`pre`/`style`/`textarea`) ending at a blank line inside a list item or blockquote, porting markdown-it 14.2.0, in [#406](https://github.com/executablebooks/markdown-it-py/pull/406), thanks to [@binggao1230](https://github.com/binggao1230); reported by [@Jayman2000](https://github.com/Jayman2000) in [#377](https://github.com/executablebooks/markdown-it-py/issues/377)
* 🐛 Fix HTML block starts per CommonMark 0.31.2: lowercase declarations such as `<!doctype html>` start a block and interrupt a paragraph, and tag names match case-insensitively in ASCII only, in [#440](https://github.com/executablebooks/markdown-it-py/pull/440), thanks to [@rupayon123](https://github.com/rupayon123); reported by [@p5ych0](https://github.com/p5ych0) in [#437](https://github.com/executablebooks/markdown-it-py/issues/437)
* 🐛 Fix code spans rendered as literal backticks after an unclosed link or image label, and count only U+0020 spaces (not tabs or no-break spaces) when deciding whether to strip a code span's padding, porting markdown-it 15.0.1, in [#439](https://github.com/executablebooks/markdown-it-py/pull/439), thanks to [@SparkUiX](https://github.com/SparkUiX); reported by [@felzab](https://github.com/felzab) in [#438](https://github.com/executablebooks/markdown-it-py/issues/438)
* 🐛 Trim and split with the CommonMark whitespace set instead of Python's, so U+001C–U+001F and U+0085 are no longer dropped from paragraphs, headings, table cells and fence info strings, and distinct reference labels no longer match each other, in [#433](https://github.com/executablebooks/markdown-it-py/pull/433), thanks to [@Nexory](https://github.com/Nexory) ([#418](https://github.com/executablebooks/markdown-it-py/pull/418))
* 🐛 Preserve IPv6 host brackets (e.g. `http://[::1]:8000/`) in normalized link and image URLs, porting markdown-it 15.0.1, in [#459](https://github.com/executablebooks/markdown-it-py/pull/459), thanks to [@Jinyong-Li](https://github.com/Jinyong-Li)
* 🐛 Fix task-list detection consuming a literal `[ ]`/`[x]` at the start of an indented code block in a list item in [#451](https://github.com/executablebooks/markdown-it-py/pull/451), thanks to [@AryanRG](https://github.com/AryanRG)
* 🐛 Fix an `IndexError` in the `html_block` and `heading` rules at the end of the input (a table in a blockquote that ends on `>`) in [#416](https://github.com/executablebooks/markdown-it-py/pull/416), thanks to [@saket3395](https://github.com/saket3395); reported by [@WilcoPancras](https://github.com/WilcoPancras) in [#415](https://github.com/executablebooks/markdown-it-py/issues/415)
* 🐛 Keep backslash escapes and entities in image alt text (`![a \* b](/u)` gives `alt="a * b"`), porting markdown-it 15.0.0, in [#446](https://github.com/executablebooks/markdown-it-py/pull/446), thanks to [@gyanu2507](https://github.com/gyanu2507); reported by [@kdeldycke](https://github.com/kdeldycke) in [#445](https://github.com/executablebooks/markdown-it-py/issues/445)
* 🐛 Keep code span text in image alt text, porting markdown-it 15.0.0, in [#460](https://github.com/executablebooks/markdown-it-py/pull/460), thanks to [@jayhemnani9910](https://github.com/jayhemnani9910)
* 🐛 Keep hard breaks and inline HTML in image alt text in [#409](https://github.com/executablebooks/markdown-it-py/pull/409), thanks to [@chuenchen309](https://github.com/chuenchen309)
* 🐛 Keep edits to the children of inline and image nodes in `SyntaxTreeNode.to_tokens()` in [#453](https://github.com/executablebooks/markdown-it-py/pull/453), thanks to [@KennyMcSimpson](https://github.com/KennyMcSimpson); edited tokens are copied, so the token stream the tree was built from is left unchanged ([#464](https://github.com/executablebooks/markdown-it-py/pull/464))
* 🐛 Fix rule chains staying stale after `Ruler.enable`, `disable` or `enableOnly` raised on an unknown rule name in [#457](https://github.com/executablebooks/markdown-it-py/pull/457), thanks to [@IlyaKhalafi](https://github.com/IlyaKhalafi) ([#456](https://github.com/executablebooks/markdown-it-py/issues/456))
* 🐛 Fix `MarkdownIt.enable()` and `disable()` applying a generator of rule names only to the core chain in [#447](https://github.com/executablebooks/markdown-it-py/pull/447), thanks to [@muneikh](https://github.com/muneikh)
* 🐛 Fix the CLI's interactive mode joining input lines with an extra newline, which split every line into its own paragraph and broke hard line breaks, in [#425](https://github.com/executablebooks/markdown-it-py/pull/425); reported by [@jamesquilty](https://github.com/jamesquilty) in [#172](https://github.com/executablebooks/markdown-it-py/issues/172)
* 🐛 CLI helpers create a default parser only when none is given in [#455](https://github.com/executablebooks/markdown-it-py/pull/455), thanks to [@Quinnod345](https://github.com/Quinnod345)

### 📚 Documentation

* 📚 Add a "Third-party renderers" section (mdformat, mdit_plain, MyST-Parser) and document `RendererProtocol` for writing your own renderer, in [#463](https://github.com/executablebooks/markdown-it-py/pull/463)
* 📚 Document that `MarkdownIt` passes itself to `renderer_cls`, unlike markdown-it's renderer constructor, in [#421](https://github.com/executablebooks/markdown-it-py/pull/421), thanks to [@user01010111](https://github.com/user01010111)
* 📚 Clarify that the name given to `add_render_rule` must match a token type in [#432](https://github.com/executablebooks/markdown-it-py/pull/432), thanks to [@hikmetba-bit](https://github.com/hikmetba-bit)
* 📚 Fix typos and use HTTPS for the CommonMark spec links in [#402](https://github.com/executablebooks/markdown-it-py/pull/402), [#407](https://github.com/executablebooks/markdown-it-py/pull/407) and [#408](https://github.com/executablebooks/markdown-it-py/pull/408), thanks to [@nikolas](https://github.com/nikolas), [@maxtaran2010](https://github.com/maxtaran2010) and [@deeferentleeg](https://github.com/deeferentleeg)

### 🔧 Maintenance

* 🔧 Publish to PyPI with trusted publishing and attestations, uploading distributions built with `python -m build` and checked on every pull request, in [#397](https://github.com/executablebooks/markdown-it-py/pull/397) and [#461](https://github.com/executablebooks/markdown-it-py/pull/461)
* 🔧 Include `tests/`, `tox.ini` and `CHANGELOG.md` in the sdist, so packagers can run the test suite from it, in [#426](https://github.com/executablebooks/markdown-it-py/pull/426), thanks to [@BetterAndBetterII](https://github.com/BetterAndBetterII) ([#420](https://github.com/executablebooks/markdown-it-py/pull/420)), and [#461](https://github.com/executablebooks/markdown-it-py/pull/461); requested by [@mtelka](https://github.com/mtelka) in [#261](https://github.com/executablebooks/markdown-it-py/issues/261)
* 🔧 Move `coverage` and `pytest-cov` from the `testing` extra to a new `coverage` extra, and skip the linkify tests when linkify-it-py is not installed, in [#463](https://github.com/executablebooks/markdown-it-py/pull/463); requested by [@befeleme](https://github.com/befeleme) in [#195](https://github.com/executablebooks/markdown-it-py/issues/195)
* 🔧 Read the CommonMark spec fixtures as UTF-8, so the tests pass on Windows with a non-UTF-8 locale, in [#454](https://github.com/executablebooks/markdown-it-py/pull/454), thanks to [@Aschenbath](https://github.com/Aschenbath)
* 🔧 Drop the optional dependency on the unmaintained `commonmark` package from the `compare` extra in [#427](https://github.com/executablebooks/markdown-it-py/pull/427), thanks to [@nikolas](https://github.com/nikolas) ([#401](https://github.com/executablebooks/markdown-it-py/pull/401))
* 🔧 Build the documentation on Python 3.13 and Sphinx 9 in [#462](https://github.com/executablebooks/markdown-it-py/pull/462)

### Upgrade notes

* **Rules that do not advance now raise.**
  A block or inline rule that returns `True` without moving `state.line` or `state.pos` forward now raises `RuntimeError` (`block rule didn't increment state.line`, `inline rule didn't increment state.pos`), where it used to hang.
  So does a line that no block rule accepts, which is only possible with the `paragraph` rule disabled (`none of the block rules matched`).
* **Image `children` hold joined `text` tokens.**
  As in markdown-it 15, `text_join` now also joins the `text_special` tokens among an image token's `children`, so code that reads alt text from them gets escaped characters and entities as plain `text` tokens (a nested image's own `children` are still not joined, as upstream).
* **Render rules must return `str`.**
  The rendered fragments are now joined with `str.join`, so a rule that returns a `str` subclass (such as `markupsafe.Markup`) gives a plain `str` from `render()`, and a rule that returns anything that is not a `str` raises `TypeError`.
* **`SyntaxTreeNode.to_tokens()` follows the tree.**
  The tree's `children` are the source of truth: a change made directly to a token's `children` list no longer appears in the output, and `to_tokens()` does not modify the token stream the tree was built from.
* **Rule names given as a generator** to `MarkdownIt.enable()` or `disable()` are validated like a list, so an unknown name now raises `ValueError`.
* **Internals plugins may touch.**
  `StateInline.pending` is now a property backed by a buffer: `state.pending += text` still works, and the new `state.append_pending(text)` appends in constant time.
  `HTML_TAG_RE` (`markdown_it.common.html_re`) and `DIGITAL_RE` and `NAMED_RE` (`markdown_it.rules_inline.entity`) no longer start with `^`, because they are applied with `.match(src, pos)`; code that calls `.search()` on them now matches anywhere in the string.
  The private `StateBase._src` and `_srcCharCode` attributes are gone (`srcCharCode` itself is still there, and still deprecated).
* **Packaging.**
  The `testing` extra no longer installs `coverage` and `pytest-cov`: install `.[testing,coverage]` to run the tests with `--cov`.
  The sdist now contains `tests/`, `tox.ini` and `CHANGELOG.md`, and no longer contains repository files such as `.github/`, `.pre-commit-config.yaml` and `scripts/`.

**Full Changelog**: <https://github.com/executablebooks/markdown-it-py/compare/v4.2.0...v4.3.0>

## 4.2.0 - 2026-05-07

* ✨ Add `make_fence_rule()` factory for configurable fence markers in [#394](https://github.com/executablebooks/markdown-it-py/pull/394)

**Full Changelog**: <https://github.com/executablebooks/markdown-it-py/compare/v4.1.0...v4.2.0>

## 4.1.0 - 2026-05-06

* ✨ Add `gfm-like2` preset with task lists, alerts, and single-tilde strikethrough core plugins in [#388](https://github.com/executablebooks/markdown-it-py/pull/388)
* ✨ Allow plugins to register inline terminator characters in [#391](https://github.com/executablebooks/markdown-it-py/pull/391)
* 👌 Fix quadratic complexity in `fragments_join` / `text_join` in [#389](https://github.com/executablebooks/markdown-it-py/pull/389), thanks to [@petricevich](https://github.com/petricevich)
* 👌 Add `--stdin` option to CLI for reading Markdown from standard input in [#379](https://github.com/executablebooks/markdown-it-py/pull/379), thanks to [@mcepl](https://github.com/mcepl)
* 🔧 Add typing to Scanner in [#382](https://github.com/executablebooks/markdown-it-py/pull/382), thanks to [@Alunderin](https://github.com/Alunderin)

**Full Changelog**: <https://github.com/executablebooks/markdown-it-py/compare/v4.0.0...v4.1.0>

## 4.0.0 - 2025-08-11

This primarily drops support for Python 3.9, adds support for Python 3.13,
and updates the parser to comply with Commonmark 0.31.2 and Markdown-It v14.1.0.

* ⬆️ Drop support for Python 3.9 in [#360](https://github.com/executablebooks/markdown-it-py/pull/360)
* ⬆️ Comply with Commonmark 0.31.2 in [#362](https://github.com/executablebooks/markdown-it-py/pull/362)
* 👌 Improve performance of "text" inline rule in [#347](https://github.com/executablebooks/markdown-it-py/pull/347)
* 👌 Use `str.removesuffix` in [#348](https://github.com/executablebooks/markdown-it-py/pull/348)
* 👌 limit the number of autocompleted cells in a table in [#364](https://github.com/executablebooks/markdown-it-py/pull/364)
* 👌 fix quadratic complexity in reference parser in [#367](https://github.com/executablebooks/markdown-it-py/pull/367)
* 🐛 Fix emphasis inside raw links bugs in [#320](https://github.com/executablebooks/markdown-it-py/pull/320)

**Full Changelog**: <https://github.com/executablebooks/markdown-it-py/compare/v3.0.0...v4.0.0>

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
