window.BENCHMARK_DATA = {
  "lastUpdate": 1597689103256,
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
      },
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
        "date": 1597665694201,
        "benches": [
          {
            "name": "benchmarking/bench_packages.py::test_markdown_it_py",
            "value": 5.16108549341533,
            "unit": "iter/sec",
            "range": "stddev: 0.0092409",
            "group": "packages",
            "extra": "mean: 193.76 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_mistune",
            "value": 13.418567168470394,
            "unit": "iter/sec",
            "range": "stddev: 0.0052740",
            "group": "packages",
            "extra": "mean: 74.524 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_commonmark_py",
            "value": 1.76007930935673,
            "unit": "iter/sec",
            "range": "stddev: 0.019602",
            "group": "packages",
            "extra": "mean: 568.16 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_pymarkdown",
            "value": 1.1906540654054032,
            "unit": "iter/sec",
            "range": "stddev: 0.010264",
            "group": "packages",
            "extra": "mean: 839.87 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_pymarkdown_extra",
            "value": 1.0718962266023688,
            "unit": "iter/sec",
            "range": "stddev: 0.020527",
            "group": "packages",
            "extra": "mean: 932.93 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_mistletoe",
            "value": 5.027788605218262,
            "unit": "iter/sec",
            "range": "stddev: 0.0070152",
            "group": "packages",
            "extra": "mean: 198.89 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_panflute",
            "value": 1.2539672663695152,
            "unit": "iter/sec",
            "range": "stddev: 0.013245",
            "group": "packages",
            "extra": "mean: 797.47 msec\nrounds: 20"
          }
        ]
      },
      {
        "cpu": {
          "speed": "2.40",
          "cores": 2,
          "physicalCores": 2,
          "processors": 1
        },
        "extra": {
          "pythonVersion": "3.8.5"
        },
        "commit": {
          "id": "08d9684e721ddcb1a97c59b01c618d62afaeda12",
          "message": "Update docs",
          "timestamp": "2020-08-17T13:17:42+01:00",
          "url": "https://github.com/executablebooks/markdown-it-py/commit/08d9684e721ddcb1a97c59b01c618d62afaeda12",
          "distinct": true,
          "tree_id": "b06b95e4845d097412cd24cb24750896712fe9d7"
        },
        "date": 1597666761025,
        "benches": [
          {
            "name": "benchmarking/bench_plugins.py::test_base",
            "value": 3.9832824844652603,
            "unit": "iter/sec",
            "range": "stddev: 0.0086191",
            "group": "plugins",
            "extra": "mean: 251.05 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_table",
            "value": 3.839815460557817,
            "unit": "iter/sec",
            "range": "stddev: 0.012073",
            "group": "plugins",
            "extra": "mean: 260.43 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_amsmath",
            "value": 2.987633910324828,
            "unit": "iter/sec",
            "range": "stddev: 0.012115",
            "group": "plugins",
            "extra": "mean: 334.71 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_container",
            "value": 3.81980264086653,
            "unit": "iter/sec",
            "range": "stddev: 0.012881",
            "group": "plugins",
            "extra": "mean: 261.79 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_deflist",
            "value": 3.841186535268556,
            "unit": "iter/sec",
            "range": "stddev: 0.012096",
            "group": "plugins",
            "extra": "mean: 260.34 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_footnote",
            "value": 3.786638468711044,
            "unit": "iter/sec",
            "range": "stddev: 0.014654",
            "group": "plugins",
            "extra": "mean: 264.09 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_front_matter",
            "value": 3.895566866662436,
            "unit": "iter/sec",
            "range": "stddev: 0.011910",
            "group": "plugins",
            "extra": "mean: 256.70 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_texmath",
            "value": 3.7553839653692407,
            "unit": "iter/sec",
            "range": "stddev: 0.0097710",
            "group": "plugins",
            "extra": "mean: 266.28 msec\nrounds: 20"
          }
        ]
      },
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
          "id": "08d9684e721ddcb1a97c59b01c618d62afaeda12",
          "message": "Update docs",
          "timestamp": "2020-08-17T13:17:42+01:00",
          "url": "https://github.com/executablebooks/markdown-it-py/commit/08d9684e721ddcb1a97c59b01c618d62afaeda12",
          "distinct": true,
          "tree_id": "b06b95e4845d097412cd24cb24750896712fe9d7"
        },
        "date": 1597666822435,
        "benches": [
          {
            "name": "benchmarking/bench_packages.py::test_markdown_it_py",
            "value": 4.109549140751444,
            "unit": "iter/sec",
            "range": "stddev: 0.010834",
            "group": "packages",
            "extra": "mean: 243.34 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_mistune",
            "value": 10.992303171731654,
            "unit": "iter/sec",
            "range": "stddev: 0.0060326",
            "group": "packages",
            "extra": "mean: 90.973 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_commonmark_py",
            "value": 1.505183090068443,
            "unit": "iter/sec",
            "range": "stddev: 0.024812",
            "group": "packages",
            "extra": "mean: 664.37 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_pymarkdown",
            "value": 0.9631164820072856,
            "unit": "iter/sec",
            "range": "stddev: 0.021339",
            "group": "packages",
            "extra": "mean: 1.0383 sec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_pymarkdown_extra",
            "value": 0.8664499652544785,
            "unit": "iter/sec",
            "range": "stddev: 0.017758",
            "group": "packages",
            "extra": "mean: 1.1541 sec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_mistletoe",
            "value": 4.043634213863987,
            "unit": "iter/sec",
            "range": "stddev: 0.0089964",
            "group": "packages",
            "extra": "mean: 247.30 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_panflute",
            "value": 0.9849845396063264,
            "unit": "iter/sec",
            "range": "stddev: 0.018275",
            "group": "packages",
            "extra": "mean: 1.0152 sec\nrounds: 20"
          }
        ]
      },
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
          "id": "5f1a773e8a6270724faaad518aa6c93fbe13051d",
          "message": "Update other.md",
          "timestamp": "2020-08-17T13:39:37+01:00",
          "url": "https://github.com/executablebooks/markdown-it-py/commit/5f1a773e8a6270724faaad518aa6c93fbe13051d",
          "distinct": true,
          "tree_id": "5991e84fb06ae07a76b07bc73f118c2d4540e80a"
        },
        "date": 1597668063088,
        "benches": [
          {
            "name": "benchmarking/bench_plugins.py::test_base",
            "value": 4.010864369500077,
            "unit": "iter/sec",
            "range": "stddev: 0.015383",
            "group": "plugins",
            "extra": "mean: 249.32 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_table",
            "value": 4.09148902925777,
            "unit": "iter/sec",
            "range": "stddev: 0.013137",
            "group": "plugins",
            "extra": "mean: 244.41 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_amsmath",
            "value": 3.205831129841372,
            "unit": "iter/sec",
            "range": "stddev: 0.018604",
            "group": "plugins",
            "extra": "mean: 311.93 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_container",
            "value": 4.246096876768568,
            "unit": "iter/sec",
            "range": "stddev: 0.011072",
            "group": "plugins",
            "extra": "mean: 235.51 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_deflist",
            "value": 4.383342245186716,
            "unit": "iter/sec",
            "range": "stddev: 0.015765",
            "group": "plugins",
            "extra": "mean: 228.14 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_footnote",
            "value": 4.209385894783872,
            "unit": "iter/sec",
            "range": "stddev: 0.016891",
            "group": "plugins",
            "extra": "mean: 237.56 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_front_matter",
            "value": 4.670755854410004,
            "unit": "iter/sec",
            "range": "stddev: 0.012076",
            "group": "plugins",
            "extra": "mean: 214.10 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_texmath",
            "value": 4.674254771309385,
            "unit": "iter/sec",
            "range": "stddev: 0.0097650",
            "group": "plugins",
            "extra": "mean: 213.94 msec\nrounds: 20"
          }
        ]
      },
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
          "id": "5f1a773e8a6270724faaad518aa6c93fbe13051d",
          "message": "Update other.md",
          "timestamp": "2020-08-17T13:39:37+01:00",
          "url": "https://github.com/executablebooks/markdown-it-py/commit/5f1a773e8a6270724faaad518aa6c93fbe13051d",
          "distinct": true,
          "tree_id": "5991e84fb06ae07a76b07bc73f118c2d4540e80a"
        },
        "date": 1597668156276,
        "benches": [
          {
            "name": "benchmarking/bench_packages.py::test_markdown_it_py",
            "value": 4.372918818201476,
            "unit": "iter/sec",
            "range": "stddev: 0.015621",
            "group": "packages",
            "extra": "mean: 228.68 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_mistune",
            "value": 12.23505090556196,
            "unit": "iter/sec",
            "range": "stddev: 0.0039772",
            "group": "packages",
            "extra": "mean: 81.732 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_commonmark_py",
            "value": 1.5514840089997777,
            "unit": "iter/sec",
            "range": "stddev: 0.027810",
            "group": "packages",
            "extra": "mean: 644.54 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_pymarkdown",
            "value": 0.974999487794991,
            "unit": "iter/sec",
            "range": "stddev: 0.038084",
            "group": "packages",
            "extra": "mean: 1.0256 sec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_pymarkdown_extra",
            "value": 0.8867506431405217,
            "unit": "iter/sec",
            "range": "stddev: 0.045678",
            "group": "packages",
            "extra": "mean: 1.1277 sec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_mistletoe",
            "value": 4.314163909574722,
            "unit": "iter/sec",
            "range": "stddev: 0.013929",
            "group": "packages",
            "extra": "mean: 231.79 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_panflute",
            "value": 1.105501876091868,
            "unit": "iter/sec",
            "range": "stddev: 0.028812",
            "group": "packages",
            "extra": "mean: 904.57 msec\nrounds: 20"
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
          "id": "9b5a452fbd1ff36eeed654b34377e67315a23728",
          "message": "Update other.md",
          "timestamp": "2020-08-17T13:41:14+01:00",
          "url": "https://github.com/executablebooks/markdown-it-py/commit/9b5a452fbd1ff36eeed654b34377e67315a23728",
          "distinct": true,
          "tree_id": "a0a03e09fc71b91636919ea643e64b7f262d9405"
        },
        "date": 1597668157980,
        "benches": [
          {
            "name": "benchmarking/bench_plugins.py::test_base",
            "value": 4.546374937362053,
            "unit": "iter/sec",
            "range": "stddev: 0.0089247",
            "group": "plugins",
            "extra": "mean: 219.96 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_table",
            "value": 4.519829931554631,
            "unit": "iter/sec",
            "range": "stddev: 0.0053545",
            "group": "plugins",
            "extra": "mean: 221.25 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_amsmath",
            "value": 3.8112469170861885,
            "unit": "iter/sec",
            "range": "stddev: 0.0060871",
            "group": "plugins",
            "extra": "mean: 262.38 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_container",
            "value": 4.44802332203243,
            "unit": "iter/sec",
            "range": "stddev: 0.014241",
            "group": "plugins",
            "extra": "mean: 224.82 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_deflist",
            "value": 4.573398191339577,
            "unit": "iter/sec",
            "range": "stddev: 0.0075231",
            "group": "plugins",
            "extra": "mean: 218.66 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_footnote",
            "value": 4.4969691369008045,
            "unit": "iter/sec",
            "range": "stddev: 0.0074783",
            "group": "plugins",
            "extra": "mean: 222.37 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_front_matter",
            "value": 4.6217603583297855,
            "unit": "iter/sec",
            "range": "stddev: 0.0075707",
            "group": "plugins",
            "extra": "mean: 216.37 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_texmath",
            "value": 4.485623480751871,
            "unit": "iter/sec",
            "range": "stddev: 0.0071236",
            "group": "plugins",
            "extra": "mean: 222.93 msec\nrounds: 20"
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
          "id": "9b5a452fbd1ff36eeed654b34377e67315a23728",
          "message": "Update other.md",
          "timestamp": "2020-08-17T13:41:14+01:00",
          "url": "https://github.com/executablebooks/markdown-it-py/commit/9b5a452fbd1ff36eeed654b34377e67315a23728",
          "distinct": true,
          "tree_id": "a0a03e09fc71b91636919ea643e64b7f262d9405"
        },
        "date": 1597668209784,
        "benches": [
          {
            "name": "benchmarking/bench_packages.py::test_markdown_it_py",
            "value": 4.875649037166564,
            "unit": "iter/sec",
            "range": "stddev: 0.0093764",
            "group": "packages",
            "extra": "mean: 205.10 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_mistune",
            "value": 14.346767106852738,
            "unit": "iter/sec",
            "range": "stddev: 0.0053055",
            "group": "packages",
            "extra": "mean: 69.702 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_commonmark_py",
            "value": 2.5408954754208004,
            "unit": "iter/sec",
            "range": "stddev: 0.025666",
            "group": "packages",
            "extra": "mean: 393.56 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_pymarkdown",
            "value": 1.1624855602190292,
            "unit": "iter/sec",
            "range": "stddev: 0.033068",
            "group": "packages",
            "extra": "mean: 860.23 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_pymarkdown_extra",
            "value": 1.013274908342558,
            "unit": "iter/sec",
            "range": "stddev: 0.033500",
            "group": "packages",
            "extra": "mean: 986.90 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_mistletoe",
            "value": 5.019037303855231,
            "unit": "iter/sec",
            "range": "stddev: 0.0092274",
            "group": "packages",
            "extra": "mean: 199.24 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_panflute",
            "value": 1.1788934463708887,
            "unit": "iter/sec",
            "range": "stddev: 0.025725",
            "group": "packages",
            "extra": "mean: 848.25 msec\nrounds: 20"
          }
        ]
      },
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
          "id": "bd9d6d180000a6e4861c17c2158aa0815f56cd7c",
          "message": "🧪 TESTS: Improve benchmark testing (#33)\n\nAlso added tox testing configuration",
          "timestamp": "2020-08-17T14:02:39+01:00",
          "url": "https://github.com/executablebooks/markdown-it-py/commit/bd9d6d180000a6e4861c17c2158aa0815f56cd7c",
          "distinct": true,
          "tree_id": "7835d7842a958dc152d37e113fd3884cca132f1a"
        },
        "date": 1597669452744,
        "benches": [
          {
            "name": "benchmarking/bench_plugins.py::test_base",
            "value": 3.7572536418678713,
            "unit": "iter/sec",
            "range": "stddev: 0.011074",
            "group": "plugins",
            "extra": "mean: 266.15 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_table",
            "value": 3.6301352390874086,
            "unit": "iter/sec",
            "range": "stddev: 0.025189",
            "group": "plugins",
            "extra": "mean: 275.47 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_amsmath",
            "value": 2.899716329914551,
            "unit": "iter/sec",
            "range": "stddev: 0.011720",
            "group": "plugins",
            "extra": "mean: 344.86 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_container",
            "value": 3.708518314389101,
            "unit": "iter/sec",
            "range": "stddev: 0.0087080",
            "group": "plugins",
            "extra": "mean: 269.65 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_deflist",
            "value": 3.7433304311984794,
            "unit": "iter/sec",
            "range": "stddev: 0.0090622",
            "group": "plugins",
            "extra": "mean: 267.14 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_footnote",
            "value": 3.688407353833873,
            "unit": "iter/sec",
            "range": "stddev: 0.010789",
            "group": "plugins",
            "extra": "mean: 271.12 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_front_matter",
            "value": 3.691139817032501,
            "unit": "iter/sec",
            "range": "stddev: 0.0090221",
            "group": "plugins",
            "extra": "mean: 270.92 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_texmath",
            "value": 3.5528377142876613,
            "unit": "iter/sec",
            "range": "stddev: 0.013053",
            "group": "plugins",
            "extra": "mean: 281.47 msec\nrounds: 20"
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
          "id": "bd9d6d180000a6e4861c17c2158aa0815f56cd7c",
          "message": "🧪 TESTS: Improve benchmark testing (#33)\n\nAlso added tox testing configuration",
          "timestamp": "2020-08-17T14:02:39+01:00",
          "url": "https://github.com/executablebooks/markdown-it-py/commit/bd9d6d180000a6e4861c17c2158aa0815f56cd7c",
          "distinct": true,
          "tree_id": "7835d7842a958dc152d37e113fd3884cca132f1a"
        },
        "date": 1597669503260,
        "benches": [
          {
            "name": "benchmarking/bench_packages.py::test_markdown_it_py",
            "value": 4.3102014251411145,
            "unit": "iter/sec",
            "range": "stddev: 0.0098595",
            "group": "packages",
            "extra": "mean: 232.01 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_mistune",
            "value": 13.25927271093911,
            "unit": "iter/sec",
            "range": "stddev: 0.0050883",
            "group": "packages",
            "extra": "mean: 75.419 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_commonmark_py",
            "value": 2.341367254384046,
            "unit": "iter/sec",
            "range": "stddev: 0.017874",
            "group": "packages",
            "extra": "mean: 427.10 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_pymarkdown",
            "value": 1.0149366390158543,
            "unit": "iter/sec",
            "range": "stddev: 0.024551",
            "group": "packages",
            "extra": "mean: 985.28 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_pymarkdown_extra",
            "value": 0.9128198968702433,
            "unit": "iter/sec",
            "range": "stddev: 0.036520",
            "group": "packages",
            "extra": "mean: 1.0955 sec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_mistletoe",
            "value": 4.307641926175149,
            "unit": "iter/sec",
            "range": "stddev: 0.0071685",
            "group": "packages",
            "extra": "mean: 232.15 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_panflute",
            "value": 1.082661992432592,
            "unit": "iter/sec",
            "range": "stddev: 0.013341",
            "group": "packages",
            "extra": "mean: 923.65 msec\nrounds: 20"
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
          "id": "4a7ac78d7f95ed89370ed63617e794482a3b3909",
          "message": "🐛 FIX: MyST Role regex (#34)\n\nAllow role names with digits 0-9",
          "timestamp": "2020-08-17T14:12:28+01:00",
          "url": "https://github.com/executablebooks/markdown-it-py/commit/4a7ac78d7f95ed89370ed63617e794482a3b3909",
          "distinct": true,
          "tree_id": "cc348cbc54d9149274460a1065e9b75cbfe1abc6"
        },
        "date": 1597670037752,
        "benches": [
          {
            "name": "benchmarking/bench_plugins.py::test_base",
            "value": 3.8839211921776724,
            "unit": "iter/sec",
            "range": "stddev: 0.0075997",
            "group": "plugins",
            "extra": "mean: 257.47 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_table",
            "value": 3.8450769539724594,
            "unit": "iter/sec",
            "range": "stddev: 0.0072094",
            "group": "plugins",
            "extra": "mean: 260.07 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_amsmath",
            "value": 3.221304329145526,
            "unit": "iter/sec",
            "range": "stddev: 0.0088668",
            "group": "plugins",
            "extra": "mean: 310.43 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_container",
            "value": 3.84984360956435,
            "unit": "iter/sec",
            "range": "stddev: 0.0070741",
            "group": "plugins",
            "extra": "mean: 259.75 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_deflist",
            "value": 3.8783841394690515,
            "unit": "iter/sec",
            "range": "stddev: 0.0061196",
            "group": "plugins",
            "extra": "mean: 257.84 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_footnote",
            "value": 3.875157221910005,
            "unit": "iter/sec",
            "range": "stddev: 0.0056166",
            "group": "plugins",
            "extra": "mean: 258.05 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_front_matter",
            "value": 3.8930389093512843,
            "unit": "iter/sec",
            "range": "stddev: 0.0050721",
            "group": "plugins",
            "extra": "mean: 256.87 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_texmath",
            "value": 3.8226767153777397,
            "unit": "iter/sec",
            "range": "stddev: 0.0056345",
            "group": "plugins",
            "extra": "mean: 261.60 msec\nrounds: 20"
          }
        ]
      },
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
          "id": "4a7ac78d7f95ed89370ed63617e794482a3b3909",
          "message": "🐛 FIX: MyST Role regex (#34)\n\nAllow role names with digits 0-9",
          "timestamp": "2020-08-17T14:12:28+01:00",
          "url": "https://github.com/executablebooks/markdown-it-py/commit/4a7ac78d7f95ed89370ed63617e794482a3b3909",
          "distinct": true,
          "tree_id": "cc348cbc54d9149274460a1065e9b75cbfe1abc6"
        },
        "date": 1597670092941,
        "benches": [
          {
            "name": "benchmarking/bench_packages.py::test_markdown_it_py",
            "value": 4.391327031712752,
            "unit": "iter/sec",
            "range": "stddev: 0.011188",
            "group": "packages",
            "extra": "mean: 227.72 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_mistune",
            "value": 11.870977632374474,
            "unit": "iter/sec",
            "range": "stddev: 0.0037741",
            "group": "packages",
            "extra": "mean: 84.239 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_commonmark_py",
            "value": 1.5663098020219925,
            "unit": "iter/sec",
            "range": "stddev: 0.021045",
            "group": "packages",
            "extra": "mean: 638.44 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_pymarkdown",
            "value": 1.0572973185494312,
            "unit": "iter/sec",
            "range": "stddev: 0.017209",
            "group": "packages",
            "extra": "mean: 945.81 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_pymarkdown_extra",
            "value": 0.9474539695837216,
            "unit": "iter/sec",
            "range": "stddev: 0.030952",
            "group": "packages",
            "extra": "mean: 1.0555 sec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_mistletoe",
            "value": 4.491216229753601,
            "unit": "iter/sec",
            "range": "stddev: 0.012512",
            "group": "packages",
            "extra": "mean: 222.66 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_panflute",
            "value": 1.1144372845911017,
            "unit": "iter/sec",
            "range": "stddev: 0.021057",
            "group": "packages",
            "extra": "mean: 897.31 msec\nrounds: 20"
          }
        ]
      },
      {
        "cpu": {
          "speed": "2.40",
          "cores": 2,
          "physicalCores": 2,
          "processors": 1
        },
        "extra": {
          "pythonVersion": "3.8.5"
        },
        "commit": {
          "id": "43f956b15040a8e784a241822859f53a953254e3",
          "message": "👌 IMPROVE: Parsing performance (#32)\n\nCharacter codes (ordinals) of `state.src` are now pre-computed, to reduce redundant computations.\r\n\r\nCo-authored-by: Chris Sewell <chrisj_sewell@hotmail.com>",
          "timestamp": "2020-08-17T19:11:31+01:00",
          "url": "https://github.com/executablebooks/markdown-it-py/commit/43f956b15040a8e784a241822859f53a953254e3",
          "distinct": true,
          "tree_id": "b3c196ab1a1f8d33d4f1d4be75508da924daffa7"
        },
        "date": 1597687975398,
        "benches": [
          {
            "name": "benchmarking/bench_plugins.py::test_base",
            "value": 4.308534869658371,
            "unit": "iter/sec",
            "range": "stddev: 0.0099517",
            "group": "plugins",
            "extra": "mean: 232.10 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_table",
            "value": 4.0611695460714925,
            "unit": "iter/sec",
            "range": "stddev: 0.018039",
            "group": "plugins",
            "extra": "mean: 246.23 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_amsmath",
            "value": 3.101652986599214,
            "unit": "iter/sec",
            "range": "stddev: 0.021913",
            "group": "plugins",
            "extra": "mean: 322.41 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_container",
            "value": 4.049512360677673,
            "unit": "iter/sec",
            "range": "stddev: 0.018613",
            "group": "plugins",
            "extra": "mean: 246.94 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_deflist",
            "value": 4.246515453800136,
            "unit": "iter/sec",
            "range": "stddev: 0.012889",
            "group": "plugins",
            "extra": "mean: 235.49 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_footnote",
            "value": 4.126701755058404,
            "unit": "iter/sec",
            "range": "stddev: 0.010048",
            "group": "plugins",
            "extra": "mean: 242.32 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_front_matter",
            "value": 4.199815781128475,
            "unit": "iter/sec",
            "range": "stddev: 0.016824",
            "group": "plugins",
            "extra": "mean: 238.11 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_texmath",
            "value": 3.9376408133455887,
            "unit": "iter/sec",
            "range": "stddev: 0.020541",
            "group": "plugins",
            "extra": "mean: 253.96 msec\nrounds: 20"
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
          "id": "43f956b15040a8e784a241822859f53a953254e3",
          "message": "👌 IMPROVE: Parsing performance (#32)\n\nCharacter codes (ordinals) of `state.src` are now pre-computed, to reduce redundant computations.\r\n\r\nCo-authored-by: Chris Sewell <chrisj_sewell@hotmail.com>",
          "timestamp": "2020-08-17T19:11:31+01:00",
          "url": "https://github.com/executablebooks/markdown-it-py/commit/43f956b15040a8e784a241822859f53a953254e3",
          "distinct": true,
          "tree_id": "b3c196ab1a1f8d33d4f1d4be75508da924daffa7"
        },
        "date": 1597688029905,
        "benches": [
          {
            "name": "benchmarking/bench_packages.py::test_markdown_it_py",
            "value": 5.036496993088077,
            "unit": "iter/sec",
            "range": "stddev: 0.0069728",
            "group": "packages",
            "extra": "mean: 198.55 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_mistune",
            "value": 14.558530244394802,
            "unit": "iter/sec",
            "range": "stddev: 0.0042149",
            "group": "packages",
            "extra": "mean: 68.688 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_commonmark_py",
            "value": 2.5342538618690815,
            "unit": "iter/sec",
            "range": "stddev: 0.021542",
            "group": "packages",
            "extra": "mean: 394.59 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_pymarkdown",
            "value": 1.1116234950017776,
            "unit": "iter/sec",
            "range": "stddev: 0.051048",
            "group": "packages",
            "extra": "mean: 899.59 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_pymarkdown_extra",
            "value": 0.9900955469682903,
            "unit": "iter/sec",
            "range": "stddev: 0.039360",
            "group": "packages",
            "extra": "mean: 1.0100 sec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_mistletoe",
            "value": 4.834499263276076,
            "unit": "iter/sec",
            "range": "stddev: 0.0086500",
            "group": "packages",
            "extra": "mean: 206.85 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_panflute",
            "value": 1.1102558985714974,
            "unit": "iter/sec",
            "range": "stddev: 0.024485",
            "group": "packages",
            "extra": "mean: 900.69 msec\nrounds: 20"
          }
        ]
      },
      {
        "cpu": {
          "speed": "2.40",
          "cores": 2,
          "physicalCores": 2,
          "processors": 1
        },
        "extra": {
          "pythonVersion": "3.8.5"
        },
        "commit": {
          "id": "c769a4e6306648375b83c3b05d16e880d6fe296c",
          "message": "🔧 MAINTAIN: Update GitHub organisation",
          "timestamp": "2020-08-17T19:25:39+01:00",
          "url": "https://github.com/executablebooks/markdown-it-py/commit/c769a4e6306648375b83c3b05d16e880d6fe296c",
          "distinct": true,
          "tree_id": "0fad6a6038e393d973fe28a654f509ce9faafad8"
        },
        "date": 1597688852977,
        "benches": [
          {
            "name": "benchmarking/bench_plugins.py::test_base",
            "value": 4.327645042861418,
            "unit": "iter/sec",
            "range": "stddev: 0.011057",
            "group": "plugins",
            "extra": "mean: 231.07 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_table",
            "value": 4.33795495164175,
            "unit": "iter/sec",
            "range": "stddev: 0.0094800",
            "group": "plugins",
            "extra": "mean: 230.52 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_amsmath",
            "value": 3.3306899623312787,
            "unit": "iter/sec",
            "range": "stddev: 0.010659",
            "group": "plugins",
            "extra": "mean: 300.24 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_container",
            "value": 4.302845115995638,
            "unit": "iter/sec",
            "range": "stddev: 0.010487",
            "group": "plugins",
            "extra": "mean: 232.40 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_deflist",
            "value": 4.337218191305566,
            "unit": "iter/sec",
            "range": "stddev: 0.0087114",
            "group": "plugins",
            "extra": "mean: 230.56 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_footnote",
            "value": 4.272472207631882,
            "unit": "iter/sec",
            "range": "stddev: 0.010964",
            "group": "plugins",
            "extra": "mean: 234.06 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_front_matter",
            "value": 4.335104632881997,
            "unit": "iter/sec",
            "range": "stddev: 0.011525",
            "group": "plugins",
            "extra": "mean: 230.67 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_texmath",
            "value": 4.216137776818684,
            "unit": "iter/sec",
            "range": "stddev: 0.0093637",
            "group": "plugins",
            "extra": "mean: 237.18 msec\nrounds: 20"
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
          "id": "c769a4e6306648375b83c3b05d16e880d6fe296c",
          "message": "🔧 MAINTAIN: Update GitHub organisation",
          "timestamp": "2020-08-17T19:25:39+01:00",
          "url": "https://github.com/executablebooks/markdown-it-py/commit/c769a4e6306648375b83c3b05d16e880d6fe296c",
          "distinct": true,
          "tree_id": "0fad6a6038e393d973fe28a654f509ce9faafad8"
        },
        "date": 1597689102756,
        "benches": [
          {
            "name": "benchmarking/bench_packages.py::test_markdown_it_py",
            "value": 4.591071515506636,
            "unit": "iter/sec",
            "range": "stddev: 0.0065499",
            "group": "packages",
            "extra": "mean: 217.81 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_mistune",
            "value": 13.278187022050446,
            "unit": "iter/sec",
            "range": "stddev: 0.0028416",
            "group": "packages",
            "extra": "mean: 75.311 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_commonmark_py",
            "value": 2.1666795883826104,
            "unit": "iter/sec",
            "range": "stddev: 0.044045",
            "group": "packages",
            "extra": "mean: 461.54 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_pymarkdown",
            "value": 0.9789180397444548,
            "unit": "iter/sec",
            "range": "stddev: 0.016033",
            "group": "packages",
            "extra": "mean: 1.0215 sec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_pymarkdown_extra",
            "value": 0.885982649422131,
            "unit": "iter/sec",
            "range": "stddev: 0.019456",
            "group": "packages",
            "extra": "mean: 1.1287 sec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_mistletoe",
            "value": 4.254975223815282,
            "unit": "iter/sec",
            "range": "stddev: 0.0091572",
            "group": "packages",
            "extra": "mean: 235.02 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_panflute",
            "value": 1.0474110376275378,
            "unit": "iter/sec",
            "range": "stddev: 0.033388",
            "group": "packages",
            "extra": "mean: 954.74 msec\nrounds: 20"
          }
        ]
      }
    ]
  }
}