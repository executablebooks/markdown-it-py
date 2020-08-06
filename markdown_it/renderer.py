"""
class Renderer

Generates HTML from parsed token stream. Each instance has independent
copy of rules. Those can be rewritten with ease. Also, you can add new
rules if you create plugin and adds new token types.
"""
import inspect
from typing import List

from .common.utils import unescapeAll, escapeHtml
from .token import Token


class RendererHTML:
    """Contains render rules for tokens. Can be updated and extended.

    Example:

    Each rule is called as independent static function with fixed signature:

    ::

        class Renderer:
            def token_type_name(self, tokens, idx, options, env) {
                # ...
                return renderedHTML

    ::

        class CustomRenderer(RendererHTML):
            def strong_open(self, tokens, idx, options, env):
                return '<b>'
            def strong_close(self, tokens, idx, options, env):
                return '</b>'

        md = MarkdownIt(renderer=CustomRenderer)

        result = md.render(...)

    See https://github.com/markdown-it/markdown-it/blob/master/lib/renderer.js
    for more details and examples.
    """

    __output__ = "html"

    def __init__(self, parser=None):
        self.rules = {
            k: v
            for k, v in inspect.getmembers(self, predicate=inspect.ismethod)
            if not (k.startswith("render") or k.startswith("_"))
        }

    def render(self, tokens: List[Token], options, env) -> str:
        """Takes token stream and generates HTML.

        :param tokens: list on block tokens to render
        :param options: params of parser instance
        :param env: additional data from parsed input

        """
        result = ""

        for i, token in enumerate(tokens):

            if token.type == "inline":
                result += self.renderInline(token.children, options, env)
            elif token.type in self.rules:
                result += self.rules[token.type](tokens, i, options, env)
            else:
                result += self.renderToken(tokens, i, options, env)

        return result

    def renderInline(self, tokens: List[Token], options, env) -> str:
        """The same as ``render``, but for single token of `inline` type.

        :param tokens: list on block tokens to render
        :param options: params of parser instance
        :param env: additional data from parsed input (references, for example)
        """
        result = ""

        for i, token in enumerate(tokens):
            if token.type in self.rules:
                result += self.rules[token.type](tokens, i, options, env)
            else:
                result += self.renderToken(tokens, i, options, env)

        return result

    def renderToken(
        self, tokens: List[Token], idx: int, options: dict, env: dict
    ) -> str:
        """Default token renderer.

        Can be overridden by custom function

        :param idx: token index to render
        :param options: params of parser instance
        """
        result = ""
        needLf = False
        token = tokens[idx]

        # Tight list paragraphs
        if token.hidden:
            return ""

        # Insert a newline between hidden paragraph and subsequent opening
        # block-level tag.
        #
        # For example, here we should insert a newline before blockquote:
        #  - a
        #    >
        #
        if token.block and token.nesting != -1 and idx and tokens[idx - 1].hidden:
            result += "\n"

        # Add token name, e.g. `<img`
        result += ("</" if token.nesting == -1 else "<") + token.tag

        # Encode attributes, e.g. `<img src="foo"`
        result += self.renderAttrs(token)

        # Add a slash for self-closing tags, e.g. `<img src="foo" /`
        if token.nesting == 0 and options.xhtmlOut:
            result += " /"

        # Check if we need to add a newline after this tag
        if token.block:
            needLf = True

            if token.nesting == 1:
                if idx + 1 < len(tokens):
                    nextToken = tokens[idx + 1]

                    if nextToken.type == "inline" or nextToken.hidden:
                        # Block-level tag containing an inline tag.
                        #
                        needLf = False

                    elif nextToken.nesting == -1 and nextToken.tag == token.tag:
                        # Opening tag + closing tag of the same type. E.g. `<li></li>`.
                        #
                        needLf = False

        result += ">\n" if needLf else ">"

        return result

    @staticmethod
    def renderAttrs(token):
        """Render token attributes to string."""
        if not token.attrs:
            return ""

        result = ""

        for token_attr in token.attrs:
            result += (
                " "
                + escapeHtml(str(token_attr[0]))
                + '="'
                + escapeHtml(str(token_attr[1]))
                + '"'
            )

        return result

    def renderInlineAsText(self, tokens: List[Token], options, env) -> str:
        """Special kludge for image `alt` attributes to conform CommonMark spec.

        Don't try to use it! Spec requires to show `alt` content with stripped markup,
        instead of simple escaping.

        :param tokens: list on block tokens to render
        :param options: params of parser instance
        :param env: additional data from parsed input
        """
        result = ""

        for token in tokens or []:
            if token.type == "text":
                result += token.content
            elif token.type == "image":
                result += self.renderInlineAsText(token.children, options, env)

        return result

    ###################################################

    def code_inline(self, tokens, idx, options, env):
        token = tokens[idx]
        return (
            "<code"
            + self.renderAttrs(token)
            + ">"
            + escapeHtml(tokens[idx].content)
            + "</code>"
        )

    def code_block(self, tokens, idx, options, env):
        token = tokens[idx]

        return (
            "<pre"
            + self.renderAttrs(token)
            + "><code>"
            + escapeHtml(tokens[idx].content)
            + "</code></pre>\n"
        )

    def fence(self, tokens, idx, options, env):
        token = tokens[idx]
        info = unescapeAll(token.info).strip() if token.info else ""
        langName = ""

        if info:
            langName = info.split()[0]

        if options.highlight:
            highlighted = options.highlight(token.content, langName) or escapeHtml(
                token.content
            )
        else:
            highlighted = escapeHtml(token.content)

        if highlighted.startswith("<pre"):
            return highlighted + "\n"

        # If language exists, inject class gently, without modifying original token.
        # May be, one day we will add .clone() for token and simplify this part, but
        # now we prefer to keep things local.
        if info:
            i = token.attrIndex("class")
            tmpAttrs = token.attrs[:] if token.attrs else []

            if i < 0:
                tmpAttrs.append(["class", options.langPrefix + langName])
            else:
                tmpAttrs[i][1] += " " + options.langPrefix + langName

            # Fake token just to render attributes
            tmpToken = Token(type="", tag="", nesting=0, attrs=tmpAttrs)

            return (
                "<pre><code"
                + self.renderAttrs(tmpToken)
                + ">"
                + highlighted
                + "</code></pre>\n"
            )

        return (
            "<pre><code"
            + self.renderAttrs(token)
            + ">"
            + highlighted
            + "</code></pre>\n"
        )

    def image(self, tokens, idx, options, env):
        token = tokens[idx]

        # "alt" attr MUST be set, even if empty. Because it's mandatory and
        # should be placed on proper position for tests.
        #
        # Replace content with actual value

        token.attrs[token.attrIndex("alt")][1] = self.renderInlineAsText(
            token.children, options, env
        )

        return self.renderToken(tokens, idx, options, env)

    def hardbreak(self, tokens, idx, options, *args):
        return "<br />\n" if options.xhtmlOut else "<br>\n"

    def softbreak(self, tokens, idx, options, *args):
        return (
            ("<br />\n" if options.xhtmlOut else "<br>\n") if options.breaks else "\n"
        )

    def text(self, tokens, idx, *args):
        return escapeHtml(tokens[idx].content)

    def html_block(self, tokens, idx, *args):
        return tokens[idx].content

    def html_inline(self, tokens, idx, *args):
        return tokens[idx].content
