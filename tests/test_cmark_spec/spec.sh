#!/usr/bin/env bash

set -e

REPO="https://github.com/commonmark/CommonMark.git"
VERSION="0.30"

function main {
    echo "Cloning from repo: $REPO..."
    git clone --quiet $REPO

    echo "Using version $VERSION..."
    cd "CommonMark"
    git checkout --quiet $VERSION

    echo "Dumping tests file..."
    python3 "test/spec_tests.py" --dump-tests > "../commonmark.json"

    echo "Cleaning up..."
    cd ..
    rm -rf CommonMark

    echo "Done."
}

main
