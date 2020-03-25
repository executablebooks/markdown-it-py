from typing import Callable, List, Optional, Union

from . import helpers, presets  # noqa F401
from .normalize_url import normalizeLink, normalizeLinkText, validateLink
from .common import utils  # noqa F401
from .parser_core import ParserCore  # noqa F401
from .parser_block import ParserBlock  # noqa F401
from .parser_inline import ParserInline  # noqa F401
from .rules_core.state_core import StateCore
from .renderer import RendererHTML
from .utils import AttrDict

# var LinkifyIt    = require('linkify-it')
# var mdurl        = require('mdurl')
# var punycode     = require('punycode')

config = AttrDict(
    {
        "default": presets.default.presets,
        "zero": presets.zero.presets,
        "commonmark": presets.commonmark.presets,
        "working": presets.working.presets,
    }
)


class MarkdownIt:
    def __init__(
        self,
        presetName: Union[str, AttrDict] = "commonmark",
        options=None,
        renderer=None,
    ):
        """Main class

        :param presetName: name of configuration to load or a pre-defined one
        :param options: [description], defaults to None
        """
        options = options or {}
        if not options:
            if not isinstance(presetName, str):
                options = presetName or {}
                presetName = "default"

        self.inline = ParserInline()
        self.block = ParserBlock()
        self.core = ParserCore()
        self.renderer = RendererHTML() if renderer is None else renderer
        # self.linkify = LinkifyIt()  # TODO maybe see https://github.com/Suor/autolink

        self.validateLink = validateLink
        self.normalizeLink = normalizeLink
        self.normalizeLinkText = normalizeLinkText
        self.utils = utils
        self.helpers = helpers
        self.options = {}
        self.configure(presetName)
        if options:
            self.set(options)

    def __getitem__(self, name):
        return {
            "inline": self.inline,
            "block": self.block,
            "core": self.core,
            # "renderer": self.renderer,  # TODO
        }[name]

    def set(self, options):
        """Set parser options (in the same format as in constructor).
        Probably, you will never need it, but you can change options after constructor call.

        __Note:__ To achieve the best possible performance, don't modify a
        `markdown-it` instance options on the fly. If you need multiple configurations
        it's best to create multiple instances and initialize each with separate config.
        """
        self.options = options

    def configure(self, presets: Union[str, AttrDict]):
        """"
        Batch load of all options and component settings. This is an internal method,
        and you probably will not need it.
        But if you will - see available presets and data structure
        [here](https://github.com/markdown-it/markdown-it/tree/master/lib/presets)

        We strongly recommend to use presets instead of direct config loads.
        That will give better compatibility with next versions.
        """
        if isinstance(presets, str):
            presetName = presets
            presets = config.get(presetName, None)
            if not presets:
                raise KeyError(
                    'Wrong `markdown-it` preset "' + presetName + '", check name'
                )
        if not presets:
            raise ValueError("Wrong `markdown-it` preset, can't be empty")
        presets = AttrDict(presets)

        if "options" in presets:
            self.set(presets.options)

        if "components" in presets:
            for name, component in presets.components.items():
                rules = component.get("rules", None)
                if rules:
                    self[name].ruler.enableOnly(rules)
                rules2 = component.get("rules2", None)
                if rules2:
                    self[name].ruler2.enableOnly(rules2)

        return self

    def enable(self, names: Union[str, List[str]], ignoreInvalid: bool = False):
        """ chainable
        MarkdownIt.enable(list, ignoreInvalid)
        - list (String|Array): rule name or list of rule names to enable
        - ignoreInvalid (Boolean): set `true` to ignore errors when rule not found.

        Enable list or rules. It will automatically find appropriate components,
        containing rules with given names. If rule not found, and `ignoreInvalid`
        not set - throws exception.

        ##### Example

        ```python
        md = MarkdownIt()..enable(['sub', 'sup']).disable('smartquotes')
        ```
        """
        result = []

        if isinstance(names, str):
            names = [names]

        for chain in ["core", "block", "inline"]:
            result.extend(self[chain].ruler.enable(names, True))
        result.extend(self.inline.ruler2.enable(names, True))

        missed = [name for name in names if name not in result]
        if missed and not ignoreInvalid:
            raise ValueError(f"MarkdownIt. Failed to enable unknown rule(s): {missed}")

        return self

    def disable(self, names: Union[str, List[str]], ignoreInvalid: bool = False):
        """ chainable
        MarkdownIt.disable(list, ignoreInvalid)
        - names (String|Array): rule name or list of rule names to disable.
        - ignoreInvalid (Boolean): set `true` to ignore errors when rule not found.

        The same as [[MarkdownIt.enable]], but turn specified rules off.
        """
        result = []

        if isinstance(names, str):
            names = [names]

        for chain in ["core", "block", "inline"]:
            result.extend(self[chain].ruler.disable(names, True))
        result.extend(self.inline.ruler2.disable(names, True))

        missed = [name for name in names if name not in result]
        if missed and not ignoreInvalid:
            raise ValueError(f"MarkdownIt. Failed to disable unknown rule(s): {missed}")
        return self

    def add_render_rule(self, name, function, fmt="html"):
        if self.renderer.__output__ == fmt:
            self.renderer.rules[name] = function

    def use(self, plugin: Callable, *params):
        """ chainable

        Load specified plugin with given params into current parser instance.
        It's just a sugar to call `plugin(md, params)` with curring.

        ##### Example

        ```python
        def func(tokens, idx):
            tokens[idx].content = tokens[idx].content.replace('foo', 'bar')
        md = MarkdownIt().use(plugin, 'foo_replace', 'text', func)
        ```
        """
        plugin(self, *params)
        return self

    def parse(self, src: str, env: Optional[dict] = None):
        """ internal
        MarkdownIt.parse(src, env) -> Array
        - src (String): source string
        - env (Object): environment sandbox

        Parse input string and returns list of block tokens (special token type
        "inline" will contain list of inline tokens). You should not call this
        method directly, until you write custom renderer (for example, to produce
        AST).

        `env` is used to pass data between "distributed" rules and return additional
        metadata like reference info, needed for the renderer. It also can be used to
        inject data in specific cases. Usually, you will be ok to pass `{}`,
        and then pass updated object to renderer.
        """
        env = AttrDict(env or {})
        if not isinstance(src, str):
            raise TypeError("Input data should be a string")
        state = StateCore(src, self, env)
        self.core.process(state)
        return state.tokens

    def render(self, src: str, env: Optional[dict] = None):
        """
        MarkdownIt.render(src [, env]) -> String
        - src (String): source string
        - env (Object): environment sandbox

        Render markdown string into html. It does all magic for you :).

        `env` can be used to inject additional metadata (`{}` by default).
        But you will not need it with high probability. See also comment
        in [[MarkdownIt.parse]].
        """
        env = AttrDict(env or {})
        return self.renderer.render(self.parse(src, env), self.options, env)

    def parseInline(self, src: str, env: Optional[dict] = None):
        """ internal
        MarkdownIt.parseInline(src, env) -> Array
        - src (String): source string
        - env (Object): environment sandbox

        The same as [[MarkdownIt.parse]] but skip all block rules. It returns the
        block tokens list with the single `inline` element, containing parsed inline
        tokens in `children` property. Also updates `env` object.
        """
        state = self.core.State(src, self, env)
        state.inlineMode = True
        self.core.process(state)
        return state.tokens

    def renderInline(self, src: str, env: Optional[dict] = None):
        """
        MarkdownIt.renderInline(src [, env]) -> String
        - src (String): source string
        - env (Object): environment sandbox

        Similar to [[MarkdownIt.render]] but for single paragraph content. Result
        will NOT be wrapped into `<p>` tags.
        """
        env = AttrDict(env or {})
        return self.renderer.render(self.parseInline(src, env), self.options, env)
