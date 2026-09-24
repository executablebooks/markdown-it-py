# Parse backticks
from .state_inline import StateInline


def _build_last_runs(src: str) -> dict[int, int]:
    """Map each backtick run length to its last position in the source."""
    last_runs: dict[int, int] = {}
    pos = 0

    while (start := src.find("`", pos)) != -1:
        pos = start + 1
        while pos < len(src) and src[pos] == "`":
            pos += 1
        last_runs[pos - start] = start

    return last_runs


def backtick(state: StateInline, silent: bool) -> bool:
    """Parse an inline code span or consume an unmatched backtick run."""
    start = state.pos

    if state.src[start] != "`":
        return False

    maximum = state.posMax
    pos = start + 1

    # Scan marker length.
    while pos < maximum and state.src[pos] == "`":
        pos += 1

    marker = state.src[start:pos]
    opener_length = len(marker)

    if not state.backticksScanned:
        # Lookaheads may visit runs out of order, so build this cache from the
        # whole source independently of the parser's current position.
        state.backticks = _build_last_runs(state.src)
        state.backticksScanned = True

    if state.backticks.get(opener_length, -1) >= pos:
        match_end = pos

        while (
            match_start := state.src.find("`", match_end)
        ) != -1 and match_start < maximum:
            match_end = match_start + 1
            # A run crossing posMax cannot be a closer in this parse range.
            while match_end < len(state.src) and state.src[match_end] == "`":
                match_end += 1
            if match_end > maximum:
                break

            if match_end - match_start == opener_length:
                if not silent:
                    token = state.push("code_inline", "code", 0)
                    token.markup = marker
                    token.content = state.src[pos:match_start].replace("\n", " ")
                    if (
                        token.content.startswith(" ")
                        and token.content.endswith(" ")
                        and token.content.strip()
                    ):
                        token.content = token.content[1:-1]
                state.pos = match_end
                return True

    if not silent:
        state.append_pending(marker)
    state.pos = pos
    return True
