"""A script for profiling.

To generate and read results:
  - `tox -e profile`
  - `firefox .tox/prof/output.svg`
"""

from pathlib import Path

from markdown_it import MarkdownIt

commonmark_spec = (
    (Path(__file__).parent.parent / "tests" / "test_cmark_spec" / "spec.md")
    .read_bytes()
    .decode()
)

# Run this a few times to emphasize over imports and other overhead above
for _ in range(10):
    MarkdownIt().render(commonmark_spec)
