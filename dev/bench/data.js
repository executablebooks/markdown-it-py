window.BENCHMARK_DATA = {
  "lastUpdate": 1597665658235,
  "repoUrl": "https://github.com/executablebooks/markdown-it-py",
  "xAxis": "id",
  "oneChartGroups": [
    "packages",
    "plugins"
  ],
  "entries": {
    "Parsing Benchmarks": [
      {
        "cpu": {
          "speed": "2.30",
          "cores": 2,
          "physicalCores": 2,
          "processors": 1
        },
        "extra": {
          "pythonVersion": "3.8.5"
        },
        "commit": {
          "id": "02f32f3073d83c3a485245946302cb75f9451d79",
          "message": "Add GH action",
          "timestamp": "2020-08-17T12:55:20+01:00",
          "url": "https://github.com/executablebooks/markdown-it-py/commit/02f32f3073d83c3a485245946302cb75f9451d79",
          "distinct": true,
          "tree_id": "322355be87ed02aa607fa6c8de072adbf71db599"
        },
        "date": 1597665485885,
        "benches": [
          {
            "name": "benchmarking/bench_packages.py::test_markdown_it_py",
            "value": 4.990872218753434,
            "unit": "iter/sec",
            "range": "stddev: 0.0074771",
            "group": "packages",
            "extra": "mean: 200.37 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_mistune",
            "value": 12.563218634401084,
            "unit": "iter/sec",
            "range": "stddev: 0.0081087",
            "group": "packages",
            "extra": "mean: 79.597 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_commonmark_py",
            "value": 1.628402146002463,
            "unit": "iter/sec",
            "range": "stddev: 0.017619",
            "group": "packages",
            "extra": "mean: 614.10 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_pymarkdown",
            "value": 1.1558702755288877,
            "unit": "iter/sec",
            "range": "stddev: 0.018630",
            "group": "packages",
            "extra": "mean: 865.15 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_pymarkdown_extra",
            "value": 1.0460385194447166,
            "unit": "iter/sec",
            "range": "stddev: 0.013592",
            "group": "packages",
            "extra": "mean: 955.99 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_mistletoe",
            "value": 4.823325924439412,
            "unit": "iter/sec",
            "range": "stddev: 0.0074495",
            "group": "packages",
            "extra": "mean: 207.33 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_panflute",
            "value": 1.2149089742092232,
            "unit": "iter/sec",
            "range": "stddev: 0.016299",
            "group": "packages",
            "extra": "mean: 823.11 msec\nrounds: 20"
          }
        ]
      },
      {
        "cpu": {
          "speed": "2.60",
          "cores": 2,
          "physicalCores": 2,
          "processors": 1
        },
        "extra": {
          "pythonVersion": "3.8.5"
        },
        "commit": {
          "id": "02f32f3073d83c3a485245946302cb75f9451d79",
          "message": "Add GH action",
          "timestamp": "2020-08-17T12:55:20+01:00",
          "url": "https://github.com/executablebooks/markdown-it-py/commit/02f32f3073d83c3a485245946302cb75f9451d79",
          "distinct": true,
          "tree_id": "322355be87ed02aa607fa6c8de072adbf71db599"
        },
        "date": 1597665657770,
        "benches": [
          {
            "name": "benchmarking/bench_plugins.py::test_base",
            "value": 4.385138984816109,
            "unit": "iter/sec",
            "range": "stddev: 0.014194",
            "group": "plugins",
            "extra": "mean: 228.04 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_table",
            "value": 4.410418683718383,
            "unit": "iter/sec",
            "range": "stddev: 0.0058932",
            "group": "plugins",
            "extra": "mean: 226.74 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_amsmath",
            "value": 3.640439179510092,
            "unit": "iter/sec",
            "range": "stddev: 0.0098264",
            "group": "plugins",
            "extra": "mean: 274.69 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_container",
            "value": 4.356174139756641,
            "unit": "iter/sec",
            "range": "stddev: 0.0076851",
            "group": "plugins",
            "extra": "mean: 229.56 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_deflist",
            "value": 4.495229526782582,
            "unit": "iter/sec",
            "range": "stddev: 0.0079076",
            "group": "plugins",
            "extra": "mean: 222.46 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_footnote",
            "value": 4.369502483959708,
            "unit": "iter/sec",
            "range": "stddev: 0.0042847",
            "group": "plugins",
            "extra": "mean: 228.86 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_front_matter",
            "value": 4.421031772313372,
            "unit": "iter/sec",
            "range": "stddev: 0.0074787",
            "group": "plugins",
            "extra": "mean: 226.19 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_texmath",
            "value": 4.317421131997862,
            "unit": "iter/sec",
            "range": "stddev: 0.0069390",
            "group": "plugins",
            "extra": "mean: 231.62 msec\nrounds: 20"
          }
        ]
      }
    ]
  }
}