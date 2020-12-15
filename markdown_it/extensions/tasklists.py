from mdit_py_plugins.tasklists import *  # noqa: F401,F403

import warnings

warnings.warn(
    "`markdown_it.extensions` is deprecated, import from `mdit_py_plugins` instead",
    DeprecationWarning,
    stacklevel=2,
)
