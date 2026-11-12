"""Normalize input string."""

import re

from .state_core import StateCore

# https://spec.commonmark.org/0.29/#line-ending
NEWLINES_RE = re.compile(r"\r\n?")


def normalize(state: StateCore) -> None:
    string = state.src

    # Normalize newlines. Most input has no "\r", so skip the substitution then.
    if "\r" in string:
        string = NEWLINES_RE.sub("\n", string)

    # Replace NULL characters
    if "\0" in string:
        string = string.replace("\0", "\ufffd")

    state.src = string
