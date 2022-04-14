from pathlib import Path

import pytest

import markdown_it


@pytest.fixture
def spec_text():
    return Path(__file__).parent.joinpath("samples", "spec.md").read_text()


@pytest.fixture
def parser():
    return markdown_it.MarkdownIt("commonmark")


@pytest.mark.benchmark(group="core")
def test_spec(benchmark, parser, spec_text):
    benchmark(parser.render, spec_text)
