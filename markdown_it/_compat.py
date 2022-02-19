from __future__ import annotations

from collections.abc import Mapping
import sys
from typing import Any

if sys.version_info >= (3, 10):
    dataclass_kwargs: Mapping[str, Any] = {"slots": True}
else:
    dataclass_kwargs: Mapping[str, Any] = {}
