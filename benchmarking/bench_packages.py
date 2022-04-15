from pathlib import Path
from shutil import which

import pytest


@pytest.fixture
def spec_text():
    return Path(__file__).parent.joinpath("samples", "spec.md").read_text()


@pytest.mark.benchmark(group="packages")
def test_markdown_it_py(benchmark, spec_text):
    import markdown_it

    parser = markdown_it.MarkdownIt("commonmark")
    benchmark.extra_info["version"] = markdown_it.__version__
    benchmark(parser.render, spec_text)


@pytest.mark.benchmark(group="packages")
def test_mistune(benchmark, spec_text):
    import mistune

    benchmark.extra_info["version"] = mistune.__version__
    benchmark(mistune.markdown, spec_text)


@pytest.mark.benchmark(group="packages")
def test_commonmark_py(benchmark, spec_text):
    import commonmark

    benchmark.extra_info["version"] = "0.9.1"
    benchmark(commonmark.commonmark, spec_text)


@pytest.mark.benchmark(group="packages")
def test_pymarkdown(benchmark, spec_text):
    import markdown

    benchmark.extra_info["version"] = markdown.__version__
    benchmark(markdown.markdown, spec_text)


@pytest.mark.benchmark(group="packages")
def test_pymarkdown_extra(benchmark, spec_text):
    import markdown

    benchmark.extra_info["version"] = markdown.__version__
    benchmark(markdown.markdown, spec_text, extensions=["extra"])


@pytest.mark.benchmark(group="packages")
def test_mistletoe(benchmark, spec_text):
    import mistletoe

    benchmark.extra_info["version"] = mistletoe.__version__
    benchmark(mistletoe.markdown, spec_text)


@pytest.mark.skipif(which("pandoc") is None, reason="pandoc executable not found")
@pytest.mark.benchmark(group="packages")
def test_panflute(benchmark, spec_text):
    import panflute

    benchmark.extra_info["version"] = panflute.__version__
    benchmark(
        panflute.convert_text, spec_text, input_format="markdown", output_format="html"
    )
