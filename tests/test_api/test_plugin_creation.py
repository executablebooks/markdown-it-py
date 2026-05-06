"""Test basic plugin creation functionality:
that they can be added and are called correctly
"""

from markdown_it import MarkdownIt


def inline_rule(state, silent):
    print("plugin called")
    return False


def test_inline_after(capsys):
    def _plugin(_md: MarkdownIt) -> None:
        _md.inline.ruler.after("text", "new_rule", inline_rule)

    MarkdownIt().use(_plugin).parse("[")
    assert "plugin called" in capsys.readouterr().out


def test_inline_before(capsys):
    def _plugin(_md: MarkdownIt) -> None:
        _md.inline.ruler.before("text", "new_rule", inline_rule)

    MarkdownIt().use(_plugin).parse("a")
    assert "plugin called" in capsys.readouterr().out


def test_inline_at(capsys):
    def _plugin(_md: MarkdownIt) -> None:
        _md.inline.ruler.at("text", inline_rule)

    MarkdownIt().use(_plugin).parse("a")
    assert "plugin called" in capsys.readouterr().out


def block_rule(state, startLine, endLine, silent):
    print("plugin called")
    return False


def test_block_after(capsys):
    def _plugin(_md: MarkdownIt) -> None:
        _md.block.ruler.after("hr", "new_rule", block_rule)

    MarkdownIt().use(_plugin).parse("a")
    assert "plugin called" in capsys.readouterr().out


def test_block_before(capsys):
    def _plugin(_md: MarkdownIt) -> None:
        _md.block.ruler.before("hr", "new_rule", block_rule)

    MarkdownIt().use(_plugin).parse("a")
    assert "plugin called" in capsys.readouterr().out


def test_block_at(capsys):
    def _plugin(_md: MarkdownIt) -> None:
        _md.block.ruler.at("hr", block_rule)

    MarkdownIt().use(_plugin).parse("a")
    assert "plugin called" in capsys.readouterr().out


def core_rule(state):
    print("plugin called")


def test_core_after(capsys):
    def _plugin(_md: MarkdownIt) -> None:
        _md.core.ruler.after("normalize", "new_rule", core_rule)

    MarkdownIt().use(_plugin).parse("a")
    assert "plugin called" in capsys.readouterr().out


def test_core_before(capsys):
    def _plugin(_md: MarkdownIt) -> None:
        _md.core.ruler.before("normalize", "new_rule", core_rule)

    MarkdownIt().use(_plugin).parse("a")
    assert "plugin called" in capsys.readouterr().out


def test_core_at(capsys):
    def _plugin(_md: MarkdownIt) -> None:
        _md.core.ruler.at("normalize", core_rule)

    MarkdownIt().use(_plugin).parse("a")
    assert "plugin called" in capsys.readouterr().out


def test_add_terminator_char():
    """Test that add_terminator_char stops the text rule on a new character."""
    hit_positions = []

    def w_rule(state, silent):
        if state.src[state.pos] != "w":
            return False
        hit_positions.append(state.pos)
        state.pos += 1
        return True

    def _plugin(_md: MarkdownIt) -> None:
        _md.inline.add_terminator_char("w")
        _md.inline.ruler.before("text", "w_rule", w_rule)

    md = MarkdownIt().use(_plugin)

    # Without the terminator 'w' would be consumed as plain text;
    # with it the rule fires exactly for the 'w' at position 1 in "awb".
    md.render("awb")
    assert hit_positions == [1]


def test_add_terminator_char_idempotent():
    """add_terminator_char with an already-present char should not rebuild the regex."""
    md = MarkdownIt()
    original_re = md.inline.terminator_re

    # '\n' is already in the default set – adding it again must not rebuild
    md.inline.add_terminator_char("\n")
    assert md.inline.terminator_re is original_re


def test_add_terminator_char_rebuilds():
    """add_terminator_char with a new char should rebuild the regex."""
    md = MarkdownIt()
    original_re = md.inline.terminator_re

    md.inline.add_terminator_char("w")
    assert md.inline.terminator_re is not original_re
    assert "w" in md.inline._extra_terminator_chars
