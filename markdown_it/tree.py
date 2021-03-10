"""A tree representation of a linear markdown-it token stream.

This module is not part of upstream JavaScript markdown-it.
"""
import textwrap
from typing import (
    NamedTuple,
    Sequence,
    Tuple,
    Dict,
    List,
    Optional,
    Any,
    TypeVar,
    overload,
    Union,
)

from .token import Token
from .utils import _removesuffix


class _NesterTokens(NamedTuple):
    opening: Token
    closing: Token


_NodeType = TypeVar("_NodeType", bound="SyntaxTreeNode")


class SyntaxTreeNode:
    """A Markdown syntax tree node.

    A class that can be used to construct a tree representation of a linear
    `markdown-it-py` token stream.

    Each node in the tree represents either:
      - root of the Markdown document
      - a single unnested `Token`
      - a `Token` "_open" and "_close" token pair, and the tokens nested in
          between
    """

    def __init__(
        self, tokens: Sequence[Token] = (), *, create_root: bool = True
    ) -> None:
        """Initialize a `SyntaxTreeNode` from a token stream.

        If `create_root` is True, crete a root node for the document.
        """
        # Only nodes representing an unnested token have self.token
        self.token: Optional[Token] = None

        # Only containers have nester tokens
        self.nester_tokens: Optional[_NesterTokens] = None

        # Root node does not have self.parent
        self._parent: Any = None

        # Empty list unless a non-empty container, or unnested token that has
        # children (i.e. inline or img)
        self._children: list = []

        if create_root:
            self._set_children_from_tokens(tokens)
            return

        if not tokens:
            raise ValueError(
                "Can only create root from empty token sequence."
                " Set `create_root=True`."
            )
        elif len(tokens) == 1:
            inline_token = tokens[0]
            assert not inline_token.nesting
            self.token = inline_token
            if inline_token.children:
                self._set_children_from_tokens(inline_token.children)
        else:
            self.nester_tokens = _NesterTokens(tokens[0], tokens[-1])
            self._set_children_from_tokens(tokens[1:-1])

    def __repr__(self) -> str:
        return f"{type(self).__name__}({self.type})"

    @overload
    def __getitem__(self: _NodeType, item: int) -> _NodeType:
        ...

    @overload
    def __getitem__(self: _NodeType, item: slice) -> List[_NodeType]:
        ...

    def __getitem__(
        self: _NodeType, item: Union[int, slice]
    ) -> Union[_NodeType, List[_NodeType]]:
        return self.children[item]

    def to_tokens(self: _NodeType) -> List[Token]:
        """Recover the linear token stream."""

        def recursive_collect_tokens(node: _NodeType, token_list: List[Token]) -> None:
            if node.type == "root":
                for child in node.children:
                    recursive_collect_tokens(child, token_list)
            elif node.token:
                token_list.append(node.token)
            else:
                assert node.nester_tokens
                token_list.append(node.nester_tokens.opening)
                for child in node.children:
                    recursive_collect_tokens(child, token_list)
                token_list.append(node.nester_tokens.closing)

        tokens: List[Token] = []
        recursive_collect_tokens(self, tokens)
        return tokens

    @property
    def children(self: _NodeType) -> List[_NodeType]:
        return self._children

    @children.setter
    def children(self: _NodeType, value: List[_NodeType]) -> None:
        self._children = value

    @property
    def parent(self: _NodeType) -> Optional[_NodeType]:
        return self._parent

    @parent.setter
    def parent(self: _NodeType, value: Optional[_NodeType]) -> None:
        self._parent = value

    @property
    def is_root(self) -> bool:
        """Is the node a special root node?"""
        return not (self.token or self.nester_tokens)

    @property
    def is_nested(self) -> bool:
        """Is this node nested?.

        Returns `True` if the node represents a `Token` pair and tokens in the
        sequence between them, where `Token.nesting` of the first `Token` in
        the pair is 1 and nesting of the other `Token` is -1.
        """
        return bool(self.nester_tokens)

    @property
    def siblings(self: _NodeType) -> Sequence[_NodeType]:
        """Get siblings of the node.

        Gets the whole group of siblings, including self.
        """
        if not self.parent:
            return [self]
        return self.parent.children

    @property
    def type(self) -> str:
        """Get a string type of the represented syntax.

        - "root" for root nodes
        - `Token.type` if the node represents an unnested token
        - `Token.type` of the opening token, with "_open" suffix stripped, if
            the node represents a nester token pair
        """
        if self.is_root:
            return "root"
        if self.token:
            return self.token.type
        assert self.nester_tokens
        return _removesuffix(self.nester_tokens.opening.type, "_open")

    @property
    def next_sibling(self: _NodeType) -> Optional[_NodeType]:
        """Get the next node in the sequence of siblings.

        Returns `None` if this is the last sibling.
        """
        self_index = self.siblings.index(self)
        if self_index + 1 < len(self.siblings):
            return self.siblings[self_index + 1]
        return None

    @property
    def previous_sibling(self: _NodeType) -> Optional[_NodeType]:
        """Get the previous node in the sequence of siblings.

        Returns `None` if this is the first sibling.
        """
        self_index = self.siblings.index(self)
        if self_index - 1 >= 0:
            return self.siblings[self_index - 1]
        return None

    def _add_child(
        self,
        tokens: Sequence[Token],
    ) -> None:
        """Make a child node for `self`."""
        child = type(self)(tokens, create_root=False)
        child.parent = self
        self.children.append(child)

    def _set_children_from_tokens(self, tokens: Sequence[Token]) -> None:
        """Convert the token stream to a tree structure and set the resulting
        nodes as children of `self`."""
        reversed_tokens = list(reversed(tokens))
        while reversed_tokens:
            token = reversed_tokens.pop()

            if not token.nesting:
                self._add_child([token])
                continue
            if token.nesting != 1:
                raise ValueError("Invalid token nesting")

            nested_tokens = [token]
            nesting = 1
            while reversed_tokens and nesting:
                token = reversed_tokens.pop()
                nested_tokens.append(token)
                nesting += token.nesting
            if nesting:
                raise ValueError(f"unclosed tokens starting {nested_tokens[0]}")

            self._add_child(nested_tokens)

    def pretty(
        self, *, indent: int = 2, show_text: bool = False, _current: int = 0
    ) -> str:
        """Create an XML style string of the tree."""
        prefix = " " * _current
        text = prefix + f"<{self.type}"
        if not self.is_root and self.attrs:
            text += " " + " ".join(f"{k}={v!r}" for k, v in self.attrs.items())
        text += ">"
        if show_text and not self.is_root and self.type == "text" and self.content:
            text += "\n" + textwrap.indent(self.content, prefix + " " * indent)
        for child in self.children:
            text += "\n" + child.pretty(
                indent=indent, show_text=show_text, _current=_current + indent
            )
        return text

    # NOTE:
    # The values of the properties defined below directly map to properties
    # of the underlying `Token`s. A root node does not translate to a `Token`
    # object, so calling these property getters on a root node will raise an
    # `AttributeError`.
    #
    # There is no mapping for `Token.nesting` because the `is_nested` property
    # provides that data, and can be called on any node type, including root.

    def _attribute_token(self) -> Token:
        """Return the `Token` that is used as the data source for the
        properties defined below."""
        if self.token:
            return self.token
        if self.nester_tokens:
            return self.nester_tokens.opening
        raise AttributeError("Root node does not have the accessed attribute")

    @property
    def tag(self) -> str:
        """html tag name, e.g. \"p\""""
        return self._attribute_token().tag

    @property
    def attrs(self) -> Dict[str, Any]:
        """Html attributes."""
        token_attrs = self._attribute_token().attrs
        if token_attrs is None:
            return {}
        # Type ignore because `Token`s attribute types are not perfect
        return dict(token_attrs)  # type: ignore

    @property
    def map(self) -> Optional[Tuple[int, int]]:
        """Source map info. Format: `Tuple[ line_begin, line_end ]`"""
        map_ = self._attribute_token().map
        if map_:
            # Type ignore because `Token`s attribute types are not perfect
            return tuple(map_)  # type: ignore
        return None

    @property
    def level(self) -> int:
        """nesting level, the same as `state.level`"""
        return self._attribute_token().level

    @property
    def content(self) -> str:
        """In a case of self-closing tag (code, html, fence, etc.), it
        has contents of this tag."""
        return self._attribute_token().content

    @property
    def markup(self) -> str:
        """'*' or '_' for emphasis, fence string for fence, etc."""
        return self._attribute_token().markup

    @property
    def info(self) -> str:
        """fence infostring"""
        return self._attribute_token().info

    @property
    def meta(self) -> dict:
        """A place for plugins to store an arbitrary data."""
        return self._attribute_token().meta

    @property
    def block(self) -> bool:
        """True for block-level tokens, false for inline tokens."""
        return self._attribute_token().block

    @property
    def hidden(self) -> bool:
        """If it's true, ignore this element when rendering.
        Used for tight lists to hide paragraphs."""
        return self._attribute_token().hidden
