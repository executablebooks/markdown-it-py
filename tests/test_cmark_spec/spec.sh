#!/bin/sh

set -eux

VERSION="0.30"
URL="https://spec.commonmark.org/$VERSION/spec.json"

curl -sL "$URL" -o "commonmark.json"
