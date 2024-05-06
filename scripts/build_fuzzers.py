"""Build fuzzers idempotently in a given folder."""

import argparse
from pathlib import Path
import subprocess


def main():
    """Build fuzzers idempotently in a given folder."""
    parser = argparse.ArgumentParser()
    parser.add_argument("folder")
    args = parser.parse_args()
    folder = Path(args.folder)
    if not folder.exists():
        print(f"Cloning google/oss-fuzz into: {folder}")
        folder.mkdir(parents=True)
        subprocess.check_call(
            [
                "git",
                "clone",
                "--single-branch",
                "https://github.com/google/oss-fuzz",
                str(folder),
            ]
        )
    else:
        print(f"Using google/oss-fuzz in: {folder}")
    if not (folder / "build").exists():
        print(f"Building fuzzers in: {folder / 'build'}")
        subprocess.check_call(
            [
                "python",
                str(folder / "infra" / "helper.py"),
                "build_fuzzers",
                "markdown-it-py",
            ]
        )
    else:
        print(f"Using existing fuzzers in: {folder / 'build'}")


if __name__ == "__main__":
    main()
