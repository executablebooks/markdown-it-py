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

        if curr != last:
            state.tokens[last] = state.tokens[curr]
        last += 1
        curr += 1

    if curr != last:
        del state.tokens[last:]

    # Drop zero-length text tokens.  Emphasis post-processing merges a ``**``
    # delimiter run into a single ``strong`` token pair and blanks out the
    # content of the two "inner" marker tokens instead of removing them.  They
    # render as nothing, but would surface as empty ``text`` nodes in
    # ``SyntaxTreeNode`` (see executablebooks/markdown-it-py#374).
    state.tokens[:] = [
        token for token in state.tokens if token.type != "text" or token.content
    ]
