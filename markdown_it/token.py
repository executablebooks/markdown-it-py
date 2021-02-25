from typing import Any, List, Optional, Union, NamedTuple, Sequence, Tuple, Dict

import attr

from .utils import _removesuffix


@attr.s(slots=True)
class Token:
    # Type of the token (string, e.g. "paragraph_open")
    type: str = attr.ib()
    # html tag name, e.g. "p"
    tag: str = attr.ib()
    # Level change (number in {-1, 0, 1} set), where:
    # -  `1` means the tag is opening
    # -  `0` means the tag is self-closing
    # - `-1` means the tag is closing
    nesting: int = attr.ib()
    # Html attributes. Format: `[ [ name1, value1 ], [ name2, value2 ] ]`
    attrs: Optional[List[list]] = attr.ib(default=None)
    # Source map info. Format: `[ line_begin, line_end ]`
    map: Optional[List[int]] = attr.ib(default=None)
    # nesting level, the same as `state.level`
    level: int = attr.ib(default=0)
    # An array of child nodes (inline and img tokens)
    children: Optional[List["Token"]] = attr.ib(default=None)
    # In a case of self-closing tag (code, html, fence, etc.),
    # it has contents of this tag.
    content: str = attr.ib(default="")
    # '*' or '_' for emphasis, fence string for fence, etc.
    markup: str = attr.ib(default="")
    # fence infostring
    info: str = attr.ib(default="")
    # A place for plugins to store an arbitrary data
    meta: dict = attr.ib(factory=dict)
    # True for block-level tokens, false for inline tokens.
    # Used in renderer to calculate line breaks
    block: bool = attr.ib(default=False)
    # If it's true, ignore this element when rendering.
    # Used for tight lists to hide paragraphs.
    hidden: bool = attr.ib(default=False)

    def attrIndex(self, name: str) -> int:
        if not self.attrs:
            return -1
        for i, at in enumerate(self.attrs):
            if at[0] == name:
                return i
        return -1

    def attrPush(self, attrData: list) -> None:
        """Add `[ name, value ]` attribute to list. Init attrs if necessary."""
        if self.attrs:
            self.attrs.append(attrData)
        else:
            self.attrs = [attrData]

    def attrSet(self, name: str, value: Any) -> None:
        """Set `name` attribute to `value`. Override old value if exists."""
        idx = self.attrIndex(name)
        if idx < 0:
            self.attrPush([name, value])
        else:
            assert self.attrs is not None
            self.attrs[idx] = [name, value]

    def attrGet(self, name: str) -> Any:
        """ Get the value of attribute `name`, or null if it does not exist."""
        idx = self.attrIndex(name)
        if idx >= 0:
            assert self.attrs is not None
            return self.attrs[idx][1]
        return None

    def attrJoin(self, name, value):
        """Join value to existing attribute via space.
        Or create new attribute if not exists.
        Useful to operate with token classes.
        """
        idx = self.attrIndex(name)
        if idx < 0:
            self.attrPush([name, value])
        else:
            self.attrs[idx][1] = self.attrs[idx][1] + " " + value

    def copy(self) -> "Token":
        """Return a shallow copy of the instance."""
        return attr.evolve(self)

    def as_dict(self, children=True, filter=None, dict_factory=dict):
        """Return the token as a dict.

        :param bool children: Also convert children to dicts
        :param filter: A callable whose return code determines whether an
            attribute or element is included (``True``) or dropped (``False``).  Is
            called with the `attr.Attribute` as the first argument and the
            value as the second argument.
        :param dict_factory: A callable to produce dictionaries from.  For
            example, to produce ordered dictionaries instead of normal Python
            dictionaries, pass in ``collections.OrderedDict``.

        """
        return attr.asdict(
            self, recurse=children, filter=filter, dict_factory=dict_factory
        )

    @classmethod
    def from_dict(cls, dct):
        token = cls(**dct)
        if token.children:
            token.children = [cls.from_dict(c) for c in token.children]
        return token


@attr.s(slots=True)
class NestedTokens:
    """A class that closely resembles a Token,
    but for a an opening/closing Token pair, and their containing children.
    """

    opening: Token = attr.ib()
    closing: Token = attr.ib()
    children: List[Union[Token, "NestedTokens"]] = attr.ib(factory=list)

    def __getattr__(self, name):
        return getattr(self.opening, name)

    def attrGet(self, name: str) -> Optional[str]:
        """ Get the value of attribute `name`, or null if it does not exist."""
        return self.opening.attrGet(name)


def nest_tokens(tokens: List[Token]) -> List[Union[Token, NestedTokens]]:
    """Convert the token stream to a list of tokens and nested tokens.

    ``NestedTokens`` contain the open and close tokens and a list of children
    of all tokens in between (recursively nested)
    """
    output: List[Union[Token, NestedTokens]] = []

    tokens = list(reversed(tokens))
    while tokens:
        token = tokens.pop()

        if token.nesting == 0:
            token = token.copy()
            output.append(token)
            if token.children:
                # Ignore type checkers because `nest_tokens` doesn't respect
                # typing of `Token.children`. We add `NestedTokens` into a
                # `List[Token]` here.
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

    class _NesterTokens(NamedTuple):
        opening: Token
        closing: Token

    def __init__(self) -> None:
        """Initialize a root node with no children.

        You probably need `SyntaxTreeNode.from_tokens` instead.
        """
        # Only nodes representing an unnested token have self.token
        self.token: Optional[Token] = None

        # Only containers have nester tokens
        self.nester_tokens: Optional[SyntaxTreeNode._NesterTokens] = None

        # Root node does not have self.parent
        self.parent: Optional["SyntaxTreeNode"] = None

        # Empty list unless a non-empty container, or unnested token that has
        # children (i.e. inline or img)
        self.children: List["SyntaxTreeNode"] = []

    @staticmethod
    def from_tokens(tokens: Sequence[Token]) -> "SyntaxTreeNode":
        root = SyntaxTreeNode()
        root._set_children_from_tokens(tokens)
        return root

    def to_tokens(self) -> List[Token]:
        def recursive_collect_tokens(node: "SyntaxTreeNode", token_list: list) -> None:
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
    def siblings(self) -> Sequence["SyntaxTreeNode"]:
        if not self.parent:
            return [self]
        return self.parent.children

    @property
    def type(self) -> str:
        if not self.token and not self.nester_tokens:
            return "root"
        if self.token:
            return self.token.type
        assert self.nester_tokens
        return _removesuffix(self.nester_tokens.opening.type, "_open")

    @property
    def next_sibling(self) -> Optional["SyntaxTreeNode"]:
        self_index = self.siblings.index(self)
        if self_index + 1 < len(self.siblings):
            return self.siblings[self_index + 1]
        return None

    @property
    def previous_sibling(self) -> Optional["SyntaxTreeNode"]:
        self_index = self.siblings.index(self)
        if self_index - 1 >= 0:
            return self.siblings[self_index - 1]
        return None

    def _make_child(
        self,
        *,
        token: Optional[Token] = None,
        nester_tokens: Optional[_NesterTokens] = None,
    ) -> "SyntaxTreeNode":
        if token and nester_tokens or not token and not nester_tokens:
            raise ValueError("must specify either `token` or `nester_tokens`")
        child = SyntaxTreeNode()
        if token:
            child.token = token
        else:
            child.nester_tokens = nester_tokens
        child.parent = self
        self.children.append(child)
        return child

    def _set_children_from_tokens(self, tokens: Sequence[Token]) -> None:
        """Convert the token stream to a tree structure."""
        reversed_tokens = list(reversed(tokens))
        while reversed_tokens:
            token = reversed_tokens.pop()

            if token.nesting == 0:
                child = self._make_child(token=token)
                if token.children:
                    child._set_children_from_tokens(token.children)
                continue

            assert token.nesting == 1

            nested_tokens = [token]
            nesting = 1
            while reversed_tokens and nesting != 0:
                token = reversed_tokens.pop()
                nested_tokens.append(token)
                nesting += token.nesting
            if nesting != 0:
                raise ValueError(f"unclosed tokens starting {nested_tokens[0]}")

            child = self._make_child(
                nester_tokens=SyntaxTreeNode._NesterTokens(
                    nested_tokens[0], nested_tokens[-1]
                )
            )
            child._set_children_from_tokens(nested_tokens[1:-1])

    # NOTE:
    # The values of the properties defined below directly map to properties
    # of the underlying `Token`s. A root node does not translate to a `Token`
    # object, so calling these property getters on a root node will raise an
    # `AttributeError`.
    #
    # There is no mapping for `Token.nesting` because getting a `bool` of
    # `SyntaxTreeNode.nester_tokens` provides that data, and can be called on
    # any node type, including root.

    def _attribute_token(self) -> Token:
        if self.token:
            return self.token
        if self.nester_tokens:
            return self.nester_tokens.opening
        raise AttributeError("Root node does not have the accessed attribute")

    @property
    def tag(self) -> str:
        return self._attribute_token().tag

    @property
    def attrs(self) -> Dict[str, Any]:
        token_attrs = self._attribute_token().attrs
        if token_attrs is None:
            return {}
        # Type ignore because `Token`s attribute types are not perfect
        return dict(token_attrs)  # type: ignore

    @property
    def map(self) -> Optional[Tuple[int, int]]:
        map_ = self._attribute_token().map
        if map_:
            # Type ignore because `Token`s attribute types are not perfect
            return tuple(map_)  # type: ignore
        return None

    @property
    def level(self) -> int:
        return self._attribute_token().level

    @property
    def content(self) -> str:
        return self._attribute_token().content

    @property
    def markup(self) -> str:
        return self._attribute_token().markup

    @property
    def info(self) -> str:
        return self._attribute_token().info

    @property
    def meta(self) -> dict:
        return self._attribute_token().meta

    @property
    def block(self) -> bool:
        return self._attribute_token().block

    @property
    def hidden(self) -> bool:
        return self._attribute_token().hidden
