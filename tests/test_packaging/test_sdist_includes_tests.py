"""Regression for https://github.com/executablebooks/markdown-it-py/issues/261."""

from __future__ import annotations

from pathlib import Path
import tarfile

import pytest

ROOT = Path(__file__).resolve().parents[2]


def test_sdist_contents(tmp_path: Path) -> None:
    """The sdist must ship tests/ and tox.ini, so downstream packagers can run them."""
    flit_sdist = pytest.importorskip("flit_core.sdist")
    if not (ROOT / "pyproject.toml").is_file():
        pytest.skip("not running from a source checkout")

    builder = flit_sdist.SdistBuilder.from_ini_path(ROOT / "pyproject.toml")
    with tarfile.open(builder.build(tmp_path)) as tar:
        # strip the leading `markdown_it-<version>/` component
        names = {name.split("/", 1)[1] for name in tar.getnames() if "/" in name}

    assert "markdown_it/__init__.py" in names
    assert "tests/test_api/test_main.py" in names
    assert "tox.ini" in names
    # heavy, non-essential trees are still excluded
    assert not [name for name in names if name.startswith(("docs/", "benchmarking/"))]
