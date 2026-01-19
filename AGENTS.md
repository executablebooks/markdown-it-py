# AGENTS.md

This file provides guidance for AI coding agents working on the **markdown-it-py** repository.

## Project Overview

markdown-it-py is a Python port of [markdown-it](https://github.com/markdown-it/markdown-it), the JavaScript Markdown parser. It provides:

- A Markdown parser following the [CommonMark spec](https://commonmark.org/)
- Configurable syntax: you can add new rules and even replace existing ones
- Pluggable architecture with support for syntax extensions (see [mdit-py-plugins](https://github.com/executablebooks/mdit-py-plugins))
- High performance with efficient parsing algorithms
- Safe by default with configurable HTML handling

markdown-it-py is designed as a foundation for projects requiring robust Markdown parsing in Python, with the same design principles as the original JavaScript implementation.

## Repository Structure

```
pyproject.toml          # Project configuration and dependencies (flit)
tox.ini                 # Tox test environment configuration (use with tox-uv for faster env creation)

markdown_it/            # Main source code
├── __init__.py         # Package init
├── main.py             # MarkdownIt main class
├── token.py            # Token dataclass
├── ruler.py            # Ruler class for managing rules
├── tree.py             # SyntaxTreeNode for AST representation
├── renderer.py         # RendererHTML and RendererProtocol
├── parser_core.py      # ParserCore - top-level rules executor
├── parser_block.py     # ParserBlock - block-level tokenizer
├── parser_inline.py    # ParserInline - inline tokenizer
├── utils.py            # Utility types (OptionsType, PresetType, etc.)
├── common/             # Common utilities
├── helpers/            # Helper functions
├── presets/            # Configuration presets (commonmark, gfm-like, zero, etc.)
├── rules_core/         # Core parsing rules
├── rules_block/        # Block-level parsing rules
├── rules_inline/       # Inline parsing rules
├── cli/                # Command-line interface
└── py.typed            # PEP 561 marker

tests/                  # Test suite
├── test_api/           # API tests
├── test_cmark_spec/    # CommonMark spec compliance tests
├── test_port/          # Port-specific tests
├── test_tree/          # SyntaxTreeNode tests
├── fuzz/               # Fuzzing tests for OSS-Fuzz
├── test_cli.py         # CLI tests
├── test_linkify.py     # Linkify tests
└── test_tree.py        # Tree tests

docs/                   # Documentation source
├── conf.py             # Sphinx configuration
├── index.md            # Documentation index
├── architecture.md     # Design principles
├── using.md            # Usage guide
├── plugins.md          # Plugin documentation
├── contributing.md     # Contributing guide
├── performance.md      # Performance benchmarks
└── security.md         # Security considerations

benchmarking/           # Performance benchmarking
scripts/                # Utility scripts
```

## Development Commands

All commands should be run via [`tox`](https://tox.wiki) for consistency. The project uses `tox-uv` for faster environment creation.

### Testing

```bash
# Run all tests
tox

# Run tests with specific Python version
tox -e py311

# Run tests with plugins
tox -e py311-plugins

# Run a specific test file
tox -- tests/test_api/test_main.py

# Run a specific test function
tox -- tests/test_api/test_main.py::test_get_rules

# Run tests with coverage
tox -- --cov=markdown_it --cov-report=html
```

### Documentation

```bash
# Build docs (clean)
tox -e docs-clean

# Build docs (incremental)
tox -e docs-update

# Specific builder (e.g., linkcheck)
BUILDER=linkcheck tox -e docs-update
```

### Benchmarking and Profiling

```bash
# Run core benchmarks
tox -e py311-bench-core

# Run package comparison benchmarks
tox -e py311-bench-packages

# Run profiler
tox -e profile
```

### Fuzzing

```bash
# Run fuzzer on testcase file
tox -e fuzz path/to/testcase
```

### Code Quality

```bash
# Run pre-commit hooks on all files
pre-commit run --all-files

# Type checking (via pre-commit)
pre-commit run mypy --all-files

# Linting and formatting (via pre-commit)
pre-commit run ruff --all-files
pre-commit run ruff-format --all-files
```

## Code Style Guidelines

- **Formatter/Linter**: Ruff (configured in `pyproject.toml`)
- **Type Checking**: Mypy with strict settings (configured in `pyproject.toml`)
- **Pre-commit**: Use pre-commit hooks for consistent code style (`.pre-commit-config.yaml`)

### Best Practices

- **Type annotations**: Use complete type annotations for all function signatures. The codebase uses strict mypy settings.
- **Docstrings**: Use Google-style or Sphinx-style docstrings. Types are not required in docstrings as they should be in type hints.
- **Pure functions**: Where possible, write pure functions without side effects.
- **Immutability**: Prefer immutable data structures. The `Token` class uses dataclass with appropriate mutability.
- **Testing**: Write tests for all new functionality. Use `pytest-regressions` for output comparison tests.

### Type Annotation Example

```python
from __future__ import annotations

from typing import Sequence

def parse_blocks(
    state: StateBlock,
    start_line: int,
    end_line: int,
    silent: bool = False
) -> bool:
    """Parse block-level content.

    :param state: The parser state object
    :param start_line: Starting line number
    :param end_line: Ending line number
    :param silent: If True, only validate without generating tokens
    :return: True if parsing succeeded
    """
    ...
```

## Architecture Overview

### Parsing Pipeline

markdown-it-py follows a multi-stage parsing pipeline:

```
Markdown → Tokens → HTML
```

The parsing happens through three nested chains:

1. **Core Chain** (`parser_core.py`): Top-level rules that orchestrate the parsing
2. **Block Chain** (`parser_block.py`): Parse block-level content (headings, lists, code blocks, etc.)
3. **Inline Chain** (`parser_inline.py`): Parse inline content (emphasis, links, code spans, etc.)

### Token Stream

Instead of a traditional AST, markdown-it-py uses a **token stream** representation:

- Tokens are a simple sequence (list)
- Opening and closing tags are separate tokens
- Inline containers have nested tokens in their `.children` property
- This design follows the KISS principle and allows easy manipulation

### Key Components

#### MarkdownIt Class (`main.py`)

The main entry point for parsing:

- `parse()`: Parse markdown and return token stream
- `render()`: Parse and render to HTML
- `use()`: Add plugins
- `enable()` / `disable()`: Control rules
- `set()`: Set options

#### Ruler Class (`ruler.py`)

Manages parsing rules:

- Rules can be enabled/disabled by name
- Rules can be inserted at specific positions
- Each parser (core/block/inline) has its own Ruler instance

#### Token Class (`token.py`)

Represents a single token in the stream:

- `type`: Token type (e.g., "paragraph_open", "text", "heading_close")
- `tag`: HTML tag to use for rendering
- `attrs`: Attributes for the HTML tag
- `content`: Raw content
- `children`: Nested tokens for inline containers
- `level`: Nesting level

#### Renderer (`renderer.py`)

Converts token stream to HTML:

- `render()`: Convert full token stream to HTML
- `renderToken()`: Render a single token
- Custom render rules can be added via `add_render_rule()`

### Data Flow

```
Input Markdown
    ↓
Core Rules (normalize, etc.)
    ↓
Block Parser → Block Tokens
    ↓
Core Rules (intermediate)
    ↓
Inline Parser → Inline Tokens (for each block token with "inline" type)
    ↓
Core Rules (final: abbreviations, footnotes, linkify, etc.)
    ↓
Token Stream
    ↓
Renderer
    ↓
HTML Output
```

## Testing Guidelines

### Test Structure

- Tests use `pytest` with fixtures from `conftest.py` files
- CommonMark spec tests are in `tests/test_cmark_spec/`
- Port-specific tests verify JavaScript markdown-it parity
- Regression testing uses `pytest-regressions` for output comparison
- Fuzzing tests are in `tests/fuzz/` for integration with OSS-Fuzz

### Writing Tests

1. For API tests, add to appropriate file in `tests/test_api/`
2. For new syntax/rules, add test cases to `tests/test_port/`
3. For CommonMark compliance, run the spec test updater
4. Use `file_regression` fixture for comparing output against stored fixtures
5. Use parameterization for multiple test scenarios

### Test Best Practices

- **Test coverage**: Write tests for all new functionality and bug fixes
- **Isolation**: Each test should be independent
- **Descriptive names**: Test function names should describe what is being tested
- **Regression testing**: Use `file_regression.check()` for complex output comparisons
- **Parametrization**: Use `@pytest.mark.parametrize` for multiple test scenarios

### Example Test Pattern

```python
import pytest
from markdown_it import MarkdownIt

def test_basic_parsing():
    md = MarkdownIt()
    result = md.render("# Heading\n\nParagraph")
    assert "<h1>Heading</h1>" in result
    assert "<p>Paragraph</p>" in result

@pytest.mark.parametrize(
    "input_text,expected",
    [
        ("**bold**", "<strong>bold</strong>"),
        ("*italic*", "<em>italic</em>"),
    ]
)
def test_emphasis(input_text, expected):
    md = MarkdownIt()
    result = md.render(input_text)
    assert expected in result
```

## Commit Message Format

Use this format:

```
<EMOJI> <KEYWORD>: Summarize in 72 chars or less (#<PR>)

Optional detailed explanation.
```

Keywords:

- `✨ NEW:` – New feature
- `🐛 FIX:` – Bug fix
- `👌 IMPROVE:` – Improvement (no breaking changes)
- `‼️ BREAKING:` – Breaking change
- `📚 DOCS:` – Documentation
- `🔧 MAINTAIN:` – Maintenance changes only (typos, etc.)
- `🧪 TEST:` – Tests or CI changes only
- `♻️ REFACTOR:` – Refactoring

## PR Title and Description Format

Use the same as for the commit message format, but for the title you can omit the `KEYWORD` and only use `EMOJI`.

## Pull Request Requirements

When submitting changes:

1. **Description**: Include a meaningful description or link explaining the change
2. **Tests**: Include test cases for new functionality or bug fixes
3. **Documentation**: Update docs if behavior changes or new features are added
4. **Changelog**: Update `CHANGELOG.md` under the appropriate section
5. **Code Quality**: Ensure `pre-commit run --all-files` passes
6. **Type Checking**: Ensure mypy passes with strict settings
7. **CommonMark Compliance**: Don't break existing CommonMark spec tests unless intentional

## Key Files

- `pyproject.toml` - Project configuration, dependencies, and tool settings (Ruff, Mypy)
- `tox.ini` - Test environment configuration
- `markdown_it/main.py` - `MarkdownIt` main class
- `markdown_it/token.py` - `Token` dataclass
- `markdown_it/renderer.py` - HTML renderer
- `markdown_it/parser_core.py` - Core parsing rules
- `markdown_it/parser_block.py` - Block-level parser
- `markdown_it/parser_inline.py` - Inline parser
- `markdown_it/ruler.py` - `Ruler` class for managing rules
- `markdown_it/utils.py` - Type definitions and utilities
- `markdown_it/presets/` - Configuration presets (commonmark, gfm-like, zero)

## Debugging

- Use the CLI with `markdown-it` command to test parsing interactively
- Check token stream with `md.parse(text)` to see tokens before rendering
- Use `md.render(text)` to see final HTML output
- Enable specific rules with `md.enable(['rule_name'])`
- Disable rules with `md.disable(['rule_name'])`
- Use `tox -- -v --tb=long` for verbose test output with full tracebacks
- Check the [Live demo](https://markdown-it.github.io/) (JavaScript version) to compare behavior

### Debugging Tips

```python
from markdown_it import MarkdownIt

md = MarkdownIt()

# See the token stream
tokens = md.parse("# Heading\n\nParagraph")
for token in tokens:
    print(f"{token.type} | {token.tag} | {token.content}")

# See available rules
print(md.get_all_rules())

# Enable/disable specific rules
md.disable(['emphasis'])
result = md.render("*text*")  # Won't be emphasized
```

## Common Patterns

### Adding a New Parsing Rule

1. Determine which parser the rule belongs to (core/block/inline)
2. Create rule function in appropriate `rules_*/` directory
3. Rule signature for block rules:
   ```python
   def rule_name(state: StateBlock, startLine: int, endLine: int, silent: bool) -> bool:
       ...
   ```
4. Rule signature for inline rules:
   ```python
   def rule_name(state: StateInline, silent: bool) -> bool:
       ...
   ```
5. Register the rule in the appropriate parser's `__init__` method
6. Add tests for the new rule
7. Update documentation if it's a user-facing feature

### Creating a Plugin

1. Create a plugin function that receives the `MarkdownIt` instance:
   ```python
   def my_plugin(md: MarkdownIt, **options):
       """My custom plugin."""
       # Add rules
       md.block.ruler.before("fence", "my_block_rule", my_block_rule)
       md.inline.ruler.after("emphasis", "my_inline_rule", my_inline_rule)

       # Add render rules
       md.add_render_rule("my_token_type", render_my_token)
   ```
2. Use the plugin with `md.use(my_plugin, option1=value1)`
3. See existing plugins in [mdit-py-plugins](https://github.com/executablebooks/mdit-py-plugins) for examples

### Customizing Rendering

```python
from markdown_it import MarkdownIt

def render_custom_link(self, tokens, idx, options, env):
    tokens[idx].attrSet("target", "_blank")
    tokens[idx].attrSet("rel", "noopener noreferrer")
    return self.renderToken(tokens, idx, options, env)

md = MarkdownIt()
md.add_render_rule("link_open", render_custom_link)
```

## Reference Documentation

- [markdown-it-py Documentation](https://markdown-it-py.readthedocs.io/)
- [markdown-it-py Repository](https://github.com/executablebooks/markdown-it-py)
- [Original markdown-it (JavaScript)](https://github.com/markdown-it/markdown-it)
- [markdown-it Live Demo](https://markdown-it.github.io/) - Useful for comparing behavior
- [CommonMark Spec](https://spec.commonmark.org/)
- [mdit-py-plugins Repository](https://github.com/executablebooks/mdit-py-plugins)
- [Python Type Hints (PEP 484)](https://peps.python.org/pep-0484/)
