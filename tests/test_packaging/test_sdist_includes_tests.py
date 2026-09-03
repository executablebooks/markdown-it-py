"""Regression for https://github.com/executablebooks/markdown-it-py/issues/261."""

from __future__ import annotations

from pathlib import Path


def test_flit_sdist_includes_tests_directory() -> None:
    """sdist must ship tests/ (and tox.ini) so downstream packagers can run them."""
    text = (Path(__file__).resolve().parents[2] / "pyproject.toml").read_text(
        encoding="utf-8"
    )
    # Locate the flit sdist table without requiring tomllib (3.10 CI).
    start = text.index("[tool.flit.sdist]")
    rest = text[start + len("[tool.flit.sdist]") :]
    end = rest.find("\n[")
    block = rest if end < 0 else rest[:end]
    assert 'include = [' in block
    assert '"tests/"' in block
    assert '"tox.ini"' in block
    # Still exclude heavy non-test trees.
    assert '"docs/"' in block
    assert '"benchmarking/"' in block
    # Must not exclude tests anymore.
    assert '"tests/"' not in block.split("exclude", 1)[-1]
