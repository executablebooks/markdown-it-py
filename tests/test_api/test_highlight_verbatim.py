from itertools import product

from markdown_it import MarkdownIt


def test_highlight_verbatim_preserves_complete_html() -> None:
    """A complete highlighter block keeps its wrapper and exact line endings."""
    for preset, ending in product(["commonmark", "js-default", "zero"], ["", "\n"]):
        rendered = '<div class="highlight"><pre>highlighted</pre></div>' + ending

        def highlight(
            content: str, language: str, attrs: str, result: str = rendered
        ) -> str:
            assert (content, language, attrs) == ("<unsafe>\n", "python", "extra")
            return result

        parser = MarkdownIt(
            preset, {"highlight": highlight, "highlight_verbatim": True}
        )
        parser.enable("fence")
        assert parser.render("```python extra\n<unsafe>\n```\n") == rendered


def test_empty_highlight_keeps_escaped_fallback() -> None:
    """No highlighter result still gets the ordinary escaped code wrapper."""
    for highlight, verbatim in product([None, lambda *_: ""], [False, True]):
        parser = MarkdownIt(
            "commonmark", {"highlight": highlight, "highlight_verbatim": verbatim}
        )
        assert parser.render("```py\n<unsafe>\n```\n") == (
            '<pre><code class="language-py">&lt;unsafe&gt;\n</code></pre>\n'
        )


def test_default_highlighter_wrapping_is_unchanged() -> None:
    """The opt-in setting leaves the existing wrapper heuristic intact."""
    for highlighted, expected in [
        (
            "<div>code</div>",
            '<pre><code class="language-py"><div>code</div></code></pre>\n',
        ),
        ("<pre>code</pre>", "<pre>code</pre>\n"),
    ]:
        parser = MarkdownIt(
            "commonmark", {"highlight": lambda *_, result=highlighted: result}
        )
        source = "```py\ncode\n```\n"
        assert parser.render(source) == expected
        parser.options["highlight_verbatim"] = True
        assert parser.render(source) == highlighted
