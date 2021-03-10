from . import commonmark, default, zero  # noqa: F401

js_default = default


class gfm_like:
    """GitHub Flavoured Markdown (GFM) like.

    This adds the linkify, table and strikethrough components to CommmonMark.

    Note, it lacks task-list items and raw HTML filtering,
    to meet the the full GFM specification
    (see https://github.github.com/gfm/#autolinks-extension-).
    """

    @staticmethod
    def make():
        config = commonmark.make()
        config["components"]["core"]["rules"].append("linkify")
        config["components"]["block"]["rules"].append("table")
        config["components"]["inline"]["rules"].append("strikethrough")
        config["components"]["inline"]["rules2"].append("strikethrough")
        config["options"]["linkify"] = True
        config["options"]["html"] = True
        return config
