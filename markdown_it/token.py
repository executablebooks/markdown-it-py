from typing import (
    Any,
    Callable,
    Dict,
    List,
    MutableMapping,
    Optional,
    Tuple,
    Type,
    Union,
)
import warnings

import attr


def convert_attrs(value: Any) -> Any:
    """Convert Token.attrs set as ``None`` or ``[[key, value], ...]`` to a dict.

    This improves compatibility with upstream markdown-it.
    """
    if not value:
        return {}
    if isinstance(value, list):
        return dict(value)
    return value


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
    # Html attributes. Note this differs from the upstream "list of lists" format
    attrs: Dict[str, Union[str, int, float]] = attr.ib(
        factory=dict, converter=convert_attrs
    )
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
    # Additional information:
    #   - Info string for "fence" tokens
    #   - The value "auto" for autolink "link_open" and "link_close" tokens
    info: str = attr.ib(default="")
    # A place for plugins to store any arbitrary data
    meta: dict = attr.ib(factory=dict)
    # True for block-level tokens, false for inline tokens.
    # Used in renderer to calculate line breaks
    block: bool = attr.ib(default=False)
    # If it's true, ignore this element when rendering.
    # Used for tight lists to hide paragraphs.
    hidden: bool = attr.ib(default=False)

    def attrIndex(self, name: str) -> int:
        warnings.warn(
            "Token.attrIndex should not be used, since Token.attrs is a dictionary",
            UserWarning,
        )
        if name not in self.attrs:
            return -1
        return list(self.attrs.keys()).index(name)

    def attrItems(self) -> List[Tuple[str, Union[str, int, float]]]:
        """Get (key, value) list of attrs."""
        return list(self.attrs.items())

    def attrPush(self, attrData: Tuple[str, Union[str, int, float]]) -> None:
        """Add `[ name, value ]` attribute to list. Init attrs if necessary."""
        name, value = attrData
        self.attrSet(name, value)

    def attrSet(self, name: str, value: Union[str, int, float]) -> None:
        """Set `name` attribute to `value`. Override old value if exists."""
        self.attrs[name] = value

    def attrGet(self, name: str) -> Union[None, str, int, float]:
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

    def copy(self) -> "Token":
        """Return a shallow copy of the instance."""
        return attr.evolve(self)

    def as_dict(
        self,
        *,
        children: bool = True,
        as_upstream: bool = True,
        meta_serializer: Optional[Callable[[dict], Any]] = None,
        filter: Optional[Callable[[attr.Attribute, Any], bool]] = None,
        dict_factory: Type[MutableMapping[str, Any]] = dict,
    ) -> MutableMapping[str, Any]:
        """Return the token as a dictionary.

        :param children: Also convert children to dicts
        :param as_upstream: Ensure the output dictionary is equal to that created by markdown-it
            For example, attrs are converted to null or lists
        :param meta_serializer: hook for serializing ``Token.meta``
        :param filter: A callable whose return code determines whether an
            attribute or element is included (``True``) or dropped (``False``).
            Is called with the `attr.Attribute` as the first argument and the
            value as the second argument.
        :param dict_factory: A callable to produce dictionaries from.
            For example, to produce ordered dictionaries instead of normal Python
            dictionaries, pass in ``collections.OrderedDict``.

        """
        mapping = attr.asdict(
            self, recurse=False, filter=filter, dict_factory=dict_factory
        )
        if as_upstream and "attrs" in mapping:
            mapping["attrs"] = (
                None
                if not mapping["attrs"]
                else [[k, v] for k, v in mapping["attrs"].items()]
            )
        if meta_serializer and "meta" in mapping:
            mapping["meta"] = meta_serializer(mapping["meta"])
        if children and mapping.get("children", None):
            mapping["children"] = [
                child.as_dict(
                    children=children,
                    filter=filter,
                    dict_factory=dict_factory,
                    as_upstream=as_upstream,
                    meta_serializer=meta_serializer,
                )
                for child in mapping["children"]
            ]
        return mapping

    @classmethod
    def from_dict(cls, dct: MutableMapping[str, Any]) -> "Token":
        """Convert a dict to a Token."""
        token = cls(**dct)
        if token.children:
            token.children = [cls.from_dict(c) for c in token.children]  # type: ignore[arg-type]
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

    def attrGet(self, name: str) -> Union[None, str, int, float]:
        """ Get the value of attribute `name`, or null if it does not exist."""
        return self.opening.attrGet(name)


def nest_tokens(tokens: List[Token]) -> List[Union[Token, NestedTokens]]:
    """Convert the token stream to a list of tokens and nested tokens.

    ``NestedTokens`` contain the open and close tokens and a list of children
    of all tokens in between (recursively nested)
    """
    warnings.warn(
        "`markdown_it.token.nest_tokens` and `markdown_it.token.NestedTokens`"
        " are deprecated. Please migrate to `markdown_it.tree.SyntaxTreeNode`",
        DeprecationWarning,
    )

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
