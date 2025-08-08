# /// script
# dependencies = [
#   "requests",
# ]
# ///
from pathlib import Path

default_version = "0.30"
default_output_path = Path(__file__).parent / "commonmark.json"
default_fixture_test_path = (
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
        "--output",
        "-o",
        type=Path,
        default=default_output_path,
        help=f"Output file path (default: {default_output_path})",
    )
    parser.add_argument(
        "--test-fixture",
        type=Path,
        default=default_fixture_test_path,
        help=f"Write to test fixture (default: {default_fixture_test_path})",
    )
    return parser


if __name__ == "__main__":
    import requests  # type: ignore[import-untyped]

    args = create_argparser().parse_args()
    version: str = args.version
    output_path: Path = args.output
    write_to_test_fixture = True
    test_fixture: Path = args.test_fixture
    changed = False
    url = f"https://spec.commonmark.org/{version}/spec.json"
    print(f"Downloading CommonMark spec from {url}")
    response = requests.get(url)
    response.raise_for_status()
    if not output_path.exists() or output_path.read_text() != response.text:
        changed = True
        with output_path.open("w") as f:
            f.write(response.text)
        print(f"Updated to {output_path}")
    else:
        print(f"Spec file {output_path} is up to date, not overwriting")

    if write_to_test_fixture:
        data = response.json()
        text = ""
        for item in data:
            text += "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n"
            text += f"src line: {item['start_line'] - 1}\n\n"
            text += f".\n{item['markdown']}.\n{item['html']}.\n\n"
        if not test_fixture.exists() or test_fixture.read_text() != text:
            changed = True
            with test_fixture.open("w") as f:
                f.write(text)
            print(f"Also updated to {test_fixture}")
        else:
            print(f"Fixture file {test_fixture} is up to date, not overwriting")

    raise SystemExit(0 if not changed else 1)
