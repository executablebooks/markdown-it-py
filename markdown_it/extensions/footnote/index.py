# Process footnotes
#

from typing import List, Optional

from markdown_it import MarkdownIt
from markdown_it.token import Token
from markdown_it.rules_inline import StateInline
from markdown_it.rules_block import StateBlock
from markdown_it.helpers import parseLinkLabel
from markdown_it.common.utils import isSpace


def footnote_plugin(md: MarkdownIt):
    """Plugin ported from
    `markdown-it-footnote <https://github.com/markdown-it/markdown-it-footnote>`__.

    It is based on the
    `pandoc definition <http://johnmacfarlane.net/pandoc/README.html#footnotes>`__:

    .. code-block:: md

        Normal footnote:

        Here is a footnote reference,[^1] and another.[^longnote]

        [^1]: Here is the footnote.

        [^longnote]: Here's one with multiple blocks.

            Subsequent paragraphs are indented to show that they
        belong to the previous footnote.

    """
    md.block.ruler.before(
        "reference", "footnote_def", footnote_def, {"alt": ["paragraph", "reference"]}
    )
    md.inline.ruler.after("image", "footnote_inline", footnote_inline)
    md.inline.ruler.after("footnote_inline", "footnote_ref", footnote_ref)
    md.core.ruler.after("inline", "footnote_tail", footnote_tail)

    md.add_render_rule("footnote_ref", render_footnote_ref)
    md.add_render_rule("footnote_block_open", render_footnote_block_open)
    md.add_render_rule("footnote_block_close", render_footnote_block_close)
    md.add_render_rule("footnote_open", render_footnote_open)
    md.add_render_rule("footnote_close", render_footnote_close)
    md.add_render_rule("footnote_anchor", render_footnote_anchor)

    # helpers (only used in other rules, no tokens are attached to those)
    md.add_render_rule("footnote_caption", render_footnote_caption)
    md.add_render_rule("footnote_anchor_name", render_footnote_anchor_name)


# ## RULES ##


def footnote_def(state: StateBlock, startLine: int, endLine: int, silent: bool):
    """Process footnote block definition"""

    start = state.bMarks[startLine] + state.tShift[startLine]
    maximum = state.eMarks[startLine]

    # line should be at least 5 chars - "[^x]:"
    if start + 4 > maximum:
        return False

    if state.srcCharCode[start] != 0x5B:  # /* [ */
        return False
    if state.srcCharCode[start + 1] != 0x5E:  # /* ^ */
        return False

    pos = start + 2
    while pos < maximum:
        if state.srcCharCode[pos] == 0x20:
            return False
        if state.srcCharCode[pos] == 0x5D:  # /* ] */
            break
        pos += 1

    if pos == start + 2:  # no empty footnote labels
        return False
    pos += 1
    if pos + 1 >= maximum or state.srcCharCode[pos] != 0x3A:  # /* : */
        return False
    if silent:
        return True
    pos += 1

    label = state.src[start + 2 : pos - 2]
    state.env.setdefault("footnotes", {}).setdefault("refs", {})[":" + label] = -1

    open_token = Token("footnote_reference_open", "", 1)
    open_token.meta = {"label": label}
    open_token.level = state.level
    state.level += 1
    state.tokens.append(open_token)

    oldBMark = state.bMarks[startLine]
    oldTShift = state.tShift[startLine]
    oldSCount = state.sCount[startLine]
    oldParentType = state.parentType

    posAfterColon = pos
    initial = offset = (
        state.sCount[startLine]
        + pos
        - (state.bMarks[startLine] + state.tShift[startLine])
    )

    while pos < maximum:
        ch = state.srcCharCode[pos]

        if isSpace(ch):
            if ch == 0x09:
                offset += 4 - offset % 4
            else:
                offset += 1

        else:
            break

        pos += 1

    state.tShift[startLine] = pos - posAfterColon
    state.sCount[startLine] = offset - initial

    state.bMarks[startLine] = posAfterColon
    state.blkIndent += 4
    state.parentType = "footnote"

    if state.sCount[startLine] < state.blkIndent:
        state.sCount[startLine] += state.blkIndent

    state.md.block.tokenize(state, startLine, endLine, True)

    state.parentType = oldParentType
    state.blkIndent -= 4
    state.tShift[startLine] = oldTShift
    state.sCount[startLine] = oldSCount
    state.bMarks[startLine] = oldBMark

    open_token.map = [startLine, state.line]

    token = Token("footnote_reference_close", "", -1)
    state.level -= 1
    token.level = state.level
    state.tokens.append(token)

    return True


def footnote_inline(state: StateInline, silent: bool):
    """Process inline footnotes (^[...])"""

    maximum = state.posMax
    start = state.pos

    if start + 2 >= maximum:
        return False
    if state.srcCharCode[start] != 0x5E:  # /* ^ */
        return False
    if state.srcCharCode[start + 1] != 0x5B:  # /* [ */
        return False

    labelStart = start + 2
    labelEnd = parseLinkLabel(state, start + 1)

    # parser failed to find ']', so it's not a valid note
    if labelEnd < 0:
        return False

    # We found the end of the link, and know for a fact it's a valid link
    # so all that's left to do is to call tokenizer.
    #
    if not silent:
        refs = state.env.setdefault("footnotes", {}).setdefault("list", {})
        footnoteId = len(refs)

        tokens: List[Token] = []
        state.md.inline.parse(
            state.src[labelStart:labelEnd], state.md, state.env, tokens
        )

        token = state.push("footnote_ref", "", 0)
        token.meta = {"id": footnoteId}

        refs[footnoteId] = {"content": state.src[labelStart:labelEnd], "tokens": tokens}

    state.pos = labelEnd + 1
    state.posMax = maximum
    return True


def footnote_ref(state: StateInline, silent: bool):
    """Process footnote references ([^...])"""

    maximum = state.posMax
    start = state.pos

    # should be at least 4 chars - "[^x]"
    if start + 3 > maximum:
        return False

    if "footnotes" not in state.env or "refs" not in state.env["footnotes"]:
        return False
    if state.srcCharCode[start] != 0x5B:  # /* [ */
        return False
    if state.srcCharCode[start + 1] != 0x5E:  # /* ^ */
        return False

    pos = start + 2
    while pos < maximum:
        if state.srcCharCode[pos] == 0x20:
            return False
        if state.srcCharCode[pos] == 0x0A:
            return False
        if state.srcCharCode[pos] == 0x5D:  # /* ] */
            break
        pos += 1

    if pos == start + 2:  # no empty footnote labels
        return False
    if pos >= maximum:
        return False
    pos += 1

    label = state.src[start + 2 : pos - 1]
    if (":" + label) not in state.env["footnotes"]["refs"]:
        return False

    if not silent:
        if "list" not in state.env["footnotes"]:
            state.env["footnotes"]["list"] = {}

        if state.env["footnotes"]["refs"][":" + label] < 0:
            footnoteId = len(state.env["footnotes"]["list"])
            state.env["footnotes"]["list"][footnoteId] = {"label": label, "count": 0}
            state.env["footnotes"]["refs"][":" + label] = footnoteId
        else:
            footnoteId = state.env["footnotes"]["refs"][":" + label]

        footnoteSubId = state.env["footnotes"]["list"][footnoteId]["count"]
        state.env["footnotes"]["list"][footnoteId]["count"] += 1

        token = state.push("footnote_ref", "", 0)
        token.meta = {"id": footnoteId, "subId": footnoteSubId, "label": label}

    state.pos = pos
    state.posMax = maximum
    return True


def footnote_tail(state: StateBlock, *args, **kwargs):
    """Post-processing step, to move footnote tokens to end of the token stream.

    Also removes un-referenced tokens.
    """

    insideRef = False
    refTokens = {}

    if "footnotes" not in state.env:
        return

    current: List[Token] = []
    tok_filter = []
    for tok in state.tokens:

        if tok.type == "footnote_reference_open":
            insideRef = True
            current = []
            currentLabel = tok.meta["label"]
            tok_filter.append(False)
            continue

        if tok.type == "footnote_reference_close":
            insideRef = False
            # prepend ':' to avoid conflict with Object.prototype members
            refTokens[":" + currentLabel] = current
            tok_filter.append(False)
            continue

        if insideRef:
            current.append(tok)

        tok_filter.append((not insideRef))

    state.tokens = [t for t, f in zip(state.tokens, tok_filter) if f]

    if "list" not in state.env.get("footnotes", {}):
        return
    foot_list = state.env["footnotes"]["list"]

    token = Token("footnote_block_open", "", 1)
    state.tokens.append(token)

    for i, foot_note in foot_list.items():
        token = Token("footnote_open", "", 1)
        token.meta = {"id": i, "label": foot_note.get("label", None)}
        # TODO propagate line positions of original foot note
        # (but don't store in token.map, because this is used for scroll syncing)
        state.tokens.append(token)

        if "tokens" in foot_note:
            tokens = []

            token = Token("paragraph_open", "p", 1)
            token.block = True
            tokens.append(token)

            token = Token("inline", "", 0)
            token.children = foot_note["tokens"]
            token.content = foot_note["content"]
            tokens.append(token)

            token = Token("paragraph_close", "p", -1)
            token.block = True
            tokens.append(token)

        elif "label" in foot_note:
            tokens = refTokens[":" + foot_note["label"]]

        state.tokens.extend(tokens)
        if state.tokens[len(state.tokens) - 1].type == "paragraph_close":
            lastParagraph: Optional[Token] = state.tokens.pop()
        else:
            lastParagraph = None

        t = (
            foot_note["count"]
            if (("count" in foot_note) and (foot_note["count"] > 0))
            else 1
        )
        j = 0
        while j < t:
            token = Token("footnote_anchor", "", 0)
            token.meta = {"id": i, "subId": j, "label": foot_note.get("label", None)}
            state.tokens.append(token)
            j += 1

        if lastParagraph:
            state.tokens.append(lastParagraph)

        token = Token("footnote_close", "", -1)
        state.tokens.append(token)

    token = Token("footnote_block_close", "", -1)
    state.tokens.append(token)


########################################
# Renderer partials


def render_footnote_anchor_name(self, tokens, idx, options, env):
    n = str(tokens[idx].meta["id"] + 1)
    prefix = ""

    if isinstance(env.get("docId", None), str):
        prefix = "-" + env.docId + "-"

    return prefix + n


def render_footnote_caption(self, tokens, idx, options, env):
    n = str(tokens[idx].meta["id"] + 1)

    if tokens[idx].meta.get("subId", -1) > 0:
        n += ":" + str(tokens[idx].meta["subId"])

    return "[" + n + "]"


def render_footnote_ref(self, tokens, idx, options, env):
    ident = self.rules["footnote_anchor_name"](tokens, idx, options, env)
    caption = self.rules["footnote_caption"](tokens, idx, options, env)
    refid = ident

    if tokens[idx].meta.get("subId", -1) > 0:
        refid += ":" + str(tokens[idx].meta["subId"])

    return (
        '<sup class="footnote-ref"><a href="#fn'
        + ident
        + '" id="fnref'
        + refid
        + '">'
        + caption
        + "</a></sup>"
    )


def render_footnote_block_open(self, tokens, idx, options, env):
    return (
        (
            '<hr class="footnotes-sep" />\n'
            if options.xhtmlOut
            else '<hr class="footnotes-sep">\n'
        )
        + '<section class="footnotes">\n'
        + '<ol class="footnotes-list">\n'
    )


def render_footnote_block_close(self, tokens, idx, options, env):
    return "</ol>\n</section>\n"


def render_footnote_open(self, tokens, idx, options, env):
    ident = self.rules["footnote_anchor_name"](tokens, idx, options, env)

    if tokens[idx].meta.get("subId", -1) > 0:
        ident += ":" + tokens[idx].meta["subId"]

    return '<li id="fn' + ident + '" class="footnote-item">'


def render_footnote_close(self, tokens, idx, options, env):
    return "</li>\n"


def render_footnote_anchor(self, tokens, idx, options, env):
    ident = self.rules["footnote_anchor_name"](tokens, idx, options, env)

    if tokens[idx].meta["subId"] > 0:
        ident += ":" + str(tokens[idx].meta["subId"])

    # ↩ with escape code to prevent display as Apple Emoji on iOS
    return ' <a href="#fnref' + ident + '" class="footnote-backref">\u21a9\uFE0E</a>'
