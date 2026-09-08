"""Tests for make_fence_rule factory function."""

from __future__ import annotations

from markdown_it import MarkdownIt
from markdown_it.rules_block.fence import make_fence_rule


def _make_colon_fence_md() -> MarkdownIt:
    """Create a MarkdownIt instance with a colon fence rule (like colon_fence plugin)."""
    md = MarkdownIt()
    colon_rule = make_fence_rule(
        markers=(":",),
        token_type="colon_fence",
        disallow_marker_in_info=(),
    )
    md.block.ruler.before(
        "fence",
        "colon_fence",
        colon_rule,
        {"alt": ["paragraph", "reference", "blockquote", "list"]},
    )
    return md


class TestColonFenceMarker:
    """Test colon fence behavior (`:` marker, like mdit-py-plugins colon_fence)."""

    def test_basic(self):
        md = _make_colon_fence_md()
        tokens = md.parse(":::\nfoo\n:::\n")
        assert len(tokens) == 1
        assert tokens[0].type == "colon_fence"
        assert tokens[0].content == "foo\n"
        assert tokens[0].markup == ":::"

    def test_with_info(self):
        md = _make_colon_fence_md()
        tokens = md.parse(":::python\nfoo\n:::\n")
        assert tokens[0].type == "colon_fence"
        assert tokens[0].info == "python"
        assert tokens[0].content == "foo\n"

    def test_colon_in_info_allowed(self):
        """Colons in info string should be allowed (unlike backticks in backtick fences)."""
        md = _make_colon_fence_md()
        tokens = md.parse(":::{note}\nfoo\n:::\n")
        assert tokens[0].type == "colon_fence"
        assert tokens[0].info == "{note}"

    def test_longer_closing(self):
        """Closing fence can be longer than opening (default, not exact_match)."""
        md = _make_colon_fence_md()
        tokens = md.parse(":::\nfoo\n::::\n")
        assert len(tokens) == 1
        assert tokens[0].type == "colon_fence"
        assert tokens[0].content == "foo\n"

    def test_shorter_closing_no_match(self):
        """Closing fence shorter than opening does not close the block."""
        md = _make_colon_fence_md()
        tokens = md.parse("::::\nfoo\n:::\nbar\n::::\n")
        assert len(tokens) == 1
        assert tokens[0].type == "colon_fence"
        # The inner ::: is content, not a closing fence
        assert ":::" in tokens[0].content
        assert "foo" in tokens[0].content
        assert "bar" in tokens[0].content

    def test_does_not_interfere_with_backtick(self):
        """Standard backtick fences still work alongside colon fences."""
        md = _make_colon_fence_md()
        tokens = md.parse("```\nfoo\n```\n")
        assert tokens[0].type == "fence"
        assert tokens[0].content == "foo\n"

    def test_unclosed_block(self):
        """Unclosed colon fence is autoclosed at end of document."""
        md = _make_colon_fence_md()
        tokens = md.parse(":::\nfoo\n")
        assert len(tokens) == 1
        assert tokens[0].type == "colon_fence"
        assert tokens[0].content == "foo\n"


class TestExactMatch:
    """Test exact_match option for fence closing."""

    def _make_exact_md(self) -> MarkdownIt:
        """Create MarkdownIt with exact-match colon fence."""
        md = MarkdownIt()
        colon_rule = make_fence_rule(
            markers=(":",),
            token_type="colon_fence",
            disallow_marker_in_info=(),
            exact_match=True,
        )
        md.block.ruler.before(
            "fence",
            "colon_fence",
            colon_rule,
            {"alt": ["paragraph", "reference", "blockquote", "list"]},
        )
        return md

    def test_exact_match_same_length(self):
        """Closing fence with same length closes the block."""
        md = self._make_exact_md()
        tokens = md.parse(":::\nfoo\n:::\n")
        assert len(tokens) == 1
        assert tokens[0].type == "colon_fence"
        assert tokens[0].content == "foo\n"

    def test_exact_match_longer_no_close(self):
        """Closing fence with more markers does NOT close (exact match required)."""
        md = self._make_exact_md()
        tokens = md.parse(":::\nfoo\n::::\n:::\n")
        assert len(tokens) == 1
        assert tokens[0].type == "colon_fence"
        # :::: is content, not a closer; ::: at the end is the real closer
        assert "::::" in tokens[0].content
        assert tokens[0].content == "foo\n::::\n"

    def test_exact_match_shorter_no_close(self):
        """Closing fence with fewer markers does NOT close (exact match required)."""
        md = self._make_exact_md()
        tokens = md.parse("::::\nfoo\n:::\nbar\n::::\n")
        assert len(tokens) == 1
        assert tokens[0].type == "colon_fence"
        assert ":::" in tokens[0].content
        assert tokens[0].content == "foo\n:::\nbar\n"

    def test_nesting_pattern(self):
        """Demonstrate nested fences with exact match (outer 4, inner 3)."""
        md = self._make_exact_md()
        tokens = md.parse(
            "::::{note}\nouter\n:::{warning}\ninner\n:::\nouter again\n::::\n"
        )
        assert len(tokens) == 1
        assert tokens[0].type == "colon_fence"
        assert tokens[0].info == "{note}"
        assert tokens[0].markup == "::::"
        # The inner ::: fence is captured as content
        assert ":::{warning}" in tokens[0].content
        assert "inner" in tokens[0].content
        assert ":::" in tokens[0].content
        assert "outer again" in tokens[0].content

    def test_unclosed_exact_match(self):
        """Unclosed exact-match fence is autoclosed at end of document."""
        md = self._make_exact_md()
        tokens = md.parse(":::\nfoo\n::::\n")
        assert len(tokens) == 1
        assert tokens[0].type == "colon_fence"
        # :::: doesn't close (wrong length), so content includes it
        assert tokens[0].content == "foo\n::::\n"


class TestOverrideStandardFence:
    """Test overriding the standard fence rule with make_fence_rule."""

    def test_override_with_exact_match(self):
        """Override standard fence to use exact matching."""
        md = MarkdownIt()
        md.block.ruler.at("fence", make_fence_rule(exact_match=True))
        tokens = md.parse("```\nfoo\n````\n```\n")
        assert tokens[0].type == "fence"
        # ```` doesn't close (exact match), ``` does
        assert tokens[0].content == "foo\n````\n"

    def test_override_add_colon_marker(self):
        """Override standard fence to also accept colon markers."""
        md = MarkdownIt()
        md.block.ruler.at(
            "fence",
            make_fence_rule(markers=("~", "`", ":")),
        )
        tokens = md.parse(":::\nfoo\n:::\n")
        assert tokens[0].type == "fence"
        assert tokens[0].content == "foo\n"
        assert tokens[0].markup == ":::"

    def test_override_preserves_backtick_info_restriction(self):
        """Backtick info string restriction still works with custom markers."""
        md = MarkdownIt()
        md.block.ruler.at(
            "fence",
            make_fence_rule(markers=("~", "`", ":")),
        )
        # Backtick in info string of backtick fence → not a fence
        tokens = md.parse("``` foo`bar\ntest\n```\n")
        assert not any(t.type == "fence" for t in tokens)

        # Colon in info string of colon fence → allowed (not in disallow list)
        tokens = md.parse(":::foo:bar\ntest\n:::\n")
        assert tokens[0].type == "fence"
        assert tokens[0].info == "foo:bar"


class TestMinMarkers:
    """Test min_markers parameter."""

    def test_min_markers_default(self):
        """Default min_markers is 3."""
        md = MarkdownIt()
        tokens = md.parse("``\nfoo\n``\n")
        # 2 backticks is not a fence
        assert not any(t.type == "fence" for t in tokens)

    def test_min_markers_custom(self):
        """Custom min_markers allows changing the threshold."""
        md = MarkdownIt()
        md.block.ruler.at("fence", make_fence_rule(min_markers=4))
        # 3 backticks is now below threshold
        tokens = md.parse("```\nfoo\n```\n")
        assert not any(t.type == "fence" for t in tokens)
        # 4 backticks works
        tokens = md.parse("````\nfoo\n````\n")
        assert tokens[0].type == "fence"
        assert tokens[0].content == "foo\n"


class TestDisallowMarkerInInfo:
    """Test disallow_marker_in_info parameter."""

    def test_default_backtick_disallowed(self):
        """By default, backtick in backtick-fence info string is rejected."""
        md = MarkdownIt()
        tokens = md.parse("```foo`bar\ntest\n```\n")
        # Not parsed as a fence (`` ` `` in info rejects it as opener)
        assert not any(t.type == "fence" and "foo`bar" in t.info for t in tokens)

    def test_tilde_in_tilde_info_allowed(self):
        """By default, tilde in tilde-fence info string is allowed."""
        md = MarkdownIt()
        tokens = md.parse("~~~ foo~bar\ntest\n~~~\n")
        assert tokens[0].type == "fence"
        assert tokens[0].info == " foo~bar"

    def test_disallow_all(self):
        """Can disallow marker in info for all marker types."""
        md = MarkdownIt()
        md.block.ruler.at(
            "fence",
            make_fence_rule(disallow_marker_in_info=("~", "`")),
        )
        tokens = md.parse("~~~ foo~bar\ntest\n~~~\n")
        # Tilde in info string of tilde fence → rejected
        assert not any(t.type == "fence" for t in tokens)

    def test_disallow_none(self):
        """Can allow marker in info for all marker types."""
        md = MarkdownIt()
        md.block.ruler.at(
            "fence",
            make_fence_rule(disallow_marker_in_info=()),
        )
        # Backtick in backtick-fence info string → now allowed
        tokens = md.parse("``` foo`bar\ntest\n```\n")
        assert tokens[0].type == "fence"
        assert tokens[0].info == " foo`bar"
