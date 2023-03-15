# Fuzzing by way of OSS-Fuzz

Fuzzing set up that is run by OSS-Fuzz. The relevant files in the OSS-Fuzz
repository is [here](https://github.com/google/oss-fuzz/tree/master/projects/markdown-it-py).

The fuzzers require the [Atheris](https://pypi.org/project/atheris/) package.
You need this package to run the fuzzers locally (i.e. non oss-fuzz).

## Building by way of OSS-Fuzz
The following steps will build the fuzzers using the OSS-Fuzz infrastructure:
```
git clone https://github.com/google/oss-fuzz
cd oss-fuzz
python3 infra/helper.py build_fuzzers markdown-it-py

# The fuzzers are now placed in build/out/markdown-it-py
# To run the fuzz_markdown fuzzer:
python3 infra/helper.py run_fuzzer markdown-it-py fuzz_markdown
```

## Extending so fuzzers run on OSS-Fuzz
The build script on the OSS-Fuzz repository for markdown-it-py fuzzers is
here: https://github.com/google/oss-fuzz/blob/master/projects/markdown-it-py/build.sh

Any file that matches `fuzz_*.py` in this repository will be build and run on
OSS-Fuzz. Thus, to extend with a new fuzzer simply name it accordingly.

## Reproducing issues
In order to reproduce an issue reported by OSS-Fuzz, you need to:
1) Download the `Minimized Testcase` (which is a file or raw bytes) from the
detailed OSS-Fuzz reports. Example link: https://oss-fuzz.com/testcase-detail/5424112454729728
2) Build the fuzzers as shown above
3) Use the command:

```
python3 infra/helper.py reproduce markdown-it-py {FUZZER_NAME} {PATH_TO_MINIMIZED_TESTCASE}
```

For a more thorough guide on reproducing, see: https://google.github.io/oss-fuzz/advanced-topics/reproducing/
