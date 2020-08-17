import re

from markdown_it import MarkdownIt
from markdown_it.rules_inline import StateInline
from markdown_it.common.utils import escapeHtml


PATTERN = re.compile(r"^\{([a-zA-Z0-9\_\-\+\:]{1,36})\}(`+)(?!`)(.+?)(?<!`)\2(?!`)")


def myst_role_plugin(md: MarkdownIt):
    md.inline.ruler.before("backticks", "myst_role", myst_role)
    md.add_render_rule("myst_role", render_myst_role)


def myst_role(state: StateInline, silent: bool):
    try:
        if state.srcCharCode[state.pos - 1] == 0x5C:  # /* \ */
            # escaped (this could be improved in the case of edge case '\\{')
            return False
    except IndexError:
        pass

    match = PATTERN.search(state.src[state.pos :])
    if not match:
        return False
    state.pos += match.end()

    if not silent:
        token = state.push("myst_role", "", 0)
        token.meta = {"name": match.group(1)}
        token.content = match.group(3)

    return True


def render_myst_role(self, tokens, idx, options, env):
    token = tokens[idx]
    name = token.meta.get("name", "unknown")
    return (
        '<code class="sphinx-role">'
        f"{{{name}}}[{escapeHtml(token.content)}]"
        "</code>"
    )
