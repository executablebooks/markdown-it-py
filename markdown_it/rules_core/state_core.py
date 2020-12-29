from typing import List, Optional, TYPE_CHECKING

from ..utils import AttrDict
from ..token import Token
from ..ruler import StateBase

if TYPE_CHECKING:
    from markdown_it import MarkdownIt


class StateCore(StateBase):
    def __init__(
        self,
        src: str,
        md: "MarkdownIt",
        env: AttrDict,
        tokens: Optional[List[Token]] = None,
    ):
        self.src = src
        self.md = md  # link to parser instance
        self.env = env
        self.tokens: List[Token] = tokens or []
        self.inlineMode = False
