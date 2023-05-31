# OSS-Fuzz integration

In principle, core Markdown parsing is designed to never except/crash on any input,
and so [fuzzing](https://en.wikipedia.org/wiki/Fuzzing) can be used to test this conformance.
This folder contains fuzzers which are principally run downstream as part of the <https://github.com/google/oss-fuzz> infrastructure.

Any file that matches `fuzz_*.py` in this repository will be built and run on OSS-Fuzz
(see <https://github.com/google/oss-fuzz/blob/master/projects/markdown-it-py/build.sh>).

See <https://google.github.io/oss-fuzz/advanced-topics/ideal-integration> for full details.

## CI integration

Fuzzing essentially runs forever, or until a crash is found, therefore it cannot be fully integrated into local continous integration testing.
The workflow in `.github/workflows/fuzz.yml` though runs a brief fuzzing on code changed in a PR,
which can be used to provide early warning on code changes.

## Reproducing crash failures

If OSS-Fuzz (or the CI workflow) identifies a crash, it will produce a "minimized testcase" file
(e.g. <https://oss-fuzz.com/testcase-detail/5424112454729728>).

To reproduce this crash locally, the easiest way is to run the [tox](https://tox.wiki/) environment, provided in this repository, against the test file (see `tox.ini`):

```
tox -e fuzz path/to/testcase
```

This idempotently sets up a local python environment with markdown-it-py (local dev) and [Atheris](https://pypi.org/project/atheris/) installed,
clones <https://github.com/google/oss-fuzz> into it,
and builds the fuzzers.
Then the testcase is run within this environment.

If you wish to simply run the full fuzzing process,
you can activate this environment, then run e.g.:

```
python .tox/fuzz/oss-fuzz/infra/helper.py run_fuzzer markdown-it-py fuzz_markdown
```

For a more thorough guide on reproducing, see: https://google.github.io/oss-fuzz/advanced-topics/reproducing/
