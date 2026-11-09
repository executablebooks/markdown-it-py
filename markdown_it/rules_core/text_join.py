"""Join raw text tokens with the rest of the text

This is set as a separate rule to provide an opportunity for plugins
to run text replacements after text join, but before escape join.

For example, `\\:)` shouldn't be replaced with an emoji.
"""

from __future__ import annotations

from ..token import Token
from .state_core import StateCore


def text_join(state: StateCore) -> None:
    """Join raw text for escape sequences (`text_special`) tokens with the rest of the text"""

    for inline_token in state.tokens[:]:
        if inline_token.type != "inline":
            continue

        children = inline_token.children or []
        for child_token in children:
            # image `alt` is parsed into its own token tree
            if child_token.children:
                child_token.children = _join_text_tokens(child_token.children)
        inline_token.children = _join_text_tokens(children)


def _join_text_tokens(tokens: list[Token]) -> list[Token]:
    """Convert `text_special` to `text` and join all adjacent text tokens"""
    new_tokens: list[Token] = []
    i = 0
    while i < len(tokens):
        token = tokens[i]
        if token.type == "text_special":
            token.type = "text"
        if token.type == "text" and new_tokens and new_tokens[-1].type == "text":
            # Collapse a run of adjacent text nodes in a single join, instead
            # of pairwise `a + b` concatenation. The pairwise form is O(L*k)
            # in the size of the run because each step rebuilds the growing
            # prefix; "".join is O(L).
            parts = [new_tokens[-1].content, token.content]
            i += 1
            while i < len(tokens):
                next_token = tokens[i]
                if next_token.type == "text_special":
                    next_token.type = "text"
                if next_token.type != "text":
                    break
                parts.append(next_token.content)
                i += 1
            new_tokens[-1].content = "".join(parts)
        else:
            new_tokens.append(token)
            i += 1
    return new_tokens
