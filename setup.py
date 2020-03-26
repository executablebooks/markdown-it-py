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
    version=get_version(),  # import_module("markdown_it").__version__,  TODO fix this
    description="Python port of markdown-it. Markdown parsing, done right!",
    long_description=open("README.md").read(),
    long_description_content_type="text/markdown",
    url="https://github.com/ExecutableBookProject/markdown-it-py",
    # project_urls={"Documentation": "https://markdown-it-py.readthedocs.io"},
    author="Chris Sewell",
    author_email="chrisj_sewell@hotmail.com",
    license="MIT",
    packages=find_packages(),
    entry_points={
        "console_scripts": [
            "markdown-it = markdown_it.cli.parse:main",
            "markdown-it-bench = markdown_it.cli.benchmark:main",
        ]
    },
    classifiers=[
        "Development Status :: 3 - Alpha",
        "Intended Audience :: Developers",
        "License :: OSI Approved :: MIT License",
        "Programming Language :: Python :: 3",
        "Programming Language :: Python :: 3.3",
        "Programming Language :: Python :: 3.4",
        "Programming Language :: Python :: 3.5",
        "Programming Language :: Python :: 3.6",
        "Programming Language :: Python :: Implementation :: CPython",
        "Programming Language :: Python :: Implementation :: PyPy",
        "Topic :: Software Development :: Libraries :: Python Modules",
        "Topic :: Text Processing :: Markup",
    ],
    keywords="markdown lexer parser development",
    python_requires="~=3.6",
    install_requires=["attrs~=19.3"],
    extras_require={
        "code_style": ["flake8<3.8.0,>=3.7.0", "black==19.10b0", "pre-commit==1.17.0"],
        "testing": ["coverage", "pytest>=3.6,<4", "pytest-cov", "pytest-regressions"],
        "rtd": ["sphinx>=2,<3", "myst-parser~=0.6.0a3", "pyyaml"],
        "benchmark": [
            "commonmark~=0.9.1",
            "markdown~=3.2",
            "mistune~=0.8.4",
            "mistletoe-ebp~=0.10.0",
            "panflute~=1.12",
        ],
    },
    zip_safe=False,
)
