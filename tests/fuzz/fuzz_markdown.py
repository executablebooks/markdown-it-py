import sys

import atheris

from markdown_it import MarkdownIt


def TestOneInput(data):
    fdp = atheris.FuzzedDataProvider(data)
    md = MarkdownIt()
    raw_markdown = fdp.ConsumeUnicodeNoSurrogates(sys.maxsize)
    md.parse(raw_markdown)
    md.render(raw_markdown)


def main():
    atheris.instrument_all()
    atheris.Setup(sys.argv, TestOneInput)
    atheris.Fuzz()


if __name__ == "__main__":
    main()
