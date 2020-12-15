from .state_core import StateCore


def inline(state: StateCore) -> None:
    """Parse inlines"""
    for token in state.tokens:
        if token.type == "inline":
            state.md.inline.parse(token.content, state.md, state.env, token.children)
