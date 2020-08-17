import re

from markdown_it import MarkdownIt
from markdown_it.rules_block import StateBlock
from markdown_it.common.utils import isSpace, escapeHtml


TARGET_PATTERN = re.compile(r"^\(([a-zA-Z0-9\|\@\<\>\*\.\/\_\-\+\:]{1,100})\)\=\s*$")


def myst_block_plugin(md: MarkdownIt):
    md.block.ruler.before(
        "blockquote",
        "myst_line_comment",
        line_comment,
        {"alt": ["paragraph", "reference", "blockquote", "list", "footnote_def"]},
    )
    md.block.ruler.before(
        "hr",
        "myst_block_break",
        block_break,
        {"alt": ["paragraph", "reference", "blockquote", "list", "footnote_def"]},
    )
    md.block.ruler.before(
        "hr",
        "myst_target",
        target,
        {"alt": ["paragraph", "reference", "blockquote", "list", "footnote_def"]},
    )
    md.add_render_rule("myst_target", render_myst_target)
    md.add_render_rule("myst_line_comment", render_myst_line_comment)


def line_comment(state: StateBlock, startLine: int, endLine: int, silent: bool):

    pos = state.bMarks[startLine] + state.tShift[startLine]
    maximum = state.eMarks[startLine]

    # if it's indented more than 3 spaces, it should be a code block
    if state.sCount[startLine] - state.blkIndent >= 4:
        return False

    marker = state.srcCharCode[pos]
    pos += 1

    # Check block marker /* % */
    if marker != 0x25:
        return False

    if silent:
        return True

    state.line = startLine + 1

    token = state.push("myst_line_comment", "", 0)
    token.attrSet("class", "myst-line-comment")
    token.content = state.src[pos:maximum].strip()
    token.map = [startLine, state.line]
    token.markup = chr(marker)

    return True


def block_break(state: StateBlock, startLine: int, endLine: int, silent: bool):

    pos = state.bMarks[startLine] + state.tShift[startLine]
    maximum = state.eMarks[startLine]

    # if it's indented more than 3 spaces, it should be a code block
    if state.sCount[startLine] - state.blkIndent >= 4:
        return False

    marker = state.srcCharCode[pos]
    pos += 1

    # Check block marker /* + */
    if marker != 0x2B:
        return False

    # markers can be mixed with spaces, but there should be at least 3 of them

    cnt = 1
    while pos < maximum:
        ch = state.srcCharCode[pos]
        if ch != marker and not isSpace(ch):
            break
        if ch == marker:
            cnt += 1
        pos += 1

    if cnt < 3:
        return False

    if silent:
        return True

    state.line = startLine + 1

    token = state.push("myst_block_break", "hr", 0)
    token.attrSet("class", "myst-block")
    token.content = state.src[pos:maximum].strip()
    token.map = [startLine, state.line]
    token.markup = chr(marker) * cnt

    return True


def target(state: StateBlock, startLine: int, endLine: int, silent: bool):

    pos = state.bMarks[startLine] + state.tShift[startLine]
    maximum = state.eMarks[startLine]

    # if it's indented more than 3 spaces, it should be a code block
    if state.sCount[startLine] - state.blkIndent >= 4:
        return False

    match = TARGET_PATTERN.match(state.src[pos:maximum])
    if not match:
        return False

    if silent:
        return True

    state.line = startLine + 1

    token = state.push("myst_target", "", 0)
    token.attrSet("class", "myst-target")
    token.content = match.group(1)
    token.map = [startLine, state.line]

    return True


def render_myst_target(self, tokens, idx, options, env):
    content = tokens[idx].content
    return (
        '<div class=" admonition myst-target">'
        f"target = <code>{escapeHtml(content)}</code></div>"
    )


def render_myst_line_comment(self, tokens, idx, options, env):
    content = tokens[idx].content
    return f"<!--- {escapeHtml(content)} --->"
