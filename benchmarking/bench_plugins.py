from pathlib import Path
import pytest

import markdown_it
from markdown_it.extensions import (
    amsmath,
    container,
    deflist,
    dollarmath,
    footnote,
    front_matter,
    texmath,
)


@pytest.fixture
def spec_text():
    return Path(__file__).parent.joinpath("samples", "spec.md").read_text()


@pytest.fixture
def parser():
    return markdown_it.MarkdownIt("commonmark")


@pytest.mark.benchmark(group="plugins")
def test_base(benchmark, parser, spec_text):
    benchmark(parser.render, spec_text)


@pytest.mark.benchmark(group="plugins")
def test_table(benchmark, parser, spec_text):
    parser.enable("table")
    benchmark(parser.render, spec_text)


@pytest.mark.benchmark(group="plugins")
def test_amsmath(benchmark, parser, spec_text):
    parser.use(amsmath.amsmath_plugin)
    benchmark(parser.render, spec_text)


@pytest.mark.benchmark(group="plugins")
def test_container(benchmark, parser, spec_text):
    parser.use(container.container_plugin, "name")
    benchmark(parser.render, spec_text)


@pytest.mark.benchmark(group="plugins")
def test_deflist(benchmark, parser, spec_text):
    parser.use(deflist.deflist_plugin)
    benchmark(parser.render, spec_text)


@pytest.mark.benchmark(group="plugins")
def test_footnote(benchmark, parser, spec_text):
    parser.use(footnote.footnote_plugin)
    benchmark(parser.render, spec_text)


@pytest.mark.benchmark(group="plugins")
def test_front_matter(benchmark, parser, spec_text):
    parser.use(front_matter.front_matter_plugin)
    benchmark(parser.render, spec_text)


@pytest.mark.benchmark(group="plugins")
def test_texmath(benchmark, parser, spec_text):
    parser.use(texmath.texmath_plugin)
    benchmark(parser.render, spec_text)


@pytest.mark.benchmark(group="plugins")
def test_dollarmath(benchmark, parser, spec_text):
    parser.use(dollarmath.dollarmath_plugin)
    benchmark(parser.render, spec_text)
