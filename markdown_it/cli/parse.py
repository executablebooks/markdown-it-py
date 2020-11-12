#!/usr/bin/env python
"""
CLI interface to markdown-it-py

Parse one or more markdown files, convert each to HTML, and print to stdout.
"""
import argparse
import sys

from markdown_it import __version__
from markdown_it.main import MarkdownIt


version_str = "markdown-it-py [version {}]".format(__version__)


def main(args=None):
    namespace = parse_args(args)
    if namespace.filenames:
        convert(namespace.filenames)
    else:
        interactive()
    return True


def convert(filenames):
    for filename in filenames:
        convert_file(filename)


def convert_file(filename):
    """
    Parse a Markdown file and dump the output to stdout.
    """
    try:
        with open(filename, "r") as fin:
            rendered = MarkdownIt().render(fin.read())
            print(rendered, end="")
    except OSError:
        sys.exit('Cannot open file "{}".'.format(filename))


def interactive():
    """
    Parse user input, dump to stdout, rinse and repeat.
    Python REPL style.
    """
    print_heading()
    contents = []
    more = False
    while True:
        try:
            prompt, more = ("... ", True) if more else (">>> ", True)
            contents.append(input(prompt) + "\n")
        except EOFError:
            print("\n" + MarkdownIt().render("\n".join(contents)), end="")
            more = False
            contents = []
        except KeyboardInterrupt:
            print("\nExiting.")
            break


def parse_args(args):
    """Parse input CLI arguments."""
    parser = argparse.ArgumentParser(
        description="Parse one or more markdown files, "
        "convert each to HTML, and print to stdout",
        # NOTE: Remember to update README.md w/ the output of `markdown-it -h`
        epilog=(
            """
Interactive:

  $ markdown-it
  markdown-it-py [version 0.0.0] (interactive)
  Type Ctrl-D to complete input, or Ctrl-C to exit.
  >>> # Example
  ... > markdown *input*
  ...
  <h1>Example</h1>
  <blockquote>
  <p>markdown <em>input</em></p>
  </blockquote>

Batch:

  $ markdown-it README.md README.footer.md > index.html
"""
        ),
        formatter_class=argparse.RawDescriptionHelpFormatter,
    )
    parser.add_argument("-v", "--version", action="version", version=version_str)
    parser.add_argument(
        "filenames", nargs="*", help="specify an optional list of files to convert"
    )
    return parser.parse_args(args)


def print_heading():
    print("{} (interactive)".format(version_str))
    print("Type Ctrl-D to complete input, or Ctrl-C to exit.")


if __name__ == "__main__":
    main(sys.argv[1:])
