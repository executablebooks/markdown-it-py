import pathlib
import tempfile

from markdown_it.cli import benchmark, parse


def test_parse():
    with tempfile.TemporaryDirectory() as tempdir:
        path = pathlib.Path(tempdir).joinpath("test.md")
        path.write_text("a b c")
        assert parse.main([str(path)])


def test_benchmark():
    with tempfile.TemporaryDirectory() as tempdir:
        path = pathlib.Path(tempdir).joinpath("test.md")
        path.write_text("a b c")
        assert benchmark.main(["-n", "1", "-p", "markdown-it-py", "-f", str(path)])
