import pathlib
import tempfile
from unittest.mock import patch

import pytest

from markdown_it.cli import parse


def test_parse():
    with tempfile.TemporaryDirectory() as tempdir:
        path = pathlib.Path(tempdir).joinpath("test.md")
        path.write_text("a b c")
        assert parse.main([str(path)]) == 0


def test_parse_fail():
    with pytest.raises(SystemExit):
        parse.main(["/tmp/nonexistant_path/for_cli_test.md"])


def test_print_heading():
    with patch("builtins.print") as patched:
        parse.print_heading()
    patched.assert_called()


def test_interactive():
    def mock_input(prompt):
        raise KeyboardInterrupt

    with patch("builtins.print") as patched:
        with patch("builtins.input", mock_input):
            parse.interactive(import_readline=False)
    patched.assert_called()
