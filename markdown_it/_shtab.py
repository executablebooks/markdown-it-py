from argparse import Action, ArgumentParser
from typing import Any, Dict, List

FILE = None
DIRECTORY = DIR = None


def add_argument_to(parser: ArgumentParser, *args: List[Any], **kwargs: Dict[str, Any]):
    Action.complete = None  # type: ignore
    return parser
