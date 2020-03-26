import copy
from urllib.parse import unquote

from docutils import nodes
from docutils.parsers.rst import directives, roles

from .doc_renderer import DocutilsRenderer


class SphinxRenderer(DocutilsRenderer):
    """A mistletoe renderer to populate (in-place) a `docutils.document` AST.

    This is sub-class of `DocutilsRenderer` that handles sphinx cross-referencing.
    """

    def __init__(self, *args, **kwargs):
        """Initialise SphinxRenderer

        :param load_sphinx_env: load a basic sphinx environment,
            when using the renderer as a context manager outside if `sphinx-build`
        :param sphinx_conf: a dictionary representation of the sphinx `conf.py`
        :param sphinx_srcdir: a path to a source directory
          (for example, can be used for `include` statements)

        To use this renderer in a 'standalone' fashion::

            from myst_parser.block_tokens import Document

            with SphinxRenderer(load_sphinx_env=True, sphinx_conf={}) as renderer:
                renderer.render(Document.read("source text"))

        """
        self.load_sphinx_env = kwargs.pop("load_sphinx_env", False)
        self.sphinx_conf = kwargs.pop("sphinx_conf", None)
        self.sphinx_srcdir = kwargs.pop("sphinx_srcdir", None)
        super().__init__(*args, **kwargs)

    def handle_cross_reference(self, token, destination):
        from sphinx import addnodes

        wrap_node = addnodes.pending_xref(
            reftarget=unquote(destination),
            reftype="any",
            refdomain=None,  # Added to enable cross-linking
            refexplicit=len(token.children) > 0,
            refwarn=True,
        )
        self.add_line_and_source_path(wrap_node, token)
        title = token.attrGet("title")
        if title:
            wrap_node["title"] = title
        self.current_node.append(wrap_node)
        text_node = nodes.literal("", "", classes=["xref", "any"])
        wrap_node.append(text_node)
        with self.current_node_context(text_node):
            self.render_children(token)

    def mock_sphinx_env(self, configuration=None, sourcedir=None):
        """Create a minimimal Sphinx environment;
        loading sphinx roles, directives, etc.
        """
        from sphinx.application import builtin_extensions, Sphinx
        from sphinx.config import Config
        from sphinx.environment import BuildEnvironment
        from sphinx.events import EventManager
        from sphinx.project import Project
        from sphinx.registry import SphinxComponentRegistry
        from sphinx.util.tags import Tags

        class MockSphinx(Sphinx):
            """Minimal sphinx init to load roles and directives."""

            def __init__(self, confoverrides=None, srcdir=None):
                self.extensions = {}
                self.registry = SphinxComponentRegistry()
                self.html_themes = {}
                self.events = EventManager(self)
                self.tags = Tags(None)
                self.config = Config({}, confoverrides or {})
                self.config.pre_init_values()
                self._init_i18n()
                for extension in builtin_extensions:
                    self.registry.load_extension(self, extension)
                # fresh env
                self.doctreedir = None
                self.srcdir = srcdir
                self.confdir = None
                self.outdir = None
                self.project = Project(srcdir=srcdir, source_suffix=".md")
                self.project.docnames = ["mock_docname"]
                self.env = BuildEnvironment()
                self.env.setup(self)
                self.env.temp_data["docname"] = "mock_docname"
                self.builder = None

                if not confoverrides:
                    return

                # this code is only required for more complex parsing with extensions
                for extension in self.config.extensions:
                    self.setup_extension(extension)
                buildername = "dummy"
                self.preload_builder(buildername)
                self.config.init_values()
                self.events.emit("config-inited", self.config)
                import tempfile

                with tempfile.TemporaryDirectory() as tempdir:
                    # creating a builder attempts to make the doctreedir
                    self.doctreedir = tempdir
                    self.builder = self.create_builder(buildername)
                self.doctreedir = None

        app = MockSphinx(confoverrides=configuration, srcdir=sourcedir)
        self.document.settings.env = app.env
        return app

    def __enter__(self):
        """If `load_sphinx_env=True`, we set up an environment,
        to parse sphinx roles/directives, outside of a `sphinx-build`.

        This primarily copies the code in `sphinx.util.docutils.docutils_namespace`
        and `sphinx.util.docutils.sphinx_domains`.
        """
        if not self.load_sphinx_env:
            return super().__enter__()

        # store currently loaded roles/directives, so we can revert on exit
        self._directives = copy.copy(directives._directives)
        self._roles = copy.copy(roles._roles)
        # Monkey-patch directive and role dispatch,
        # so that sphinx domain-specific markup takes precedence.
        self._env = self.mock_sphinx_env(
            configuration=self.sphinx_conf, sourcedir=self.sphinx_srcdir
        ).env
        from sphinx.util.docutils import sphinx_domains

        self._sphinx_domains = sphinx_domains(self._env)
        self._sphinx_domains.enable()

        return super().__enter__()

    def __exit__(self, exception_type, exception_val, traceback):
        if not self.load_sphinx_env:
            return super().__exit__(exception_type, exception_val, traceback)
        # revert loaded roles/directives
        directives._directives = self._directives
        roles._roles = self._roles
        self._directives = None
        self._roles = None
        # unregister nodes (see `sphinx.util.docutils.docutils_namespace`)
        from sphinx.util.docutils import additional_nodes, unregister_node

        for node in list(additional_nodes):
            unregister_node(node)
            additional_nodes.discard(node)
        # revert directive/role function (see `sphinx.util.docutils.sphinx_domains`)
        self._sphinx_domains.disable()
        self._sphinx_domains = None
        self._env = None
        return super().__exit__(exception_type, exception_val, traceback)
