# Configuration file for the Sphinx documentation builder.
#
# This file only contains a selection of the most common options. For a full
# list see the documentation:
# https://www.sphinx-doc.org/en/master/usage/configuration.html

# -- Path setup --------------------------------------------------------------

# If extensions (or modules to document with autodoc) are in another directory,
# add these directories to sys.path here. If the directory is relative to the
# documentation root, use os.path.abspath to make it absolute, like shown here.
#
from glob import glob
import os

# import sys
# sys.path.insert(0, os.path.abspath('.'))


# -- Project information -----------------------------------------------------

project = "markdown-it-py"
copyright = "2020, executable book project"
author = "executable book project"


# -- General configuration ---------------------------------------------------

# Add any Sphinx extension module names here, as strings. They can be
# extensions coming with Sphinx (named 'sphinx.ext.*') or your custom
# ones.
extensions = [
    "sphinx.ext.autodoc",
    "sphinx.ext.viewcode",
    "sphinx.ext.intersphinx",
    "myst_parser",
    "sphinx_copybutton",
    "sphinx_design",
    "jupyter_sphinx",
]

# List of patterns, relative to source directory, that match files and
# directories to ignore when looking for source files.
# This pattern also affects html_static_path and html_extra_path.
exclude_patterns = ["_build", "Thumbs.db", ".DS_Store"]

nitpicky = True
nitpick_ignore_regex = [
    ("py:.*", name)
    for name in (
        ".*_ItemTV",
        ".*_NodeType",
        ".*Literal.*",
        ".*_Result",
        "EnvType",
        "Path",
        "Ellipsis",
        "NotRequired",
    )
]

# -- Options for HTML output -------------------------------------------------

# The theme to use for HTML and HTML Help pages.  See the documentation for
# a list of builtin themes.
#
html_title = "markdown-it-py"
html_logo = html_favicon = "_static/markdown-it-py.svg"
html_theme = "sphinx_book_theme"
html_theme_options = {
    "home_page_in_toc": True,
    "use_repository_button": True,
    "use_edit_page_button": True,
    "repository_url": "https://github.com/executablebooks/markdown-it-py",
    "repository_branch": "master",
    "path_to_docs": "docs",
}
html_static_path = ["_static"]
html_css_files = ["custom.css"]

# Add any paths that contain custom static files (such as style sheets) here,
# relative to this directory. They are copied after the builtin static files,
# so a file named "default.css" will overwrite the builtin "default.css".
# html_static_path = ["_static"]


intersphinx_mapping = {
    "python": ("https://docs.python.org/3.9", None),
    "mdit-py-plugins": ("https://mdit-py-plugins.readthedocs.io/en/latest/", None),
}


def run_apidoc(app):
    """generate apidoc

    See: https://github.com/rtfd/readthedocs.org/issues/1139
    """
    import os
    import shutil

    import sphinx
    from sphinx.ext import apidoc

    logger = sphinx.util.logging.getLogger(__name__)
    logger.info("running apidoc")
    # get correct paths
    this_folder = os.path.abspath(os.path.dirname(os.path.realpath(__file__)))
    api_folder = os.path.join(this_folder, "api")
    module_path = os.path.normpath(os.path.join(this_folder, "../"))
    ignore_paths = ["../scripts", "../conftest.py", "../tests", "../benchmarking"]
    ignore_paths = [
        os.path.normpath(os.path.join(this_folder, p)) for p in ignore_paths
    ]
    # functions from these modules are all imported in the __init__.py with __all__
    for rule in ("block", "core", "inline"):
        for path in glob(
            os.path.normpath(
                os.path.join(this_folder, f"../markdown_it/rules_{rule}/*.py")
            )
        ):
            if os.path.basename(path) not in ("__init__.py", f"state_{rule}.py"):
                ignore_paths.append(path)

    if os.path.exists(api_folder):
        shutil.rmtree(api_folder)
    os.mkdir(api_folder)

    argv = ["-M", "--separate", "-o", api_folder, module_path, *ignore_paths]

    apidoc.OPTIONS.append("ignore-module-all")
    apidoc.main(argv)

    # we don't use this
    if os.path.exists(os.path.join(api_folder, "modules.rst")):
        os.remove(os.path.join(api_folder, "modules.rst"))


def setup(app):
    """Add functions to the Sphinx setup."""
    if os.environ.get("SKIP_APIDOC", None) is None:
        app.connect("builder-inited", run_apidoc)
