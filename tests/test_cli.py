import pathlib
import tempfile
from unittest.mock import patch

from markdown_it.cli import benchmark, parse


def test_parse():
    with tempfile.TemporaryDirectory() as tempdir:
        path = pathlib.Path(tempdir).joinpath("test.md")
        path.write_text("a b c")
        assert parse.main([str(path)])


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


def test_benchmark():
    with tempfile.TemporaryDirectory() as tempdir:
        path = pathlib.Path(tempdir).joinpath("test.md")
        path.write_text("a b c")
        assert benchmark.main(["-n", "1", "-p", "markdown-it-py", "-f", str(path)])
