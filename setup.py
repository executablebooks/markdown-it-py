# from importlib import import_module
from os import path
import re
from setuptools import find_packages, setup


def get_version():
    text = open(path.join(path.dirname(__file__), "markdown_it", "__init__.py")).read()
    match = re.compile(r"^__version__\s*\=\s*[\"\']([^\s\'\"]+)", re.M).search(text)
    return match.group(1)


setup(
    name="markdown-it-py",
    version=get_version(),
    description="Python port of markdown-it. Markdown parsing, done right!",
    long_description=open("README.md").read(),
    long_description_content_type="text/markdown",
    url="https://github.com/executablebooks/markdown-it-py",
    project_urls={"Documentation": "https://markdown-it-py.readthedocs.io"},
    author="Chris Sewell",
    author_email="chrisj_sewell@hotmail.com",
    license="MIT",
    packages=find_packages(exclude=["test*", "benchmarking"]),
    include_package_data=True,
    entry_points={"console_scripts": ["markdown-it = markdown_it.cli.parse:main"]},
    classifiers=[
        "Development Status :: 3 - Alpha",
        "Intended Audience :: Developers",
        "License :: OSI Approved :: MIT License",
        "Programming Language :: Python :: 3",
        "Programming Language :: Python :: 3.6",
        "Programming Language :: Python :: 3.7",
        "Programming Language :: Python :: 3.8",
        "Programming Language :: Python :: 3.9",
        "Programming Language :: Python :: Implementation :: CPython",
        "Programming Language :: Python :: Implementation :: PyPy",
        "Topic :: Software Development :: Libraries :: Python Modules",
        "Topic :: Text Processing :: Markup",
    ],
    keywords="markdown lexer parser development",
    python_requires="~=3.6",
    install_requires=["attrs>=19,<21"],
    extras_require={
        "code_style": ["pre-commit==2.6"],
        "testing": [
            "coverage",
            "pytest>=3.6,<4",
            "pytest-cov",
            "pytest-regressions",
            "pytest-benchmark~=3.2",
            "psutil",
        ],
        "rtd": [
            "myst-nb~=0.10.0",
            "sphinx_book_theme",
            "sphinx-panels~=0.4.0",
            "sphinx-copybutton",
            "sphinx>=2,<4",
            "pyyaml",
        ],
        "compare": [
            "commonmark~=0.9.1",
            "markdown~=3.2.2",
            "mistune~=0.8.4",
            # "mistletoe~=0.7.2",
            "mistletoe-ebp~=0.10.0",
            "panflute~=1.12",
        ],
        "linkify": ["linkify-it-py~=1.0"],
    },
    zip_safe=False,
)
