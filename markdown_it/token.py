from __future__ import annotations

from collections.abc import Callable, MutableMapping
import copy
import dataclasses
from dataclasses import dataclass, field
from typing import Any
import warnings

from markdown_it._compat import dataclass_kwargs


def convert_attrs(value: Any) -> Any:
    """Convert Token.attrs set as ``None`` or ``[[key, value], ...]`` to a dict.

    This improves compatibility with upstream markdown-it.
    """
    if not value:
        return {}
    if isinstance(value, list):
        return dict(value)
    return value


@dataclass(**dataclass_kwargs)
class Token:
    # Type of the token (string, e.g. "paragraph_open")
    type: str
    # html tag name, e.g. "p"
    tag: str
    # Level change (number in {-1, 0, 1} set), where:
    # -  `1` means the tag is opening
    # -  `0` means the tag is self-closing
    # - `-1` means the tag is closing
    nesting: int
    # Html attributes. Note this differs from the upstream "list of lists" format
    attrs: dict[str, str | int | float] = field(default_factory=dict)
    # Source map info. Format: `[ line_begin, line_end ]`
    map: list[int] | None = None
    # nesting level, the same as `state.level`
    level: int = 0
    # An array of child nodes (inline and img tokens)
    children: list[Token] | None = None
    # In a case of self-closing tag (code, html, fence, etc.),
    # it has contents of this tag.
    content: str = ""
    # '*' or '_' for emphasis, fence string for fence, etc.
    markup: str = ""
    # Additional information:
    #   - Info string for "fence" tokens
    #   - The value "auto" for autolink "link_open" and "link_close" tokens
    #   - The string value of the item marker for ordered-list "list_item_open" tokens
    info: str = ""
    # A place for plugins to store any arbitrary data
    meta: dict = field(default_factory=dict)
    # True for block-level tokens, false for inline tokens.
    # Used in renderer to calculate line breaks
    block: bool = False
    # If it's true, ignore this element when rendering.
    # Used for tight lists to hide paragraphs.
    hidden: bool = False

    def __post_init__(self):
        self.attrs = convert_attrs(self.attrs)

    def attrIndex(self, name: str) -> int:
        warnings.warn(
            "Token.attrIndex should not be used, since Token.attrs is a dictionary",
            UserWarning,
        )
        if name not in self.attrs:
            return -1
        return list(self.attrs.keys()).index(name)

    def attrItems(self) -> list[tuple[str, str | int | float]]:
        """Get (key, value) list of attrs."""
        return list(self.attrs.items())

    def attrPush(self, attrData: tuple[str, str | int | float]) -> None:
        """Add `[ name, value ]` attribute to list. Init attrs if necessary."""
        name, value = attrData
        self.attrSet(name, value)

    def attrSet(self, name: str, value: str | int | float) -> None:
        """Set `name` attribute to `value`. Override old value if exists."""
        self.attrs[name] = value

    def attrGet(self, name: str) -> None | str | int | float:
        """Get the value of attribute `name`, or null if it does not exist."""
        return self.attrs.get(name, None)

    def attrJoin(self, name: str, value: str) -> None:
        """Join value to existing attribute via space.
        Or create new attribute if not exists.
        Useful to operate with token classes.
        """
        if name in self.attrs:
            current = self.attrs[name]
            if not isinstance(current, str):
                raise TypeError(
                    f"existing attr 'name' is not a str: {self.attrs[name]}"
                )
            self.attrs[name] = f"{current} {value}"
        else:
            self.attrs[name] = value

    def copy(self) -> Token:
        """Return a shallow copy of the instance."""
        return copy.copy(self)

    def as_dict(
        self, *, dict_factory: Callable[..., MutableMapping[str, Any]] = dict
    ) -> MutableMapping[str, Any]:
        """Return the token as a dictionary."""
        return dataclasses.asdict(self, dict_factory=dict_factory)

    @classmethod
    def from_dict(cls, dct: MutableMapping[str, Any]) -> Token:
        """Convert a dict to a Token."""
        token = cls(**dct)
        if token.children:
            token.children = [cls.from_dict(c) for c in token.children]  # type: ignore[arg-type]
        return token


@dataclass(**dataclass_kwargs)
class NestedTokens:
    """A class that closely resembles a Token,
    but for a an opening/closing Token pair, and their containing children.
    """

    opening: Token
    closing: Token
    children: list[Token | NestedTokens] = field(default_factory=list)

    def __getattr__(self, name):
        return getattr(self.opening, name)

    def attrGet(self, name: str) -> None | str | int | float:
        """ Get the value of attribute `name`, or null if it does not exist."""
        return self.opening.attrGet(name)


def nest_tokens(tokens: list[Token]) -> list[Token | NestedTokens]:
    """Convert the token stream to a list of tokens and nested tokens.

    ``NestedTokens`` contain the open and close tokens and a list of children
    of all tokens in between (recursively nested)
    """
    warnings.warn(
        "`markdown_it.token.nest_tokens` and `markdown_it.token.NestedTokens`"
        " are deprecated. Please migrate to `markdown_it.tree.SyntaxTreeNode`",
        DeprecationWarning,
    )

    output: list[Token | NestedTokens] = []

    tokens = list(reversed(tokens))
    while tokens:
        token = tokens.pop()

        if token.nesting == 0:
            token = token.copy()
            output.append(token)
            if token.children:
                # Ignore type checkers because `nest_tokens` doesn't respect
                # typing of `Token.children`. We add `NestedTokens` into a
                # `list[Token]` here.
                token.children = nest_tokens(token.children)  # type: ignore
            continue

        assert token.nesting == 1, token.nesting

        nested_tokens = [token]
        nesting = 1
        while tokens and nesting != 0:
            token = tokens.pop()
            nested_tokens.append(token)
            nesting += token.nesting
        if nesting != 0:
            raise ValueError(f"unclosed tokens starting {nested_tokens[0]}")

        child = NestedTokens(nested_tokens[0], nested_tokens[-1])
        output.append(child)
        child.children = nest_tokens(nested_tokens[1:-1])

    return output
