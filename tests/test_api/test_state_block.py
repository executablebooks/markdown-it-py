"""Line markers built by ``StateBlock.__init__``.

The expected values are those of upstream markdown-it's per-character scan
(``lib/rules_block/state_block.mjs``), which the port must reproduce exactly:
token ``map`` values and html_block content are derived from them.
"""

import pytest

from markdown_it import MarkdownIt
from markdown_it.rules_block.state_block import StateBlock


@pytest.mark.parametrize(
    "src,bmarks,emarks,tshift,scount",
    [
        ("", [0], [0], [0], [0]),
        ("\n", [0, 1], [0, 1], [0, 0], [0, 0]),
        ("a", [0, 1], [1, 1], [0, 0], [0, 0]),
        ("a\n", [0, 2], [1, 2], [0, 0], [0, 0]),
        ("a\nb", [0, 2, 3], [1, 3, 3], [0, 0, 0], [0, 0, 0]),
        ("  a\n\tb\n", [0, 4, 7], [3, 6, 7], [2, 1, 0], [2, 4, 0]),
        (" \ta", [0, 3], [3, 3], [2, 0], [4, 0]),
        ("a\n  \nb", [0, 2, 5, 6], [1, 4, 6, 6], [0, 2, 0, 0], [0, 2, 0, 0]),
        # a final line of only spaces/tabs with no "\n" gets no marker (upstream quirk)
        ("   ", [3], [3], [0], [0]),
        ("\t", [1], [1], [0], [0]),
        ("a\n  ", [0, 4], [1, 4], [0, 0], [0, 0]),
        ("a\n \t", [0, 4], [1, 4], [0, 0], [0, 0]),
        ("a\n  \n", [0, 2, 5], [1, 4, 5], [0, 2, 0], [0, 2, 0]),
    ],
)
def test_line_markers(src, bmarks, emarks, tshift, scount):
    state = StateBlock(src, MarkdownIt(), {}, [])
    assert state.bMarks == bmarks
    assert state.eMarks == emarks
    assert state.tShift == tshift
    assert state.sCount == scount
    assert state.bsCount == [0] * len(bmarks)
    assert state.lineMax == len(bmarks) - 1


def test_trailing_whitespace_line_not_in_html_block():
    """Upstream markdown-it leaves a final whitespace-only line out of the block."""
    md = MarkdownIt("commonmark")
    assert md.render("<style>\n\nfoo\n  ") == "<style>\n\nfoo\n"
    tokens = md.parse("- a\n  ")
    assert tokens[0].map == [0, 1]
