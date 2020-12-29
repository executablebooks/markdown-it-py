from typing import List

from ..token import Token
from ..ruler import StateBase


class StateCore(StateBase):
    def __init__(self, src: str, md, env, tokens=None):
        self.src = src
        self.md = md  # link to parser instance
        self.env = env
        self.tokens: List[Token] = tokens or []
        self.inlineMode = False
