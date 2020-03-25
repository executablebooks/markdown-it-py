"""Normalize input string."""
import re

from .state_core import StateCore


# https://spec.commonmark.org/0.29/#line-ending
NEWLINES_RE = re.compile(r"\r\n?|\n")
NULL_RE = re.compile(r"\0")


def normalize(state: StateCore):

    # Normalize newlines
    string, _ = NEWLINES_RE.subn("\n", state.src)

    # Replace NULL characters
    string, _ = NULL_RE.subn("\uFFFD", string)

    state.src = string
