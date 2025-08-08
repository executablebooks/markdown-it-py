# /// script
# dependencies = [
#   "requests",
# ]
# ///
from pathlib import Path
from typing import Any

default_version = "0.31.2"
default_json_path = Path(__file__).parent / "commonmark.json"
default_text_path = Path(__file__).parent / "spec.md"
default_fixture_path = (
    Path(__file__).parent.parent / "test_port" / "fixtures" / "commonmark_spec.md"
)


def create_argparser():
    import argparse

    parser = argparse.ArgumentParser(description="Download CommonMark spec JSON")
    parser.add_argument(
        "version",
        nargs="?",
        default=default_version,
        help=f"CommonMark spec version to download (default: {default_version})",
    )
    parser.add_argument(
        "--output-json",
        type=Path,
        default=default_json_path,
        help=f"Output file path (default: {default_json_path})",
    )
    parser.add_argument(
        "--output-text",
        type=Path,
        default=default_text_path,
        help=f"Output file path (default: {default_text_path})",
    )
    parser.add_argument(
        "--output-fixture",
        type=Path,
        default=default_fixture_path,
        help=f"Write to test fixture (default: {default_fixture_path})",
    )
    return parser


def _json_to_fixture(data: list[dict[str, Any]]) -> str:
    text = ""
    for item in data:
        text += "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n"
        text += f"src line: {item['start_line'] - 1}\n\n"
        text += f".\n{item['markdown']}.\n{item['html']}.\n\n"
    return text


if __name__ == "__main__":
    import requests  # type: ignore[import-untyped]

    args = create_argparser().parse_args()
    version: str = args.version
    json_path: Path = args.output_json
    txt_path: Path = args.output_text
    test_fixture: Path = args.output_fixture

    changed = False

    json_url = f"https://spec.commonmark.org/{version}/spec.json"
    txt_url = f"https://raw.githubusercontent.com/commonmark/commonmark-spec/refs/tags/{version}/spec.txt"

    for url, output_path in ((json_url, json_path), (txt_url, txt_path)):
        print(f"Downloading CommonMark spec from {url}")
        response = requests.get(url)
        response.raise_for_status()
        if not output_path.exists() or output_path.read_text() != response.text:
            changed = True
            with output_path.open("w") as f:
                f.write(response.text)
            print(f"Updated to {output_path}")
        else:
            print(f"File {output_path} is up to date, not overwriting")

    # write_to_test_fixture:
    response = requests.get(json_url)
    response.raise_for_status()
    data = response.json()
    text = _json_to_fixture(data)
    if not test_fixture.exists() or test_fixture.read_text() != text:
        changed = True
        with test_fixture.open("w") as f:
            f.write(text)
        print(f"Also updated to {test_fixture}")
    else:
        print(f"Fixture file {test_fixture} is up to date, not overwriting")

    raise SystemExit(0 if not changed else 1)
