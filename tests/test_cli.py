from contextlib import redirect_stdout
import io
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
    with pytest.raises(SystemExit) as exc_info:
        parse.main(["/tmp/nonexistant_path/for_cli_test.md"])
    assert exc_info.value.code == 1


def test_non_utf8():
    with tempfile.TemporaryDirectory() as tempdir:
        path = pathlib.Path(tempdir).joinpath("test.md")
        path.write_bytes(b"\x80abc")
        assert parse.main([str(path)]) == 0


def test_print_heading():
    with patch("builtins.print") as patched:
        parse.print_heading()
    patched.assert_called()


def test_interactive():
    def mock_input(prompt):
        raise KeyboardInterrupt

    with patch("builtins.print") as patched, patch("builtins.input", mock_input):
        parse.interactive()
    patched.assert_called()


def test_main_no_args_is_interactive():
    with patch("markdown_it.cli.parse.interactive") as mock_interactive:
        assert parse.main([]) == 0
    mock_interactive.assert_called_once()


def test_parse_output():
    with tempfile.TemporaryDirectory() as tempdir:
        path = pathlib.Path(tempdir).joinpath("test.md")
        path.write_text("# a b c")
        string_io = io.StringIO()
        with redirect_stdout(string_io):
            assert parse.main([str(path)]) == 0
        assert string_io.getvalue() == "<h1>a b c</h1>\n"


def test_stdin():
    with patch("sys.stdin", io.StringIO("# a b c")):
        string_io = io.StringIO()
        with redirect_stdout(string_io):
            assert parse.main(["--stdin"]) == 0
        assert string_io.getvalue() == "<h1>a b c</h1>\n"


def test_multiple_files():
    with tempfile.TemporaryDirectory() as tempdir:
        path1 = pathlib.Path(tempdir).joinpath("test1.md")
        path1.write_text("# file 1")
        path2 = pathlib.Path(tempdir).joinpath("test2.md")
        path2.write_text("* file 2")
        string_io = io.StringIO()
        with redirect_stdout(string_io):
            assert parse.main([str(path1), str(path2)]) == 0
        assert string_io.getvalue() == "<h1>file 1</h1>\n<ul>\n<li>file 2</li>\n</ul>\n"


def test_interactive_render():
    # Simulate user typing '# hello', pressing Ctrl-D (renders), then Ctrl-C (exits)
    # This is needed to break the infinite loop in interactive mode on EOF.
    mock_input = patch(
        "builtins.input", side_effect=["# hello", EOFError, KeyboardInterrupt]
    )
    string_io = io.StringIO()
    with redirect_stdout(string_io), mock_input:
        parse.interactive()

    output = string_io.getvalue()
    assert "markdown-it-py" in output  # from print_heading
    # The rendered output is prefixed by a newline
    assert "\n<h1>hello</h1>\n" in output
    assert "Exiting" in output


def test_interactive_hard_line_break():
    """Interactive input lines are joined as typed, see issue #172."""
    # Simulate user typing 'foo\\' then 'bar', Ctrl-D (renders), then Ctrl-C (exits)
    mock_input = patch(
        "builtins.input", side_effect=["foo\\", "bar", EOFError, KeyboardInterrupt]
    )
    string_io = io.StringIO()
    with redirect_stdout(string_io), mock_input:
        parse.interactive()

    # a single paragraph with a hard break, not two paragraphs
    assert "\n<p>foo<br />\nbar</p>\n" in string_io.getvalue()


@pytest.mark.parametrize("route", ["files", "stdin", "interactive"])
@pytest.mark.parametrize("enable_tables", [False, True])
def test_tables(route, enable_tables, tmp_path, capsys):
    """Table parsing is opt-in on every CLI route, preserving HTML settings."""
    source = "a | b\n--- | ---\n1 | 2\n\n<em>raw</em> ~~plain~~\n"
    expected = (
        "<table>\n<thead>\n<tr>\n<th>a</th>\n<th>b</th>\n</tr>\n</thead>\n"
        "<tbody>\n<tr>\n<td>1</td>\n<td>2</td>\n</tr>\n</tbody>\n</table>\n"
        if enable_tables
        else "<p>a | b\n--- | ---\n1 | 2</p>\n"
    ) + "<p><em>raw</em> ~~plain~~</p>\n"
    args = ["--enable-tables"] if enable_tables else []
    if route == "files":
        paths = [tmp_path / "first.md", tmp_path / "second.md"]
        for path in paths:
            path.write_text(source, encoding="utf8")
        assert parse.main([*args, *map(str, paths)]) == 0
        expected *= 2
    elif route == "stdin":
        with patch("sys.stdin", io.StringIO(source)):
            assert parse.main([*args, "--stdin"]) == 0
    else:
        inputs = [*source.splitlines(), EOFError] * 2 + [KeyboardInterrupt]
        with patch("builtins.input", side_effect=inputs):
            assert parse.main(args) == 0
        expected = (
            f"{parse.version_str} (interactive)\n"
            "Type Ctrl-D to complete input, or Ctrl-C to exit.\n"
            + ("\n" + expected) * 2
            + "\nExiting.\n"
        )
    assert capsys.readouterr().out == expected
