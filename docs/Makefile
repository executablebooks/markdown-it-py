# Minimal makefile for Sphinx documentation
#

# You can set these variables from the command line, and also
# from the environment for the first two.
SPHINXOPTS    ?=
SPHINXBUILD   ?= uv run sphinx-build
SOURCEDIR     = .
BUILDDIR      = build

docs: html
# Put it first so that "make" without argument is like "make help".
help:
	@$(SPHINXBUILD) -M help "$(SOURCEDIR)" "$(BUILDDIR)" $(SPHINXOPTS) $(O)

.PHONY: help docs Makefile

# Catch-all target: route all unknown targets to Sphinx using the new
# "make mode" option.  $(O) is meant as a shortcut for $(SPHINXOPTS).
%: Makefile
	@$(SPHINXBUILD) -M $@ "$(SOURCEDIR)" "$(BUILDDIR)" $(SPHINXOPTS) $(O)

# raise warnings to errors
html-strict:
	@$(SPHINXBUILD) -b html -nW --keep-going "$(SOURCEDIR)" "$(BUILDDIR)/html" $(SPHINXOPTS) $(O)

# increase logging level to verbose
html-verbose:
	@$(SPHINXBUILD) -b html -v "$(SOURCEDIR)" "$(BUILDDIR)/html" $(SPHINXOPTS) $(O)
