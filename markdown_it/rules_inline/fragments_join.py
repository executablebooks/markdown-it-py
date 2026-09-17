from .state_inline import StateInline


def fragments_join(state: StateInline) -> None:
    """
    Clean up tokens after emphasis and strikethrough postprocessing:
    merge adjacent text nodes into one and re-calculate all token levels

    This is necessary because initially emphasis delimiter markers (``*, _, ~``)
    are treated as their own separate text tokens. Then emphasis rule either
    leaves them as text (needed to merge with adjacent text) or turns them
    into opening/closing tags (which messes up levels inside).
    """
    level = 0
    maximum = len(state.tokens)

    curr = last = 0
    while curr < maximum:
        # re-calculate levels after emphasis/strikethrough turns some text nodes
        # into opening/closing tags
        if state.tokens[curr].nesting < 0:
            level -= 1  # closing tag
        state.tokens[curr].level = level
        if state.tokens[curr].nesting > 0:
            level += 1  # opening tag

        if (
            state.tokens[curr].type == "text"
            and curr + 1 < maximum
            and state.tokens[curr + 1].type == "text"
        ):
            # Collapse a run of adjacent text nodes in a single join, instead
            # of pairwise `a + b` concatenation. The pairwise form is O(L*k)
            # in the size of the run because each step rebuilds the growing
            # prefix; "".join is O(L).
            parts = [state.tokens[curr].content]
            curr += 1
            while curr < maximum and state.tokens[curr].type == "text":
                parts.append(state.tokens[curr].content)
                curr += 1
            merged = state.tokens[curr - 1]
            merged.content = "".join(parts)
            merged.level = level
            state.tokens[last] = merged
            last += 1
            continue

        if state.tokens[curr].type == "text" and not state.tokens[curr].content:
            # Drop standalone empty text tokens. The emphasis postprocessor
            # only converts the *inner* marker of a `**` pair into a
            # strong_open/close tag and blanks the *outer* marker's content
            # while leaving it as a text token (see emphasis.py `_postProcess`
            # `if isStrong:` block). The outer-opening empty has an adjacent
            # text on its left and gets folded by the merge branch above; the
            # outer-closing empty often sits between two tags (e.g.
            # `_li**ne**_` puts it between `strong_close` and `em_close`),
            # has no text neighbor, and would otherwise survive.
            curr += 1
            continue

        if curr != last:
            state.tokens[last] = state.tokens[curr]
        last += 1
        curr += 1

    if curr != last:
        del state.tokens[last:]
