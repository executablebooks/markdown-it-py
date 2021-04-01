window.BENCHMARK_DATA = {
  "lastUpdate": 1617248417261,
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
          "id": "8f168055d289d30e46202d0deb94ee0835e9f45f",
          "message": "🧪 TEST: fix coverage reporting (#35)",
          "timestamp": "2020-08-17T20:01:00+01:00",
          "url": "https://github.com/executablebooks/markdown-it-py/commit/8f168055d289d30e46202d0deb94ee0835e9f45f",
          "distinct": true,
          "tree_id": "a76713bd1cd9b36bbfa66ff849ac62094f694712"
        },
        "date": 1597690947828,
        "benches": [
          {
            "name": "benchmarking/bench_plugins.py::test_base",
            "value": 4.518931848862903,
            "unit": "iter/sec",
            "range": "stddev: 0.0055111",
            "group": "plugins",
            "extra": "mean: 221.29 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_table",
            "value": 4.42541783545582,
            "unit": "iter/sec",
            "range": "stddev: 0.0056817",
            "group": "plugins",
            "extra": "mean: 225.97 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_amsmath",
            "value": 3.2743086777936297,
            "unit": "iter/sec",
            "range": "stddev: 0.0098309",
            "group": "plugins",
            "extra": "mean: 305.41 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_container",
            "value": 4.2382578471927514,
            "unit": "iter/sec",
            "range": "stddev: 0.0090039",
            "group": "plugins",
            "extra": "mean: 235.95 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_deflist",
            "value": 4.320797735923586,
            "unit": "iter/sec",
            "range": "stddev: 0.0057521",
            "group": "plugins",
            "extra": "mean: 231.44 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_footnote",
            "value": 4.382211906240203,
            "unit": "iter/sec",
            "range": "stddev: 0.0074545",
            "group": "plugins",
            "extra": "mean: 228.20 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_front_matter",
            "value": 4.454222980301745,
            "unit": "iter/sec",
            "range": "stddev: 0.0071952",
            "group": "plugins",
            "extra": "mean: 224.51 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_texmath",
            "value": 4.305203999264101,
            "unit": "iter/sec",
            "range": "stddev: 0.0064399",
            "group": "plugins",
            "extra": "mean: 232.28 msec\nrounds: 20"
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
          "id": "8f168055d289d30e46202d0deb94ee0835e9f45f",
          "message": "🧪 TEST: fix coverage reporting (#35)",
          "timestamp": "2020-08-17T20:01:00+01:00",
          "url": "https://github.com/executablebooks/markdown-it-py/commit/8f168055d289d30e46202d0deb94ee0835e9f45f",
          "distinct": true,
          "tree_id": "a76713bd1cd9b36bbfa66ff849ac62094f694712"
        },
        "date": 1597691027584,
        "benches": [
          {
            "name": "benchmarking/bench_packages.py::test_markdown_it_py",
            "value": 4.596667129682939,
            "unit": "iter/sec",
            "range": "stddev: 0.0044414",
            "group": "packages",
            "extra": "mean: 217.55 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_mistune",
            "value": 11.465351371647127,
            "unit": "iter/sec",
            "range": "stddev: 0.0021443",
            "group": "packages",
            "extra": "mean: 87.219 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_commonmark_py",
            "value": 1.5907544268453482,
            "unit": "iter/sec",
            "range": "stddev: 0.014611",
            "group": "packages",
            "extra": "mean: 628.63 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_pymarkdown",
            "value": 0.9347901008411936,
            "unit": "iter/sec",
            "range": "stddev: 0.0092290",
            "group": "packages",
            "extra": "mean: 1.0698 sec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_pymarkdown_extra",
            "value": 0.8388432373901871,
            "unit": "iter/sec",
            "range": "stddev: 0.026429",
            "group": "packages",
            "extra": "mean: 1.1921 sec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_mistletoe",
            "value": 4.013697999909411,
            "unit": "iter/sec",
            "range": "stddev: 0.0064050",
            "group": "packages",
            "extra": "mean: 249.15 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_panflute",
            "value": 1.0291173562579081,
            "unit": "iter/sec",
            "range": "stddev: 0.0080436",
            "group": "packages",
            "extra": "mean: 971.71 msec\nrounds: 20"
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
          "id": "f311f50fe0fca3aa71dcb9e5a02483cc76dc246e",
          "message": "🔧 MAINTAIN: Update Manifest (#37)",
          "timestamp": "2020-08-17T22:32:23+01:00",
          "url": "https://github.com/executablebooks/markdown-it-py/commit/f311f50fe0fca3aa71dcb9e5a02483cc76dc246e",
          "distinct": true,
          "tree_id": "3cbe3ac789b18386711f69eec6886641a737dc73"
        },
        "date": 1597700011200,
        "benches": [
          {
            "name": "benchmarking/bench_plugins.py::test_base",
            "value": 5.089332180024846,
            "unit": "iter/sec",
            "range": "stddev: 0.010544",
            "group": "plugins",
            "extra": "mean: 196.49 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_table",
            "value": 5.344757047439524,
            "unit": "iter/sec",
            "range": "stddev: 0.0068296",
            "group": "plugins",
            "extra": "mean: 187.10 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_amsmath",
            "value": 4.410184131884382,
            "unit": "iter/sec",
            "range": "stddev: 0.0074858",
            "group": "plugins",
            "extra": "mean: 226.75 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_container",
            "value": 5.302680076879086,
            "unit": "iter/sec",
            "range": "stddev: 0.017099",
            "group": "plugins",
            "extra": "mean: 188.58 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_deflist",
            "value": 5.407365607590001,
            "unit": "iter/sec",
            "range": "stddev: 0.0074353",
            "group": "plugins",
            "extra": "mean: 184.93 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_footnote",
            "value": 5.300382156413837,
            "unit": "iter/sec",
            "range": "stddev: 0.012781",
            "group": "plugins",
            "extra": "mean: 188.67 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_front_matter",
            "value": 5.230723291821241,
            "unit": "iter/sec",
            "range": "stddev: 0.0082477",
            "group": "plugins",
            "extra": "mean: 191.18 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_texmath",
            "value": 4.97772660356253,
            "unit": "iter/sec",
            "range": "stddev: 0.014707",
            "group": "plugins",
            "extra": "mean: 200.89 msec\nrounds: 20"
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
          "id": "f311f50fe0fca3aa71dcb9e5a02483cc76dc246e",
          "message": "🔧 MAINTAIN: Update Manifest (#37)",
          "timestamp": "2020-08-17T22:32:23+01:00",
          "url": "https://github.com/executablebooks/markdown-it-py/commit/f311f50fe0fca3aa71dcb9e5a02483cc76dc246e",
          "distinct": true,
          "tree_id": "3cbe3ac789b18386711f69eec6886641a737dc73"
        },
        "date": 1597700093165,
        "benches": [
          {
            "name": "benchmarking/bench_packages.py::test_markdown_it_py",
            "value": 4.734625104473808,
            "unit": "iter/sec",
            "range": "stddev: 0.0086332",
            "group": "packages",
            "extra": "mean: 211.21 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_mistune",
            "value": 11.31090565411498,
            "unit": "iter/sec",
            "range": "stddev: 0.0046607",
            "group": "packages",
            "extra": "mean: 88.410 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_commonmark_py",
            "value": 1.4836633489995534,
            "unit": "iter/sec",
            "range": "stddev: 0.024920",
            "group": "packages",
            "extra": "mean: 674.01 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_pymarkdown",
            "value": 0.9522526436378257,
            "unit": "iter/sec",
            "range": "stddev: 0.041239",
            "group": "packages",
            "extra": "mean: 1.0501 sec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_pymarkdown_extra",
            "value": 0.8939845323034016,
            "unit": "iter/sec",
            "range": "stddev: 0.056184",
            "group": "packages",
            "extra": "mean: 1.1186 sec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_mistletoe",
            "value": 4.097879461402199,
            "unit": "iter/sec",
            "range": "stddev: 0.015921",
            "group": "packages",
            "extra": "mean: 244.03 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_panflute",
            "value": 0.9597746755421874,
            "unit": "iter/sec",
            "range": "stddev: 0.066021",
            "group": "packages",
            "extra": "mean: 1.0419 sec\nrounds: 20"
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
          "id": "ef59092c0a86ca643ccbb7b55579ce91d8aade18",
          "message": "🧪 TEST: Identify minmal failure for #31",
          "timestamp": "2020-08-17T22:53:03+01:00",
          "url": "https://github.com/executablebooks/markdown-it-py/commit/ef59092c0a86ca643ccbb7b55579ce91d8aade18",
          "distinct": true,
          "tree_id": "db8299d77501c7a4e85ba1ef353d913d39141774"
        },
        "date": 1597701277429,
        "benches": [
          {
            "name": "benchmarking/bench_plugins.py::test_base",
            "value": 4.133696867115518,
            "unit": "iter/sec",
            "range": "stddev: 0.020382",
            "group": "plugins",
            "extra": "mean: 241.91 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_table",
            "value": 4.042783944006022,
            "unit": "iter/sec",
            "range": "stddev: 0.0085870",
            "group": "plugins",
            "extra": "mean: 247.35 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_amsmath",
            "value": 3.0419728585994754,
            "unit": "iter/sec",
            "range": "stddev: 0.0082352",
            "group": "plugins",
            "extra": "mean: 328.73 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_container",
            "value": 4.085777527608504,
            "unit": "iter/sec",
            "range": "stddev: 0.0067444",
            "group": "plugins",
            "extra": "mean: 244.75 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_deflist",
            "value": 4.066472938215111,
            "unit": "iter/sec",
            "range": "stddev: 0.0085010",
            "group": "plugins",
            "extra": "mean: 245.91 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_footnote",
            "value": 4.072046911693967,
            "unit": "iter/sec",
            "range": "stddev: 0.0053350",
            "group": "plugins",
            "extra": "mean: 245.58 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_front_matter",
            "value": 4.067561864142263,
            "unit": "iter/sec",
            "range": "stddev: 0.010254",
            "group": "plugins",
            "extra": "mean: 245.85 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_texmath",
            "value": 3.904555320801214,
            "unit": "iter/sec",
            "range": "stddev: 0.015364",
            "group": "plugins",
            "extra": "mean: 256.11 msec\nrounds: 20"
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
          "id": "ef59092c0a86ca643ccbb7b55579ce91d8aade18",
          "message": "🧪 TEST: Identify minmal failure for #31",
          "timestamp": "2020-08-17T22:53:03+01:00",
          "url": "https://github.com/executablebooks/markdown-it-py/commit/ef59092c0a86ca643ccbb7b55579ce91d8aade18",
          "distinct": true,
          "tree_id": "db8299d77501c7a4e85ba1ef353d913d39141774"
        },
        "date": 1597701324019,
        "benches": [
          {
            "name": "benchmarking/bench_packages.py::test_markdown_it_py",
            "value": 5.3009368865516695,
            "unit": "iter/sec",
            "range": "stddev: 0.0062900",
            "group": "packages",
            "extra": "mean: 188.65 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_mistune",
            "value": 14.37540037556491,
            "unit": "iter/sec",
            "range": "stddev: 0.0047261",
            "group": "packages",
            "extra": "mean: 69.563 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_commonmark_py",
            "value": 2.4218185619591472,
            "unit": "iter/sec",
            "range": "stddev: 0.013496",
            "group": "packages",
            "extra": "mean: 412.91 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_pymarkdown",
            "value": 1.094842703543415,
            "unit": "iter/sec",
            "range": "stddev: 0.020077",
            "group": "packages",
            "extra": "mean: 913.37 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_pymarkdown_extra",
            "value": 1.0049568891058702,
            "unit": "iter/sec",
            "range": "stddev: 0.021545",
            "group": "packages",
            "extra": "mean: 995.07 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_mistletoe",
            "value": 4.617583409503764,
            "unit": "iter/sec",
            "range": "stddev: 0.0086164",
            "group": "packages",
            "extra": "mean: 216.56 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_panflute",
            "value": 1.1673866998583398,
            "unit": "iter/sec",
            "range": "stddev: 0.017368",
            "group": "packages",
            "extra": "mean: 856.61 msec\nrounds: 20"
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
          "id": "d70a7ff62192db1504bf6bd7cbfb1ee236845b46",
          "message": "🐛 FIX: empty lines after certain lists raises exception (#36)",
          "timestamp": "2020-08-17T23:04:43+01:00",
          "url": "https://github.com/executablebooks/markdown-it-py/commit/d70a7ff62192db1504bf6bd7cbfb1ee236845b46",
          "distinct": true,
          "tree_id": "ca110d08dfc92cb42617665b6070a021c57b0f1e"
        },
        "date": 1597701951813,
        "benches": [
          {
            "name": "benchmarking/bench_plugins.py::test_base",
            "value": 5.787979755914578,
            "unit": "iter/sec",
            "range": "stddev: 0.0095072",
            "group": "plugins",
            "extra": "mean: 172.77 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_table",
            "value": 5.73719863987933,
            "unit": "iter/sec",
            "range": "stddev: 0.0091468",
            "group": "plugins",
            "extra": "mean: 174.30 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_amsmath",
            "value": 4.666369646172452,
            "unit": "iter/sec",
            "range": "stddev: 0.011270",
            "group": "plugins",
            "extra": "mean: 214.30 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_container",
            "value": 5.527206575976158,
            "unit": "iter/sec",
            "range": "stddev: 0.015444",
            "group": "plugins",
            "extra": "mean: 180.92 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_deflist",
            "value": 5.263854270796706,
            "unit": "iter/sec",
            "range": "stddev: 0.010325",
            "group": "plugins",
            "extra": "mean: 189.97 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_footnote",
            "value": 5.679672499973812,
            "unit": "iter/sec",
            "range": "stddev: 0.011614",
            "group": "plugins",
            "extra": "mean: 176.07 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_front_matter",
            "value": 5.579409838772348,
            "unit": "iter/sec",
            "range": "stddev: 0.0087674",
            "group": "plugins",
            "extra": "mean: 179.23 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_texmath",
            "value": 5.148887106642821,
            "unit": "iter/sec",
            "range": "stddev: 0.016035",
            "group": "plugins",
            "extra": "mean: 194.22 msec\nrounds: 20"
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
          "id": "d70a7ff62192db1504bf6bd7cbfb1ee236845b46",
          "message": "🐛 FIX: empty lines after certain lists raises exception (#36)",
          "timestamp": "2020-08-17T23:04:43+01:00",
          "url": "https://github.com/executablebooks/markdown-it-py/commit/d70a7ff62192db1504bf6bd7cbfb1ee236845b46",
          "distinct": true,
          "tree_id": "ca110d08dfc92cb42617665b6070a021c57b0f1e"
        },
        "date": 1597702043116,
        "benches": [
          {
            "name": "benchmarking/bench_packages.py::test_markdown_it_py",
            "value": 4.3597168535763755,
            "unit": "iter/sec",
            "range": "stddev: 0.0087305",
            "group": "packages",
            "extra": "mean: 229.37 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_mistune",
            "value": 10.360066880199238,
            "unit": "iter/sec",
            "range": "stddev: 0.0028366",
            "group": "packages",
            "extra": "mean: 96.524 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_commonmark_py",
            "value": 1.4464905294869377,
            "unit": "iter/sec",
            "range": "stddev: 0.024945",
            "group": "packages",
            "extra": "mean: 691.33 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_pymarkdown",
            "value": 0.9379156195743479,
            "unit": "iter/sec",
            "range": "stddev: 0.027029",
            "group": "packages",
            "extra": "mean: 1.0662 sec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_pymarkdown_extra",
            "value": 0.7983761167425515,
            "unit": "iter/sec",
            "range": "stddev: 0.050662",
            "group": "packages",
            "extra": "mean: 1.2525 sec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_mistletoe",
            "value": 3.7851648734128798,
            "unit": "iter/sec",
            "range": "stddev: 0.0095317",
            "group": "packages",
            "extra": "mean: 264.19 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_panflute",
            "value": 0.979704237410091,
            "unit": "iter/sec",
            "range": "stddev: 0.020079",
            "group": "packages",
            "extra": "mean: 1.0207 sec\nrounds: 20"
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
          "id": "91bf225d3ad7162cd08aa61dca1c3389f56c847a",
          "message": "✨ NEW: Add dollarmath plugin (#38)\n\n`dollarmath` is an improved version of `texmath`, for `$`/`$$` enclosed math only.\r\n It is more performant, handles `\\` escaping properly and allows for more configuration.\r\n\r\nIt is implemented in a more \"markdown-it\" way; primarily iterating through the source character, rather than using regexes.\r\nThis is easier to understand, actually more performant (according to the benchmark tests), and allows for greater control over options like allowing internal spaces (which texmath hardcodes).",
          "timestamp": "2020-08-18T07:37:43+01:00",
          "url": "https://github.com/executablebooks/markdown-it-py/commit/91bf225d3ad7162cd08aa61dca1c3389f56c847a",
          "distinct": true,
          "tree_id": "f525ec7b4a9d76ce4ed9b63d52ae435dba33ad3e"
        },
        "date": 1597732756439,
        "benches": [
          {
            "name": "benchmarking/bench_plugins.py::test_base",
            "value": 4.249183578279685,
            "unit": "iter/sec",
            "range": "stddev: 0.013516",
            "group": "plugins",
            "extra": "mean: 235.34 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_table",
            "value": 4.152388862689565,
            "unit": "iter/sec",
            "range": "stddev: 0.012526",
            "group": "plugins",
            "extra": "mean: 240.83 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_amsmath",
            "value": 3.1183763367315374,
            "unit": "iter/sec",
            "range": "stddev: 0.014679",
            "group": "plugins",
            "extra": "mean: 320.68 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_container",
            "value": 4.074871592019905,
            "unit": "iter/sec",
            "range": "stddev: 0.014406",
            "group": "plugins",
            "extra": "mean: 245.41 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_deflist",
            "value": 4.164004005582816,
            "unit": "iter/sec",
            "range": "stddev: 0.011062",
            "group": "plugins",
            "extra": "mean: 240.15 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_footnote",
            "value": 4.15529848161578,
            "unit": "iter/sec",
            "range": "stddev: 0.012399",
            "group": "plugins",
            "extra": "mean: 240.66 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_front_matter",
            "value": 4.182881320274619,
            "unit": "iter/sec",
            "range": "stddev: 0.012691",
            "group": "plugins",
            "extra": "mean: 239.07 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_texmath",
            "value": 3.954043389715234,
            "unit": "iter/sec",
            "range": "stddev: 0.013004",
            "group": "plugins",
            "extra": "mean: 252.91 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_dollarmath",
            "value": 4.175947080921941,
            "unit": "iter/sec",
            "range": "stddev: 0.010579",
            "group": "plugins",
            "extra": "mean: 239.47 msec\nrounds: 20"
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
          "id": "91bf225d3ad7162cd08aa61dca1c3389f56c847a",
          "message": "✨ NEW: Add dollarmath plugin (#38)\n\n`dollarmath` is an improved version of `texmath`, for `$`/`$$` enclosed math only.\r\n It is more performant, handles `\\` escaping properly and allows for more configuration.\r\n\r\nIt is implemented in a more \"markdown-it\" way; primarily iterating through the source character, rather than using regexes.\r\nThis is easier to understand, actually more performant (according to the benchmark tests), and allows for greater control over options like allowing internal spaces (which texmath hardcodes).",
          "timestamp": "2020-08-18T07:37:43+01:00",
          "url": "https://github.com/executablebooks/markdown-it-py/commit/91bf225d3ad7162cd08aa61dca1c3389f56c847a",
          "distinct": true,
          "tree_id": "f525ec7b4a9d76ce4ed9b63d52ae435dba33ad3e"
        },
        "date": 1597732818754,
        "benches": [
          {
            "name": "benchmarking/bench_packages.py::test_markdown_it_py",
            "value": 4.409078383129648,
            "unit": "iter/sec",
            "range": "stddev: 0.017132",
            "group": "packages",
            "extra": "mean: 226.80 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_mistune",
            "value": 11.112821565737388,
            "unit": "iter/sec",
            "range": "stddev: 0.0022973",
            "group": "packages",
            "extra": "mean: 89.986 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_commonmark_py",
            "value": 1.5290202339450802,
            "unit": "iter/sec",
            "range": "stddev: 0.035874",
            "group": "packages",
            "extra": "mean: 654.01 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_pymarkdown",
            "value": 0.9104717566296142,
            "unit": "iter/sec",
            "range": "stddev: 0.022190",
            "group": "packages",
            "extra": "mean: 1.0983 sec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_pymarkdown_extra",
            "value": 0.813197254011339,
            "unit": "iter/sec",
            "range": "stddev: 0.041792",
            "group": "packages",
            "extra": "mean: 1.2297 sec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_mistletoe",
            "value": 3.87476161052287,
            "unit": "iter/sec",
            "range": "stddev: 0.014189",
            "group": "packages",
            "extra": "mean: 258.08 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_panflute",
            "value": 0.9743536956928961,
            "unit": "iter/sec",
            "range": "stddev: 0.038833",
            "group": "packages",
            "extra": "mean: 1.0263 sec\nrounds: 20"
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
          "id": "88e2abae2c7c069e43470b53a9f4e01a83bbb995",
          "message": "📚 DOCS: Update performance table",
          "timestamp": "2020-08-18T07:51:19+01:00",
          "url": "https://github.com/executablebooks/markdown-it-py/commit/88e2abae2c7c069e43470b53a9f4e01a83bbb995",
          "distinct": true,
          "tree_id": "77fbfd8dfbe7c1823d58151224fd005dbf22a61f"
        },
        "date": 1597733576638,
        "benches": [
          {
            "name": "benchmarking/bench_plugins.py::test_base",
            "value": 4.174421147922107,
            "unit": "iter/sec",
            "range": "stddev: 0.010062",
            "group": "plugins",
            "extra": "mean: 239.55 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_table",
            "value": 4.000824327443937,
            "unit": "iter/sec",
            "range": "stddev: 0.014537",
            "group": "plugins",
            "extra": "mean: 249.95 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_amsmath",
            "value": 3.1510795549477253,
            "unit": "iter/sec",
            "range": "stddev: 0.010908",
            "group": "plugins",
            "extra": "mean: 317.35 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_container",
            "value": 4.1224047223549345,
            "unit": "iter/sec",
            "range": "stddev: 0.0098287",
            "group": "plugins",
            "extra": "mean: 242.58 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_deflist",
            "value": 4.087717286145694,
            "unit": "iter/sec",
            "range": "stddev: 0.0098983",
            "group": "plugins",
            "extra": "mean: 244.64 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_footnote",
            "value": 4.155351761554904,
            "unit": "iter/sec",
            "range": "stddev: 0.011052",
            "group": "plugins",
            "extra": "mean: 240.65 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_front_matter",
            "value": 4.033227796406073,
            "unit": "iter/sec",
            "range": "stddev: 0.013529",
            "group": "plugins",
            "extra": "mean: 247.94 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_texmath",
            "value": 4.014004659147116,
            "unit": "iter/sec",
            "range": "stddev: 0.013647",
            "group": "plugins",
            "extra": "mean: 249.13 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_dollarmath",
            "value": 4.0982228756681085,
            "unit": "iter/sec",
            "range": "stddev: 0.0094765",
            "group": "plugins",
            "extra": "mean: 244.01 msec\nrounds: 20"
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
          "id": "88e2abae2c7c069e43470b53a9f4e01a83bbb995",
          "message": "📚 DOCS: Update performance table",
          "timestamp": "2020-08-18T07:51:19+01:00",
          "url": "https://github.com/executablebooks/markdown-it-py/commit/88e2abae2c7c069e43470b53a9f4e01a83bbb995",
          "distinct": true,
          "tree_id": "77fbfd8dfbe7c1823d58151224fd005dbf22a61f"
        },
        "date": 1597733662793,
        "benches": [
          {
            "name": "benchmarking/bench_packages.py::test_markdown_it_py",
            "value": 5.089695760557793,
            "unit": "iter/sec",
            "range": "stddev: 0.0063289",
            "group": "packages",
            "extra": "mean: 196.48 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_mistune",
            "value": 12.435166763274303,
            "unit": "iter/sec",
            "range": "stddev: 0.0025338",
            "group": "packages",
            "extra": "mean: 80.417 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_commonmark_py",
            "value": 1.653943287413171,
            "unit": "iter/sec",
            "range": "stddev: 0.017351",
            "group": "packages",
            "extra": "mean: 604.62 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_pymarkdown",
            "value": 1.010387330141579,
            "unit": "iter/sec",
            "range": "stddev: 0.016376",
            "group": "packages",
            "extra": "mean: 989.72 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_pymarkdown_extra",
            "value": 0.8938933400662598,
            "unit": "iter/sec",
            "range": "stddev: 0.029032",
            "group": "packages",
            "extra": "mean: 1.1187 sec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_mistletoe",
            "value": 4.238301549411509,
            "unit": "iter/sec",
            "range": "stddev: 0.010812",
            "group": "packages",
            "extra": "mean: 235.94 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_panflute",
            "value": 1.0812165593861873,
            "unit": "iter/sec",
            "range": "stddev: 0.031162",
            "group": "packages",
            "extra": "mean: 924.88 msec\nrounds: 20"
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
          "id": "4b3e64665d65b5605674c8b588f87be1e43a44a2",
          "message": "🚀 RELEASE: v0.5.0 (#39)",
          "timestamp": "2020-08-18T08:17:46+01:00",
          "url": "https://github.com/executablebooks/markdown-it-py/commit/4b3e64665d65b5605674c8b588f87be1e43a44a2",
          "distinct": true,
          "tree_id": "fe922bdd029510e98cd10a4688393617eca785a4"
        },
        "date": 1597735156987,
        "benches": [
          {
            "name": "benchmarking/bench_plugins.py::test_base",
            "value": 4.62492622098004,
            "unit": "iter/sec",
            "range": "stddev: 0.0084170",
            "group": "plugins",
            "extra": "mean: 216.22 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_table",
            "value": 4.431766291676766,
            "unit": "iter/sec",
            "range": "stddev: 0.023694",
            "group": "plugins",
            "extra": "mean: 225.64 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_amsmath",
            "value": 3.409795370683355,
            "unit": "iter/sec",
            "range": "stddev: 0.010254",
            "group": "plugins",
            "extra": "mean: 293.27 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_container",
            "value": 4.743849466398332,
            "unit": "iter/sec",
            "range": "stddev: 0.0080463",
            "group": "plugins",
            "extra": "mean: 210.80 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_deflist",
            "value": 4.885201789460454,
            "unit": "iter/sec",
            "range": "stddev: 0.0072004",
            "group": "plugins",
            "extra": "mean: 204.70 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_footnote",
            "value": 4.751550762850365,
            "unit": "iter/sec",
            "range": "stddev: 0.014154",
            "group": "plugins",
            "extra": "mean: 210.46 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_front_matter",
            "value": 5.0881787405225,
            "unit": "iter/sec",
            "range": "stddev: 0.011033",
            "group": "plugins",
            "extra": "mean: 196.53 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_texmath",
            "value": 4.869164253993794,
            "unit": "iter/sec",
            "range": "stddev: 0.0081196",
            "group": "plugins",
            "extra": "mean: 205.37 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_dollarmath",
            "value": 4.926084685498215,
            "unit": "iter/sec",
            "range": "stddev: 0.0099026",
            "group": "plugins",
            "extra": "mean: 203.00 msec\nrounds: 20"
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
          "id": "4b3e64665d65b5605674c8b588f87be1e43a44a2",
          "message": "🚀 RELEASE: v0.5.0 (#39)",
          "timestamp": "2020-08-18T08:17:46+01:00",
          "url": "https://github.com/executablebooks/markdown-it-py/commit/4b3e64665d65b5605674c8b588f87be1e43a44a2",
          "distinct": true,
          "tree_id": "fe922bdd029510e98cd10a4688393617eca785a4"
        },
        "date": 1597735233122,
        "benches": [
          {
            "name": "benchmarking/bench_packages.py::test_markdown_it_py",
            "value": 4.180919022426832,
            "unit": "iter/sec",
            "range": "stddev: 0.0074038",
            "group": "packages",
            "extra": "mean: 239.18 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_mistune",
            "value": 12.06920258447217,
            "unit": "iter/sec",
            "range": "stddev: 0.0032060",
            "group": "packages",
            "extra": "mean: 82.856 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_commonmark_py",
            "value": 2.045146918034147,
            "unit": "iter/sec",
            "range": "stddev: 0.021924",
            "group": "packages",
            "extra": "mean: 488.96 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_pymarkdown",
            "value": 0.9017943051474403,
            "unit": "iter/sec",
            "range": "stddev: 0.018983",
            "group": "packages",
            "extra": "mean: 1.1089 sec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_pymarkdown_extra",
            "value": 0.7919809964432366,
            "unit": "iter/sec",
            "range": "stddev: 0.018861",
            "group": "packages",
            "extra": "mean: 1.2627 sec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_mistletoe",
            "value": 3.7978390776075273,
            "unit": "iter/sec",
            "range": "stddev: 0.0086241",
            "group": "packages",
            "extra": "mean: 263.31 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_panflute",
            "value": 0.9280673879307981,
            "unit": "iter/sec",
            "range": "stddev: 0.0061564",
            "group": "packages",
            "extra": "mean: 1.0775 sec\nrounds: 20"
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
          "id": "cfd837b44058f1b76a2a2c6324cafb79bd0a89fe",
          "message": "⬆️ UPGRADE: attrs -> v20\n\nThis is not breaking, since it only deprecates python 3.4 (see [CHANGELOG.rst]https://github.com/python-attrs/attrs/blob/master/CHANGELOG.rst))",
          "timestamp": "2020-08-21T20:04:33+01:00",
          "url": "https://github.com/executablebooks/markdown-it-py/commit/cfd837b44058f1b76a2a2c6324cafb79bd0a89fe",
          "distinct": true,
          "tree_id": "dc76f4f739ea6a73a7b143f1bfdf64a8dd6f39d9"
        },
        "date": 1598036755446,
        "benches": [
          {
            "name": "benchmarking/bench_plugins.py::test_base",
            "value": 4.541209094986975,
            "unit": "iter/sec",
            "range": "stddev: 0.0053372",
            "group": "plugins",
            "extra": "mean: 220.21 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_table",
            "value": 4.41608691718245,
            "unit": "iter/sec",
            "range": "stddev: 0.0063627",
            "group": "plugins",
            "extra": "mean: 226.44 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_amsmath",
            "value": 3.40359267586339,
            "unit": "iter/sec",
            "range": "stddev: 0.0052877",
            "group": "plugins",
            "extra": "mean: 293.81 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_container",
            "value": 4.403153316486345,
            "unit": "iter/sec",
            "range": "stddev: 0.0091479",
            "group": "plugins",
            "extra": "mean: 227.11 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_deflist",
            "value": 4.441660671126142,
            "unit": "iter/sec",
            "range": "stddev: 0.0049167",
            "group": "plugins",
            "extra": "mean: 225.14 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_footnote",
            "value": 4.344532526126801,
            "unit": "iter/sec",
            "range": "stddev: 0.0085101",
            "group": "plugins",
            "extra": "mean: 230.17 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_front_matter",
            "value": 4.394591538839091,
            "unit": "iter/sec",
            "range": "stddev: 0.0096073",
            "group": "plugins",
            "extra": "mean: 227.55 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_texmath",
            "value": 4.241704710871483,
            "unit": "iter/sec",
            "range": "stddev: 0.0094647",
            "group": "plugins",
            "extra": "mean: 235.75 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_dollarmath",
            "value": 4.261089721532012,
            "unit": "iter/sec",
            "range": "stddev: 0.011853",
            "group": "plugins",
            "extra": "mean: 234.68 msec\nrounds: 20"
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
          "id": "cfd837b44058f1b76a2a2c6324cafb79bd0a89fe",
          "message": "⬆️ UPGRADE: attrs -> v20\n\nThis is not breaking, since it only deprecates python 3.4 (see [CHANGELOG.rst]https://github.com/python-attrs/attrs/blob/master/CHANGELOG.rst))",
          "timestamp": "2020-08-21T20:04:33+01:00",
          "url": "https://github.com/executablebooks/markdown-it-py/commit/cfd837b44058f1b76a2a2c6324cafb79bd0a89fe",
          "distinct": true,
          "tree_id": "dc76f4f739ea6a73a7b143f1bfdf64a8dd6f39d9"
        },
        "date": 1598036809981,
        "benches": [
          {
            "name": "benchmarking/bench_packages.py::test_markdown_it_py",
            "value": 4.976203561929382,
            "unit": "iter/sec",
            "range": "stddev: 0.0072838",
            "group": "packages",
            "extra": "mean: 200.96 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_mistune",
            "value": 14.182775639340647,
            "unit": "iter/sec",
            "range": "stddev: 0.0025568",
            "group": "packages",
            "extra": "mean: 70.508 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_commonmark_py",
            "value": 2.375471652598733,
            "unit": "iter/sec",
            "range": "stddev: 0.015593",
            "group": "packages",
            "extra": "mean: 420.97 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_pymarkdown",
            "value": 1.0434918709616323,
            "unit": "iter/sec",
            "range": "stddev: 0.020115",
            "group": "packages",
            "extra": "mean: 958.32 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_pymarkdown_extra",
            "value": 0.9425162876960699,
            "unit": "iter/sec",
            "range": "stddev: 0.022208",
            "group": "packages",
            "extra": "mean: 1.0610 sec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_mistletoe",
            "value": 4.341831394915872,
            "unit": "iter/sec",
            "range": "stddev: 0.011698",
            "group": "packages",
            "extra": "mean: 230.32 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_panflute",
            "value": 1.1081220576861532,
            "unit": "iter/sec",
            "range": "stddev: 0.015095",
            "group": "packages",
            "extra": "mean: 902.43 msec\nrounds: 20"
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
          "id": "a4159f07b09a60cdb4a29fef9b70ae9ff7716339",
          "message": "🚀 RELEASE: v0.5.1",
          "timestamp": "2020-08-21T20:11:05+01:00",
          "url": "https://github.com/executablebooks/markdown-it-py/commit/a4159f07b09a60cdb4a29fef9b70ae9ff7716339",
          "distinct": true,
          "tree_id": "4ed74749befe9287fabc68a452800be3633ae25b"
        },
        "date": 1598037140451,
        "benches": [
          {
            "name": "benchmarking/bench_plugins.py::test_base",
            "value": 5.174551228474362,
            "unit": "iter/sec",
            "range": "stddev: 0.010004",
            "group": "plugins",
            "extra": "mean: 193.25 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_table",
            "value": 4.871026318077487,
            "unit": "iter/sec",
            "range": "stddev: 0.018057",
            "group": "plugins",
            "extra": "mean: 205.30 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_amsmath",
            "value": 3.7874080919572606,
            "unit": "iter/sec",
            "range": "stddev: 0.010031",
            "group": "plugins",
            "extra": "mean: 264.03 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_container",
            "value": 5.1519258975499085,
            "unit": "iter/sec",
            "range": "stddev: 0.0066659",
            "group": "plugins",
            "extra": "mean: 194.10 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_deflist",
            "value": 4.972338992548267,
            "unit": "iter/sec",
            "range": "stddev: 0.011631",
            "group": "plugins",
            "extra": "mean: 201.11 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_footnote",
            "value": 5.032594164791432,
            "unit": "iter/sec",
            "range": "stddev: 0.0095434",
            "group": "plugins",
            "extra": "mean: 198.70 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_front_matter",
            "value": 5.017065360939526,
            "unit": "iter/sec",
            "range": "stddev: 0.012396",
            "group": "plugins",
            "extra": "mean: 199.32 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_texmath",
            "value": 4.9913728824096815,
            "unit": "iter/sec",
            "range": "stddev: 0.0086369",
            "group": "plugins",
            "extra": "mean: 200.35 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_dollarmath",
            "value": 4.9453539990346895,
            "unit": "iter/sec",
            "range": "stddev: 0.012998",
            "group": "plugins",
            "extra": "mean: 202.21 msec\nrounds: 20"
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
          "id": "a4159f07b09a60cdb4a29fef9b70ae9ff7716339",
          "message": "🚀 RELEASE: v0.5.1",
          "timestamp": "2020-08-21T20:11:05+01:00",
          "url": "https://github.com/executablebooks/markdown-it-py/commit/a4159f07b09a60cdb4a29fef9b70ae9ff7716339",
          "distinct": true,
          "tree_id": "4ed74749befe9287fabc68a452800be3633ae25b"
        },
        "date": 1598037199406,
        "benches": [
          {
            "name": "benchmarking/bench_packages.py::test_markdown_it_py",
            "value": 5.407574089609994,
            "unit": "iter/sec",
            "range": "stddev: 0.0085117",
            "group": "packages",
            "extra": "mean: 184.93 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_mistune",
            "value": 12.829186263272767,
            "unit": "iter/sec",
            "range": "stddev: 0.0050067",
            "group": "packages",
            "extra": "mean: 77.947 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_commonmark_py",
            "value": 1.6427850224707674,
            "unit": "iter/sec",
            "range": "stddev: 0.021156",
            "group": "packages",
            "extra": "mean: 608.72 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_pymarkdown",
            "value": 1.1215348199075694,
            "unit": "iter/sec",
            "range": "stddev: 0.026716",
            "group": "packages",
            "extra": "mean: 891.64 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_pymarkdown_extra",
            "value": 1.009869376107195,
            "unit": "iter/sec",
            "range": "stddev: 0.028276",
            "group": "packages",
            "extra": "mean: 990.23 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_mistletoe",
            "value": 4.765142250604874,
            "unit": "iter/sec",
            "range": "stddev: 0.0070399",
            "group": "packages",
            "extra": "mean: 209.86 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_panflute",
            "value": 1.1882205998694741,
            "unit": "iter/sec",
            "range": "stddev: 0.032097",
            "group": "packages",
            "extra": "mean: 841.59 msec\nrounds: 20"
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
          "id": "6346ebd0858a3e92c274da6a696eab767d0fb024",
          "message": "🐛 FIX: container plugin \\w no newline (#43)\n\nFixed an `IndexError` when there is no newline on the closing tag line.",
          "timestamp": "2020-08-22T04:25:17+01:00",
          "url": "https://github.com/executablebooks/markdown-it-py/commit/6346ebd0858a3e92c274da6a696eab767d0fb024",
          "distinct": true,
          "tree_id": "1646aa7e36a2764797199eb0aa24d8d1fd059994"
        },
        "date": 1598066798283,
        "benches": [
          {
            "name": "benchmarking/bench_plugins.py::test_base",
            "value": 5.2876331267590935,
            "unit": "iter/sec",
            "range": "stddev: 0.010814",
            "group": "plugins",
            "extra": "mean: 189.12 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_table",
            "value": 5.016740703190824,
            "unit": "iter/sec",
            "range": "stddev: 0.012942",
            "group": "plugins",
            "extra": "mean: 199.33 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_amsmath",
            "value": 3.800737202998193,
            "unit": "iter/sec",
            "range": "stddev: 0.0093330",
            "group": "plugins",
            "extra": "mean: 263.11 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_container",
            "value": 5.169196689623639,
            "unit": "iter/sec",
            "range": "stddev: 0.013011",
            "group": "plugins",
            "extra": "mean: 193.45 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_deflist",
            "value": 5.160882126770849,
            "unit": "iter/sec",
            "range": "stddev: 0.013725",
            "group": "plugins",
            "extra": "mean: 193.77 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_footnote",
            "value": 5.24349819719008,
            "unit": "iter/sec",
            "range": "stddev: 0.010466",
            "group": "plugins",
            "extra": "mean: 190.71 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_front_matter",
            "value": 4.970702715475229,
            "unit": "iter/sec",
            "range": "stddev: 0.012706",
            "group": "plugins",
            "extra": "mean: 201.18 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_texmath",
            "value": 4.723366451775362,
            "unit": "iter/sec",
            "range": "stddev: 0.013741",
            "group": "plugins",
            "extra": "mean: 211.71 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_dollarmath",
            "value": 4.871012717857828,
            "unit": "iter/sec",
            "range": "stddev: 0.013616",
            "group": "plugins",
            "extra": "mean: 205.30 msec\nrounds: 20"
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
          "id": "6346ebd0858a3e92c274da6a696eab767d0fb024",
          "message": "🐛 FIX: container plugin \\w no newline (#43)\n\nFixed an `IndexError` when there is no newline on the closing tag line.",
          "timestamp": "2020-08-22T04:25:17+01:00",
          "url": "https://github.com/executablebooks/markdown-it-py/commit/6346ebd0858a3e92c274da6a696eab767d0fb024",
          "distinct": true,
          "tree_id": "1646aa7e36a2764797199eb0aa24d8d1fd059994"
        },
        "date": 1598066875103,
        "benches": [
          {
            "name": "benchmarking/bench_packages.py::test_markdown_it_py",
            "value": 4.3865830934271015,
            "unit": "iter/sec",
            "range": "stddev: 0.0092669",
            "group": "packages",
            "extra": "mean: 227.97 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_mistune",
            "value": 10.275699932062473,
            "unit": "iter/sec",
            "range": "stddev: 0.0053812",
            "group": "packages",
            "extra": "mean: 97.317 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_commonmark_py",
            "value": 1.425409846115293,
            "unit": "iter/sec",
            "range": "stddev: 0.023019",
            "group": "packages",
            "extra": "mean: 701.55 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_pymarkdown",
            "value": 0.9249597264846376,
            "unit": "iter/sec",
            "range": "stddev: 0.031334",
            "group": "packages",
            "extra": "mean: 1.0811 sec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_pymarkdown_extra",
            "value": 0.8026990461961581,
            "unit": "iter/sec",
            "range": "stddev: 0.041150",
            "group": "packages",
            "extra": "mean: 1.2458 sec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_mistletoe",
            "value": 3.8392189136762873,
            "unit": "iter/sec",
            "range": "stddev: 0.010937",
            "group": "packages",
            "extra": "mean: 260.47 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_panflute",
            "value": 0.9249829212540904,
            "unit": "iter/sec",
            "range": "stddev: 0.029427",
            "group": "packages",
            "extra": "mean: 1.0811 sec\nrounds: 20"
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
          "id": "dff8ddc167cf6c5f77b587acbe830fe61e288b43",
          "message": "🚀 RELEASE: v0.5.2",
          "timestamp": "2020-08-22T04:30:23+01:00",
          "url": "https://github.com/executablebooks/markdown-it-py/commit/dff8ddc167cf6c5f77b587acbe830fe61e288b43",
          "distinct": true,
          "tree_id": "e684bee757ab1201e2fc46b14b42c9d02883ff78"
        },
        "date": 1598067109162,
        "benches": [
          {
            "name": "benchmarking/bench_plugins.py::test_base",
            "value": 4.184219950544457,
            "unit": "iter/sec",
            "range": "stddev: 0.015631",
            "group": "plugins",
            "extra": "mean: 238.99 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_table",
            "value": 4.296726593413202,
            "unit": "iter/sec",
            "range": "stddev: 0.0087478",
            "group": "plugins",
            "extra": "mean: 232.74 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_amsmath",
            "value": 3.131733859527411,
            "unit": "iter/sec",
            "range": "stddev: 0.013417",
            "group": "plugins",
            "extra": "mean: 319.31 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_container",
            "value": 4.268414943864826,
            "unit": "iter/sec",
            "range": "stddev: 0.0083593",
            "group": "plugins",
            "extra": "mean: 234.28 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_deflist",
            "value": 4.365230643966195,
            "unit": "iter/sec",
            "range": "stddev: 0.0069422",
            "group": "plugins",
            "extra": "mean: 229.08 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_footnote",
            "value": 4.370790943755466,
            "unit": "iter/sec",
            "range": "stddev: 0.0082474",
            "group": "plugins",
            "extra": "mean: 228.79 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_front_matter",
            "value": 4.40077499381546,
            "unit": "iter/sec",
            "range": "stddev: 0.0093738",
            "group": "plugins",
            "extra": "mean: 227.23 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_texmath",
            "value": 4.08066933278298,
            "unit": "iter/sec",
            "range": "stddev: 0.012616",
            "group": "plugins",
            "extra": "mean: 245.06 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_dollarmath",
            "value": 3.9772990502129337,
            "unit": "iter/sec",
            "range": "stddev: 0.010293",
            "group": "plugins",
            "extra": "mean: 251.43 msec\nrounds: 20"
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
          "id": "dff8ddc167cf6c5f77b587acbe830fe61e288b43",
          "message": "🚀 RELEASE: v0.5.2",
          "timestamp": "2020-08-22T04:30:23+01:00",
          "url": "https://github.com/executablebooks/markdown-it-py/commit/dff8ddc167cf6c5f77b587acbe830fe61e288b43",
          "distinct": true,
          "tree_id": "e684bee757ab1201e2fc46b14b42c9d02883ff78"
        },
        "date": 1598067163796,
        "benches": [
          {
            "name": "benchmarking/bench_packages.py::test_markdown_it_py",
            "value": 4.671264625291949,
            "unit": "iter/sec",
            "range": "stddev: 0.0091252",
            "group": "packages",
            "extra": "mean: 214.07 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_mistune",
            "value": 11.663612345660288,
            "unit": "iter/sec",
            "range": "stddev: 0.0031444",
            "group": "packages",
            "extra": "mean: 85.737 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_commonmark_py",
            "value": 1.6916672157656303,
            "unit": "iter/sec",
            "range": "stddev: 0.026205",
            "group": "packages",
            "extra": "mean: 591.13 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_pymarkdown",
            "value": 1.0557047272405489,
            "unit": "iter/sec",
            "range": "stddev: 0.011665",
            "group": "packages",
            "extra": "mean: 947.23 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_pymarkdown_extra",
            "value": 0.9280406949646006,
            "unit": "iter/sec",
            "range": "stddev: 0.027633",
            "group": "packages",
            "extra": "mean: 1.0775 sec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_mistletoe",
            "value": 4.5493769189749695,
            "unit": "iter/sec",
            "range": "stddev: 0.0053924",
            "group": "packages",
            "extra": "mean: 219.81 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_panflute",
            "value": 1.116590271806469,
            "unit": "iter/sec",
            "range": "stddev: 0.018971",
            "group": "packages",
            "extra": "mean: 895.58 msec\nrounds: 20"
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
          "id": "48bbd9026a896d88a31769a85282274132684e25",
          "message": "🔧 MAINTAIN: Add install badge to README",
          "timestamp": "2020-08-30T19:10:21+01:00",
          "url": "https://github.com/executablebooks/markdown-it-py/commit/48bbd9026a896d88a31769a85282274132684e25",
          "distinct": true,
          "tree_id": "8d9e37ba00d3ac30dd66863bdf41a6decf6d273b"
        },
        "date": 1598811126305,
        "benches": [
          {
            "name": "benchmarking/bench_plugins.py::test_base",
            "value": 4.788778404611746,
            "unit": "iter/sec",
            "range": "stddev: 0.0063278",
            "group": "plugins",
            "extra": "mean: 208.82 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_table",
            "value": 4.6520401795396635,
            "unit": "iter/sec",
            "range": "stddev: 0.0061017",
            "group": "plugins",
            "extra": "mean: 214.96 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_amsmath",
            "value": 3.877665651327215,
            "unit": "iter/sec",
            "range": "stddev: 0.0073059",
            "group": "plugins",
            "extra": "mean: 257.89 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_container",
            "value": 4.754987744632532,
            "unit": "iter/sec",
            "range": "stddev: 0.0074029",
            "group": "plugins",
            "extra": "mean: 210.31 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_deflist",
            "value": 4.663375252993221,
            "unit": "iter/sec",
            "range": "stddev: 0.0061524",
            "group": "plugins",
            "extra": "mean: 214.44 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_footnote",
            "value": 4.596599169193924,
            "unit": "iter/sec",
            "range": "stddev: 0.0076137",
            "group": "plugins",
            "extra": "mean: 217.55 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_front_matter",
            "value": 4.733422720550184,
            "unit": "iter/sec",
            "range": "stddev: 0.0063305",
            "group": "plugins",
            "extra": "mean: 211.26 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_texmath",
            "value": 4.602217762763769,
            "unit": "iter/sec",
            "range": "stddev: 0.0068928",
            "group": "plugins",
            "extra": "mean: 217.29 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_dollarmath",
            "value": 4.709773062114073,
            "unit": "iter/sec",
            "range": "stddev: 0.0077872",
            "group": "plugins",
            "extra": "mean: 212.32 msec\nrounds: 20"
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
          "id": "48bbd9026a896d88a31769a85282274132684e25",
          "message": "🔧 MAINTAIN: Add install badge to README",
          "timestamp": "2020-08-30T19:10:21+01:00",
          "url": "https://github.com/executablebooks/markdown-it-py/commit/48bbd9026a896d88a31769a85282274132684e25",
          "distinct": true,
          "tree_id": "8d9e37ba00d3ac30dd66863bdf41a6decf6d273b"
        },
        "date": 1598811175520,
        "benches": [
          {
            "name": "benchmarking/bench_packages.py::test_markdown_it_py",
            "value": 4.638944375437897,
            "unit": "iter/sec",
            "range": "stddev: 0.0053255",
            "group": "packages",
            "extra": "mean: 215.57 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_mistune",
            "value": 13.2186245592598,
            "unit": "iter/sec",
            "range": "stddev: 0.0024675",
            "group": "packages",
            "extra": "mean: 75.651 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_commonmark_py",
            "value": 2.187808881387115,
            "unit": "iter/sec",
            "range": "stddev: 0.016110",
            "group": "packages",
            "extra": "mean: 457.08 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_pymarkdown",
            "value": 0.9817266712482062,
            "unit": "iter/sec",
            "range": "stddev: 0.010654",
            "group": "packages",
            "extra": "mean: 1.0186 sec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_pymarkdown_extra",
            "value": 0.8636690614364649,
            "unit": "iter/sec",
            "range": "stddev: 0.016634",
            "group": "packages",
            "extra": "mean: 1.1579 sec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_mistletoe",
            "value": 4.281546829874369,
            "unit": "iter/sec",
            "range": "stddev: 0.0071240",
            "group": "packages",
            "extra": "mean: 233.56 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_panflute",
            "value": 1.0284853086185792,
            "unit": "iter/sec",
            "range": "stddev: 0.013424",
            "group": "packages",
            "extra": "mean: 972.30 msec\nrounds: 20"
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
          "id": "ee34305cc8b590c7390b0ac4149d0d22104cf908",
          "message": "🔧 MAINTAIN: pin pre-commit black",
          "timestamp": "2020-08-30T19:16:36+01:00",
          "url": "https://github.com/executablebooks/markdown-it-py/commit/ee34305cc8b590c7390b0ac4149d0d22104cf908",
          "distinct": true,
          "tree_id": "c3b58e62ef96de347047e3dc6d55421f10c6a86d"
        },
        "date": 1598811487487,
        "benches": [
          {
            "name": "benchmarking/bench_plugins.py::test_base",
            "value": 5.304696746989882,
            "unit": "iter/sec",
            "range": "stddev: 0.0094343",
            "group": "plugins",
            "extra": "mean: 188.51 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_table",
            "value": 5.029959629136578,
            "unit": "iter/sec",
            "range": "stddev: 0.013764",
            "group": "plugins",
            "extra": "mean: 198.81 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_amsmath",
            "value": 3.7862378173498787,
            "unit": "iter/sec",
            "range": "stddev: 0.011012",
            "group": "plugins",
            "extra": "mean: 264.11 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_container",
            "value": 5.005547548236726,
            "unit": "iter/sec",
            "range": "stddev: 0.011455",
            "group": "plugins",
            "extra": "mean: 199.78 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_deflist",
            "value": 5.2584928670718805,
            "unit": "iter/sec",
            "range": "stddev: 0.012423",
            "group": "plugins",
            "extra": "mean: 190.17 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_footnote",
            "value": 4.529438066420067,
            "unit": "iter/sec",
            "range": "stddev: 0.010002",
            "group": "plugins",
            "extra": "mean: 220.78 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_front_matter",
            "value": 5.231193124166571,
            "unit": "iter/sec",
            "range": "stddev: 0.0069570",
            "group": "plugins",
            "extra": "mean: 191.16 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_texmath",
            "value": 4.934814568721846,
            "unit": "iter/sec",
            "range": "stddev: 0.011989",
            "group": "plugins",
            "extra": "mean: 202.64 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_dollarmath",
            "value": 5.19255307529055,
            "unit": "iter/sec",
            "range": "stddev: 0.0088854",
            "group": "plugins",
            "extra": "mean: 192.58 msec\nrounds: 20"
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
          "id": "ee34305cc8b590c7390b0ac4149d0d22104cf908",
          "message": "🔧 MAINTAIN: pin pre-commit black",
          "timestamp": "2020-08-30T19:16:36+01:00",
          "url": "https://github.com/executablebooks/markdown-it-py/commit/ee34305cc8b590c7390b0ac4149d0d22104cf908",
          "distinct": true,
          "tree_id": "c3b58e62ef96de347047e3dc6d55421f10c6a86d"
        },
        "date": 1598811575032,
        "benches": [
          {
            "name": "benchmarking/bench_packages.py::test_markdown_it_py",
            "value": 4.493475573334976,
            "unit": "iter/sec",
            "range": "stddev: 0.0057949",
            "group": "packages",
            "extra": "mean: 222.54 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_mistune",
            "value": 12.955859075892624,
            "unit": "iter/sec",
            "range": "stddev: 0.0024158",
            "group": "packages",
            "extra": "mean: 77.185 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_commonmark_py",
            "value": 2.150053714652201,
            "unit": "iter/sec",
            "range": "stddev: 0.018069",
            "group": "packages",
            "extra": "mean: 465.10 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_pymarkdown",
            "value": 0.9601968577776571,
            "unit": "iter/sec",
            "range": "stddev: 0.0094841",
            "group": "packages",
            "extra": "mean: 1.0415 sec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_pymarkdown_extra",
            "value": 0.8477551639281378,
            "unit": "iter/sec",
            "range": "stddev: 0.014941",
            "group": "packages",
            "extra": "mean: 1.1796 sec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_mistletoe",
            "value": 4.129824610583919,
            "unit": "iter/sec",
            "range": "stddev: 0.0072709",
            "group": "packages",
            "extra": "mean: 242.14 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_panflute",
            "value": 0.9963184853818499,
            "unit": "iter/sec",
            "range": "stddev: 0.0067527",
            "group": "packages",
            "extra": "mean: 1.0037 sec\nrounds: 20"
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
          "id": "037f253357156c9329d4117408d42b5104a3d276",
          "message": "🐛 Fix: undefined variable in reference block (#45)\n\nCo-authored-by: Chris Sewell <chrisj_sewell@hotmail.com>",
          "timestamp": "2020-09-04T14:22:12+01:00",
          "url": "https://github.com/executablebooks/markdown-it-py/commit/037f253357156c9329d4117408d42b5104a3d276",
          "distinct": true,
          "tree_id": "5e2aeed56c6838964421fdafcc0bae2a04233b21"
        },
        "date": 1599225819712,
        "benches": [
          {
            "name": "benchmarking/bench_plugins.py::test_base",
            "value": 4.519152355680126,
            "unit": "iter/sec",
            "range": "stddev: 0.0054663",
            "group": "plugins",
            "extra": "mean: 221.28 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_table",
            "value": 4.394623897061881,
            "unit": "iter/sec",
            "range": "stddev: 0.0072649",
            "group": "plugins",
            "extra": "mean: 227.55 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_amsmath",
            "value": 3.6437532262064334,
            "unit": "iter/sec",
            "range": "stddev: 0.0092075",
            "group": "plugins",
            "extra": "mean: 274.44 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_container",
            "value": 4.411162379174394,
            "unit": "iter/sec",
            "range": "stddev: 0.0061856",
            "group": "plugins",
            "extra": "mean: 226.70 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_deflist",
            "value": 4.4522277310148,
            "unit": "iter/sec",
            "range": "stddev: 0.0058509",
            "group": "plugins",
            "extra": "mean: 224.61 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_footnote",
            "value": 4.435275828453142,
            "unit": "iter/sec",
            "range": "stddev: 0.0073444",
            "group": "plugins",
            "extra": "mean: 225.47 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_front_matter",
            "value": 4.472439061541298,
            "unit": "iter/sec",
            "range": "stddev: 0.0060886",
            "group": "plugins",
            "extra": "mean: 223.59 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_texmath",
            "value": 4.352277598376413,
            "unit": "iter/sec",
            "range": "stddev: 0.0065453",
            "group": "plugins",
            "extra": "mean: 229.76 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_dollarmath",
            "value": 4.425737632369134,
            "unit": "iter/sec",
            "range": "stddev: 0.0072383",
            "group": "plugins",
            "extra": "mean: 225.95 msec\nrounds: 20"
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
          "id": "037f253357156c9329d4117408d42b5104a3d276",
          "message": "🐛 Fix: undefined variable in reference block (#45)\n\nCo-authored-by: Chris Sewell <chrisj_sewell@hotmail.com>",
          "timestamp": "2020-09-04T14:22:12+01:00",
          "url": "https://github.com/executablebooks/markdown-it-py/commit/037f253357156c9329d4117408d42b5104a3d276",
          "distinct": true,
          "tree_id": "5e2aeed56c6838964421fdafcc0bae2a04233b21"
        },
        "date": 1599225908550,
        "benches": [
          {
            "name": "benchmarking/bench_packages.py::test_markdown_it_py",
            "value": 4.630431411337575,
            "unit": "iter/sec",
            "range": "stddev: 0.0056698",
            "group": "packages",
            "extra": "mean: 215.96 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_mistune",
            "value": 13.351598881369764,
            "unit": "iter/sec",
            "range": "stddev: 0.0024873",
            "group": "packages",
            "extra": "mean: 74.897 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_commonmark_py",
            "value": 2.265650377576406,
            "unit": "iter/sec",
            "range": "stddev: 0.015217",
            "group": "packages",
            "extra": "mean: 441.37 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_pymarkdown",
            "value": 0.9834804800485382,
            "unit": "iter/sec",
            "range": "stddev: 0.0083890",
            "group": "packages",
            "extra": "mean: 1.0168 sec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_pymarkdown_extra",
            "value": 0.8626749903846114,
            "unit": "iter/sec",
            "range": "stddev: 0.0070327",
            "group": "packages",
            "extra": "mean: 1.1592 sec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_mistletoe",
            "value": 4.225298547495115,
            "unit": "iter/sec",
            "range": "stddev: 0.0070748",
            "group": "packages",
            "extra": "mean: 236.67 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_panflute",
            "value": 1.0317602716836813,
            "unit": "iter/sec",
            "range": "stddev: 0.0096871",
            "group": "packages",
            "extra": "mean: 969.22 msec\nrounds: 20"
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
          "id": "893f2cf2adda732b9112056cf8a12dd0473c137f",
          "message": "🚀 RELEASE: v0.5.3",
          "timestamp": "2020-09-04T14:26:15+01:00",
          "url": "https://github.com/executablebooks/markdown-it-py/commit/893f2cf2adda732b9112056cf8a12dd0473c137f",
          "distinct": true,
          "tree_id": "f84e1744e92d1d8f44bc73893d487ddd75b1cc18"
        },
        "date": 1599226068336,
        "benches": [
          {
            "name": "benchmarking/bench_plugins.py::test_base",
            "value": 4.614101476710697,
            "unit": "iter/sec",
            "range": "stddev: 0.010778",
            "group": "plugins",
            "extra": "mean: 216.73 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_table",
            "value": 4.690700439624209,
            "unit": "iter/sec",
            "range": "stddev: 0.0097380",
            "group": "plugins",
            "extra": "mean: 213.19 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_amsmath",
            "value": 3.350336573991308,
            "unit": "iter/sec",
            "range": "stddev: 0.0087763",
            "group": "plugins",
            "extra": "mean: 298.48 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_container",
            "value": 4.519317825740776,
            "unit": "iter/sec",
            "range": "stddev: 0.012403",
            "group": "plugins",
            "extra": "mean: 221.27 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_deflist",
            "value": 4.54415523618058,
            "unit": "iter/sec",
            "range": "stddev: 0.016410",
            "group": "plugins",
            "extra": "mean: 220.06 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_footnote",
            "value": 4.338946947043564,
            "unit": "iter/sec",
            "range": "stddev: 0.0078077",
            "group": "plugins",
            "extra": "mean: 230.47 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_front_matter",
            "value": 4.627121115177831,
            "unit": "iter/sec",
            "range": "stddev: 0.010374",
            "group": "plugins",
            "extra": "mean: 216.12 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_texmath",
            "value": 4.33986181125305,
            "unit": "iter/sec",
            "range": "stddev: 0.0076399",
            "group": "plugins",
            "extra": "mean: 230.42 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_dollarmath",
            "value": 4.565740226822922,
            "unit": "iter/sec",
            "range": "stddev: 0.0091502",
            "group": "plugins",
            "extra": "mean: 219.02 msec\nrounds: 20"
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
          "id": "893f2cf2adda732b9112056cf8a12dd0473c137f",
          "message": "🚀 RELEASE: v0.5.3",
          "timestamp": "2020-09-04T14:26:15+01:00",
          "url": "https://github.com/executablebooks/markdown-it-py/commit/893f2cf2adda732b9112056cf8a12dd0473c137f",
          "distinct": true,
          "tree_id": "f84e1744e92d1d8f44bc73893d487ddd75b1cc18"
        },
        "date": 1599226136136,
        "benches": [
          {
            "name": "benchmarking/bench_packages.py::test_markdown_it_py",
            "value": 4.451577164987834,
            "unit": "iter/sec",
            "range": "stddev: 0.0093100",
            "group": "packages",
            "extra": "mean: 224.64 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_mistune",
            "value": 12.868248727512603,
            "unit": "iter/sec",
            "range": "stddev: 0.0038665",
            "group": "packages",
            "extra": "mean: 77.711 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_commonmark_py",
            "value": 2.27221724851978,
            "unit": "iter/sec",
            "range": "stddev: 0.024795",
            "group": "packages",
            "extra": "mean: 440.10 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_pymarkdown",
            "value": 0.9731410058353744,
            "unit": "iter/sec",
            "range": "stddev: 0.015087",
            "group": "packages",
            "extra": "mean: 1.0276 sec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_pymarkdown_extra",
            "value": 0.8510927464419554,
            "unit": "iter/sec",
            "range": "stddev: 0.021718",
            "group": "packages",
            "extra": "mean: 1.1750 sec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_mistletoe",
            "value": 4.0624476602495765,
            "unit": "iter/sec",
            "range": "stddev: 0.011218",
            "group": "packages",
            "extra": "mean: 246.16 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_panflute",
            "value": 0.9202929413321941,
            "unit": "iter/sec",
            "range": "stddev: 0.015796",
            "group": "packages",
            "extra": "mean: 1.0866 sec\nrounds: 20"
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
          "id": "31f426bd9649a4f9ad4753e2aa2060d33de5bd9f",
          "message": "✨ NEW: Add anchors_plugin for headers (#46)",
          "timestamp": "2020-09-08T01:58:37+01:00",
          "url": "https://github.com/executablebooks/markdown-it-py/commit/31f426bd9649a4f9ad4753e2aa2060d33de5bd9f",
          "distinct": true,
          "tree_id": "d4eefe81edde2becffc6647065fd042053b37fa2"
        },
        "date": 1599526801308,
        "benches": [
          {
            "name": "benchmarking/bench_plugins.py::test_base",
            "value": 4.540381318399339,
            "unit": "iter/sec",
            "range": "stddev: 0.0060011",
            "group": "plugins",
            "extra": "mean: 220.25 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_table",
            "value": 4.474877475583727,
            "unit": "iter/sec",
            "range": "stddev: 0.0065776",
            "group": "plugins",
            "extra": "mean: 223.47 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_amsmath",
            "value": 3.710217815571774,
            "unit": "iter/sec",
            "range": "stddev: 0.0074924",
            "group": "plugins",
            "extra": "mean: 269.53 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_container",
            "value": 4.498173553176424,
            "unit": "iter/sec",
            "range": "stddev: 0.0069700",
            "group": "plugins",
            "extra": "mean: 222.31 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_deflist",
            "value": 4.533236154229062,
            "unit": "iter/sec",
            "range": "stddev: 0.0059469",
            "group": "plugins",
            "extra": "mean: 220.59 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_footnote",
            "value": 4.507956727210026,
            "unit": "iter/sec",
            "range": "stddev: 0.0067925",
            "group": "plugins",
            "extra": "mean: 221.83 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_front_matter",
            "value": 4.535987590905914,
            "unit": "iter/sec",
            "range": "stddev: 0.0059920",
            "group": "plugins",
            "extra": "mean: 220.46 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_texmath",
            "value": 4.400798408425966,
            "unit": "iter/sec",
            "range": "stddev: 0.0075259",
            "group": "plugins",
            "extra": "mean: 227.23 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_dollarmath",
            "value": 4.490982159245934,
            "unit": "iter/sec",
            "range": "stddev: 0.0075021",
            "group": "plugins",
            "extra": "mean: 222.67 msec\nrounds: 20"
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
          "id": "31f426bd9649a4f9ad4753e2aa2060d33de5bd9f",
          "message": "✨ NEW: Add anchors_plugin for headers (#46)",
          "timestamp": "2020-09-08T01:58:37+01:00",
          "url": "https://github.com/executablebooks/markdown-it-py/commit/31f426bd9649a4f9ad4753e2aa2060d33de5bd9f",
          "distinct": true,
          "tree_id": "d4eefe81edde2becffc6647065fd042053b37fa2"
        },
        "date": 1599526889431,
        "benches": [
          {
            "name": "benchmarking/bench_packages.py::test_markdown_it_py",
            "value": 4.453397772057449,
            "unit": "iter/sec",
            "range": "stddev: 0.0061763",
            "group": "packages",
            "extra": "mean: 224.55 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_mistune",
            "value": 10.87388348473119,
            "unit": "iter/sec",
            "range": "stddev: 0.0044030",
            "group": "packages",
            "extra": "mean: 91.963 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_commonmark_py",
            "value": 1.5259236954493407,
            "unit": "iter/sec",
            "range": "stddev: 0.016105",
            "group": "packages",
            "extra": "mean: 655.34 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_pymarkdown",
            "value": 0.9149558216136547,
            "unit": "iter/sec",
            "range": "stddev: 0.012267",
            "group": "packages",
            "extra": "mean: 1.0929 sec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_pymarkdown_extra",
            "value": 0.8266404936855763,
            "unit": "iter/sec",
            "range": "stddev: 0.0081317",
            "group": "packages",
            "extra": "mean: 1.2097 sec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_mistletoe",
            "value": 3.938287047479627,
            "unit": "iter/sec",
            "range": "stddev: 0.0068397",
            "group": "packages",
            "extra": "mean: 253.92 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_panflute",
            "value": 0.9843875794227366,
            "unit": "iter/sec",
            "range": "stddev: 0.0099202",
            "group": "packages",
            "extra": "mean: 1.0159 sec\nrounds: 20"
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
          "id": "9c8eb378b0f069994a795a2a7bf61cee6d7c9a01",
          "message": "🚀 RELEASE: v0.5.4",
          "timestamp": "2020-09-08T02:01:47+01:00",
          "url": "https://github.com/executablebooks/markdown-it-py/commit/9c8eb378b0f069994a795a2a7bf61cee6d7c9a01",
          "distinct": true,
          "tree_id": "2398bb3ed7d2b376788b7798975cd27f5d8d8f21"
        },
        "date": 1599526998434,
        "benches": [
          {
            "name": "benchmarking/bench_plugins.py::test_base",
            "value": 4.342155826134166,
            "unit": "iter/sec",
            "range": "stddev: 0.0071180",
            "group": "plugins",
            "extra": "mean: 230.30 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_table",
            "value": 4.24998599884617,
            "unit": "iter/sec",
            "range": "stddev: 0.0063071",
            "group": "plugins",
            "extra": "mean: 235.29 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_amsmath",
            "value": 3.282806671017699,
            "unit": "iter/sec",
            "range": "stddev: 0.010751",
            "group": "plugins",
            "extra": "mean: 304.62 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_container",
            "value": 4.227407352797258,
            "unit": "iter/sec",
            "range": "stddev: 0.0094981",
            "group": "plugins",
            "extra": "mean: 236.55 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_deflist",
            "value": 4.308411667412996,
            "unit": "iter/sec",
            "range": "stddev: 0.0052630",
            "group": "plugins",
            "extra": "mean: 232.10 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_footnote",
            "value": 4.278680513308021,
            "unit": "iter/sec",
            "range": "stddev: 0.0075726",
            "group": "plugins",
            "extra": "mean: 233.72 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_front_matter",
            "value": 4.285296306483189,
            "unit": "iter/sec",
            "range": "stddev: 0.0058380",
            "group": "plugins",
            "extra": "mean: 233.36 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_texmath",
            "value": 4.176901344564823,
            "unit": "iter/sec",
            "range": "stddev: 0.0082768",
            "group": "plugins",
            "extra": "mean: 239.41 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_dollarmath",
            "value": 4.2970166109519665,
            "unit": "iter/sec",
            "range": "stddev: 0.0061609",
            "group": "plugins",
            "extra": "mean: 232.72 msec\nrounds: 20"
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
          "id": "9c8eb378b0f069994a795a2a7bf61cee6d7c9a01",
          "message": "🚀 RELEASE: v0.5.4",
          "timestamp": "2020-09-08T02:01:47+01:00",
          "url": "https://github.com/executablebooks/markdown-it-py/commit/9c8eb378b0f069994a795a2a7bf61cee6d7c9a01",
          "distinct": true,
          "tree_id": "2398bb3ed7d2b376788b7798975cd27f5d8d8f21"
        },
        "date": 1599527046425,
        "benches": [
          {
            "name": "benchmarking/bench_packages.py::test_markdown_it_py",
            "value": 5.08220923337561,
            "unit": "iter/sec",
            "range": "stddev: 0.0080880",
            "group": "packages",
            "extra": "mean: 196.76 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_mistune",
            "value": 15.009815668957199,
            "unit": "iter/sec",
            "range": "stddev: 0.0029999",
            "group": "packages",
            "extra": "mean: 66.623 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_commonmark_py",
            "value": 2.4834542474598535,
            "unit": "iter/sec",
            "range": "stddev: 0.018687",
            "group": "packages",
            "extra": "mean: 402.66 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_pymarkdown",
            "value": 1.1377187176644576,
            "unit": "iter/sec",
            "range": "stddev: 0.014414",
            "group": "packages",
            "extra": "mean: 878.95 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_pymarkdown_extra",
            "value": 1.0031378331987248,
            "unit": "iter/sec",
            "range": "stddev: 0.018790",
            "group": "packages",
            "extra": "mean: 996.87 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_mistletoe",
            "value": 4.873076337369734,
            "unit": "iter/sec",
            "range": "stddev: 0.0080407",
            "group": "packages",
            "extra": "mean: 205.21 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_panflute",
            "value": 1.1505636542423345,
            "unit": "iter/sec",
            "range": "stddev: 0.016067",
            "group": "packages",
            "extra": "mean: 869.14 msec\nrounds: 20"
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
          "id": "00df400cfe100a962a2eb8c30e44f65ebc7f82a9",
          "message": "👌 IMPROVE: Apply upstream fix to deflist (#47)\n\nApply upstream fix from https://github.com/markdown-it/markdown-it-deflist/issues/8",
          "timestamp": "2020-09-10T17:51:36+01:00",
          "url": "https://github.com/executablebooks/markdown-it-py/commit/00df400cfe100a962a2eb8c30e44f65ebc7f82a9",
          "distinct": true,
          "tree_id": "a2d1bea1027f203825e1d2a6c6dcd595d3f7469f"
        },
        "date": 1599756791476,
        "benches": [
          {
            "name": "benchmarking/bench_plugins.py::test_base",
            "value": 4.166514515104818,
            "unit": "iter/sec",
            "range": "stddev: 0.0070344",
            "group": "plugins",
            "extra": "mean: 240.01 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_table",
            "value": 4.116111275964703,
            "unit": "iter/sec",
            "range": "stddev: 0.0065685",
            "group": "plugins",
            "extra": "mean: 242.95 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_amsmath",
            "value": 3.152909828757348,
            "unit": "iter/sec",
            "range": "stddev: 0.010302",
            "group": "plugins",
            "extra": "mean: 317.17 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_container",
            "value": 4.030769724736981,
            "unit": "iter/sec",
            "range": "stddev: 0.011139",
            "group": "plugins",
            "extra": "mean: 248.09 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_deflist",
            "value": 4.040199074167271,
            "unit": "iter/sec",
            "range": "stddev: 0.0089604",
            "group": "plugins",
            "extra": "mean: 247.51 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_footnote",
            "value": 3.9946199898729646,
            "unit": "iter/sec",
            "range": "stddev: 0.0099619",
            "group": "plugins",
            "extra": "mean: 250.34 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_front_matter",
            "value": 4.094945192856364,
            "unit": "iter/sec",
            "range": "stddev: 0.0075831",
            "group": "plugins",
            "extra": "mean: 244.20 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_texmath",
            "value": 3.9712944283021256,
            "unit": "iter/sec",
            "range": "stddev: 0.0064628",
            "group": "plugins",
            "extra": "mean: 251.81 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_dollarmath",
            "value": 4.127124099118594,
            "unit": "iter/sec",
            "range": "stddev: 0.0064702",
            "group": "plugins",
            "extra": "mean: 242.30 msec\nrounds: 20"
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
          "id": "00df400cfe100a962a2eb8c30e44f65ebc7f82a9",
          "message": "👌 IMPROVE: Apply upstream fix to deflist (#47)\n\nApply upstream fix from https://github.com/markdown-it/markdown-it-deflist/issues/8",
          "timestamp": "2020-09-10T17:51:36+01:00",
          "url": "https://github.com/executablebooks/markdown-it-py/commit/00df400cfe100a962a2eb8c30e44f65ebc7f82a9",
          "distinct": true,
          "tree_id": "a2d1bea1027f203825e1d2a6c6dcd595d3f7469f"
        },
        "date": 1599756843338,
        "benches": [
          {
            "name": "benchmarking/bench_packages.py::test_markdown_it_py",
            "value": 4.429283761077086,
            "unit": "iter/sec",
            "range": "stddev: 0.0062452",
            "group": "packages",
            "extra": "mean: 225.77 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_mistune",
            "value": 12.502867978185307,
            "unit": "iter/sec",
            "range": "stddev: 0.0050679",
            "group": "packages",
            "extra": "mean: 79.982 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_commonmark_py",
            "value": 2.2660020259145526,
            "unit": "iter/sec",
            "range": "stddev: 0.020175",
            "group": "packages",
            "extra": "mean: 441.31 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_pymarkdown",
            "value": 0.9977446622462016,
            "unit": "iter/sec",
            "range": "stddev: 0.016341",
            "group": "packages",
            "extra": "mean: 1.0023 sec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_pymarkdown_extra",
            "value": 0.8848311296596992,
            "unit": "iter/sec",
            "range": "stddev: 0.015413",
            "group": "packages",
            "extra": "mean: 1.1302 sec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_mistletoe",
            "value": 4.309842474576533,
            "unit": "iter/sec",
            "range": "stddev: 0.0076324",
            "group": "packages",
            "extra": "mean: 232.03 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_panflute",
            "value": 1.0161209512947948,
            "unit": "iter/sec",
            "range": "stddev: 0.023896",
            "group": "packages",
            "extra": "mean: 984.13 msec\nrounds: 20"
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
          "id": "42cc57e4095cc542900eaa3c6f0b110e44855575",
          "message": "Pre-commit improvements (#49)\n\n* Use upstream flake8 pre-commit hook\n\n* Run `pre-commit autoupdate`",
          "timestamp": "2020-09-21T01:34:52+01:00",
          "url": "https://github.com/executablebooks/markdown-it-py/commit/42cc57e4095cc542900eaa3c6f0b110e44855575",
          "distinct": true,
          "tree_id": "2563726c2163cacd57d44af25a560ec69c289d31"
        },
        "date": 1600648575350,
        "benches": [
          {
            "name": "benchmarking/bench_plugins.py::test_base",
            "value": 4.5741030730193435,
            "unit": "iter/sec",
            "range": "stddev: 0.0072964",
            "group": "plugins",
            "extra": "mean: 218.62 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_table",
            "value": 4.526480843237967,
            "unit": "iter/sec",
            "range": "stddev: 0.0058397",
            "group": "plugins",
            "extra": "mean: 220.92 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_amsmath",
            "value": 3.7569685920600877,
            "unit": "iter/sec",
            "range": "stddev: 0.0067173",
            "group": "plugins",
            "extra": "mean: 266.17 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_container",
            "value": 4.515410243328339,
            "unit": "iter/sec",
            "range": "stddev: 0.0072059",
            "group": "plugins",
            "extra": "mean: 221.46 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_deflist",
            "value": 4.565740053801433,
            "unit": "iter/sec",
            "range": "stddev: 0.0058609",
            "group": "plugins",
            "extra": "mean: 219.02 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_footnote",
            "value": 4.535409854710057,
            "unit": "iter/sec",
            "range": "stddev: 0.0065876",
            "group": "plugins",
            "extra": "mean: 220.49 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_front_matter",
            "value": 4.583286152890185,
            "unit": "iter/sec",
            "range": "stddev: 0.0058402",
            "group": "plugins",
            "extra": "mean: 218.18 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_texmath",
            "value": 4.433003656008492,
            "unit": "iter/sec",
            "range": "stddev: 0.0068096",
            "group": "plugins",
            "extra": "mean: 225.58 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_dollarmath",
            "value": 4.5169177574949515,
            "unit": "iter/sec",
            "range": "stddev: 0.0071256",
            "group": "plugins",
            "extra": "mean: 221.39 msec\nrounds: 20"
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
          "id": "42cc57e4095cc542900eaa3c6f0b110e44855575",
          "message": "Pre-commit improvements (#49)\n\n* Use upstream flake8 pre-commit hook\n\n* Run `pre-commit autoupdate`",
          "timestamp": "2020-09-21T01:34:52+01:00",
          "url": "https://github.com/executablebooks/markdown-it-py/commit/42cc57e4095cc542900eaa3c6f0b110e44855575",
          "distinct": true,
          "tree_id": "2563726c2163cacd57d44af25a560ec69c289d31"
        },
        "date": 1600648669850,
        "benches": [
          {
            "name": "benchmarking/bench_packages.py::test_markdown_it_py",
            "value": 4.502781727031938,
            "unit": "iter/sec",
            "range": "stddev: 0.0062736",
            "group": "packages",
            "extra": "mean: 222.08 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_mistune",
            "value": 12.650785255019162,
            "unit": "iter/sec",
            "range": "stddev: 0.0037715",
            "group": "packages",
            "extra": "mean: 79.046 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_commonmark_py",
            "value": 2.318708423276952,
            "unit": "iter/sec",
            "range": "stddev: 0.019096",
            "group": "packages",
            "extra": "mean: 431.27 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_pymarkdown",
            "value": 0.9651456693955882,
            "unit": "iter/sec",
            "range": "stddev: 0.020928",
            "group": "packages",
            "extra": "mean: 1.0361 sec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_pymarkdown_extra",
            "value": 0.8547696868197894,
            "unit": "iter/sec",
            "range": "stddev: 0.024005",
            "group": "packages",
            "extra": "mean: 1.1699 sec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_mistletoe",
            "value": 4.1156086673316645,
            "unit": "iter/sec",
            "range": "stddev: 0.0084532",
            "group": "packages",
            "extra": "mean: 242.98 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_panflute",
            "value": 0.984404156126901,
            "unit": "iter/sec",
            "range": "stddev: 0.017382",
            "group": "packages",
            "extra": "mean: 1.0158 sec\nrounds: 20"
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
          "id": "c3247296415c69cb3083376a78c56e4da8249815",
          "message": "🔧 MAINTAIN: Pre-commit improvements (#49)\n\n* Use upstream flake8 pre-commit hook\n\n* Run `pre-commit autoupdate`",
          "timestamp": "2020-09-21T01:41:59+01:00",
          "url": "https://github.com/executablebooks/markdown-it-py/commit/c3247296415c69cb3083376a78c56e4da8249815",
          "distinct": true,
          "tree_id": "2563726c2163cacd57d44af25a560ec69c289d31"
        },
        "date": 1600649107819,
        "benches": [
          {
            "name": "benchmarking/bench_plugins.py::test_base",
            "value": 4.505204905576412,
            "unit": "iter/sec",
            "range": "stddev: 0.0055425",
            "group": "plugins",
            "extra": "mean: 221.97 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_table",
            "value": 4.40944576603355,
            "unit": "iter/sec",
            "range": "stddev: 0.0055773",
            "group": "plugins",
            "extra": "mean: 226.79 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_amsmath",
            "value": 3.429960535148566,
            "unit": "iter/sec",
            "range": "stddev: 0.0081721",
            "group": "plugins",
            "extra": "mean: 291.55 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_container",
            "value": 4.448841314394564,
            "unit": "iter/sec",
            "range": "stddev: 0.0068122",
            "group": "plugins",
            "extra": "mean: 224.78 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_deflist",
            "value": 4.4788898554809204,
            "unit": "iter/sec",
            "range": "stddev: 0.0050587",
            "group": "plugins",
            "extra": "mean: 223.27 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_footnote",
            "value": 4.433638348535353,
            "unit": "iter/sec",
            "range": "stddev: 0.0059312",
            "group": "plugins",
            "extra": "mean: 225.55 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_front_matter",
            "value": 4.49934499615406,
            "unit": "iter/sec",
            "range": "stddev: 0.0046898",
            "group": "plugins",
            "extra": "mean: 222.25 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_texmath",
            "value": 4.371194791744568,
            "unit": "iter/sec",
            "range": "stddev: 0.0066578",
            "group": "plugins",
            "extra": "mean: 228.77 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_dollarmath",
            "value": 4.445315576144493,
            "unit": "iter/sec",
            "range": "stddev: 0.0068698",
            "group": "plugins",
            "extra": "mean: 224.96 msec\nrounds: 20"
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
          "id": "c3247296415c69cb3083376a78c56e4da8249815",
          "message": "🔧 MAINTAIN: Pre-commit improvements (#49)\n\n* Use upstream flake8 pre-commit hook\n\n* Run `pre-commit autoupdate`",
          "timestamp": "2020-09-21T01:41:59+01:00",
          "url": "https://github.com/executablebooks/markdown-it-py/commit/c3247296415c69cb3083376a78c56e4da8249815",
          "distinct": true,
          "tree_id": "2563726c2163cacd57d44af25a560ec69c289d31"
        },
        "date": 1600649160297,
        "benches": [
          {
            "name": "benchmarking/bench_packages.py::test_markdown_it_py",
            "value": 4.5998575023483665,
            "unit": "iter/sec",
            "range": "stddev: 0.0052327",
            "group": "packages",
            "extra": "mean: 217.40 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_mistune",
            "value": 13.247686650538622,
            "unit": "iter/sec",
            "range": "stddev: 0.0028931",
            "group": "packages",
            "extra": "mean: 75.485 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_commonmark_py",
            "value": 2.335340813119745,
            "unit": "iter/sec",
            "range": "stddev: 0.016214",
            "group": "packages",
            "extra": "mean: 428.20 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_pymarkdown",
            "value": 0.9793960209953594,
            "unit": "iter/sec",
            "range": "stddev: 0.021062",
            "group": "packages",
            "extra": "mean: 1.0210 sec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_pymarkdown_extra",
            "value": 0.8624076632652184,
            "unit": "iter/sec",
            "range": "stddev: 0.0064888",
            "group": "packages",
            "extra": "mean: 1.1595 sec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_mistletoe",
            "value": 4.172480439227084,
            "unit": "iter/sec",
            "range": "stddev: 0.0074979",
            "group": "packages",
            "extra": "mean: 239.67 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_panflute",
            "value": 1.0161487359548713,
            "unit": "iter/sec",
            "range": "stddev: 0.012119",
            "group": "packages",
            "extra": "mean: 984.11 msec\nrounds: 20"
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
          "id": "d9b6de9c8ff3bb0dc2b78d6eda8e09b3b88fa7b4",
          "message": "👌 IMPROVE: Add `store_labels` option\n\nAllows for storage of original reference label in link/image tokens metadata.\nThis can be useful for renderers.",
          "timestamp": "2020-09-27T10:10:14+01:00",
          "url": "https://github.com/executablebooks/markdown-it-py/commit/d9b6de9c8ff3bb0dc2b78d6eda8e09b3b88fa7b4",
          "distinct": true,
          "tree_id": "16749bd1e6cfb64f9ced7eda014c1632edd5369b"
        },
        "date": 1601197899134,
        "benches": [
          {
            "name": "benchmarking/bench_plugins.py::test_base",
            "value": 4.78401198656019,
            "unit": "iter/sec",
            "range": "stddev: 0.015478",
            "group": "plugins",
            "extra": "mean: 209.03 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_table",
            "value": 4.613907948697157,
            "unit": "iter/sec",
            "range": "stddev: 0.0073592",
            "group": "plugins",
            "extra": "mean: 216.74 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_amsmath",
            "value": 4.070730856998972,
            "unit": "iter/sec",
            "range": "stddev: 0.014967",
            "group": "plugins",
            "extra": "mean: 245.66 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_container",
            "value": 5.252762310431098,
            "unit": "iter/sec",
            "range": "stddev: 0.014902",
            "group": "plugins",
            "extra": "mean: 190.38 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_deflist",
            "value": 4.97996790356409,
            "unit": "iter/sec",
            "range": "stddev: 0.016141",
            "group": "plugins",
            "extra": "mean: 200.80 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_footnote",
            "value": 5.184785489111776,
            "unit": "iter/sec",
            "range": "stddev: 0.014855",
            "group": "plugins",
            "extra": "mean: 192.87 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_front_matter",
            "value": 5.449749608502054,
            "unit": "iter/sec",
            "range": "stddev: 0.012407",
            "group": "plugins",
            "extra": "mean: 183.49 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_texmath",
            "value": 5.469238657673512,
            "unit": "iter/sec",
            "range": "stddev: 0.011994",
            "group": "plugins",
            "extra": "mean: 182.84 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_dollarmath",
            "value": 5.551736976791715,
            "unit": "iter/sec",
            "range": "stddev: 0.012572",
            "group": "plugins",
            "extra": "mean: 180.12 msec\nrounds: 20"
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
          "id": "d9b6de9c8ff3bb0dc2b78d6eda8e09b3b88fa7b4",
          "message": "👌 IMPROVE: Add `store_labels` option\n\nAllows for storage of original reference label in link/image tokens metadata.\nThis can be useful for renderers.",
          "timestamp": "2020-09-27T10:10:14+01:00",
          "url": "https://github.com/executablebooks/markdown-it-py/commit/d9b6de9c8ff3bb0dc2b78d6eda8e09b3b88fa7b4",
          "distinct": true,
          "tree_id": "16749bd1e6cfb64f9ced7eda014c1632edd5369b"
        },
        "date": 1601197977457,
        "benches": [
          {
            "name": "benchmarking/bench_packages.py::test_markdown_it_py",
            "value": 4.73418416807639,
            "unit": "iter/sec",
            "range": "stddev: 0.010710",
            "group": "packages",
            "extra": "mean: 211.23 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_mistune",
            "value": 11.937012935516034,
            "unit": "iter/sec",
            "range": "stddev: 0.0039307",
            "group": "packages",
            "extra": "mean: 83.773 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_commonmark_py",
            "value": 1.5739115121280496,
            "unit": "iter/sec",
            "range": "stddev: 0.023981",
            "group": "packages",
            "extra": "mean: 635.36 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_pymarkdown",
            "value": 1.040515764427372,
            "unit": "iter/sec",
            "range": "stddev: 0.021377",
            "group": "packages",
            "extra": "mean: 961.06 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_pymarkdown_extra",
            "value": 0.916785402294477,
            "unit": "iter/sec",
            "range": "stddev: 0.035406",
            "group": "packages",
            "extra": "mean: 1.0908 sec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_mistletoe",
            "value": 4.332916594426334,
            "unit": "iter/sec",
            "range": "stddev: 0.0095021",
            "group": "packages",
            "extra": "mean: 230.79 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_panflute",
            "value": 1.0410344965709042,
            "unit": "iter/sec",
            "range": "stddev: 0.041610",
            "group": "packages",
            "extra": "mean: 960.58 msec\nrounds: 20"
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
          "id": "a4b828c58bb4dca8aa16c8636e961ad1e0202079",
          "message": "🚀 RELEASE: v0.5.5",
          "timestamp": "2020-09-27T10:16:49+01:00",
          "url": "https://github.com/executablebooks/markdown-it-py/commit/a4b828c58bb4dca8aa16c8636e961ad1e0202079",
          "distinct": true,
          "tree_id": "9f150ee6f08ff7902a2382e7795f0ac2ada3e92e"
        },
        "date": 1601198303600,
        "benches": [
          {
            "name": "benchmarking/bench_plugins.py::test_base",
            "value": 4.251569513387399,
            "unit": "iter/sec",
            "range": "stddev: 0.015206",
            "group": "plugins",
            "extra": "mean: 235.21 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_table",
            "value": 4.253623135269405,
            "unit": "iter/sec",
            "range": "stddev: 0.0094714",
            "group": "plugins",
            "extra": "mean: 235.09 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_amsmath",
            "value": 3.313887028358087,
            "unit": "iter/sec",
            "range": "stddev: 0.0072153",
            "group": "plugins",
            "extra": "mean: 301.76 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_container",
            "value": 4.277756035773789,
            "unit": "iter/sec",
            "range": "stddev: 0.011837",
            "group": "plugins",
            "extra": "mean: 233.77 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_deflist",
            "value": 4.325049254012258,
            "unit": "iter/sec",
            "range": "stddev: 0.0061815",
            "group": "plugins",
            "extra": "mean: 231.21 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_footnote",
            "value": 4.3390711092215595,
            "unit": "iter/sec",
            "range": "stddev: 0.0086080",
            "group": "plugins",
            "extra": "mean: 230.46 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_front_matter",
            "value": 4.370807413215213,
            "unit": "iter/sec",
            "range": "stddev: 0.0070479",
            "group": "plugins",
            "extra": "mean: 228.79 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_texmath",
            "value": 4.19838377850914,
            "unit": "iter/sec",
            "range": "stddev: 0.011158",
            "group": "plugins",
            "extra": "mean: 238.19 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_dollarmath",
            "value": 4.378124347333149,
            "unit": "iter/sec",
            "range": "stddev: 0.0077739",
            "group": "plugins",
            "extra": "mean: 228.41 msec\nrounds: 20"
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
          "id": "a4b828c58bb4dca8aa16c8636e961ad1e0202079",
          "message": "🚀 RELEASE: v0.5.5",
          "timestamp": "2020-09-27T10:16:49+01:00",
          "url": "https://github.com/executablebooks/markdown-it-py/commit/a4b828c58bb4dca8aa16c8636e961ad1e0202079",
          "distinct": true,
          "tree_id": "9f150ee6f08ff7902a2382e7795f0ac2ada3e92e"
        },
        "date": 1601198364033,
        "benches": [
          {
            "name": "benchmarking/bench_packages.py::test_markdown_it_py",
            "value": 4.580202302268421,
            "unit": "iter/sec",
            "range": "stddev: 0.017852",
            "group": "packages",
            "extra": "mean: 218.33 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_mistune",
            "value": 11.474783068365282,
            "unit": "iter/sec",
            "range": "stddev: 0.0057248",
            "group": "packages",
            "extra": "mean: 87.148 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_commonmark_py",
            "value": 1.5082822859479728,
            "unit": "iter/sec",
            "range": "stddev: 0.026981",
            "group": "packages",
            "extra": "mean: 663.01 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_pymarkdown",
            "value": 0.9497325818309915,
            "unit": "iter/sec",
            "range": "stddev: 0.038108",
            "group": "packages",
            "extra": "mean: 1.0529 sec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_pymarkdown_extra",
            "value": 0.9017568832643168,
            "unit": "iter/sec",
            "range": "stddev: 0.029098",
            "group": "packages",
            "extra": "mean: 1.1089 sec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_mistletoe",
            "value": 4.438583827130832,
            "unit": "iter/sec",
            "range": "stddev: 0.0061988",
            "group": "packages",
            "extra": "mean: 225.30 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_panflute",
            "value": 1.1034581515842286,
            "unit": "iter/sec",
            "range": "stddev: 0.014530",
            "group": "packages",
            "extra": "mean: 906.24 msec\nrounds: 20"
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
          "pythonVersion": "3.8.6"
        },
        "commit": {
          "id": "d14f91511338fd25635dbcf31b1a2e725ebeedbf",
          "message": "📚 DOCS: Improve documentation for CLI (#54)",
          "timestamp": "2020-10-08T07:19:54+02:00",
          "url": "https://github.com/executablebooks/markdown-it-py/commit/d14f91511338fd25635dbcf31b1a2e725ebeedbf",
          "distinct": true,
          "tree_id": "3a129506c17d2bc155d5f674465bfb9511887a7b"
        },
        "date": 1602134476324,
        "benches": [
          {
            "name": "benchmarking/bench_plugins.py::test_base",
            "value": 4.594634164577487,
            "unit": "iter/sec",
            "range": "stddev: 0.0075993",
            "group": "plugins",
            "extra": "mean: 217.65 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_table",
            "value": 4.52400716007101,
            "unit": "iter/sec",
            "range": "stddev: 0.0068063",
            "group": "plugins",
            "extra": "mean: 221.04 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_amsmath",
            "value": 3.7299779585531563,
            "unit": "iter/sec",
            "range": "stddev: 0.0066971",
            "group": "plugins",
            "extra": "mean: 268.10 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_container",
            "value": 4.498170153939941,
            "unit": "iter/sec",
            "range": "stddev: 0.0065024",
            "group": "plugins",
            "extra": "mean: 222.31 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_deflist",
            "value": 4.488548852656389,
            "unit": "iter/sec",
            "range": "stddev: 0.0066288",
            "group": "plugins",
            "extra": "mean: 222.79 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_footnote",
            "value": 4.536343882305717,
            "unit": "iter/sec",
            "range": "stddev: 0.0073223",
            "group": "plugins",
            "extra": "mean: 220.44 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_front_matter",
            "value": 4.649542390573321,
            "unit": "iter/sec",
            "range": "stddev: 0.0055994",
            "group": "plugins",
            "extra": "mean: 215.07 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_texmath",
            "value": 4.543831963714032,
            "unit": "iter/sec",
            "range": "stddev: 0.0072514",
            "group": "plugins",
            "extra": "mean: 220.08 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_dollarmath",
            "value": 4.64515559662049,
            "unit": "iter/sec",
            "range": "stddev: 0.0067181",
            "group": "plugins",
            "extra": "mean: 215.28 msec\nrounds: 20"
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
          "pythonVersion": "3.8.6"
        },
        "commit": {
          "id": "803a121a3918a4c69949e7a3fbaa85e9d418e210",
          "message": "🧪 Make `read_fixture_file` always read UTF-8 (#57)",
          "timestamp": "2020-10-10T18:42:46+02:00",
          "url": "https://github.com/executablebooks/markdown-it-py/commit/803a121a3918a4c69949e7a3fbaa85e9d418e210",
          "distinct": true,
          "tree_id": "538a8d43c4e89bfedb829057ace5e2aae4f357b1"
        },
        "date": 1602348233400,
        "benches": [
          {
            "name": "benchmarking/bench_plugins.py::test_base",
            "value": 6.055529227846938,
            "unit": "iter/sec",
            "range": "stddev: 0.0063851",
            "group": "plugins",
            "extra": "mean: 165.14 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_table",
            "value": 5.889728332693871,
            "unit": "iter/sec",
            "range": "stddev: 0.0089609",
            "group": "plugins",
            "extra": "mean: 169.79 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_amsmath",
            "value": 4.80795290105102,
            "unit": "iter/sec",
            "range": "stddev: 0.010732",
            "group": "plugins",
            "extra": "mean: 207.99 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_container",
            "value": 5.921315023356907,
            "unit": "iter/sec",
            "range": "stddev: 0.0085324",
            "group": "plugins",
            "extra": "mean: 168.88 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_deflist",
            "value": 5.820692721938802,
            "unit": "iter/sec",
            "range": "stddev: 0.010373",
            "group": "plugins",
            "extra": "mean: 171.80 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_footnote",
            "value": 5.891871710479584,
            "unit": "iter/sec",
            "range": "stddev: 0.0082700",
            "group": "plugins",
            "extra": "mean: 169.73 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_front_matter",
            "value": 5.980068048079393,
            "unit": "iter/sec",
            "range": "stddev: 0.0077187",
            "group": "plugins",
            "extra": "mean: 167.22 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_texmath",
            "value": 5.772736655444879,
            "unit": "iter/sec",
            "range": "stddev: 0.0088973",
            "group": "plugins",
            "extra": "mean: 173.23 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_dollarmath",
            "value": 6.005767108133051,
            "unit": "iter/sec",
            "range": "stddev: 0.0089527",
            "group": "plugins",
            "extra": "mean: 166.51 msec\nrounds: 20"
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
          "pythonVersion": "3.8.6"
        },
        "commit": {
          "id": "d14f91511338fd25635dbcf31b1a2e725ebeedbf",
          "message": "📚 DOCS: Improve documentation for CLI (#54)",
          "timestamp": "2020-10-08T07:19:54+02:00",
          "url": "https://github.com/executablebooks/markdown-it-py/commit/d14f91511338fd25635dbcf31b1a2e725ebeedbf",
          "distinct": true,
          "tree_id": "3a129506c17d2bc155d5f674465bfb9511887a7b"
        },
        "date": 1602348454069,
        "benches": [
          {
            "name": "benchmarking/bench_plugins.py::test_base",
            "value": 4.49743531311413,
            "unit": "iter/sec",
            "range": "stddev: 0.010552",
            "group": "plugins",
            "extra": "mean: 222.35 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_table",
            "value": 4.407367819172778,
            "unit": "iter/sec",
            "range": "stddev: 0.0082245",
            "group": "plugins",
            "extra": "mean: 226.89 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_amsmath",
            "value": 3.3103844407879457,
            "unit": "iter/sec",
            "range": "stddev: 0.0096259",
            "group": "plugins",
            "extra": "mean: 302.08 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_container",
            "value": 4.392407469193438,
            "unit": "iter/sec",
            "range": "stddev: 0.011108",
            "group": "plugins",
            "extra": "mean: 227.67 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_deflist",
            "value": 4.302063897903714,
            "unit": "iter/sec",
            "range": "stddev: 0.011096",
            "group": "plugins",
            "extra": "mean: 232.45 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_footnote",
            "value": 4.55246803943399,
            "unit": "iter/sec",
            "range": "stddev: 0.0056753",
            "group": "plugins",
            "extra": "mean: 219.66 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_front_matter",
            "value": 4.545662404132853,
            "unit": "iter/sec",
            "range": "stddev: 0.0085067",
            "group": "plugins",
            "extra": "mean: 219.99 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_texmath",
            "value": 4.2929284317418395,
            "unit": "iter/sec",
            "range": "stddev: 0.012870",
            "group": "plugins",
            "extra": "mean: 232.94 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_dollarmath",
            "value": 4.523296536910762,
            "unit": "iter/sec",
            "range": "stddev: 0.0085480",
            "group": "plugins",
            "extra": "mean: 221.08 msec\nrounds: 20"
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
          "pythonVersion": "3.8.6"
        },
        "commit": {
          "id": "ff77965465d4089af8503374a2183dae53bc3d1f",
          "message": "🧪 Pin benchmark package",
          "timestamp": "2020-10-10T18:51:22+02:00",
          "url": "https://github.com/executablebooks/markdown-it-py/commit/ff77965465d4089af8503374a2183dae53bc3d1f",
          "distinct": true,
          "tree_id": "401387b23aa223aa7c16fff4e25400df03a99522"
        },
        "date": 1602348773110,
        "benches": [
          {
            "name": "benchmarking/bench_plugins.py::test_base",
            "value": 4.69943869711508,
            "unit": "iter/sec",
            "range": "stddev: 0.0063284",
            "group": "plugins",
            "extra": "mean: 212.79 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_table",
            "value": 4.603759635722528,
            "unit": "iter/sec",
            "range": "stddev: 0.0061604",
            "group": "plugins",
            "extra": "mean: 217.21 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_amsmath",
            "value": 3.8375775547727975,
            "unit": "iter/sec",
            "range": "stddev: 0.0067211",
            "group": "plugins",
            "extra": "mean: 260.58 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_container",
            "value": 4.607492779122418,
            "unit": "iter/sec",
            "range": "stddev: 0.0062839",
            "group": "plugins",
            "extra": "mean: 217.04 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_deflist",
            "value": 4.688395857581509,
            "unit": "iter/sec",
            "range": "stddev: 0.0056321",
            "group": "plugins",
            "extra": "mean: 213.29 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_footnote",
            "value": 4.630001005011221,
            "unit": "iter/sec",
            "range": "stddev: 0.0060388",
            "group": "plugins",
            "extra": "mean: 215.98 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_front_matter",
            "value": 4.603548431657791,
            "unit": "iter/sec",
            "range": "stddev: 0.0065545",
            "group": "plugins",
            "extra": "mean: 217.22 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_texmath",
            "value": 4.484937660902625,
            "unit": "iter/sec",
            "range": "stddev: 0.0065500",
            "group": "plugins",
            "extra": "mean: 222.97 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_dollarmath",
            "value": 4.589111677449695,
            "unit": "iter/sec",
            "range": "stddev: 0.0063740",
            "group": "plugins",
            "extra": "mean: 217.91 msec\nrounds: 20"
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
          "pythonVersion": "3.8.6"
        },
        "commit": {
          "id": "ff77965465d4089af8503374a2183dae53bc3d1f",
          "message": "🧪 Pin benchmark package",
          "timestamp": "2020-10-10T18:51:22+02:00",
          "url": "https://github.com/executablebooks/markdown-it-py/commit/ff77965465d4089af8503374a2183dae53bc3d1f",
          "distinct": true,
          "tree_id": "401387b23aa223aa7c16fff4e25400df03a99522"
        },
        "date": 1602348829549,
        "benches": [
          {
            "name": "benchmarking/bench_packages.py::test_markdown_it_py",
            "value": 4.485460835992859,
            "unit": "iter/sec",
            "range": "stddev: 0.0078208",
            "group": "packages",
            "extra": "mean: 222.94 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_mistune",
            "value": 12.883538711992593,
            "unit": "iter/sec",
            "range": "stddev: 0.0039654",
            "group": "packages",
            "extra": "mean: 77.618 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_commonmark_py",
            "value": 2.146178051470529,
            "unit": "iter/sec",
            "range": "stddev: 0.016414",
            "group": "packages",
            "extra": "mean: 465.94 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_pymarkdown",
            "value": 0.966544101852604,
            "unit": "iter/sec",
            "range": "stddev: 0.016107",
            "group": "packages",
            "extra": "mean: 1.0346 sec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_pymarkdown_extra",
            "value": 0.8733578388526987,
            "unit": "iter/sec",
            "range": "stddev: 0.023894",
            "group": "packages",
            "extra": "mean: 1.1450 sec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_mistletoe",
            "value": 4.021937574845718,
            "unit": "iter/sec",
            "range": "stddev: 0.012067",
            "group": "packages",
            "extra": "mean: 248.64 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_panflute",
            "value": 0.9794369993384366,
            "unit": "iter/sec",
            "range": "stddev: 0.013225",
            "group": "packages",
            "extra": "mean: 1.0210 sec\nrounds: 20"
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
          "pythonVersion": "3.8.6"
        },
        "commit": {
          "id": "4e1150eb778253b7c0f2e4dfa0ae53ddf3f94a4e",
          "message": "🐛 FIX: blank lines after block quotes (#61)",
          "timestamp": "2020-10-21T01:48:04+02:00",
          "url": "https://github.com/executablebooks/markdown-it-py/commit/4e1150eb778253b7c0f2e4dfa0ae53ddf3f94a4e",
          "distinct": true,
          "tree_id": "2a723800a0a4a80be5fbbe92c1a4be8d0c1e6c03"
        },
        "date": 1603237770701,
        "benches": [
          {
            "name": "benchmarking/bench_plugins.py::test_base",
            "value": 4.305983942348605,
            "unit": "iter/sec",
            "range": "stddev: 0.0077595",
            "group": "plugins",
            "extra": "mean: 232.23 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_table",
            "value": 4.214096563161819,
            "unit": "iter/sec",
            "range": "stddev: 0.0093828",
            "group": "plugins",
            "extra": "mean: 237.30 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_amsmath",
            "value": 3.2634922910165365,
            "unit": "iter/sec",
            "range": "stddev: 0.012217",
            "group": "plugins",
            "extra": "mean: 306.42 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_container",
            "value": 4.244908618027945,
            "unit": "iter/sec",
            "range": "stddev: 0.0083314",
            "group": "plugins",
            "extra": "mean: 235.58 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_deflist",
            "value": 4.377476206418541,
            "unit": "iter/sec",
            "range": "stddev: 0.0053492",
            "group": "plugins",
            "extra": "mean: 228.44 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_footnote",
            "value": 4.234227352584784,
            "unit": "iter/sec",
            "range": "stddev: 0.010001",
            "group": "plugins",
            "extra": "mean: 236.17 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_front_matter",
            "value": 4.318928409250472,
            "unit": "iter/sec",
            "range": "stddev: 0.0070650",
            "group": "plugins",
            "extra": "mean: 231.54 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_texmath",
            "value": 4.181618523713131,
            "unit": "iter/sec",
            "range": "stddev: 0.0083038",
            "group": "plugins",
            "extra": "mean: 239.14 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_dollarmath",
            "value": 4.26950870395953,
            "unit": "iter/sec",
            "range": "stddev: 0.0091493",
            "group": "plugins",
            "extra": "mean: 234.22 msec\nrounds: 20"
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
          "pythonVersion": "3.8.6"
        },
        "commit": {
          "id": "4e1150eb778253b7c0f2e4dfa0ae53ddf3f94a4e",
          "message": "🐛 FIX: blank lines after block quotes (#61)",
          "timestamp": "2020-10-21T01:48:04+02:00",
          "url": "https://github.com/executablebooks/markdown-it-py/commit/4e1150eb778253b7c0f2e4dfa0ae53ddf3f94a4e",
          "distinct": true,
          "tree_id": "2a723800a0a4a80be5fbbe92c1a4be8d0c1e6c03"
        },
        "date": 1603237852971,
        "benches": [
          {
            "name": "benchmarking/bench_packages.py::test_markdown_it_py",
            "value": 4.260551679306619,
            "unit": "iter/sec",
            "range": "stddev: 0.010858",
            "group": "packages",
            "extra": "mean: 234.71 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_mistune",
            "value": 12.960339925766021,
            "unit": "iter/sec",
            "range": "stddev: 0.0047101",
            "group": "packages",
            "extra": "mean: 77.158 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_commonmark_py",
            "value": 2.1630268133065935,
            "unit": "iter/sec",
            "range": "stddev: 0.019633",
            "group": "packages",
            "extra": "mean: 462.32 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_pymarkdown",
            "value": 0.9837427127871506,
            "unit": "iter/sec",
            "range": "stddev: 0.020244",
            "group": "packages",
            "extra": "mean: 1.0165 sec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_pymarkdown_extra",
            "value": 0.900443452629152,
            "unit": "iter/sec",
            "range": "stddev: 0.025130",
            "group": "packages",
            "extra": "mean: 1.1106 sec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_mistletoe",
            "value": 4.229061290697119,
            "unit": "iter/sec",
            "range": "stddev: 0.0091304",
            "group": "packages",
            "extra": "mean: 236.46 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_panflute",
            "value": 0.991403446974093,
            "unit": "iter/sec",
            "range": "stddev: 0.036793",
            "group": "packages",
            "extra": "mean: 1.0087 sec\nrounds: 20"
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
          "pythonVersion": "3.8.6"
        },
        "commit": {
          "id": "c8f82bc07d4806716dcd7b8c85d1def34a16d8ff",
          "message": "👌 IMPROVE: Use `re.sub()` instead of `re.subn()[0]` (#58)",
          "timestamp": "2020-10-21T01:53:58+02:00",
          "url": "https://github.com/executablebooks/markdown-it-py/commit/c8f82bc07d4806716dcd7b8c85d1def34a16d8ff",
          "distinct": true,
          "tree_id": "bf27cf33fe6762fb2b791a7704865ce777f646dd"
        },
        "date": 1603238120704,
        "benches": [
          {
            "name": "benchmarking/bench_plugins.py::test_base",
            "value": 4.572189706723008,
            "unit": "iter/sec",
            "range": "stddev: 0.0056442",
            "group": "plugins",
            "extra": "mean: 218.71 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_table",
            "value": 4.48424830452179,
            "unit": "iter/sec",
            "range": "stddev: 0.0056377",
            "group": "plugins",
            "extra": "mean: 223.00 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_amsmath",
            "value": 3.7349709012459846,
            "unit": "iter/sec",
            "range": "stddev: 0.0064683",
            "group": "plugins",
            "extra": "mean: 267.74 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_container",
            "value": 4.480534762648853,
            "unit": "iter/sec",
            "range": "stddev: 0.0083718",
            "group": "plugins",
            "extra": "mean: 223.19 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_deflist",
            "value": 4.5099481643018855,
            "unit": "iter/sec",
            "range": "stddev: 0.0056672",
            "group": "plugins",
            "extra": "mean: 221.73 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_footnote",
            "value": 4.479308988684421,
            "unit": "iter/sec",
            "range": "stddev: 0.0069889",
            "group": "plugins",
            "extra": "mean: 223.25 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_front_matter",
            "value": 4.524931623464239,
            "unit": "iter/sec",
            "range": "stddev: 0.0057607",
            "group": "plugins",
            "extra": "mean: 221.00 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_texmath",
            "value": 4.431875680469618,
            "unit": "iter/sec",
            "range": "stddev: 0.0060836",
            "group": "plugins",
            "extra": "mean: 225.64 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_dollarmath",
            "value": 4.47837408938505,
            "unit": "iter/sec",
            "range": "stddev: 0.0072373",
            "group": "plugins",
            "extra": "mean: 223.30 msec\nrounds: 20"
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
          "pythonVersion": "3.8.6"
        },
        "commit": {
          "id": "c8f82bc07d4806716dcd7b8c85d1def34a16d8ff",
          "message": "👌 IMPROVE: Use `re.sub()` instead of `re.subn()[0]` (#58)",
          "timestamp": "2020-10-21T01:53:58+02:00",
          "url": "https://github.com/executablebooks/markdown-it-py/commit/c8f82bc07d4806716dcd7b8c85d1def34a16d8ff",
          "distinct": true,
          "tree_id": "bf27cf33fe6762fb2b791a7704865ce777f646dd"
        },
        "date": 1603238186018,
        "benches": [
          {
            "name": "benchmarking/bench_packages.py::test_markdown_it_py",
            "value": 4.587976793390308,
            "unit": "iter/sec",
            "range": "stddev: 0.0055960",
            "group": "packages",
            "extra": "mean: 217.96 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_mistune",
            "value": 13.221710750331523,
            "unit": "iter/sec",
            "range": "stddev: 0.0030159",
            "group": "packages",
            "extra": "mean: 75.633 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_commonmark_py",
            "value": 2.2247894272598496,
            "unit": "iter/sec",
            "range": "stddev: 0.016350",
            "group": "packages",
            "extra": "mean: 449.48 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_pymarkdown",
            "value": 0.9844827554863025,
            "unit": "iter/sec",
            "range": "stddev: 0.011158",
            "group": "packages",
            "extra": "mean: 1.0158 sec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_pymarkdown_extra",
            "value": 0.8946076612863204,
            "unit": "iter/sec",
            "range": "stddev: 0.0097347",
            "group": "packages",
            "extra": "mean: 1.1178 sec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_mistletoe",
            "value": 4.10340907066792,
            "unit": "iter/sec",
            "range": "stddev: 0.0077876",
            "group": "packages",
            "extra": "mean: 243.70 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_panflute",
            "value": 1.0002924628595173,
            "unit": "iter/sec",
            "range": "stddev: 0.012487",
            "group": "packages",
            "extra": "mean: 999.71 msec\nrounds: 20"
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
          "pythonVersion": "3.8.6"
        },
        "commit": {
          "id": "f290ba985340682002155849a76c0a3ce13d03d4",
          "message": "✨ NEW: Add simple typographic replacements (#59)",
          "timestamp": "2020-10-21T02:38:35+02:00",
          "url": "https://github.com/executablebooks/markdown-it-py/commit/f290ba985340682002155849a76c0a3ce13d03d4",
          "distinct": true,
          "tree_id": "db2a68adf1135c95702858b32be88eac1575ccdb"
        },
        "date": 1603240795648,
        "benches": [
          {
            "name": "benchmarking/bench_plugins.py::test_base",
            "value": 4.919714843842383,
            "unit": "iter/sec",
            "range": "stddev: 0.011351",
            "group": "plugins",
            "extra": "mean: 203.26 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_table",
            "value": 4.923570172093555,
            "unit": "iter/sec",
            "range": "stddev: 0.0056808",
            "group": "plugins",
            "extra": "mean: 203.10 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_amsmath",
            "value": 3.6991431506779033,
            "unit": "iter/sec",
            "range": "stddev: 0.0088342",
            "group": "plugins",
            "extra": "mean: 270.33 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_container",
            "value": 4.9281305514297244,
            "unit": "iter/sec",
            "range": "stddev: 0.0090184",
            "group": "plugins",
            "extra": "mean: 202.92 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_deflist",
            "value": 5.027601842053472,
            "unit": "iter/sec",
            "range": "stddev: 0.0053629",
            "group": "plugins",
            "extra": "mean: 198.90 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_footnote",
            "value": 5.002304808188694,
            "unit": "iter/sec",
            "range": "stddev: 0.0050195",
            "group": "plugins",
            "extra": "mean: 199.91 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_front_matter",
            "value": 5.0348802722275074,
            "unit": "iter/sec",
            "range": "stddev: 0.0073188",
            "group": "plugins",
            "extra": "mean: 198.61 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_texmath",
            "value": 4.8833957808515835,
            "unit": "iter/sec",
            "range": "stddev: 0.0082533",
            "group": "plugins",
            "extra": "mean: 204.78 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_dollarmath",
            "value": 4.863581970507278,
            "unit": "iter/sec",
            "range": "stddev: 0.010433",
            "group": "plugins",
            "extra": "mean: 205.61 msec\nrounds: 20"
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
          "pythonVersion": "3.8.6"
        },
        "commit": {
          "id": "f290ba985340682002155849a76c0a3ce13d03d4",
          "message": "✨ NEW: Add simple typographic replacements (#59)",
          "timestamp": "2020-10-21T02:38:35+02:00",
          "url": "https://github.com/executablebooks/markdown-it-py/commit/f290ba985340682002155849a76c0a3ce13d03d4",
          "distinct": true,
          "tree_id": "db2a68adf1135c95702858b32be88eac1575ccdb"
        },
        "date": 1603240892325,
        "benches": [
          {
            "name": "benchmarking/bench_packages.py::test_markdown_it_py",
            "value": 4.7738933459231925,
            "unit": "iter/sec",
            "range": "stddev: 0.010108",
            "group": "packages",
            "extra": "mean: 209.47 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_mistune",
            "value": 13.984943766187873,
            "unit": "iter/sec",
            "range": "stddev: 0.0034615",
            "group": "packages",
            "extra": "mean: 71.505 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_commonmark_py",
            "value": 2.239148816166982,
            "unit": "iter/sec",
            "range": "stddev: 0.020113",
            "group": "packages",
            "extra": "mean: 446.60 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_pymarkdown",
            "value": 1.030566746615404,
            "unit": "iter/sec",
            "range": "stddev: 0.016984",
            "group": "packages",
            "extra": "mean: 970.34 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_pymarkdown_extra",
            "value": 0.9259170124314897,
            "unit": "iter/sec",
            "range": "stddev: 0.034286",
            "group": "packages",
            "extra": "mean: 1.0800 sec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_mistletoe",
            "value": 4.313713997193263,
            "unit": "iter/sec",
            "range": "stddev: 0.0098276",
            "group": "packages",
            "extra": "mean: 231.82 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_panflute",
            "value": 1.0486597851990311,
            "unit": "iter/sec",
            "range": "stddev: 0.015790",
            "group": "packages",
            "extra": "mean: 953.60 msec\nrounds: 20"
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
          "pythonVersion": "3.8.6"
        },
        "commit": {
          "id": "ca6269eabd1078f8e3ce6129b23e23b3db97358f",
          "message": "🚀 RELEASE: v0.5.6 (#62)",
          "timestamp": "2020-10-21T03:48:26+02:00",
          "url": "https://github.com/executablebooks/markdown-it-py/commit/ca6269eabd1078f8e3ce6129b23e23b3db97358f",
          "distinct": true,
          "tree_id": "6d0f61196c1b8554d51ac6fa3a7901f911a0770b"
        },
        "date": 1603244985289,
        "benches": [
          {
            "name": "benchmarking/bench_plugins.py::test_base",
            "value": 4.991458789173157,
            "unit": "iter/sec",
            "range": "stddev: 0.0065283",
            "group": "plugins",
            "extra": "mean: 200.34 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_table",
            "value": 4.815563444537364,
            "unit": "iter/sec",
            "range": "stddev: 0.0058409",
            "group": "plugins",
            "extra": "mean: 207.66 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_amsmath",
            "value": 3.544555382381893,
            "unit": "iter/sec",
            "range": "stddev: 0.0093787",
            "group": "plugins",
            "extra": "mean: 282.12 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_container",
            "value": 4.642450528356169,
            "unit": "iter/sec",
            "range": "stddev: 0.010273",
            "group": "plugins",
            "extra": "mean: 215.40 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_deflist",
            "value": 4.652077187843445,
            "unit": "iter/sec",
            "range": "stddev: 0.011606",
            "group": "plugins",
            "extra": "mean: 214.96 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_footnote",
            "value": 4.713828849084579,
            "unit": "iter/sec",
            "range": "stddev: 0.0094489",
            "group": "plugins",
            "extra": "mean: 212.14 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_front_matter",
            "value": 4.730771257768226,
            "unit": "iter/sec",
            "range": "stddev: 0.012068",
            "group": "plugins",
            "extra": "mean: 211.38 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_texmath",
            "value": 4.741021891345963,
            "unit": "iter/sec",
            "range": "stddev: 0.0065346",
            "group": "plugins",
            "extra": "mean: 210.92 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_dollarmath",
            "value": 4.7269850769092745,
            "unit": "iter/sec",
            "range": "stddev: 0.010290",
            "group": "plugins",
            "extra": "mean: 211.55 msec\nrounds: 20"
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
          "pythonVersion": "3.8.6"
        },
        "commit": {
          "id": "ca6269eabd1078f8e3ce6129b23e23b3db97358f",
          "message": "🚀 RELEASE: v0.5.6 (#62)",
          "timestamp": "2020-10-21T03:48:26+02:00",
          "url": "https://github.com/executablebooks/markdown-it-py/commit/ca6269eabd1078f8e3ce6129b23e23b3db97358f",
          "distinct": true,
          "tree_id": "6d0f61196c1b8554d51ac6fa3a7901f911a0770b"
        },
        "date": 1603245048930,
        "benches": [
          {
            "name": "benchmarking/bench_packages.py::test_markdown_it_py",
            "value": 4.7381087029653495,
            "unit": "iter/sec",
            "range": "stddev: 0.0057478",
            "group": "packages",
            "extra": "mean: 211.05 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_mistune",
            "value": 13.428769034442595,
            "unit": "iter/sec",
            "range": "stddev: 0.0026373",
            "group": "packages",
            "extra": "mean: 74.467 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_commonmark_py",
            "value": 2.288424736771865,
            "unit": "iter/sec",
            "range": "stddev: 0.016441",
            "group": "packages",
            "extra": "mean: 436.98 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_pymarkdown",
            "value": 1.0255291135406135,
            "unit": "iter/sec",
            "range": "stddev: 0.012027",
            "group": "packages",
            "extra": "mean: 975.11 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_pymarkdown_extra",
            "value": 0.9058036645465447,
            "unit": "iter/sec",
            "range": "stddev: 0.029751",
            "group": "packages",
            "extra": "mean: 1.1040 sec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_mistletoe",
            "value": 4.261985105834164,
            "unit": "iter/sec",
            "range": "stddev: 0.0075046",
            "group": "packages",
            "extra": "mean: 234.63 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_panflute",
            "value": 1.0218506923702808,
            "unit": "iter/sec",
            "range": "stddev: 0.016122",
            "group": "packages",
            "extra": "mean: 978.62 msec\nrounds: 20"
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
          "pythonVersion": "3.8.6"
        },
        "commit": {
          "id": "7783a376d71b249f886059da9f42a57da790678f",
          "message": "🧪 TEST: Against Python 3.9 (#63)",
          "timestamp": "2020-10-22T03:31:32+02:00",
          "url": "https://github.com/executablebooks/markdown-it-py/commit/7783a376d71b249f886059da9f42a57da790678f",
          "distinct": true,
          "tree_id": "53202dcc08e529326db55ce98153179370f13419"
        },
        "date": 1603330373898,
        "benches": [
          {
            "name": "benchmarking/bench_plugins.py::test_base",
            "value": 4.563078650648676,
            "unit": "iter/sec",
            "range": "stddev: 0.0056788",
            "group": "plugins",
            "extra": "mean: 219.15 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_table",
            "value": 4.474915917001194,
            "unit": "iter/sec",
            "range": "stddev: 0.0055806",
            "group": "plugins",
            "extra": "mean: 223.47 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_amsmath",
            "value": 3.7195686206263634,
            "unit": "iter/sec",
            "range": "stddev: 0.0066047",
            "group": "plugins",
            "extra": "mean: 268.85 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_container",
            "value": 4.485351368226714,
            "unit": "iter/sec",
            "range": "stddev: 0.0070637",
            "group": "plugins",
            "extra": "mean: 222.95 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_deflist",
            "value": 4.52240488687145,
            "unit": "iter/sec",
            "range": "stddev: 0.0048604",
            "group": "plugins",
            "extra": "mean: 221.12 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_footnote",
            "value": 4.493051298809111,
            "unit": "iter/sec",
            "range": "stddev: 0.0056641",
            "group": "plugins",
            "extra": "mean: 222.57 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_front_matter",
            "value": 4.529129316332774,
            "unit": "iter/sec",
            "range": "stddev: 0.0051552",
            "group": "plugins",
            "extra": "mean: 220.79 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_texmath",
            "value": 4.403051378008901,
            "unit": "iter/sec",
            "range": "stddev: 0.0063489",
            "group": "plugins",
            "extra": "mean: 227.12 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_dollarmath",
            "value": 4.4918549008670405,
            "unit": "iter/sec",
            "range": "stddev: 0.0058387",
            "group": "plugins",
            "extra": "mean: 222.63 msec\nrounds: 20"
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
          "pythonVersion": "3.8.6"
        },
        "commit": {
          "id": "7783a376d71b249f886059da9f42a57da790678f",
          "message": "🧪 TEST: Against Python 3.9 (#63)",
          "timestamp": "2020-10-22T03:31:32+02:00",
          "url": "https://github.com/executablebooks/markdown-it-py/commit/7783a376d71b249f886059da9f42a57da790678f",
          "distinct": true,
          "tree_id": "53202dcc08e529326db55ce98153179370f13419"
        },
        "date": 1603330426793,
        "benches": [
          {
            "name": "benchmarking/bench_packages.py::test_markdown_it_py",
            "value": 5.188067338558422,
            "unit": "iter/sec",
            "range": "stddev: 0.0077686",
            "group": "packages",
            "extra": "mean: 192.75 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_mistune",
            "value": 14.810794879839488,
            "unit": "iter/sec",
            "range": "stddev: 0.0036343",
            "group": "packages",
            "extra": "mean: 67.518 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_commonmark_py",
            "value": 2.354254259013851,
            "unit": "iter/sec",
            "range": "stddev: 0.020668",
            "group": "packages",
            "extra": "mean: 424.76 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_pymarkdown",
            "value": 1.1145059480534112,
            "unit": "iter/sec",
            "range": "stddev: 0.031290",
            "group": "packages",
            "extra": "mean: 897.26 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_pymarkdown_extra",
            "value": 0.9709625815014582,
            "unit": "iter/sec",
            "range": "stddev: 0.037061",
            "group": "packages",
            "extra": "mean: 1.0299 sec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_mistletoe",
            "value": 4.764076807743118,
            "unit": "iter/sec",
            "range": "stddev: 0.010736",
            "group": "packages",
            "extra": "mean: 209.90 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_panflute",
            "value": 1.1402888067170787,
            "unit": "iter/sec",
            "range": "stddev: 0.021780",
            "group": "packages",
            "extra": "mean: 876.97 msec\nrounds: 20"
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
          "pythonVersion": "3.8.6"
        },
        "commit": {
          "id": "510e2bf35372b42c1ded2b7ef7accf3354c7043f",
          "message": "✨ NEW: Add smartquotes (#67)",
          "timestamp": "2020-10-31T11:14:42+01:00",
          "url": "https://github.com/executablebooks/markdown-it-py/commit/510e2bf35372b42c1ded2b7ef7accf3354c7043f",
          "distinct": true,
          "tree_id": "1e6a5e8fd2a87e1b3b1abd916f0c68920453c3ff"
        },
        "date": 1604139351580,
        "benches": [
          {
            "name": "benchmarking/bench_plugins.py::test_base",
            "value": 5.650699766964381,
            "unit": "iter/sec",
            "range": "stddev: 0.0060690",
            "group": "plugins",
            "extra": "mean: 176.97 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_table",
            "value": 5.549847736028542,
            "unit": "iter/sec",
            "range": "stddev: 0.0077232",
            "group": "plugins",
            "extra": "mean: 180.19 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_amsmath",
            "value": 4.571672073835074,
            "unit": "iter/sec",
            "range": "stddev: 0.0086445",
            "group": "plugins",
            "extra": "mean: 218.74 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_container",
            "value": 5.5281590481276615,
            "unit": "iter/sec",
            "range": "stddev: 0.0067959",
            "group": "plugins",
            "extra": "mean: 180.89 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_deflist",
            "value": 5.59048787589232,
            "unit": "iter/sec",
            "range": "stddev: 0.0079328",
            "group": "plugins",
            "extra": "mean: 178.88 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_footnote",
            "value": 5.60665442173903,
            "unit": "iter/sec",
            "range": "stddev: 0.0065048",
            "group": "plugins",
            "extra": "mean: 178.36 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_front_matter",
            "value": 5.641333498141527,
            "unit": "iter/sec",
            "range": "stddev: 0.0048770",
            "group": "plugins",
            "extra": "mean: 177.26 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_texmath",
            "value": 5.256523495337226,
            "unit": "iter/sec",
            "range": "stddev: 0.010908",
            "group": "plugins",
            "extra": "mean: 190.24 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_dollarmath",
            "value": 5.5976226475674435,
            "unit": "iter/sec",
            "range": "stddev: 0.0090275",
            "group": "plugins",
            "extra": "mean: 178.65 msec\nrounds: 20"
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
          "pythonVersion": "3.8.6"
        },
        "commit": {
          "id": "510e2bf35372b42c1ded2b7ef7accf3354c7043f",
          "message": "✨ NEW: Add smartquotes (#67)",
          "timestamp": "2020-10-31T11:14:42+01:00",
          "url": "https://github.com/executablebooks/markdown-it-py/commit/510e2bf35372b42c1ded2b7ef7accf3354c7043f",
          "distinct": true,
          "tree_id": "1e6a5e8fd2a87e1b3b1abd916f0c68920453c3ff"
        },
        "date": 1604139424485,
        "benches": [
          {
            "name": "benchmarking/bench_packages.py::test_markdown_it_py",
            "value": 5.029833047626244,
            "unit": "iter/sec",
            "range": "stddev: 0.0056995",
            "group": "packages",
            "extra": "mean: 198.81 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_mistune",
            "value": 12.166665293252947,
            "unit": "iter/sec",
            "range": "stddev: 0.0046405",
            "group": "packages",
            "extra": "mean: 82.192 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_commonmark_py",
            "value": 1.6740330012713802,
            "unit": "iter/sec",
            "range": "stddev: 0.013936",
            "group": "packages",
            "extra": "mean: 597.36 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_pymarkdown",
            "value": 0.995649261589387,
            "unit": "iter/sec",
            "range": "stddev: 0.033227",
            "group": "packages",
            "extra": "mean: 1.0044 sec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_pymarkdown_extra",
            "value": 0.9167050629269807,
            "unit": "iter/sec",
            "range": "stddev: 0.023262",
            "group": "packages",
            "extra": "mean: 1.0909 sec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_mistletoe",
            "value": 4.315692336853429,
            "unit": "iter/sec",
            "range": "stddev: 0.0097969",
            "group": "packages",
            "extra": "mean: 231.71 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_panflute",
            "value": 1.1108248920815316,
            "unit": "iter/sec",
            "range": "stddev: 0.013866",
            "group": "packages",
            "extra": "mean: 900.23 msec\nrounds: 20"
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
          "pythonVersion": "3.8.6"
        },
        "commit": {
          "id": "901c1806f64d1de0269694ea0ec854e0579ed32e",
          "message": "🧪 TESTS: Add PyPy3 to matrix (#65)",
          "timestamp": "2020-10-31T11:18:16+01:00",
          "url": "https://github.com/executablebooks/markdown-it-py/commit/901c1806f64d1de0269694ea0ec854e0579ed32e",
          "distinct": true,
          "tree_id": "eebf233cb6a387c57bf94f8019c2192bfeb41605"
        },
        "date": 1604139586151,
        "benches": [
          {
            "name": "benchmarking/bench_plugins.py::test_base",
            "value": 4.569875871754298,
            "unit": "iter/sec",
            "range": "stddev: 0.0062531",
            "group": "plugins",
            "extra": "mean: 218.82 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_table",
            "value": 4.460960616804269,
            "unit": "iter/sec",
            "range": "stddev: 0.0064557",
            "group": "plugins",
            "extra": "mean: 224.17 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_amsmath",
            "value": 3.685147981801028,
            "unit": "iter/sec",
            "range": "stddev: 0.0078297",
            "group": "plugins",
            "extra": "mean: 271.36 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_container",
            "value": 4.504207356670027,
            "unit": "iter/sec",
            "range": "stddev: 0.0062951",
            "group": "plugins",
            "extra": "mean: 222.01 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_deflist",
            "value": 4.5436549875255094,
            "unit": "iter/sec",
            "range": "stddev: 0.0051960",
            "group": "plugins",
            "extra": "mean: 220.09 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_footnote",
            "value": 4.492301184525165,
            "unit": "iter/sec",
            "range": "stddev: 0.0058425",
            "group": "plugins",
            "extra": "mean: 222.60 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_front_matter",
            "value": 4.525059696205298,
            "unit": "iter/sec",
            "range": "stddev: 0.0054513",
            "group": "plugins",
            "extra": "mean: 220.99 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_texmath",
            "value": 4.424472398651012,
            "unit": "iter/sec",
            "range": "stddev: 0.0064240",
            "group": "plugins",
            "extra": "mean: 226.02 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_dollarmath",
            "value": 4.535704145345789,
            "unit": "iter/sec",
            "range": "stddev: 0.0069813",
            "group": "plugins",
            "extra": "mean: 220.47 msec\nrounds: 20"
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
          "pythonVersion": "3.8.6"
        },
        "commit": {
          "id": "901c1806f64d1de0269694ea0ec854e0579ed32e",
          "message": "🧪 TESTS: Add PyPy3 to matrix (#65)",
          "timestamp": "2020-10-31T11:18:16+01:00",
          "url": "https://github.com/executablebooks/markdown-it-py/commit/901c1806f64d1de0269694ea0ec854e0579ed32e",
          "distinct": true,
          "tree_id": "eebf233cb6a387c57bf94f8019c2192bfeb41605"
        },
        "date": 1604139671017,
        "benches": [
          {
            "name": "benchmarking/bench_packages.py::test_markdown_it_py",
            "value": 4.61181657564534,
            "unit": "iter/sec",
            "range": "stddev: 0.0056844",
            "group": "packages",
            "extra": "mean: 216.83 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_mistune",
            "value": 13.67796213661566,
            "unit": "iter/sec",
            "range": "stddev: 0.0027880",
            "group": "packages",
            "extra": "mean: 73.110 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_commonmark_py",
            "value": 2.301628134571105,
            "unit": "iter/sec",
            "range": "stddev: 0.016194",
            "group": "packages",
            "extra": "mean: 434.48 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_pymarkdown",
            "value": 0.9778956559800255,
            "unit": "iter/sec",
            "range": "stddev: 0.026186",
            "group": "packages",
            "extra": "mean: 1.0226 sec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_pymarkdown_extra",
            "value": 0.9144101192076638,
            "unit": "iter/sec",
            "range": "stddev: 0.0099397",
            "group": "packages",
            "extra": "mean: 1.0936 sec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_mistletoe",
            "value": 4.219331111135067,
            "unit": "iter/sec",
            "range": "stddev: 0.0064487",
            "group": "packages",
            "extra": "mean: 237.00 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_panflute",
            "value": 0.9858389042440833,
            "unit": "iter/sec",
            "range": "stddev: 0.023304",
            "group": "packages",
            "extra": "mean: 1.0144 sec\nrounds: 20"
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
          "pythonVersion": "3.8.6"
        },
        "commit": {
          "id": "a7c3cf48996b5ae7f9d051089e3298532d147f25",
          "message": "🐛 FIX: `_Entities.__contains__` (#69)",
          "timestamp": "2020-11-03T13:44:14+01:00",
          "url": "https://github.com/executablebooks/markdown-it-py/commit/a7c3cf48996b5ae7f9d051089e3298532d147f25",
          "distinct": true,
          "tree_id": "0e1609742f2415e993e1d4f5533ca7c8fc541af1"
        },
        "date": 1604407524474,
        "benches": [
          {
            "name": "benchmarking/bench_plugins.py::test_base",
            "value": 5.648376425215603,
            "unit": "iter/sec",
            "range": "stddev: 0.0056758",
            "group": "plugins",
            "extra": "mean: 177.04 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_table",
            "value": 5.493999611851157,
            "unit": "iter/sec",
            "range": "stddev: 0.0065583",
            "group": "plugins",
            "extra": "mean: 182.02 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_amsmath",
            "value": 4.549822853124964,
            "unit": "iter/sec",
            "range": "stddev: 0.0062817",
            "group": "plugins",
            "extra": "mean: 219.79 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_container",
            "value": 5.5110482442079975,
            "unit": "iter/sec",
            "range": "stddev: 0.0073996",
            "group": "plugins",
            "extra": "mean: 181.45 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_deflist",
            "value": 5.461847774212596,
            "unit": "iter/sec",
            "range": "stddev: 0.0075976",
            "group": "plugins",
            "extra": "mean: 183.09 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_footnote",
            "value": 5.511156926754786,
            "unit": "iter/sec",
            "range": "stddev: 0.0074210",
            "group": "plugins",
            "extra": "mean: 181.45 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_front_matter",
            "value": 5.498923615259135,
            "unit": "iter/sec",
            "range": "stddev: 0.0089015",
            "group": "plugins",
            "extra": "mean: 181.85 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_texmath",
            "value": 5.333203308414389,
            "unit": "iter/sec",
            "range": "stddev: 0.010924",
            "group": "plugins",
            "extra": "mean: 187.50 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_dollarmath",
            "value": 5.50273520083946,
            "unit": "iter/sec",
            "range": "stddev: 0.0080641",
            "group": "plugins",
            "extra": "mean: 181.73 msec\nrounds: 20"
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
          "pythonVersion": "3.8.6"
        },
        "commit": {
          "id": "a7c3cf48996b5ae7f9d051089e3298532d147f25",
          "message": "🐛 FIX: `_Entities.__contains__` (#69)",
          "timestamp": "2020-11-03T13:44:14+01:00",
          "url": "https://github.com/executablebooks/markdown-it-py/commit/a7c3cf48996b5ae7f9d051089e3298532d147f25",
          "distinct": true,
          "tree_id": "0e1609742f2415e993e1d4f5533ca7c8fc541af1"
        },
        "date": 1604407603291,
        "benches": [
          {
            "name": "benchmarking/bench_packages.py::test_markdown_it_py",
            "value": 4.650726469274331,
            "unit": "iter/sec",
            "range": "stddev: 0.0072410",
            "group": "packages",
            "extra": "mean: 215.02 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_mistune",
            "value": 11.413093200269806,
            "unit": "iter/sec",
            "range": "stddev: 0.0028224",
            "group": "packages",
            "extra": "mean: 87.619 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_commonmark_py",
            "value": 1.462141149895105,
            "unit": "iter/sec",
            "range": "stddev: 0.015882",
            "group": "packages",
            "extra": "mean: 683.93 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_pymarkdown",
            "value": 0.9700240028132614,
            "unit": "iter/sec",
            "range": "stddev: 0.014934",
            "group": "packages",
            "extra": "mean: 1.0309 sec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_pymarkdown_extra",
            "value": 0.8723422380437819,
            "unit": "iter/sec",
            "range": "stddev: 0.020943",
            "group": "packages",
            "extra": "mean: 1.1463 sec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_mistletoe",
            "value": 4.017834058068634,
            "unit": "iter/sec",
            "range": "stddev: 0.0078481",
            "group": "packages",
            "extra": "mean: 248.89 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_panflute",
            "value": 1.0213758598830947,
            "unit": "iter/sec",
            "range": "stddev: 0.020260",
            "group": "packages",
            "extra": "mean: 979.07 msec\nrounds: 20"
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
          "pythonVersion": "3.8.6"
        },
        "commit": {
          "id": "b533d6d787462057061440e00a5da063798347f5",
          "message": "👌 IMPROVE: Get HTML5 entities from Python stdlib (#70)",
          "timestamp": "2020-11-03T16:38:35+01:00",
          "url": "https://github.com/executablebooks/markdown-it-py/commit/b533d6d787462057061440e00a5da063798347f5",
          "distinct": true,
          "tree_id": "6f31cca38a707a036c1def39998cd380c383832d"
        },
        "date": 1604418007173,
        "benches": [
          {
            "name": "benchmarking/bench_plugins.py::test_base",
            "value": 4.533052179596237,
            "unit": "iter/sec",
            "range": "stddev: 0.0052660",
            "group": "plugins",
            "extra": "mean: 220.60 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_table",
            "value": 4.392766497563489,
            "unit": "iter/sec",
            "range": "stddev: 0.0060622",
            "group": "plugins",
            "extra": "mean: 227.65 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_amsmath",
            "value": 3.424526197216597,
            "unit": "iter/sec",
            "range": "stddev: 0.0067755",
            "group": "plugins",
            "extra": "mean: 292.01 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_container",
            "value": 4.394355619213957,
            "unit": "iter/sec",
            "range": "stddev: 0.0081107",
            "group": "plugins",
            "extra": "mean: 227.56 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_deflist",
            "value": 4.378028722322349,
            "unit": "iter/sec",
            "range": "stddev: 0.012183",
            "group": "plugins",
            "extra": "mean: 228.41 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_footnote",
            "value": 4.422653773769981,
            "unit": "iter/sec",
            "range": "stddev: 0.0060078",
            "group": "plugins",
            "extra": "mean: 226.11 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_front_matter",
            "value": 4.356362608670741,
            "unit": "iter/sec",
            "range": "stddev: 0.0077841",
            "group": "plugins",
            "extra": "mean: 229.55 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_texmath",
            "value": 4.169390408682081,
            "unit": "iter/sec",
            "range": "stddev: 0.0083750",
            "group": "plugins",
            "extra": "mean: 239.84 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_dollarmath",
            "value": 4.359423900196015,
            "unit": "iter/sec",
            "range": "stddev: 0.0071348",
            "group": "plugins",
            "extra": "mean: 229.39 msec\nrounds: 20"
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
          "pythonVersion": "3.8.6"
        },
        "commit": {
          "id": "b533d6d787462057061440e00a5da063798347f5",
          "message": "👌 IMPROVE: Get HTML5 entities from Python stdlib (#70)",
          "timestamp": "2020-11-03T16:38:35+01:00",
          "url": "https://github.com/executablebooks/markdown-it-py/commit/b533d6d787462057061440e00a5da063798347f5",
          "distinct": true,
          "tree_id": "6f31cca38a707a036c1def39998cd380c383832d"
        },
        "date": 1604418077638,
        "benches": [
          {
            "name": "benchmarking/bench_packages.py::test_markdown_it_py",
            "value": 4.532920194887938,
            "unit": "iter/sec",
            "range": "stddev: 0.010079",
            "group": "packages",
            "extra": "mean: 220.61 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_mistune",
            "value": 10.296909130038513,
            "unit": "iter/sec",
            "range": "stddev: 0.0048610",
            "group": "packages",
            "extra": "mean: 97.117 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_commonmark_py",
            "value": 1.3948802194790695,
            "unit": "iter/sec",
            "range": "stddev: 0.023226",
            "group": "packages",
            "extra": "mean: 716.91 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_pymarkdown",
            "value": 0.916179167468258,
            "unit": "iter/sec",
            "range": "stddev: 0.022187",
            "group": "packages",
            "extra": "mean: 1.0915 sec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_pymarkdown_extra",
            "value": 0.8206777979615762,
            "unit": "iter/sec",
            "range": "stddev: 0.050734",
            "group": "packages",
            "extra": "mean: 1.2185 sec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_mistletoe",
            "value": 3.897607256878298,
            "unit": "iter/sec",
            "range": "stddev: 0.010096",
            "group": "packages",
            "extra": "mean: 256.57 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_panflute",
            "value": 0.9457113173260041,
            "unit": "iter/sec",
            "range": "stddev: 0.017130",
            "group": "packages",
            "extra": "mean: 1.0574 sec\nrounds: 20"
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
          "pythonVersion": "3.8.6"
        },
        "commit": {
          "id": "947d4c63bd110f6f656074910abde6051e278c7e",
          "message": "🐛 FIX: `MarkdownIt.render`; don't copy empty `env` arg (#77)",
          "timestamp": "2020-11-12T01:19:45+01:00",
          "url": "https://github.com/executablebooks/markdown-it-py/commit/947d4c63bd110f6f656074910abde6051e278c7e",
          "distinct": true,
          "tree_id": "70bc23e2ff1fde63859bef2de21618c8d5673840"
        },
        "date": 1605140463923,
        "benches": [
          {
            "name": "benchmarking/bench_plugins.py::test_base",
            "value": 4.714748685229405,
            "unit": "iter/sec",
            "range": "stddev: 0.0047447",
            "group": "plugins",
            "extra": "mean: 212.10 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_table",
            "value": 4.574216099765357,
            "unit": "iter/sec",
            "range": "stddev: 0.0070333",
            "group": "plugins",
            "extra": "mean: 218.62 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_amsmath",
            "value": 3.8218813525651574,
            "unit": "iter/sec",
            "range": "stddev: 0.0058959",
            "group": "plugins",
            "extra": "mean: 261.65 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_container",
            "value": 4.626594444447853,
            "unit": "iter/sec",
            "range": "stddev: 0.0058265",
            "group": "plugins",
            "extra": "mean: 216.14 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_deflist",
            "value": 4.617939063545017,
            "unit": "iter/sec",
            "range": "stddev: 0.0062827",
            "group": "plugins",
            "extra": "mean: 216.55 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_footnote",
            "value": 4.632706981381382,
            "unit": "iter/sec",
            "range": "stddev: 0.0060393",
            "group": "plugins",
            "extra": "mean: 215.86 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_front_matter",
            "value": 4.677439259719154,
            "unit": "iter/sec",
            "range": "stddev: 0.0056417",
            "group": "plugins",
            "extra": "mean: 213.79 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_texmath",
            "value": 4.547041625228485,
            "unit": "iter/sec",
            "range": "stddev: 0.0056445",
            "group": "plugins",
            "extra": "mean: 219.92 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_dollarmath",
            "value": 4.626302365125117,
            "unit": "iter/sec",
            "range": "stddev: 0.0059714",
            "group": "plugins",
            "extra": "mean: 216.16 msec\nrounds: 20"
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
          "pythonVersion": "3.8.6"
        },
        "commit": {
          "id": "947d4c63bd110f6f656074910abde6051e278c7e",
          "message": "🐛 FIX: `MarkdownIt.render`; don't copy empty `env` arg (#77)",
          "timestamp": "2020-11-12T01:19:45+01:00",
          "url": "https://github.com/executablebooks/markdown-it-py/commit/947d4c63bd110f6f656074910abde6051e278c7e",
          "distinct": true,
          "tree_id": "70bc23e2ff1fde63859bef2de21618c8d5673840"
        },
        "date": 1605140513366,
        "benches": [
          {
            "name": "benchmarking/bench_packages.py::test_markdown_it_py",
            "value": 5.404494333278785,
            "unit": "iter/sec",
            "range": "stddev: 0.011067",
            "group": "packages",
            "extra": "mean: 185.03 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_mistune",
            "value": 16.1045708695198,
            "unit": "iter/sec",
            "range": "stddev: 0.0035154",
            "group": "packages",
            "extra": "mean: 62.094 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_commonmark_py",
            "value": 2.5794733621253902,
            "unit": "iter/sec",
            "range": "stddev: 0.019281",
            "group": "packages",
            "extra": "mean: 387.68 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_pymarkdown",
            "value": 1.1741245152029451,
            "unit": "iter/sec",
            "range": "stddev: 0.031504",
            "group": "packages",
            "extra": "mean: 851.70 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_pymarkdown_extra",
            "value": 1.0896704916643896,
            "unit": "iter/sec",
            "range": "stddev: 0.038130",
            "group": "packages",
            "extra": "mean: 917.71 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_mistletoe",
            "value": 4.67718168701978,
            "unit": "iter/sec",
            "range": "stddev: 0.012145",
            "group": "packages",
            "extra": "mean: 213.80 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_panflute",
            "value": 1.204409058140313,
            "unit": "iter/sec",
            "range": "stddev: 0.026757",
            "group": "packages",
            "extra": "mean: 830.28 msec\nrounds: 20"
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
          "pythonVersion": "3.8.6"
        },
        "commit": {
          "id": "a874755632e3c0bb8e074bebc9d0a884d8e74f0a",
          "message": "🔧 MAINTAIN: Remove unused `import readline` logic (#68)\n\nCo-authored-by: Chris Sewell <chrisj_sewell@hotmail.com>",
          "timestamp": "2020-11-12T01:22:45+01:00",
          "url": "https://github.com/executablebooks/markdown-it-py/commit/a874755632e3c0bb8e074bebc9d0a884d8e74f0a",
          "distinct": true,
          "tree_id": "0a2c002e3d9e813eb32fe74d98dd1bea4e59033c"
        },
        "date": 1605140657799,
        "benches": [
          {
            "name": "benchmarking/bench_plugins.py::test_base",
            "value": 4.541106228794452,
            "unit": "iter/sec",
            "range": "stddev: 0.0052081",
            "group": "plugins",
            "extra": "mean: 220.21 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_table",
            "value": 4.456756212683817,
            "unit": "iter/sec",
            "range": "stddev: 0.0060571",
            "group": "plugins",
            "extra": "mean: 224.38 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_amsmath",
            "value": 3.6607209058339008,
            "unit": "iter/sec",
            "range": "stddev: 0.0073233",
            "group": "plugins",
            "extra": "mean: 273.17 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_container",
            "value": 4.453999999626281,
            "unit": "iter/sec",
            "range": "stddev: 0.0065323",
            "group": "plugins",
            "extra": "mean: 224.52 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_deflist",
            "value": 4.4775756064430965,
            "unit": "iter/sec",
            "range": "stddev: 0.0060156",
            "group": "plugins",
            "extra": "mean: 223.34 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_footnote",
            "value": 4.4527911500006745,
            "unit": "iter/sec",
            "range": "stddev: 0.0063085",
            "group": "plugins",
            "extra": "mean: 224.58 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_front_matter",
            "value": 4.480201693805903,
            "unit": "iter/sec",
            "range": "stddev: 0.0062390",
            "group": "plugins",
            "extra": "mean: 223.20 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_texmath",
            "value": 4.370266074116254,
            "unit": "iter/sec",
            "range": "stddev: 0.0067903",
            "group": "plugins",
            "extra": "mean: 228.82 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_dollarmath",
            "value": 4.447483930075318,
            "unit": "iter/sec",
            "range": "stddev: 0.0076030",
            "group": "plugins",
            "extra": "mean: 224.85 msec\nrounds: 20"
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
          "pythonVersion": "3.8.6"
        },
        "commit": {
          "id": "a874755632e3c0bb8e074bebc9d0a884d8e74f0a",
          "message": "🔧 MAINTAIN: Remove unused `import readline` logic (#68)\n\nCo-authored-by: Chris Sewell <chrisj_sewell@hotmail.com>",
          "timestamp": "2020-11-12T01:22:45+01:00",
          "url": "https://github.com/executablebooks/markdown-it-py/commit/a874755632e3c0bb8e074bebc9d0a884d8e74f0a",
          "distinct": true,
          "tree_id": "0a2c002e3d9e813eb32fe74d98dd1bea4e59033c"
        },
        "date": 1605140750594,
        "benches": [
          {
            "name": "benchmarking/bench_packages.py::test_markdown_it_py",
            "value": 4.515013196702943,
            "unit": "iter/sec",
            "range": "stddev: 0.0065678",
            "group": "packages",
            "extra": "mean: 221.48 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_mistune",
            "value": 11.556548808567609,
            "unit": "iter/sec",
            "range": "stddev: 0.0020679",
            "group": "packages",
            "extra": "mean: 86.531 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_commonmark_py",
            "value": 1.602839380723722,
            "unit": "iter/sec",
            "range": "stddev: 0.015757",
            "group": "packages",
            "extra": "mean: 623.89 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_pymarkdown",
            "value": 0.9356612153780598,
            "unit": "iter/sec",
            "range": "stddev: 0.011069",
            "group": "packages",
            "extra": "mean: 1.0688 sec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_pymarkdown_extra",
            "value": 0.8438799262626703,
            "unit": "iter/sec",
            "range": "stddev: 0.016018",
            "group": "packages",
            "extra": "mean: 1.1850 sec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_mistletoe",
            "value": 3.99229008220719,
            "unit": "iter/sec",
            "range": "stddev: 0.0050682",
            "group": "packages",
            "extra": "mean: 250.48 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_panflute",
            "value": 1.024529669656321,
            "unit": "iter/sec",
            "range": "stddev: 0.012045",
            "group": "packages",
            "extra": "mean: 976.06 msec\nrounds: 20"
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
          "pythonVersion": "3.8.6"
        },
        "commit": {
          "id": "a29c8bd14f72fbd02f6d95ef3ec4451d267053b4",
          "message": "🐛 FIX: smartquotes punctuation char comparison (#72)\n\nCo-authored-by: Chris Sewell <chrisj_sewell@hotmail.com>",
          "timestamp": "2020-11-12T01:38:12+01:00",
          "url": "https://github.com/executablebooks/markdown-it-py/commit/a29c8bd14f72fbd02f6d95ef3ec4451d267053b4",
          "distinct": true,
          "tree_id": "68bd59d3d82bad008b90afe7aa6ce0aac7a3fad9"
        },
        "date": 1605141581827,
        "benches": [
          {
            "name": "benchmarking/bench_plugins.py::test_base",
            "value": 4.8800835301253445,
            "unit": "iter/sec",
            "range": "stddev: 0.0044245",
            "group": "plugins",
            "extra": "mean: 204.91 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_table",
            "value": 4.7410086758608685,
            "unit": "iter/sec",
            "range": "stddev: 0.0048868",
            "group": "plugins",
            "extra": "mean: 210.93 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_amsmath",
            "value": 3.9099082437923776,
            "unit": "iter/sec",
            "range": "stddev: 0.0072654",
            "group": "plugins",
            "extra": "mean: 255.76 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_container",
            "value": 4.71839523735374,
            "unit": "iter/sec",
            "range": "stddev: 0.0068117",
            "group": "plugins",
            "extra": "mean: 211.94 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_deflist",
            "value": 4.745045532653844,
            "unit": "iter/sec",
            "range": "stddev: 0.0075566",
            "group": "plugins",
            "extra": "mean: 210.75 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_footnote",
            "value": 4.7067478696083604,
            "unit": "iter/sec",
            "range": "stddev: 0.0067093",
            "group": "plugins",
            "extra": "mean: 212.46 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_front_matter",
            "value": 4.736549919963122,
            "unit": "iter/sec",
            "range": "stddev: 0.0057210",
            "group": "plugins",
            "extra": "mean: 211.12 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_texmath",
            "value": 4.671926876346175,
            "unit": "iter/sec",
            "range": "stddev: 0.0062521",
            "group": "plugins",
            "extra": "mean: 214.04 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_dollarmath",
            "value": 4.785766431527895,
            "unit": "iter/sec",
            "range": "stddev: 0.0079142",
            "group": "plugins",
            "extra": "mean: 208.95 msec\nrounds: 20"
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
          "pythonVersion": "3.8.6"
        },
        "commit": {
          "id": "a29c8bd14f72fbd02f6d95ef3ec4451d267053b4",
          "message": "🐛 FIX: smartquotes punctuation char comparison (#72)\n\nCo-authored-by: Chris Sewell <chrisj_sewell@hotmail.com>",
          "timestamp": "2020-11-12T01:38:12+01:00",
          "url": "https://github.com/executablebooks/markdown-it-py/commit/a29c8bd14f72fbd02f6d95ef3ec4451d267053b4",
          "distinct": true,
          "tree_id": "68bd59d3d82bad008b90afe7aa6ce0aac7a3fad9"
        },
        "date": 1605141662672,
        "benches": [
          {
            "name": "benchmarking/bench_packages.py::test_markdown_it_py",
            "value": 4.4824946059307305,
            "unit": "iter/sec",
            "range": "stddev: 0.0068232",
            "group": "packages",
            "extra": "mean: 223.09 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_mistune",
            "value": 12.956535345746206,
            "unit": "iter/sec",
            "range": "stddev: 0.0030510",
            "group": "packages",
            "extra": "mean: 77.181 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_commonmark_py",
            "value": 2.0611301155420594,
            "unit": "iter/sec",
            "range": "stddev: 0.018798",
            "group": "packages",
            "extra": "mean: 485.17 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_pymarkdown",
            "value": 0.9780696225248996,
            "unit": "iter/sec",
            "range": "stddev: 0.010725",
            "group": "packages",
            "extra": "mean: 1.0224 sec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_pymarkdown_extra",
            "value": 0.8937568425442907,
            "unit": "iter/sec",
            "range": "stddev: 0.010525",
            "group": "packages",
            "extra": "mean: 1.1189 sec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_mistletoe",
            "value": 4.081060430088121,
            "unit": "iter/sec",
            "range": "stddev: 0.0085703",
            "group": "packages",
            "extra": "mean: 245.03 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_panflute",
            "value": 0.9941545844387791,
            "unit": "iter/sec",
            "range": "stddev: 0.0083169",
            "group": "packages",
            "extra": "mean: 1.0059 sec\nrounds: 20"
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
          "pythonVersion": "3.8.6"
        },
        "commit": {
          "id": "9877c0c2d0202662ab34ee30d8c07b0bea1719b8",
          "message": "✨ NEW: Add markdown-it-task-lists plugin (#76)",
          "timestamp": "2020-11-16T22:50:33+01:00",
          "url": "https://github.com/executablebooks/markdown-it-py/commit/9877c0c2d0202662ab34ee30d8c07b0bea1719b8",
          "distinct": true,
          "tree_id": "bb3687d6c5e80bab8e28a31925bded9bf926c7c7"
        },
        "date": 1605563516242,
        "benches": [
          {
            "name": "benchmarking/bench_plugins.py::test_base",
            "value": 4.616634265834758,
            "unit": "iter/sec",
            "range": "stddev: 0.0068339",
            "group": "plugins",
            "extra": "mean: 216.61 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_table",
            "value": 4.523589386509337,
            "unit": "iter/sec",
            "range": "stddev: 0.0055820",
            "group": "plugins",
            "extra": "mean: 221.06 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_amsmath",
            "value": 3.7436972652437777,
            "unit": "iter/sec",
            "range": "stddev: 0.0059342",
            "group": "plugins",
            "extra": "mean: 267.12 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_container",
            "value": 4.556842458269563,
            "unit": "iter/sec",
            "range": "stddev: 0.0055157",
            "group": "plugins",
            "extra": "mean: 219.45 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_deflist",
            "value": 4.58302120466913,
            "unit": "iter/sec",
            "range": "stddev: 0.0054555",
            "group": "plugins",
            "extra": "mean: 218.20 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_footnote",
            "value": 4.5597911235926185,
            "unit": "iter/sec",
            "range": "stddev: 0.0057899",
            "group": "plugins",
            "extra": "mean: 219.31 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_front_matter",
            "value": 4.596422345480124,
            "unit": "iter/sec",
            "range": "stddev: 0.0058232",
            "group": "plugins",
            "extra": "mean: 217.56 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_texmath",
            "value": 4.514890676974476,
            "unit": "iter/sec",
            "range": "stddev: 0.0067642",
            "group": "plugins",
            "extra": "mean: 221.49 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_dollarmath",
            "value": 4.603301583275975,
            "unit": "iter/sec",
            "range": "stddev: 0.0056878",
            "group": "plugins",
            "extra": "mean: 217.24 msec\nrounds: 20"
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
          "pythonVersion": "3.8.6"
        },
        "commit": {
          "id": "9877c0c2d0202662ab34ee30d8c07b0bea1719b8",
          "message": "✨ NEW: Add markdown-it-task-lists plugin (#76)",
          "timestamp": "2020-11-16T22:50:33+01:00",
          "url": "https://github.com/executablebooks/markdown-it-py/commit/9877c0c2d0202662ab34ee30d8c07b0bea1719b8",
          "distinct": true,
          "tree_id": "bb3687d6c5e80bab8e28a31925bded9bf926c7c7"
        },
        "date": 1605563553928,
        "benches": [
          {
            "name": "benchmarking/bench_packages.py::test_markdown_it_py",
            "value": 5.862711359681485,
            "unit": "iter/sec",
            "range": "stddev: 0.0073248",
            "group": "packages",
            "extra": "mean: 170.57 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_mistune",
            "value": 16.67012040999632,
            "unit": "iter/sec",
            "range": "stddev: 0.0027440",
            "group": "packages",
            "extra": "mean: 59.988 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_commonmark_py",
            "value": 2.8350742037494725,
            "unit": "iter/sec",
            "range": "stddev: 0.018176",
            "group": "packages",
            "extra": "mean: 352.72 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_pymarkdown",
            "value": 1.2980049381848913,
            "unit": "iter/sec",
            "range": "stddev: 0.015435",
            "group": "packages",
            "extra": "mean: 770.41 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_pymarkdown_extra",
            "value": 1.1658493531365353,
            "unit": "iter/sec",
            "range": "stddev: 0.018552",
            "group": "packages",
            "extra": "mean: 857.74 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_mistletoe",
            "value": 5.486057926865535,
            "unit": "iter/sec",
            "range": "stddev: 0.0074773",
            "group": "packages",
            "extra": "mean: 182.28 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_panflute",
            "value": 1.2839548786572774,
            "unit": "iter/sec",
            "range": "stddev: 0.025837",
            "group": "packages",
            "extra": "mean: 778.84 msec\nrounds: 20"
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
          "pythonVersion": "3.8.6"
        },
        "commit": {
          "id": "042f403e15121ccd213fd75842ed8a57cf4ca623",
          "message": "👌 IMPROVE: Use bool() for conciseness (#83)",
          "timestamp": "2020-11-25T19:29:43+01:00",
          "url": "https://github.com/executablebooks/markdown-it-py/commit/042f403e15121ccd213fd75842ed8a57cf4ca623",
          "distinct": true,
          "tree_id": "2f9c7c87cf71c214f3e0ca7a7504e9731d7cd9e0"
        },
        "date": 1606329063987,
        "benches": [
          {
            "name": "benchmarking/bench_plugins.py::test_base",
            "value": 4.4768543900510815,
            "unit": "iter/sec",
            "range": "stddev: 0.0056318",
            "group": "plugins",
            "extra": "mean: 223.37 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_table",
            "value": 4.260403057084255,
            "unit": "iter/sec",
            "range": "stddev: 0.017314",
            "group": "plugins",
            "extra": "mean: 234.72 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_amsmath",
            "value": 3.7304614713924313,
            "unit": "iter/sec",
            "range": "stddev: 0.0060183",
            "group": "plugins",
            "extra": "mean: 268.06 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_container",
            "value": 4.536604244046993,
            "unit": "iter/sec",
            "range": "stddev: 0.0053919",
            "group": "plugins",
            "extra": "mean: 220.43 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_deflist",
            "value": 4.558574123855058,
            "unit": "iter/sec",
            "range": "stddev: 0.0054036",
            "group": "plugins",
            "extra": "mean: 219.37 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_footnote",
            "value": 4.5386242481059424,
            "unit": "iter/sec",
            "range": "stddev: 0.0054883",
            "group": "plugins",
            "extra": "mean: 220.33 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_front_matter",
            "value": 4.568434705437189,
            "unit": "iter/sec",
            "range": "stddev: 0.0052314",
            "group": "plugins",
            "extra": "mean: 218.89 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_texmath",
            "value": 4.448032913778203,
            "unit": "iter/sec",
            "range": "stddev: 0.0060465",
            "group": "plugins",
            "extra": "mean: 224.82 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_dollarmath",
            "value": 4.544164401411691,
            "unit": "iter/sec",
            "range": "stddev: 0.0059661",
            "group": "plugins",
            "extra": "mean: 220.06 msec\nrounds: 20"
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
          "pythonVersion": "3.8.6"
        },
        "commit": {
          "id": "042f403e15121ccd213fd75842ed8a57cf4ca623",
          "message": "👌 IMPROVE: Use bool() for conciseness (#83)",
          "timestamp": "2020-11-25T19:29:43+01:00",
          "url": "https://github.com/executablebooks/markdown-it-py/commit/042f403e15121ccd213fd75842ed8a57cf4ca623",
          "distinct": true,
          "tree_id": "2f9c7c87cf71c214f3e0ca7a7504e9731d7cd9e0"
        },
        "date": 1606329118439,
        "benches": [
          {
            "name": "benchmarking/bench_packages.py::test_markdown_it_py",
            "value": 5.56735640720359,
            "unit": "iter/sec",
            "range": "stddev: 0.0071597",
            "group": "packages",
            "extra": "mean: 179.62 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_mistune",
            "value": 13.537614656945824,
            "unit": "iter/sec",
            "range": "stddev: 0.0034815",
            "group": "packages",
            "extra": "mean: 73.868 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_commonmark_py",
            "value": 1.6700809526098457,
            "unit": "iter/sec",
            "range": "stddev: 0.033117",
            "group": "packages",
            "extra": "mean: 598.77 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_pymarkdown",
            "value": 1.1238924097690508,
            "unit": "iter/sec",
            "range": "stddev: 0.043573",
            "group": "packages",
            "extra": "mean: 889.76 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_pymarkdown_extra",
            "value": 1.019337214874956,
            "unit": "iter/sec",
            "range": "stddev: 0.047005",
            "group": "packages",
            "extra": "mean: 981.03 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_mistletoe",
            "value": 4.4321759322771666,
            "unit": "iter/sec",
            "range": "stddev: 0.015199",
            "group": "packages",
            "extra": "mean: 225.62 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_panflute",
            "value": 1.2085562113974262,
            "unit": "iter/sec",
            "range": "stddev: 0.024761",
            "group": "packages",
            "extra": "mean: 827.43 msec\nrounds: 20"
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
          "pythonVersion": "3.8.6"
        },
        "commit": {
          "id": "a5c28ff641e8feb64e549ba09070730acf5280cc",
          "message": "🐛 FIX: parsing of unicode ordinals (#81)\n\nCo-authored-by: Chris Sewell <chrisj_sewell@hotmail.com>",
          "timestamp": "2020-12-13T11:22:55Z",
          "url": "https://github.com/executablebooks/markdown-it-py/commit/a5c28ff641e8feb64e549ba09070730acf5280cc",
          "distinct": true,
          "tree_id": "eacc020d1533fff40623d84646ba1b88d852b39d"
        },
        "date": 1607858646737,
        "benches": [
          {
            "name": "benchmarking/bench_plugins.py::test_base",
            "value": 5.3950522985862595,
            "unit": "iter/sec",
            "range": "stddev: 0.0052536",
            "group": "plugins",
            "extra": "mean: 185.36 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_table",
            "value": 5.232339232150697,
            "unit": "iter/sec",
            "range": "stddev: 0.0055244",
            "group": "plugins",
            "extra": "mean: 191.12 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_amsmath",
            "value": 4.360663125561824,
            "unit": "iter/sec",
            "range": "stddev: 0.0059402",
            "group": "plugins",
            "extra": "mean: 229.32 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_container",
            "value": 5.285860360352066,
            "unit": "iter/sec",
            "range": "stddev: 0.0057489",
            "group": "plugins",
            "extra": "mean: 189.18 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_deflist",
            "value": 5.317913115393077,
            "unit": "iter/sec",
            "range": "stddev: 0.0048748",
            "group": "plugins",
            "extra": "mean: 188.04 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_footnote",
            "value": 5.294101026384378,
            "unit": "iter/sec",
            "range": "stddev: 0.0054989",
            "group": "plugins",
            "extra": "mean: 188.89 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_front_matter",
            "value": 5.3331159469943685,
            "unit": "iter/sec",
            "range": "stddev: 0.0051844",
            "group": "plugins",
            "extra": "mean: 187.51 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_texmath",
            "value": 5.209112429350309,
            "unit": "iter/sec",
            "range": "stddev: 0.0059583",
            "group": "plugins",
            "extra": "mean: 191.97 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_dollarmath",
            "value": 5.284835962247181,
            "unit": "iter/sec",
            "range": "stddev: 0.0059166",
            "group": "plugins",
            "extra": "mean: 189.22 msec\nrounds: 20"
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
          "pythonVersion": "3.8.6"
        },
        "commit": {
          "id": "a5c28ff641e8feb64e549ba09070730acf5280cc",
          "message": "🐛 FIX: parsing of unicode ordinals (#81)\n\nCo-authored-by: Chris Sewell <chrisj_sewell@hotmail.com>",
          "timestamp": "2020-12-13T11:22:55Z",
          "url": "https://github.com/executablebooks/markdown-it-py/commit/a5c28ff641e8feb64e549ba09070730acf5280cc",
          "distinct": true,
          "tree_id": "eacc020d1533fff40623d84646ba1b88d852b39d"
        },
        "date": 1607858705893,
        "benches": [
          {
            "name": "benchmarking/bench_packages.py::test_markdown_it_py",
            "value": 5.3259966082546155,
            "unit": "iter/sec",
            "range": "stddev: 0.0055066",
            "group": "packages",
            "extra": "mean: 187.76 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_mistune",
            "value": 15.500594913608193,
            "unit": "iter/sec",
            "range": "stddev: 0.0025101",
            "group": "packages",
            "extra": "mean: 64.514 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_commonmark_py",
            "value": 2.6149435904440494,
            "unit": "iter/sec",
            "range": "stddev: 0.016208",
            "group": "packages",
            "extra": "mean: 382.42 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_pymarkdown",
            "value": 1.170782602527525,
            "unit": "iter/sec",
            "range": "stddev: 0.010928",
            "group": "packages",
            "extra": "mean: 854.13 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_pymarkdown_extra",
            "value": 1.0615036517774037,
            "unit": "iter/sec",
            "range": "stddev: 0.018925",
            "group": "packages",
            "extra": "mean: 942.06 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_mistletoe",
            "value": 4.798049228720644,
            "unit": "iter/sec",
            "range": "stddev: 0.0078111",
            "group": "packages",
            "extra": "mean: 208.42 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_panflute",
            "value": 1.1657895263938458,
            "unit": "iter/sec",
            "range": "stddev: 0.0068247",
            "group": "packages",
            "extra": "mean: 857.79 msec\nrounds: 20"
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
          "pythonVersion": "3.8.6"
        },
        "commit": {
          "id": "3a625acd6d44f59d2d3e04dabab6a385245915c3",
          "message": "🐛 FIX: skipSpacesBack and skipCharsBack methods (#86)",
          "timestamp": "2020-12-13T11:32:37Z",
          "url": "https://github.com/executablebooks/markdown-it-py/commit/3a625acd6d44f59d2d3e04dabab6a385245915c3",
          "distinct": true,
          "tree_id": "d9bd5126945988bb5c2143913883596541364208"
        },
        "date": 1607859223001,
        "benches": [
          {
            "name": "benchmarking/bench_plugins.py::test_base",
            "value": 6.2121268349902214,
            "unit": "iter/sec",
            "range": "stddev: 0.0047965",
            "group": "plugins",
            "extra": "mean: 160.98 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_table",
            "value": 6.069607573725518,
            "unit": "iter/sec",
            "range": "stddev: 0.0064160",
            "group": "plugins",
            "extra": "mean: 164.76 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_amsmath",
            "value": 5.101884418840636,
            "unit": "iter/sec",
            "range": "stddev: 0.0065776",
            "group": "plugins",
            "extra": "mean: 196.01 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_container",
            "value": 6.167374186651297,
            "unit": "iter/sec",
            "range": "stddev: 0.0050653",
            "group": "plugins",
            "extra": "mean: 162.14 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_deflist",
            "value": 6.214678123356171,
            "unit": "iter/sec",
            "range": "stddev: 0.0047032",
            "group": "plugins",
            "extra": "mean: 160.91 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_footnote",
            "value": 6.166409735548385,
            "unit": "iter/sec",
            "range": "stddev: 0.0044108",
            "group": "plugins",
            "extra": "mean: 162.17 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_front_matter",
            "value": 6.2361019659195716,
            "unit": "iter/sec",
            "range": "stddev: 0.0046277",
            "group": "plugins",
            "extra": "mean: 160.36 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_texmath",
            "value": 5.993087612302349,
            "unit": "iter/sec",
            "range": "stddev: 0.0054864",
            "group": "plugins",
            "extra": "mean: 166.86 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_dollarmath",
            "value": 6.11978028204253,
            "unit": "iter/sec",
            "range": "stddev: 0.0056105",
            "group": "plugins",
            "extra": "mean: 163.40 msec\nrounds: 20"
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
          "pythonVersion": "3.8.6"
        },
        "commit": {
          "id": "3a625acd6d44f59d2d3e04dabab6a385245915c3",
          "message": "🐛 FIX: skipSpacesBack and skipCharsBack methods (#86)",
          "timestamp": "2020-12-13T11:32:37Z",
          "url": "https://github.com/executablebooks/markdown-it-py/commit/3a625acd6d44f59d2d3e04dabab6a385245915c3",
          "distinct": true,
          "tree_id": "d9bd5126945988bb5c2143913883596541364208"
        },
        "date": 1607859288776,
        "benches": [
          {
            "name": "benchmarking/bench_packages.py::test_markdown_it_py",
            "value": 5.272621482993773,
            "unit": "iter/sec",
            "range": "stddev: 0.0058456",
            "group": "packages",
            "extra": "mean: 189.66 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_mistune",
            "value": 15.522644663382575,
            "unit": "iter/sec",
            "range": "stddev: 0.0024102",
            "group": "packages",
            "extra": "mean: 64.422 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_commonmark_py",
            "value": 2.6633098398222486,
            "unit": "iter/sec",
            "range": "stddev: 0.016309",
            "group": "packages",
            "extra": "mean: 375.47 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_pymarkdown",
            "value": 1.170928533275128,
            "unit": "iter/sec",
            "range": "stddev: 0.012165",
            "group": "packages",
            "extra": "mean: 854.02 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_pymarkdown_extra",
            "value": 1.059739350835122,
            "unit": "iter/sec",
            "range": "stddev: 0.019983",
            "group": "packages",
            "extra": "mean: 943.63 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_mistletoe",
            "value": 4.802928281974871,
            "unit": "iter/sec",
            "range": "stddev: 0.0070763",
            "group": "packages",
            "extra": "mean: 208.21 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_panflute",
            "value": 1.1637367076337797,
            "unit": "iter/sec",
            "range": "stddev: 0.0030578",
            "group": "packages",
            "extra": "mean: 859.30 msec\nrounds: 20"
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
          "pythonVersion": "3.8.6"
        },
        "commit": {
          "id": "3d6cc622d783f2047762a9ec477d4243c6f1d55f",
          "message": "🐛 FIX: Exception when doc ends in heading/blockquote marker (#84)",
          "timestamp": "2020-12-13T11:38:04Z",
          "url": "https://github.com/executablebooks/markdown-it-py/commit/3d6cc622d783f2047762a9ec477d4243c6f1d55f",
          "distinct": true,
          "tree_id": "604bb77ceab5b0b07f0c04d972473b46f513d8fa"
        },
        "date": 1607859570295,
        "benches": [
          {
            "name": "benchmarking/bench_plugins.py::test_base",
            "value": 4.497211891538769,
            "unit": "iter/sec",
            "range": "stddev: 0.0053703",
            "group": "plugins",
            "extra": "mean: 222.36 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_table",
            "value": 4.371310311110994,
            "unit": "iter/sec",
            "range": "stddev: 0.0062387",
            "group": "plugins",
            "extra": "mean: 228.76 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_amsmath",
            "value": 3.3335271029300397,
            "unit": "iter/sec",
            "range": "stddev: 0.015938",
            "group": "plugins",
            "extra": "mean: 299.98 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_container",
            "value": 4.416989163210558,
            "unit": "iter/sec",
            "range": "stddev: 0.0076419",
            "group": "plugins",
            "extra": "mean: 226.40 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_deflist",
            "value": 4.471537903986153,
            "unit": "iter/sec",
            "range": "stddev: 0.0048294",
            "group": "plugins",
            "extra": "mean: 223.64 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_footnote",
            "value": 4.450845921066099,
            "unit": "iter/sec",
            "range": "stddev: 0.0052508",
            "group": "plugins",
            "extra": "mean: 224.68 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_front_matter",
            "value": 4.446272238785605,
            "unit": "iter/sec",
            "range": "stddev: 0.0051496",
            "group": "plugins",
            "extra": "mean: 224.91 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_texmath",
            "value": 4.302375508687133,
            "unit": "iter/sec",
            "range": "stddev: 0.0075507",
            "group": "plugins",
            "extra": "mean: 232.43 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_dollarmath",
            "value": 4.424000822050159,
            "unit": "iter/sec",
            "range": "stddev: 0.0064023",
            "group": "plugins",
            "extra": "mean: 226.04 msec\nrounds: 20"
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
          "pythonVersion": "3.8.6"
        },
        "commit": {
          "id": "3d6cc622d783f2047762a9ec477d4243c6f1d55f",
          "message": "🐛 FIX: Exception when doc ends in heading/blockquote marker (#84)",
          "timestamp": "2020-12-13T11:38:04Z",
          "url": "https://github.com/executablebooks/markdown-it-py/commit/3d6cc622d783f2047762a9ec477d4243c6f1d55f",
          "distinct": true,
          "tree_id": "604bb77ceab5b0b07f0c04d972473b46f513d8fa"
        },
        "date": 1607859634633,
        "benches": [
          {
            "name": "benchmarking/bench_packages.py::test_markdown_it_py",
            "value": 4.553498771908285,
            "unit": "iter/sec",
            "range": "stddev: 0.0058516",
            "group": "packages",
            "extra": "mean: 219.61 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_mistune",
            "value": 13.070680526439011,
            "unit": "iter/sec",
            "range": "stddev: 0.0025990",
            "group": "packages",
            "extra": "mean: 76.507 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_commonmark_py",
            "value": 2.144791560929235,
            "unit": "iter/sec",
            "range": "stddev: 0.017606",
            "group": "packages",
            "extra": "mean: 466.25 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_pymarkdown",
            "value": 0.9950091861091279,
            "unit": "iter/sec",
            "range": "stddev: 0.0099475",
            "group": "packages",
            "extra": "mean: 1.0050 sec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_pymarkdown_extra",
            "value": 0.8821386972407667,
            "unit": "iter/sec",
            "range": "stddev: 0.030195",
            "group": "packages",
            "extra": "mean: 1.1336 sec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_mistletoe",
            "value": 3.867523516372789,
            "unit": "iter/sec",
            "range": "stddev: 0.0098210",
            "group": "packages",
            "extra": "mean: 258.56 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_panflute",
            "value": 0.993951222072188,
            "unit": "iter/sec",
            "range": "stddev: 0.031549",
            "group": "packages",
            "extra": "mean: 1.0061 sec\nrounds: 20"
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
          "pythonVersion": "3.8.6"
        },
        "commit": {
          "id": "aa54b8b0170357d60fa6b9332eb7328eeeaeedd9",
          "message": "🚀 RELEASE: v0.5.7",
          "timestamp": "2020-12-13T12:48:58Z",
          "url": "https://github.com/executablebooks/markdown-it-py/commit/aa54b8b0170357d60fa6b9332eb7328eeeaeedd9",
          "distinct": true,
          "tree_id": "954320a3644603add0bbc04afb4f54ce31474b4d"
        },
        "date": 1607863811824,
        "benches": [
          {
            "name": "benchmarking/bench_plugins.py::test_base",
            "value": 5.02228000807378,
            "unit": "iter/sec",
            "range": "stddev: 0.021187",
            "group": "plugins",
            "extra": "mean: 199.11 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_table",
            "value": 5.236014119207407,
            "unit": "iter/sec",
            "range": "stddev: 0.015084",
            "group": "plugins",
            "extra": "mean: 190.98 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_amsmath",
            "value": 3.8015702092267736,
            "unit": "iter/sec",
            "range": "stddev: 0.017664",
            "group": "plugins",
            "extra": "mean: 263.05 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_container",
            "value": 5.361000520632286,
            "unit": "iter/sec",
            "range": "stddev: 0.010538",
            "group": "plugins",
            "extra": "mean: 186.53 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_deflist",
            "value": 5.184850583349198,
            "unit": "iter/sec",
            "range": "stddev: 0.016836",
            "group": "plugins",
            "extra": "mean: 192.87 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_footnote",
            "value": 5.439347826721112,
            "unit": "iter/sec",
            "range": "stddev: 0.011433",
            "group": "plugins",
            "extra": "mean: 183.85 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_front_matter",
            "value": 5.4560828030926904,
            "unit": "iter/sec",
            "range": "stddev: 0.012459",
            "group": "plugins",
            "extra": "mean: 183.28 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_texmath",
            "value": 5.062351794873645,
            "unit": "iter/sec",
            "range": "stddev: 0.013612",
            "group": "plugins",
            "extra": "mean: 197.54 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_dollarmath",
            "value": 5.324902100603265,
            "unit": "iter/sec",
            "range": "stddev: 0.019730",
            "group": "plugins",
            "extra": "mean: 187.80 msec\nrounds: 20"
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
          "pythonVersion": "3.8.6"
        },
        "commit": {
          "id": "aa54b8b0170357d60fa6b9332eb7328eeeaeedd9",
          "message": "🚀 RELEASE: v0.5.7",
          "timestamp": "2020-12-13T12:48:58Z",
          "url": "https://github.com/executablebooks/markdown-it-py/commit/aa54b8b0170357d60fa6b9332eb7328eeeaeedd9",
          "distinct": true,
          "tree_id": "954320a3644603add0bbc04afb4f54ce31474b4d"
        },
        "date": 1607863877826,
        "benches": [
          {
            "name": "benchmarking/bench_packages.py::test_markdown_it_py",
            "value": 5.381187963813653,
            "unit": "iter/sec",
            "range": "stddev: 0.0088119",
            "group": "packages",
            "extra": "mean: 185.83 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_mistune",
            "value": 12.265880254309806,
            "unit": "iter/sec",
            "range": "stddev: 0.0031384",
            "group": "packages",
            "extra": "mean: 81.527 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_commonmark_py",
            "value": 1.5605267322345062,
            "unit": "iter/sec",
            "range": "stddev: 0.019676",
            "group": "packages",
            "extra": "mean: 640.81 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_pymarkdown",
            "value": 1.1155377904642796,
            "unit": "iter/sec",
            "range": "stddev: 0.025394",
            "group": "packages",
            "extra": "mean: 896.43 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_pymarkdown_extra",
            "value": 0.9881717351743772,
            "unit": "iter/sec",
            "range": "stddev: 0.053831",
            "group": "packages",
            "extra": "mean: 1.0120 sec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_mistletoe",
            "value": 4.638241434248195,
            "unit": "iter/sec",
            "range": "stddev: 0.0077707",
            "group": "packages",
            "extra": "mean: 215.60 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_panflute",
            "value": 1.1475857227439037,
            "unit": "iter/sec",
            "range": "stddev: 0.043341",
            "group": "packages",
            "extra": "mean: 871.39 msec\nrounds: 20"
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
          "pythonVersion": "3.8.6"
        },
        "commit": {
          "id": "49926455ba4829365a549074d39ef3598f98205d",
          "message": "✨ NEW: Add linkify (#78)",
          "timestamp": "2020-12-13T19:41:56Z",
          "url": "https://github.com/executablebooks/markdown-it-py/commit/49926455ba4829365a549074d39ef3598f98205d",
          "distinct": true,
          "tree_id": "984ff6d3e8476ef8206688f21b377781aa3f7a0b"
        },
        "date": 1607888588263,
        "benches": [
          {
            "name": "benchmarking/bench_plugins.py::test_base",
            "value": 5.4471932777482355,
            "unit": "iter/sec",
            "range": "stddev: 0.0048792",
            "group": "plugins",
            "extra": "mean: 183.58 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_table",
            "value": 5.328236101132283,
            "unit": "iter/sec",
            "range": "stddev: 0.0052423",
            "group": "plugins",
            "extra": "mean: 187.68 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_amsmath",
            "value": 4.365473523164021,
            "unit": "iter/sec",
            "range": "stddev: 0.012743",
            "group": "plugins",
            "extra": "mean: 229.07 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_container",
            "value": 5.353279222024792,
            "unit": "iter/sec",
            "range": "stddev: 0.0056879",
            "group": "plugins",
            "extra": "mean: 186.80 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_deflist",
            "value": 5.395228231825679,
            "unit": "iter/sec",
            "range": "stddev: 0.0048980",
            "group": "plugins",
            "extra": "mean: 185.35 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_footnote",
            "value": 5.361520548244684,
            "unit": "iter/sec",
            "range": "stddev: 0.0055155",
            "group": "plugins",
            "extra": "mean: 186.51 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_front_matter",
            "value": 5.398580850704168,
            "unit": "iter/sec",
            "range": "stddev: 0.0049732",
            "group": "plugins",
            "extra": "mean: 185.23 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_texmath",
            "value": 5.263589315138964,
            "unit": "iter/sec",
            "range": "stddev: 0.0056001",
            "group": "plugins",
            "extra": "mean: 189.98 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_dollarmath",
            "value": 5.370598436463177,
            "unit": "iter/sec",
            "range": "stddev: 0.0059880",
            "group": "plugins",
            "extra": "mean: 186.20 msec\nrounds: 20"
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
          "pythonVersion": "3.8.6"
        },
        "commit": {
          "id": "49926455ba4829365a549074d39ef3598f98205d",
          "message": "✨ NEW: Add linkify (#78)",
          "timestamp": "2020-12-13T19:41:56Z",
          "url": "https://github.com/executablebooks/markdown-it-py/commit/49926455ba4829365a549074d39ef3598f98205d",
          "distinct": true,
          "tree_id": "984ff6d3e8476ef8206688f21b377781aa3f7a0b"
        },
        "date": 1607888647378,
        "benches": [
          {
            "name": "benchmarking/bench_packages.py::test_markdown_it_py",
            "value": 5.3768132751310835,
            "unit": "iter/sec",
            "range": "stddev: 0.0069861",
            "group": "packages",
            "extra": "mean: 185.98 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_mistune",
            "value": 15.344996233271656,
            "unit": "iter/sec",
            "range": "stddev: 0.0025842",
            "group": "packages",
            "extra": "mean: 65.168 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_commonmark_py",
            "value": 2.5160111840878847,
            "unit": "iter/sec",
            "range": "stddev: 0.015945",
            "group": "packages",
            "extra": "mean: 397.45 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_pymarkdown",
            "value": 1.1743902245507105,
            "unit": "iter/sec",
            "range": "stddev: 0.0096940",
            "group": "packages",
            "extra": "mean: 851.51 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_pymarkdown_extra",
            "value": 1.0627392993593525,
            "unit": "iter/sec",
            "range": "stddev: 0.014997",
            "group": "packages",
            "extra": "mean: 940.96 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_mistletoe",
            "value": 4.831633128824089,
            "unit": "iter/sec",
            "range": "stddev: 0.0075638",
            "group": "packages",
            "extra": "mean: 206.97 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_panflute",
            "value": 1.167975387614387,
            "unit": "iter/sec",
            "range": "stddev: 0.0045955",
            "group": "packages",
            "extra": "mean: 856.18 msec\nrounds: 20"
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
          "pythonVersion": "3.8.6"
        },
        "commit": {
          "id": "7e90750fb956adff44b9bda67de5bc49b48092bf",
          "message": "🚀 RELEASE: v0.5.8",
          "timestamp": "2020-12-13T20:14:56Z",
          "url": "https://github.com/executablebooks/markdown-it-py/commit/7e90750fb956adff44b9bda67de5bc49b48092bf",
          "distinct": true,
          "tree_id": "0928bcfa0418f1497034eb1be0fc418a50b233db"
        },
        "date": 1607890589402,
        "benches": [
          {
            "name": "benchmarking/bench_plugins.py::test_base",
            "value": 4.467871777768447,
            "unit": "iter/sec",
            "range": "stddev: 0.0050541",
            "group": "plugins",
            "extra": "mean: 223.82 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_table",
            "value": 4.18253016533504,
            "unit": "iter/sec",
            "range": "stddev: 0.018211",
            "group": "plugins",
            "extra": "mean: 239.09 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_amsmath",
            "value": 3.0069326427255856,
            "unit": "iter/sec",
            "range": "stddev: 0.040040",
            "group": "plugins",
            "extra": "mean: 332.56 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_container",
            "value": 4.238076886596726,
            "unit": "iter/sec",
            "range": "stddev: 0.011641",
            "group": "plugins",
            "extra": "mean: 235.96 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_deflist",
            "value": 4.173893282888267,
            "unit": "iter/sec",
            "range": "stddev: 0.0065952",
            "group": "plugins",
            "extra": "mean: 239.58 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_footnote",
            "value": 4.084046263559043,
            "unit": "iter/sec",
            "range": "stddev: 0.0090052",
            "group": "plugins",
            "extra": "mean: 244.86 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_front_matter",
            "value": 4.183265485002716,
            "unit": "iter/sec",
            "range": "stddev: 0.0051032",
            "group": "plugins",
            "extra": "mean: 239.05 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_texmath",
            "value": 4.021778493591798,
            "unit": "iter/sec",
            "range": "stddev: 0.0079349",
            "group": "plugins",
            "extra": "mean: 248.65 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_dollarmath",
            "value": 4.139252873486712,
            "unit": "iter/sec",
            "range": "stddev: 0.0066886",
            "group": "plugins",
            "extra": "mean: 241.59 msec\nrounds: 20"
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
          "pythonVersion": "3.8.6"
        },
        "commit": {
          "id": "7e90750fb956adff44b9bda67de5bc49b48092bf",
          "message": "🚀 RELEASE: v0.5.8",
          "timestamp": "2020-12-13T20:14:56Z",
          "url": "https://github.com/executablebooks/markdown-it-py/commit/7e90750fb956adff44b9bda67de5bc49b48092bf",
          "distinct": true,
          "tree_id": "0928bcfa0418f1497034eb1be0fc418a50b233db"
        },
        "date": 1607890656436,
        "benches": [
          {
            "name": "benchmarking/bench_packages.py::test_markdown_it_py",
            "value": 4.878618304439171,
            "unit": "iter/sec",
            "range": "stddev: 0.010217",
            "group": "packages",
            "extra": "mean: 204.98 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_mistune",
            "value": 12.106453466629752,
            "unit": "iter/sec",
            "range": "stddev: 0.0045926",
            "group": "packages",
            "extra": "mean: 82.601 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_commonmark_py",
            "value": 1.6476121492780287,
            "unit": "iter/sec",
            "range": "stddev: 0.018515",
            "group": "packages",
            "extra": "mean: 606.94 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_pymarkdown",
            "value": 1.0097656993981357,
            "unit": "iter/sec",
            "range": "stddev: 0.015330",
            "group": "packages",
            "extra": "mean: 990.33 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_pymarkdown_extra",
            "value": 0.9180335844005851,
            "unit": "iter/sec",
            "range": "stddev: 0.016206",
            "group": "packages",
            "extra": "mean: 1.0893 sec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_mistletoe",
            "value": 4.353961461338173,
            "unit": "iter/sec",
            "range": "stddev: 0.0058156",
            "group": "packages",
            "extra": "mean: 229.68 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_panflute",
            "value": 1.1139758229102816,
            "unit": "iter/sec",
            "range": "stddev: 0.015489",
            "group": "packages",
            "extra": "mean: 897.69 msec\nrounds: 20"
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
          "pythonVersion": "3.8.6"
        },
        "commit": {
          "id": "3a5bdcc98e67de9df26ebb8bc7cd0221a0d6b51b",
          "message": "✨ NEW: Add colon_fence plugin (#91)",
          "timestamp": "2020-12-14T16:36:52Z",
          "url": "https://github.com/executablebooks/markdown-it-py/commit/3a5bdcc98e67de9df26ebb8bc7cd0221a0d6b51b",
          "distinct": true,
          "tree_id": "13986fcc5d3843e4d8f94a093a478d817fdd7869"
        },
        "date": 1607963881294,
        "benches": [
          {
            "name": "benchmarking/bench_plugins.py::test_base",
            "value": 6.113693921605255,
            "unit": "iter/sec",
            "range": "stddev: 0.0047129",
            "group": "plugins",
            "extra": "mean: 163.57 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_table",
            "value": 5.987268728056968,
            "unit": "iter/sec",
            "range": "stddev: 0.0052543",
            "group": "plugins",
            "extra": "mean: 167.02 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_amsmath",
            "value": 4.928263506443304,
            "unit": "iter/sec",
            "range": "stddev: 0.0061535",
            "group": "plugins",
            "extra": "mean: 202.91 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_container",
            "value": 5.925040663405848,
            "unit": "iter/sec",
            "range": "stddev: 0.014223",
            "group": "plugins",
            "extra": "mean: 168.78 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_deflist",
            "value": 6.066841773839939,
            "unit": "iter/sec",
            "range": "stddev: 0.0050136",
            "group": "plugins",
            "extra": "mean: 164.83 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_footnote",
            "value": 6.0327656241974426,
            "unit": "iter/sec",
            "range": "stddev: 0.0053018",
            "group": "plugins",
            "extra": "mean: 165.76 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_front_matter",
            "value": 6.0647321349533305,
            "unit": "iter/sec",
            "range": "stddev: 0.0047059",
            "group": "plugins",
            "extra": "mean: 164.89 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_texmath",
            "value": 5.888639339051381,
            "unit": "iter/sec",
            "range": "stddev: 0.0057354",
            "group": "plugins",
            "extra": "mean: 169.82 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_dollarmath",
            "value": 5.986640579265691,
            "unit": "iter/sec",
            "range": "stddev: 0.0084652",
            "group": "plugins",
            "extra": "mean: 167.04 msec\nrounds: 20"
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
          "pythonVersion": "3.8.6"
        },
        "commit": {
          "id": "3a5bdcc98e67de9df26ebb8bc7cd0221a0d6b51b",
          "message": "✨ NEW: Add colon_fence plugin (#91)",
          "timestamp": "2020-12-14T16:36:52Z",
          "url": "https://github.com/executablebooks/markdown-it-py/commit/3a5bdcc98e67de9df26ebb8bc7cd0221a0d6b51b",
          "distinct": true,
          "tree_id": "13986fcc5d3843e4d8f94a093a478d817fdd7869"
        },
        "date": 1607963956119,
        "benches": [
          {
            "name": "benchmarking/bench_packages.py::test_markdown_it_py",
            "value": 5.018751995949831,
            "unit": "iter/sec",
            "range": "stddev: 0.0062415",
            "group": "packages",
            "extra": "mean: 199.25 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_mistune",
            "value": 13.87519521783993,
            "unit": "iter/sec",
            "range": "stddev: 0.0030834",
            "group": "packages",
            "extra": "mean: 72.071 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_commonmark_py",
            "value": 2.530794492584599,
            "unit": "iter/sec",
            "range": "stddev: 0.018752",
            "group": "packages",
            "extra": "mean: 395.13 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_pymarkdown",
            "value": 1.0291166520744124,
            "unit": "iter/sec",
            "range": "stddev: 0.030682",
            "group": "packages",
            "extra": "mean: 971.71 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_pymarkdown_extra",
            "value": 0.9303330289141004,
            "unit": "iter/sec",
            "range": "stddev: 0.019961",
            "group": "packages",
            "extra": "mean: 1.0749 sec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_mistletoe",
            "value": 4.180509917500706,
            "unit": "iter/sec",
            "range": "stddev: 0.0070748",
            "group": "packages",
            "extra": "mean: 239.21 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_panflute",
            "value": 1.060521258249129,
            "unit": "iter/sec",
            "range": "stddev: 0.027705",
            "group": "packages",
            "extra": "mean: 942.93 msec\nrounds: 20"
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
          "pythonVersion": "3.8.6"
        },
        "commit": {
          "id": "b16ee04c1c3b070a08ca020b98188e4fe0577bf7",
          "message": "🔧 MAINTAIN: Add mypy type-checking (#64)",
          "timestamp": "2020-12-14T18:13:14Z",
          "url": "https://github.com/executablebooks/markdown-it-py/commit/b16ee04c1c3b070a08ca020b98188e4fe0577bf7",
          "distinct": true,
          "tree_id": "65ea9e20e3ad4ec14c62fc9e20232d1db2919365"
        },
        "date": 1607969667734,
        "benches": [
          {
            "name": "benchmarking/bench_plugins.py::test_base",
            "value": 5.339446983042627,
            "unit": "iter/sec",
            "range": "stddev: 0.0049921",
            "group": "plugins",
            "extra": "mean: 187.29 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_table",
            "value": 5.234159755750601,
            "unit": "iter/sec",
            "range": "stddev: 0.0044677",
            "group": "plugins",
            "extra": "mean: 191.05 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_amsmath",
            "value": 4.365570761693226,
            "unit": "iter/sec",
            "range": "stddev: 0.0053366",
            "group": "plugins",
            "extra": "mean: 229.07 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_container",
            "value": 5.2595930989380495,
            "unit": "iter/sec",
            "range": "stddev: 0.0061314",
            "group": "plugins",
            "extra": "mean: 190.13 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_deflist",
            "value": 5.198521366580843,
            "unit": "iter/sec",
            "range": "stddev: 0.011006",
            "group": "plugins",
            "extra": "mean: 192.36 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_footnote",
            "value": 5.276592991960842,
            "unit": "iter/sec",
            "range": "stddev: 0.0050994",
            "group": "plugins",
            "extra": "mean: 189.52 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_front_matter",
            "value": 5.26361971919036,
            "unit": "iter/sec",
            "range": "stddev: 0.0072117",
            "group": "plugins",
            "extra": "mean: 189.98 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_texmath",
            "value": 5.135277997944431,
            "unit": "iter/sec",
            "range": "stddev: 0.0064776",
            "group": "plugins",
            "extra": "mean: 194.73 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_dollarmath",
            "value": 5.284980135420504,
            "unit": "iter/sec",
            "range": "stddev: 0.0056825",
            "group": "plugins",
            "extra": "mean: 189.22 msec\nrounds: 20"
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
          "pythonVersion": "3.8.6"
        },
        "commit": {
          "id": "b16ee04c1c3b070a08ca020b98188e4fe0577bf7",
          "message": "🔧 MAINTAIN: Add mypy type-checking (#64)",
          "timestamp": "2020-12-14T18:13:14Z",
          "url": "https://github.com/executablebooks/markdown-it-py/commit/b16ee04c1c3b070a08ca020b98188e4fe0577bf7",
          "distinct": true,
          "tree_id": "65ea9e20e3ad4ec14c62fc9e20232d1db2919365"
        },
        "date": 1607969786685,
        "benches": [
          {
            "name": "benchmarking/bench_packages.py::test_markdown_it_py",
            "value": 5.95704067724951,
            "unit": "iter/sec",
            "range": "stddev: 0.0062680",
            "group": "packages",
            "extra": "mean: 167.87 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_mistune",
            "value": 17.0540637226705,
            "unit": "iter/sec",
            "range": "stddev: 0.0032288",
            "group": "packages",
            "extra": "mean: 58.637 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_commonmark_py",
            "value": 2.654070453249836,
            "unit": "iter/sec",
            "range": "stddev: 0.018381",
            "group": "packages",
            "extra": "mean: 376.78 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_pymarkdown",
            "value": 1.3192331642648392,
            "unit": "iter/sec",
            "range": "stddev: 0.011211",
            "group": "packages",
            "extra": "mean: 758.02 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_pymarkdown_extra",
            "value": 1.172750074014942,
            "unit": "iter/sec",
            "range": "stddev: 0.036533",
            "group": "packages",
            "extra": "mean: 852.70 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_mistletoe",
            "value": 5.355385111207245,
            "unit": "iter/sec",
            "range": "stddev: 0.0081714",
            "group": "packages",
            "extra": "mean: 186.73 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_panflute",
            "value": 1.145408902416515,
            "unit": "iter/sec",
            "range": "stddev: 0.040183",
            "group": "packages",
            "extra": "mean: 873.05 msec\nrounds: 20"
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
          "pythonVersion": "3.8.6"
        },
        "commit": {
          "id": "5ef2bd7223249a5d2fd8ee34c8cd88c8bf632db1",
          "message": "🔧 MAINTAIN: Distribute type data (PEP 561) (#74)",
          "timestamp": "2020-12-14T18:17:30Z",
          "url": "https://github.com/executablebooks/markdown-it-py/commit/5ef2bd7223249a5d2fd8ee34c8cd88c8bf632db1",
          "distinct": true,
          "tree_id": "7f18344b0eeb796497c35fd95712c33a9b7bd132"
        },
        "date": 1607969943271,
        "benches": [
          {
            "name": "benchmarking/bench_plugins.py::test_base",
            "value": 4.122959263980677,
            "unit": "iter/sec",
            "range": "stddev: 0.011532",
            "group": "plugins",
            "extra": "mean: 242.54 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_table",
            "value": 4.095522515703073,
            "unit": "iter/sec",
            "range": "stddev: 0.0090114",
            "group": "plugins",
            "extra": "mean: 244.17 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_amsmath",
            "value": 3.023257777418852,
            "unit": "iter/sec",
            "range": "stddev: 0.0087699",
            "group": "plugins",
            "extra": "mean: 330.77 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_container",
            "value": 4.177970926005291,
            "unit": "iter/sec",
            "range": "stddev: 0.010300",
            "group": "plugins",
            "extra": "mean: 239.35 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_deflist",
            "value": 4.22541998720427,
            "unit": "iter/sec",
            "range": "stddev: 0.0099012",
            "group": "plugins",
            "extra": "mean: 236.66 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_footnote",
            "value": 4.2073078687612515,
            "unit": "iter/sec",
            "range": "stddev: 0.010614",
            "group": "plugins",
            "extra": "mean: 237.68 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_front_matter",
            "value": 4.275704136987202,
            "unit": "iter/sec",
            "range": "stddev: 0.0091982",
            "group": "plugins",
            "extra": "mean: 233.88 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_texmath",
            "value": 4.132430074095793,
            "unit": "iter/sec",
            "range": "stddev: 0.012723",
            "group": "plugins",
            "extra": "mean: 241.99 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_dollarmath",
            "value": 4.188499737256322,
            "unit": "iter/sec",
            "range": "stddev: 0.0094244",
            "group": "plugins",
            "extra": "mean: 238.75 msec\nrounds: 20"
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
          "pythonVersion": "3.8.6"
        },
        "commit": {
          "id": "5ef2bd7223249a5d2fd8ee34c8cd88c8bf632db1",
          "message": "🔧 MAINTAIN: Distribute type data (PEP 561) (#74)",
          "timestamp": "2020-12-14T18:17:30Z",
          "url": "https://github.com/executablebooks/markdown-it-py/commit/5ef2bd7223249a5d2fd8ee34c8cd88c8bf632db1",
          "distinct": true,
          "tree_id": "7f18344b0eeb796497c35fd95712c33a9b7bd132"
        },
        "date": 1607969982583,
        "benches": [
          {
            "name": "benchmarking/bench_packages.py::test_markdown_it_py",
            "value": 5.336075495573007,
            "unit": "iter/sec",
            "range": "stddev: 0.0062256",
            "group": "packages",
            "extra": "mean: 187.40 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_mistune",
            "value": 15.148779649153603,
            "unit": "iter/sec",
            "range": "stddev: 0.0025645",
            "group": "packages",
            "extra": "mean: 66.012 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_commonmark_py",
            "value": 2.073905845806327,
            "unit": "iter/sec",
            "range": "stddev: 0.017439",
            "group": "packages",
            "extra": "mean: 482.18 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_pymarkdown",
            "value": 1.164746912053794,
            "unit": "iter/sec",
            "range": "stddev: 0.018430",
            "group": "packages",
            "extra": "mean: 858.56 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_pymarkdown_extra",
            "value": 1.055624272036261,
            "unit": "iter/sec",
            "range": "stddev: 0.013285",
            "group": "packages",
            "extra": "mean: 947.31 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_mistletoe",
            "value": 4.8014143776005564,
            "unit": "iter/sec",
            "range": "stddev: 0.0081458",
            "group": "packages",
            "extra": "mean: 208.27 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_panflute",
            "value": 1.1276091302894415,
            "unit": "iter/sec",
            "range": "stddev: 0.029617",
            "group": "packages",
            "extra": "mean: 886.83 msec\nrounds: 20"
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
          "pythonVersion": "3.8.6"
        },
        "commit": {
          "id": "2eb1fe6b47cc0ad4ebe954cabd91fb8e52a2f03d",
          "message": "👌 IMPROVE: Replace `_Entities` with `AttrDict` (#85)",
          "timestamp": "2020-12-14T18:22:08Z",
          "url": "https://github.com/executablebooks/markdown-it-py/commit/2eb1fe6b47cc0ad4ebe954cabd91fb8e52a2f03d",
          "distinct": true,
          "tree_id": "8e2d0b468703d187eaf0f2c1db2880ee543b10d7"
        },
        "date": 1607970218657,
        "benches": [
          {
            "name": "benchmarking/bench_plugins.py::test_base",
            "value": 4.387022402106572,
            "unit": "iter/sec",
            "range": "stddev: 0.010464",
            "group": "plugins",
            "extra": "mean: 227.95 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_table",
            "value": 4.314139610801643,
            "unit": "iter/sec",
            "range": "stddev: 0.0075630",
            "group": "plugins",
            "extra": "mean: 231.80 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_amsmath",
            "value": 3.345966290046784,
            "unit": "iter/sec",
            "range": "stddev: 0.0091490",
            "group": "plugins",
            "extra": "mean: 298.87 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_container",
            "value": 4.351494465847528,
            "unit": "iter/sec",
            "range": "stddev: 0.0084569",
            "group": "plugins",
            "extra": "mean: 229.81 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_deflist",
            "value": 4.4091396918224826,
            "unit": "iter/sec",
            "range": "stddev: 0.0067740",
            "group": "plugins",
            "extra": "mean: 226.80 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_footnote",
            "value": 4.303940532536284,
            "unit": "iter/sec",
            "range": "stddev: 0.0079143",
            "group": "plugins",
            "extra": "mean: 232.35 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_front_matter",
            "value": 4.384460748023737,
            "unit": "iter/sec",
            "range": "stddev: 0.0061386",
            "group": "plugins",
            "extra": "mean: 228.08 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_texmath",
            "value": 4.303961096020519,
            "unit": "iter/sec",
            "range": "stddev: 0.0063502",
            "group": "plugins",
            "extra": "mean: 232.34 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_dollarmath",
            "value": 4.398171972037866,
            "unit": "iter/sec",
            "range": "stddev: 0.0081534",
            "group": "plugins",
            "extra": "mean: 227.37 msec\nrounds: 20"
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
          "pythonVersion": "3.8.6"
        },
        "commit": {
          "id": "2eb1fe6b47cc0ad4ebe954cabd91fb8e52a2f03d",
          "message": "👌 IMPROVE: Replace `_Entities` with `AttrDict` (#85)",
          "timestamp": "2020-12-14T18:22:08Z",
          "url": "https://github.com/executablebooks/markdown-it-py/commit/2eb1fe6b47cc0ad4ebe954cabd91fb8e52a2f03d",
          "distinct": true,
          "tree_id": "8e2d0b468703d187eaf0f2c1db2880ee543b10d7"
        },
        "date": 1607970276244,
        "benches": [
          {
            "name": "benchmarking/bench_packages.py::test_markdown_it_py",
            "value": 4.237332483945896,
            "unit": "iter/sec",
            "range": "stddev: 0.0095624",
            "group": "packages",
            "extra": "mean: 236.00 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_mistune",
            "value": 12.318476978884997,
            "unit": "iter/sec",
            "range": "stddev: 0.0055211",
            "group": "packages",
            "extra": "mean: 81.179 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_commonmark_py",
            "value": 2.070285793818697,
            "unit": "iter/sec",
            "range": "stddev: 0.020720",
            "group": "packages",
            "extra": "mean: 483.03 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_pymarkdown",
            "value": 1.0181831056984194,
            "unit": "iter/sec",
            "range": "stddev: 0.025096",
            "group": "packages",
            "extra": "mean: 982.14 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_pymarkdown_extra",
            "value": 0.9247805421536724,
            "unit": "iter/sec",
            "range": "stddev: 0.026910",
            "group": "packages",
            "extra": "mean: 1.0813 sec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_mistletoe",
            "value": 4.1769664437228915,
            "unit": "iter/sec",
            "range": "stddev: 0.0078070",
            "group": "packages",
            "extra": "mean: 239.41 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_panflute",
            "value": 1.0000461685814346,
            "unit": "iter/sec",
            "range": "stddev: 0.026306",
            "group": "packages",
            "extra": "mean: 999.95 msec\nrounds: 20"
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
          "pythonVersion": "3.8.6"
        },
        "commit": {
          "id": "bddc8829c33faa26a89ad1df85bbe8cfe0d80729",
          "message": "🗑 DEPRECATE: Move plugins to `mdit_py_plugins` (#93)\n\nPlugins (in `markdown_it.extensions`) have now been moved to <https://github.com/executablebooks/mdit-py-plugins>.\r\nThis will allow for their maintenance to occur on a different cycle to the core code, facilitating the release of a v1.0.0 for this package",
          "timestamp": "2020-12-15T08:40:01Z",
          "url": "https://github.com/executablebooks/markdown-it-py/commit/bddc8829c33faa26a89ad1df85bbe8cfe0d80729",
          "distinct": true,
          "tree_id": "b8d6ae615c947d5ca5a80318ffa31b454ed26d3c"
        },
        "date": 1608021691010,
        "benches": [
          {
            "name": "benchmarking/bench_plugins.py::test_base",
            "value": 4.59489305500365,
            "unit": "iter/sec",
            "range": "stddev: 0.0064688",
            "group": "plugins",
            "extra": "mean: 217.63 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_table",
            "value": 4.520629509530347,
            "unit": "iter/sec",
            "range": "stddev: 0.0058981",
            "group": "plugins",
            "extra": "mean: 221.21 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_amsmath",
            "value": 3.738530567446297,
            "unit": "iter/sec",
            "range": "stddev: 0.0058145",
            "group": "plugins",
            "extra": "mean: 267.48 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_container",
            "value": 4.535836349833019,
            "unit": "iter/sec",
            "range": "stddev: 0.0058703",
            "group": "plugins",
            "extra": "mean: 220.47 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_deflist",
            "value": 4.561321952895505,
            "unit": "iter/sec",
            "range": "stddev: 0.0056025",
            "group": "plugins",
            "extra": "mean: 219.23 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_footnote",
            "value": 4.52609589020058,
            "unit": "iter/sec",
            "range": "stddev: 0.0050273",
            "group": "plugins",
            "extra": "mean: 220.94 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_front_matter",
            "value": 4.485229627185157,
            "unit": "iter/sec",
            "range": "stddev: 0.0090780",
            "group": "plugins",
            "extra": "mean: 222.95 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_texmath",
            "value": 4.239339138646564,
            "unit": "iter/sec",
            "range": "stddev: 0.0099818",
            "group": "plugins",
            "extra": "mean: 235.89 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_dollarmath",
            "value": 4.547098426945965,
            "unit": "iter/sec",
            "range": "stddev: 0.0060732",
            "group": "plugins",
            "extra": "mean: 219.92 msec\nrounds: 20"
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
          "pythonVersion": "3.8.6"
        },
        "commit": {
          "id": "bddc8829c33faa26a89ad1df85bbe8cfe0d80729",
          "message": "🗑 DEPRECATE: Move plugins to `mdit_py_plugins` (#93)\n\nPlugins (in `markdown_it.extensions`) have now been moved to <https://github.com/executablebooks/mdit-py-plugins>.\r\nThis will allow for their maintenance to occur on a different cycle to the core code, facilitating the release of a v1.0.0 for this package",
          "timestamp": "2020-12-15T08:40:01Z",
          "url": "https://github.com/executablebooks/markdown-it-py/commit/bddc8829c33faa26a89ad1df85bbe8cfe0d80729",
          "distinct": true,
          "tree_id": "b8d6ae615c947d5ca5a80318ffa31b454ed26d3c"
        },
        "date": 1608021743601,
        "benches": [
          {
            "name": "benchmarking/bench_packages.py::test_markdown_it_py",
            "value": 5.341808512818537,
            "unit": "iter/sec",
            "range": "stddev: 0.0053048",
            "group": "packages",
            "extra": "mean: 187.20 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_mistune",
            "value": 15.478986322948389,
            "unit": "iter/sec",
            "range": "stddev: 0.0027064",
            "group": "packages",
            "extra": "mean: 64.604 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_commonmark_py",
            "value": 2.580236641578541,
            "unit": "iter/sec",
            "range": "stddev: 0.017599",
            "group": "packages",
            "extra": "mean: 387.56 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_pymarkdown",
            "value": 1.1731475213192482,
            "unit": "iter/sec",
            "range": "stddev: 0.0096780",
            "group": "packages",
            "extra": "mean: 852.41 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_pymarkdown_extra",
            "value": 1.0680216728261713,
            "unit": "iter/sec",
            "range": "stddev: 0.0095720",
            "group": "packages",
            "extra": "mean: 936.31 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_mistletoe",
            "value": 4.776744667740124,
            "unit": "iter/sec",
            "range": "stddev: 0.0075278",
            "group": "packages",
            "extra": "mean: 209.35 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_panflute",
            "value": 1.1664871848146317,
            "unit": "iter/sec",
            "range": "stddev: 0.0045242",
            "group": "packages",
            "extra": "mean: 857.27 msec\nrounds: 20"
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
          "pythonVersion": "3.8.6"
        },
        "commit": {
          "id": "047a71f67ea8cf5c52faa1e42a3c9698a7274ab5",
          "message": "🚀 RELEASE: v0.6.0 (#94)",
          "timestamp": "2020-12-15T13:45:56Z",
          "url": "https://github.com/executablebooks/markdown-it-py/commit/047a71f67ea8cf5c52faa1e42a3c9698a7274ab5",
          "distinct": true,
          "tree_id": "c5f8c29bbc357c749dd158ab1d32410bfb18b3ae"
        },
        "date": 1608040047466,
        "benches": [
          {
            "name": "benchmarking/bench_plugins.py::test_base",
            "value": 5.119218344339473,
            "unit": "iter/sec",
            "range": "stddev: 0.0058030",
            "group": "plugins",
            "extra": "mean: 195.34 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_table",
            "value": 5.030179530402233,
            "unit": "iter/sec",
            "range": "stddev: 0.0086611",
            "group": "plugins",
            "extra": "mean: 198.80 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_amsmath",
            "value": 4.149514671114662,
            "unit": "iter/sec",
            "range": "stddev: 0.0083119",
            "group": "plugins",
            "extra": "mean: 240.99 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_container",
            "value": 4.93727487398214,
            "unit": "iter/sec",
            "range": "stddev: 0.0097001",
            "group": "plugins",
            "extra": "mean: 202.54 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_deflist",
            "value": 4.9840051810528125,
            "unit": "iter/sec",
            "range": "stddev: 0.0067009",
            "group": "plugins",
            "extra": "mean: 200.64 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_footnote",
            "value": 4.786643198412447,
            "unit": "iter/sec",
            "range": "stddev: 0.0089413",
            "group": "plugins",
            "extra": "mean: 208.91 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_front_matter",
            "value": 5.01580908413156,
            "unit": "iter/sec",
            "range": "stddev: 0.0090227",
            "group": "plugins",
            "extra": "mean: 199.37 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_texmath",
            "value": 4.971517723795188,
            "unit": "iter/sec",
            "range": "stddev: 0.0069810",
            "group": "plugins",
            "extra": "mean: 201.15 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_dollarmath",
            "value": 4.910823524462416,
            "unit": "iter/sec",
            "range": "stddev: 0.0093630",
            "group": "plugins",
            "extra": "mean: 203.63 msec\nrounds: 20"
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
          "pythonVersion": "3.8.6"
        },
        "commit": {
          "id": "047a71f67ea8cf5c52faa1e42a3c9698a7274ab5",
          "message": "🚀 RELEASE: v0.6.0 (#94)",
          "timestamp": "2020-12-15T13:45:56Z",
          "url": "https://github.com/executablebooks/markdown-it-py/commit/047a71f67ea8cf5c52faa1e42a3c9698a7274ab5",
          "distinct": true,
          "tree_id": "c5f8c29bbc357c749dd158ab1d32410bfb18b3ae"
        },
        "date": 1608040157237,
        "benches": [
          {
            "name": "benchmarking/bench_packages.py::test_markdown_it_py",
            "value": 4.209997470088353,
            "unit": "iter/sec",
            "range": "stddev: 0.0081530",
            "group": "packages",
            "extra": "mean: 237.53 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_mistune",
            "value": 10.34412520762102,
            "unit": "iter/sec",
            "range": "stddev: 0.0046995",
            "group": "packages",
            "extra": "mean: 96.673 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_commonmark_py",
            "value": 1.4182715856472596,
            "unit": "iter/sec",
            "range": "stddev: 0.017404",
            "group": "packages",
            "extra": "mean: 705.08 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_pymarkdown",
            "value": 0.8917935420644117,
            "unit": "iter/sec",
            "range": "stddev: 0.017099",
            "group": "packages",
            "extra": "mean: 1.1213 sec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_pymarkdown_extra",
            "value": 0.8092244726034857,
            "unit": "iter/sec",
            "range": "stddev: 0.019771",
            "group": "packages",
            "extra": "mean: 1.2358 sec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_mistletoe",
            "value": 3.7114701281488,
            "unit": "iter/sec",
            "range": "stddev: 0.0089909",
            "group": "packages",
            "extra": "mean: 269.44 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_panflute",
            "value": 0.9403593760857951,
            "unit": "iter/sec",
            "range": "stddev: 0.018028",
            "group": "packages",
            "extra": "mean: 1.0634 sec\nrounds: 20"
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
          "pythonVersion": "3.8.6"
        },
        "commit": {
          "id": "f016794be9efc6aa0fe5b6fc41248a4ad9e55072",
          "message": "🔧 MAINTAIN: Add more type annotations (#96)",
          "timestamp": "2020-12-19T03:04:36Z",
          "url": "https://github.com/executablebooks/markdown-it-py/commit/f016794be9efc6aa0fe5b6fc41248a4ad9e55072",
          "distinct": true,
          "tree_id": "935fdb91ce2b0623128533f13650abb7589f25e8"
        },
        "date": 1608347145640,
        "benches": [
          {
            "name": "benchmarking/bench_plugins.py::test_base",
            "value": 5.416887320863222,
            "unit": "iter/sec",
            "range": "stddev: 0.0055462",
            "group": "plugins",
            "extra": "mean: 184.61 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_table",
            "value": 5.306192320920033,
            "unit": "iter/sec",
            "range": "stddev: 0.0051320",
            "group": "plugins",
            "extra": "mean: 188.46 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_amsmath",
            "value": 4.405354706178344,
            "unit": "iter/sec",
            "range": "stddev: 0.0052924",
            "group": "plugins",
            "extra": "mean: 227.00 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_container",
            "value": 5.317833189679399,
            "unit": "iter/sec",
            "range": "stddev: 0.0055175",
            "group": "plugins",
            "extra": "mean: 188.05 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_deflist",
            "value": 5.3472555777155355,
            "unit": "iter/sec",
            "range": "stddev: 0.0050595",
            "group": "plugins",
            "extra": "mean: 187.01 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_footnote",
            "value": 5.311231239388517,
            "unit": "iter/sec",
            "range": "stddev: 0.0050292",
            "group": "plugins",
            "extra": "mean: 188.28 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_front_matter",
            "value": 5.366762300349349,
            "unit": "iter/sec",
            "range": "stddev: 0.0051971",
            "group": "plugins",
            "extra": "mean: 186.33 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_texmath",
            "value": 5.218709308443275,
            "unit": "iter/sec",
            "range": "stddev: 0.0056483",
            "group": "plugins",
            "extra": "mean: 191.62 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_dollarmath",
            "value": 5.345934735051194,
            "unit": "iter/sec",
            "range": "stddev: 0.0054488",
            "group": "plugins",
            "extra": "mean: 187.06 msec\nrounds: 20"
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
          "pythonVersion": "3.8.6"
        },
        "commit": {
          "id": "f016794be9efc6aa0fe5b6fc41248a4ad9e55072",
          "message": "🔧 MAINTAIN: Add more type annotations (#96)",
          "timestamp": "2020-12-19T03:04:36Z",
          "url": "https://github.com/executablebooks/markdown-it-py/commit/f016794be9efc6aa0fe5b6fc41248a4ad9e55072",
          "distinct": true,
          "tree_id": "935fdb91ce2b0623128533f13650abb7589f25e8"
        },
        "date": 1608347223858,
        "benches": [
          {
            "name": "benchmarking/bench_packages.py::test_markdown_it_py",
            "value": 4.576584199706255,
            "unit": "iter/sec",
            "range": "stddev: 0.0057285",
            "group": "packages",
            "extra": "mean: 218.50 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_mistune",
            "value": 12.965901006116345,
            "unit": "iter/sec",
            "range": "stddev: 0.0026276",
            "group": "packages",
            "extra": "mean: 77.125 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_commonmark_py",
            "value": 2.1149162393641148,
            "unit": "iter/sec",
            "range": "stddev: 0.016454",
            "group": "packages",
            "extra": "mean: 472.83 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_pymarkdown",
            "value": 0.98209703572206,
            "unit": "iter/sec",
            "range": "stddev: 0.0092129",
            "group": "packages",
            "extra": "mean: 1.0182 sec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_pymarkdown_extra",
            "value": 0.8885936162994491,
            "unit": "iter/sec",
            "range": "stddev: 0.030870",
            "group": "packages",
            "extra": "mean: 1.1254 sec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_mistletoe",
            "value": 4.088857007507412,
            "unit": "iter/sec",
            "range": "stddev: 0.0074021",
            "group": "packages",
            "extra": "mean: 244.57 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_panflute",
            "value": 1.0037542332520504,
            "unit": "iter/sec",
            "range": "stddev: 0.0081079",
            "group": "packages",
            "extra": "mean: 996.26 msec\nrounds: 20"
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
          "pythonVersion": "3.8.6"
        },
        "commit": {
          "id": "b232bf1cec0e29fd20c202c5b0dd880e531362c3",
          "message": "📚 DOCS: Fix docstring (#99)",
          "timestamp": "2020-12-19T03:14:47Z",
          "url": "https://github.com/executablebooks/markdown-it-py/commit/b232bf1cec0e29fd20c202c5b0dd880e531362c3",
          "distinct": true,
          "tree_id": "9ad805db0cb5d3a242ba1ec5ec1cf186d1169dac"
        },
        "date": 1608347767217,
        "benches": [
          {
            "name": "benchmarking/bench_plugins.py::test_base",
            "value": 4.801980661054321,
            "unit": "iter/sec",
            "range": "stddev: 0.0074562",
            "group": "plugins",
            "extra": "mean: 208.25 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_table",
            "value": 4.663782060874821,
            "unit": "iter/sec",
            "range": "stddev: 0.0087100",
            "group": "plugins",
            "extra": "mean: 214.42 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_amsmath",
            "value": 3.7311315049755156,
            "unit": "iter/sec",
            "range": "stddev: 0.0055281",
            "group": "plugins",
            "extra": "mean: 268.02 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_container",
            "value": 4.509471080558703,
            "unit": "iter/sec",
            "range": "stddev: 0.0065579",
            "group": "plugins",
            "extra": "mean: 221.76 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_deflist",
            "value": 4.524998345326902,
            "unit": "iter/sec",
            "range": "stddev: 0.0055667",
            "group": "plugins",
            "extra": "mean: 220.99 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_footnote",
            "value": 4.536054784277885,
            "unit": "iter/sec",
            "range": "stddev: 0.0051340",
            "group": "plugins",
            "extra": "mean: 220.46 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_front_matter",
            "value": 4.5848950747759325,
            "unit": "iter/sec",
            "range": "stddev: 0.0057012",
            "group": "plugins",
            "extra": "mean: 218.11 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_texmath",
            "value": 4.441615698835958,
            "unit": "iter/sec",
            "range": "stddev: 0.0058790",
            "group": "plugins",
            "extra": "mean: 225.14 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_dollarmath",
            "value": 4.527152266870883,
            "unit": "iter/sec",
            "range": "stddev: 0.0061412",
            "group": "plugins",
            "extra": "mean: 220.89 msec\nrounds: 20"
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
          "pythonVersion": "3.8.6"
        },
        "commit": {
          "id": "b232bf1cec0e29fd20c202c5b0dd880e531362c3",
          "message": "📚 DOCS: Fix docstring (#99)",
          "timestamp": "2020-12-19T03:14:47Z",
          "url": "https://github.com/executablebooks/markdown-it-py/commit/b232bf1cec0e29fd20c202c5b0dd880e531362c3",
          "distinct": true,
          "tree_id": "9ad805db0cb5d3a242ba1ec5ec1cf186d1169dac"
        },
        "date": 1608347814801,
        "benches": [
          {
            "name": "benchmarking/bench_packages.py::test_markdown_it_py",
            "value": 5.421617429159543,
            "unit": "iter/sec",
            "range": "stddev: 0.0053564",
            "group": "packages",
            "extra": "mean: 184.45 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_mistune",
            "value": 15.318833509003134,
            "unit": "iter/sec",
            "range": "stddev: 0.0024423",
            "group": "packages",
            "extra": "mean: 65.279 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_commonmark_py",
            "value": 2.3151680783803035,
            "unit": "iter/sec",
            "range": "stddev: 0.014695",
            "group": "packages",
            "extra": "mean: 431.93 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_pymarkdown",
            "value": 1.1711519339983179,
            "unit": "iter/sec",
            "range": "stddev: 0.0094717",
            "group": "packages",
            "extra": "mean: 853.86 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_pymarkdown_extra",
            "value": 1.0564589586080506,
            "unit": "iter/sec",
            "range": "stddev: 0.015445",
            "group": "packages",
            "extra": "mean: 946.56 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_mistletoe",
            "value": 4.8144174099778185,
            "unit": "iter/sec",
            "range": "stddev: 0.0069705",
            "group": "packages",
            "extra": "mean: 207.71 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_panflute",
            "value": 1.150142517419984,
            "unit": "iter/sec",
            "range": "stddev: 0.0045876",
            "group": "packages",
            "extra": "mean: 869.46 msec\nrounds: 20"
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
          "pythonVersion": "3.8.6"
        },
        "commit": {
          "id": "ecb87278195369e609eda207aa5b1b74794e70ad",
          "message": "🐛 FIX: Backslash escapes should not work inside autolinks (#97)\n\nFixes CommonMark specificaion example 599",
          "timestamp": "2020-12-19T03:20:56Z",
          "url": "https://github.com/executablebooks/markdown-it-py/commit/ecb87278195369e609eda207aa5b1b74794e70ad",
          "distinct": true,
          "tree_id": "e1d7ada2b6d5d78acb9b7c81520dc26489532756"
        },
        "date": 1608348127349,
        "benches": [
          {
            "name": "benchmarking/bench_plugins.py::test_base",
            "value": 5.377686180127088,
            "unit": "iter/sec",
            "range": "stddev: 0.0065648",
            "group": "plugins",
            "extra": "mean: 185.95 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_table",
            "value": 5.280615082918761,
            "unit": "iter/sec",
            "range": "stddev: 0.0058797",
            "group": "plugins",
            "extra": "mean: 189.37 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_amsmath",
            "value": 4.350309210353627,
            "unit": "iter/sec",
            "range": "stddev: 0.0070268",
            "group": "plugins",
            "extra": "mean: 229.87 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_container",
            "value": 5.263565366723943,
            "unit": "iter/sec",
            "range": "stddev: 0.0070195",
            "group": "plugins",
            "extra": "mean: 189.99 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_deflist",
            "value": 5.2958473739244925,
            "unit": "iter/sec",
            "range": "stddev: 0.0078408",
            "group": "plugins",
            "extra": "mean: 188.83 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_footnote",
            "value": 5.2817761389472855,
            "unit": "iter/sec",
            "range": "stddev: 0.0075085",
            "group": "plugins",
            "extra": "mean: 189.33 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_front_matter",
            "value": 5.311652974685566,
            "unit": "iter/sec",
            "range": "stddev: 0.0078962",
            "group": "plugins",
            "extra": "mean: 188.27 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_texmath",
            "value": 5.156880116119513,
            "unit": "iter/sec",
            "range": "stddev: 0.0086588",
            "group": "plugins",
            "extra": "mean: 193.92 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_dollarmath",
            "value": 5.301220164457247,
            "unit": "iter/sec",
            "range": "stddev: 0.0069498",
            "group": "plugins",
            "extra": "mean: 188.64 msec\nrounds: 20"
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
          "pythonVersion": "3.8.6"
        },
        "commit": {
          "id": "ecb87278195369e609eda207aa5b1b74794e70ad",
          "message": "🐛 FIX: Backslash escapes should not work inside autolinks (#97)\n\nFixes CommonMark specificaion example 599",
          "timestamp": "2020-12-19T03:20:56Z",
          "url": "https://github.com/executablebooks/markdown-it-py/commit/ecb87278195369e609eda207aa5b1b74794e70ad",
          "distinct": true,
          "tree_id": "e1d7ada2b6d5d78acb9b7c81520dc26489532756"
        },
        "date": 1608348203501,
        "benches": [
          {
            "name": "benchmarking/bench_packages.py::test_markdown_it_py",
            "value": 4.351210740553324,
            "unit": "iter/sec",
            "range": "stddev: 0.0087472",
            "group": "packages",
            "extra": "mean: 229.82 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_mistune",
            "value": 12.560129744984998,
            "unit": "iter/sec",
            "range": "stddev: 0.0040683",
            "group": "packages",
            "extra": "mean: 79.617 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_commonmark_py",
            "value": 2.1522473484599174,
            "unit": "iter/sec",
            "range": "stddev: 0.015658",
            "group": "packages",
            "extra": "mean: 464.63 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_pymarkdown",
            "value": 0.9410499344455379,
            "unit": "iter/sec",
            "range": "stddev: 0.013517",
            "group": "packages",
            "extra": "mean: 1.0626 sec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_pymarkdown_extra",
            "value": 0.8560672574541577,
            "unit": "iter/sec",
            "range": "stddev: 0.018464",
            "group": "packages",
            "extra": "mean: 1.1681 sec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_mistletoe",
            "value": 3.9587842523443326,
            "unit": "iter/sec",
            "range": "stddev: 0.0083216",
            "group": "packages",
            "extra": "mean: 252.60 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_panflute",
            "value": 0.9803682394819992,
            "unit": "iter/sec",
            "range": "stddev: 0.0068142",
            "group": "packages",
            "extra": "mean: 1.0200 sec\nrounds: 20"
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
          "pythonVersion": "3.8.6"
        },
        "commit": {
          "id": "2bde191ed2416753cdb5c450f089e44eeec29508",
          "message": "👌 IMPROVE: Simplify `normalize_uri` (#98)\n\n`html.quote` can take a string and do utf-8 encoding internally",
          "timestamp": "2020-12-19T15:10:14Z",
          "url": "https://github.com/executablebooks/markdown-it-py/commit/2bde191ed2416753cdb5c450f089e44eeec29508",
          "distinct": true,
          "tree_id": "bf653702fb70b172a9948821a7538500b896b9b3"
        },
        "date": 1608390690704,
        "benches": [
          {
            "name": "benchmarking/bench_plugins.py::test_base",
            "value": 5.390419556813436,
            "unit": "iter/sec",
            "range": "stddev: 0.0063118",
            "group": "plugins",
            "extra": "mean: 185.51 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_table",
            "value": 5.298543232697182,
            "unit": "iter/sec",
            "range": "stddev: 0.0057660",
            "group": "plugins",
            "extra": "mean: 188.73 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_amsmath",
            "value": 4.373016142962841,
            "unit": "iter/sec",
            "range": "stddev: 0.0060829",
            "group": "plugins",
            "extra": "mean: 228.68 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_container",
            "value": 5.300650264480021,
            "unit": "iter/sec",
            "range": "stddev: 0.0063852",
            "group": "plugins",
            "extra": "mean: 188.66 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_deflist",
            "value": 5.330927886463965,
            "unit": "iter/sec",
            "range": "stddev: 0.0056994",
            "group": "plugins",
            "extra": "mean: 187.58 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_footnote",
            "value": 5.295394129069367,
            "unit": "iter/sec",
            "range": "stddev: 0.0055650",
            "group": "plugins",
            "extra": "mean: 188.84 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_front_matter",
            "value": 5.316999213995941,
            "unit": "iter/sec",
            "range": "stddev: 0.0063378",
            "group": "plugins",
            "extra": "mean: 188.08 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_texmath",
            "value": 5.180191487114786,
            "unit": "iter/sec",
            "range": "stddev: 0.0065484",
            "group": "plugins",
            "extra": "mean: 193.04 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_dollarmath",
            "value": 5.302167679512634,
            "unit": "iter/sec",
            "range": "stddev: 0.0060552",
            "group": "plugins",
            "extra": "mean: 188.60 msec\nrounds: 20"
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
          "pythonVersion": "3.8.6"
        },
        "commit": {
          "id": "2bde191ed2416753cdb5c450f089e44eeec29508",
          "message": "👌 IMPROVE: Simplify `normalize_uri` (#98)\n\n`html.quote` can take a string and do utf-8 encoding internally",
          "timestamp": "2020-12-19T15:10:14Z",
          "url": "https://github.com/executablebooks/markdown-it-py/commit/2bde191ed2416753cdb5c450f089e44eeec29508",
          "distinct": true,
          "tree_id": "bf653702fb70b172a9948821a7538500b896b9b3"
        },
        "date": 1608390780458,
        "benches": [
          {
            "name": "benchmarking/bench_packages.py::test_markdown_it_py",
            "value": 4.6545400101892325,
            "unit": "iter/sec",
            "range": "stddev: 0.013918",
            "group": "packages",
            "extra": "mean: 214.84 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_mistune",
            "value": 11.802461414894434,
            "unit": "iter/sec",
            "range": "stddev: 0.0042536",
            "group": "packages",
            "extra": "mean: 84.728 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_commonmark_py",
            "value": 1.6030803532688458,
            "unit": "iter/sec",
            "range": "stddev: 0.021974",
            "group": "packages",
            "extra": "mean: 623.80 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_pymarkdown",
            "value": 0.9812780676897616,
            "unit": "iter/sec",
            "range": "stddev: 0.022213",
            "group": "packages",
            "extra": "mean: 1.0191 sec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_pymarkdown_extra",
            "value": 0.8852476285397822,
            "unit": "iter/sec",
            "range": "stddev: 0.022553",
            "group": "packages",
            "extra": "mean: 1.1296 sec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_mistletoe",
            "value": 4.135578239564296,
            "unit": "iter/sec",
            "range": "stddev: 0.012549",
            "group": "packages",
            "extra": "mean: 241.80 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_panflute",
            "value": 1.0391978330625566,
            "unit": "iter/sec",
            "range": "stddev: 0.014821",
            "group": "packages",
            "extra": "mean: 962.28 msec\nrounds: 20"
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
          "pythonVersion": "3.8.6"
        },
        "commit": {
          "id": "c23830655a9e3f8603cd4145b5fd6419ad468bc6",
          "message": "👌 IMPROVE: Type annotate renderer's token stream immutable (#104)",
          "timestamp": "2020-12-20T18:14:15Z",
          "url": "https://github.com/executablebooks/markdown-it-py/commit/c23830655a9e3f8603cd4145b5fd6419ad468bc6",
          "distinct": true,
          "tree_id": "53a6a102c8a892bbe217be08549629a8fab77d67"
        },
        "date": 1608488129976,
        "benches": [
          {
            "name": "benchmarking/bench_plugins.py::test_base",
            "value": 5.050801072088802,
            "unit": "iter/sec",
            "range": "stddev: 0.0064350",
            "group": "plugins",
            "extra": "mean: 197.99 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_table",
            "value": 4.9212783772359545,
            "unit": "iter/sec",
            "range": "stddev: 0.0073587",
            "group": "plugins",
            "extra": "mean: 203.20 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_amsmath",
            "value": 3.9446910162648257,
            "unit": "iter/sec",
            "range": "stddev: 0.012780",
            "group": "plugins",
            "extra": "mean: 253.51 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_container",
            "value": 4.760627610200017,
            "unit": "iter/sec",
            "range": "stddev: 0.0080456",
            "group": "plugins",
            "extra": "mean: 210.06 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_deflist",
            "value": 4.962234935832035,
            "unit": "iter/sec",
            "range": "stddev: 0.0071912",
            "group": "plugins",
            "extra": "mean: 201.52 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_footnote",
            "value": 4.980539599878147,
            "unit": "iter/sec",
            "range": "stddev: 0.0060196",
            "group": "plugins",
            "extra": "mean: 200.78 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_front_matter",
            "value": 5.028875620257578,
            "unit": "iter/sec",
            "range": "stddev: 0.0064024",
            "group": "plugins",
            "extra": "mean: 198.85 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_texmath",
            "value": 4.781000046493769,
            "unit": "iter/sec",
            "range": "stddev: 0.0099935",
            "group": "plugins",
            "extra": "mean: 209.16 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_dollarmath",
            "value": 4.985519360842029,
            "unit": "iter/sec",
            "range": "stddev: 0.0071349",
            "group": "plugins",
            "extra": "mean: 200.58 msec\nrounds: 20"
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
          "pythonVersion": "3.8.6"
        },
        "commit": {
          "id": "c23830655a9e3f8603cd4145b5fd6419ad468bc6",
          "message": "👌 IMPROVE: Type annotate renderer's token stream immutable (#104)",
          "timestamp": "2020-12-20T18:14:15Z",
          "url": "https://github.com/executablebooks/markdown-it-py/commit/c23830655a9e3f8603cd4145b5fd6419ad468bc6",
          "distinct": true,
          "tree_id": "53a6a102c8a892bbe217be08549629a8fab77d67"
        },
        "date": 1608488229736,
        "benches": [
          {
            "name": "benchmarking/bench_packages.py::test_markdown_it_py",
            "value": 4.484259932282105,
            "unit": "iter/sec",
            "range": "stddev: 0.0057906",
            "group": "packages",
            "extra": "mean: 223.00 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_mistune",
            "value": 11.1037430805085,
            "unit": "iter/sec",
            "range": "stddev: 0.0049302",
            "group": "packages",
            "extra": "mean: 90.060 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_commonmark_py",
            "value": 1.5321637762014408,
            "unit": "iter/sec",
            "range": "stddev: 0.020496",
            "group": "packages",
            "extra": "mean: 652.67 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_pymarkdown",
            "value": 0.9060401784467577,
            "unit": "iter/sec",
            "range": "stddev: 0.022849",
            "group": "packages",
            "extra": "mean: 1.1037 sec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_pymarkdown_extra",
            "value": 0.7910958313444127,
            "unit": "iter/sec",
            "range": "stddev: 0.018088",
            "group": "packages",
            "extra": "mean: 1.2641 sec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_mistletoe",
            "value": 3.8107988353085194,
            "unit": "iter/sec",
            "range": "stddev: 0.010178",
            "group": "packages",
            "extra": "mean: 262.41 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_panflute",
            "value": 0.9728371747053763,
            "unit": "iter/sec",
            "range": "stddev: 0.017835",
            "group": "packages",
            "extra": "mean: 1.0279 sec\nrounds: 20"
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
          "pythonVersion": "3.8.6"
        },
        "commit": {
          "id": "a566e39663e292723e2531b95476b2f31cb325ec",
          "message": "🔧 MAINTAIN: Update ReadTheDocs build (#101)",
          "timestamp": "2020-12-21T00:40:05Z",
          "url": "https://github.com/executablebooks/markdown-it-py/commit/a566e39663e292723e2531b95476b2f31cb325ec",
          "distinct": true,
          "tree_id": "5c83f165845003f9a531e88f309da2c2cf6ab0db"
        },
        "date": 1608511287044,
        "benches": [
          {
            "name": "benchmarking/bench_plugins.py::test_base",
            "value": 4.839220329509426,
            "unit": "iter/sec",
            "range": "stddev: 0.0063483",
            "group": "plugins",
            "extra": "mean: 206.64 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_table",
            "value": 4.779690891887864,
            "unit": "iter/sec",
            "range": "stddev: 0.0062401",
            "group": "plugins",
            "extra": "mean: 209.22 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_amsmath",
            "value": 3.9623778161993526,
            "unit": "iter/sec",
            "range": "stddev: 0.0073434",
            "group": "plugins",
            "extra": "mean: 252.37 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_container",
            "value": 4.802952730846585,
            "unit": "iter/sec",
            "range": "stddev: 0.0069021",
            "group": "plugins",
            "extra": "mean: 208.21 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_deflist",
            "value": 4.784673343151466,
            "unit": "iter/sec",
            "range": "stddev: 0.0071684",
            "group": "plugins",
            "extra": "mean: 209.00 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_footnote",
            "value": 4.750285230579622,
            "unit": "iter/sec",
            "range": "stddev: 0.0068769",
            "group": "plugins",
            "extra": "mean: 210.51 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_front_matter",
            "value": 4.808129921486503,
            "unit": "iter/sec",
            "range": "stddev: 0.0062322",
            "group": "plugins",
            "extra": "mean: 207.98 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_texmath",
            "value": 4.713118761262872,
            "unit": "iter/sec",
            "range": "stddev: 0.0088692",
            "group": "plugins",
            "extra": "mean: 212.17 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_dollarmath",
            "value": 4.8141657926079215,
            "unit": "iter/sec",
            "range": "stddev: 0.0081624",
            "group": "plugins",
            "extra": "mean: 207.72 msec\nrounds: 20"
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
          "pythonVersion": "3.8.6"
        },
        "commit": {
          "id": "a566e39663e292723e2531b95476b2f31cb325ec",
          "message": "🔧 MAINTAIN: Update ReadTheDocs build (#101)",
          "timestamp": "2020-12-21T00:40:05Z",
          "url": "https://github.com/executablebooks/markdown-it-py/commit/a566e39663e292723e2531b95476b2f31cb325ec",
          "distinct": true,
          "tree_id": "5c83f165845003f9a531e88f309da2c2cf6ab0db"
        },
        "date": 1608511350441,
        "benches": [
          {
            "name": "benchmarking/bench_packages.py::test_markdown_it_py",
            "value": 4.555602415924216,
            "unit": "iter/sec",
            "range": "stddev: 0.0060641",
            "group": "packages",
            "extra": "mean: 219.51 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_mistune",
            "value": 12.896987841302943,
            "unit": "iter/sec",
            "range": "stddev: 0.0025249",
            "group": "packages",
            "extra": "mean: 77.537 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_commonmark_py",
            "value": 2.38820651474175,
            "unit": "iter/sec",
            "range": "stddev: 0.018218",
            "group": "packages",
            "extra": "mean: 418.72 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_pymarkdown",
            "value": 0.9937039514849783,
            "unit": "iter/sec",
            "range": "stddev: 0.012315",
            "group": "packages",
            "extra": "mean: 1.0063 sec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_pymarkdown_extra",
            "value": 0.9072358868010674,
            "unit": "iter/sec",
            "range": "stddev: 0.019748",
            "group": "packages",
            "extra": "mean: 1.1022 sec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_mistletoe",
            "value": 4.241301103735832,
            "unit": "iter/sec",
            "range": "stddev: 0.0080705",
            "group": "packages",
            "extra": "mean: 235.78 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_panflute",
            "value": 1.016802091042794,
            "unit": "iter/sec",
            "range": "stddev: 0.0080289",
            "group": "packages",
            "extra": "mean: 983.48 msec\nrounds: 20"
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
          "pythonVersion": "3.8.6"
        },
        "commit": {
          "id": "16b85370f6ef538b50d4da15fa883e05be258c75",
          "message": "🧪 TEST: Enable typographer to fix skipped (#105)",
          "timestamp": "2020-12-21T17:48:44Z",
          "url": "https://github.com/executablebooks/markdown-it-py/commit/16b85370f6ef538b50d4da15fa883e05be258c75",
          "distinct": true,
          "tree_id": "58ec33a075da6b91e2d09f65ff38fb3ae8e55228"
        },
        "date": 1608573009341,
        "benches": [
          {
            "name": "benchmarking/bench_plugins.py::test_base",
            "value": 4.420263363264982,
            "unit": "iter/sec",
            "range": "stddev: 0.0084779",
            "group": "plugins",
            "extra": "mean: 226.23 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_table",
            "value": 4.230060942938493,
            "unit": "iter/sec",
            "range": "stddev: 0.0079872",
            "group": "plugins",
            "extra": "mean: 236.40 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_amsmath",
            "value": 3.3356620179180516,
            "unit": "iter/sec",
            "range": "stddev: 0.010731",
            "group": "plugins",
            "extra": "mean: 299.79 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_container",
            "value": 4.272371989943416,
            "unit": "iter/sec",
            "range": "stddev: 0.0089882",
            "group": "plugins",
            "extra": "mean: 234.06 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_deflist",
            "value": 4.287473500710011,
            "unit": "iter/sec",
            "range": "stddev: 0.0088026",
            "group": "plugins",
            "extra": "mean: 233.24 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_footnote",
            "value": 4.238833955715543,
            "unit": "iter/sec",
            "range": "stddev: 0.014180",
            "group": "plugins",
            "extra": "mean: 235.91 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_front_matter",
            "value": 4.337499243347696,
            "unit": "iter/sec",
            "range": "stddev: 0.0072933",
            "group": "plugins",
            "extra": "mean: 230.55 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_texmath",
            "value": 4.192392360936655,
            "unit": "iter/sec",
            "range": "stddev: 0.0090919",
            "group": "plugins",
            "extra": "mean: 238.53 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_dollarmath",
            "value": 4.344971891922733,
            "unit": "iter/sec",
            "range": "stddev: 0.0073693",
            "group": "plugins",
            "extra": "mean: 230.15 msec\nrounds: 20"
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
          "pythonVersion": "3.8.6"
        },
        "commit": {
          "id": "16b85370f6ef538b50d4da15fa883e05be258c75",
          "message": "🧪 TEST: Enable typographer to fix skipped (#105)",
          "timestamp": "2020-12-21T17:48:44Z",
          "url": "https://github.com/executablebooks/markdown-it-py/commit/16b85370f6ef538b50d4da15fa883e05be258c75",
          "distinct": true,
          "tree_id": "58ec33a075da6b91e2d09f65ff38fb3ae8e55228"
        },
        "date": 1608573052134,
        "benches": [
          {
            "name": "benchmarking/bench_packages.py::test_markdown_it_py",
            "value": 5.356771996338734,
            "unit": "iter/sec",
            "range": "stddev: 0.0055720",
            "group": "packages",
            "extra": "mean: 186.68 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_mistune",
            "value": 15.3194581232519,
            "unit": "iter/sec",
            "range": "stddev: 0.0022481",
            "group": "packages",
            "extra": "mean: 65.276 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_commonmark_py",
            "value": 2.681198151120008,
            "unit": "iter/sec",
            "range": "stddev: 0.014186",
            "group": "packages",
            "extra": "mean: 372.97 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_pymarkdown",
            "value": 1.1747043851583752,
            "unit": "iter/sec",
            "range": "stddev: 0.0089454",
            "group": "packages",
            "extra": "mean: 851.28 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_pymarkdown_extra",
            "value": 1.0673124904530713,
            "unit": "iter/sec",
            "range": "stddev: 0.0094677",
            "group": "packages",
            "extra": "mean: 936.93 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_mistletoe",
            "value": 4.794317202235194,
            "unit": "iter/sec",
            "range": "stddev: 0.0067946",
            "group": "packages",
            "extra": "mean: 208.58 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_panflute",
            "value": 1.175744782722294,
            "unit": "iter/sec",
            "range": "stddev: 0.0044455",
            "group": "packages",
            "extra": "mean: 850.52 msec\nrounds: 20"
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
          "pythonVersion": "3.8.6"
        },
        "commit": {
          "id": "2136ab738b9f484416fd056370ae3930db343499",
          "message": "🐛 FIX: Add content to image tokens (#113)",
          "timestamp": "2020-12-29T00:59:18Z",
          "url": "https://github.com/executablebooks/markdown-it-py/commit/2136ab738b9f484416fd056370ae3930db343499",
          "distinct": true,
          "tree_id": "259176fd5f64efab7f55c21cc7b02eb5ffb78372"
        },
        "date": 1609203650876,
        "benches": [
          {
            "name": "benchmarking/bench_plugins.py::test_base",
            "value": 4.413876785194617,
            "unit": "iter/sec",
            "range": "stddev: 0.0070072",
            "group": "plugins",
            "extra": "mean: 226.56 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_table",
            "value": 4.29121746836058,
            "unit": "iter/sec",
            "range": "stddev: 0.0090542",
            "group": "plugins",
            "extra": "mean: 233.03 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_amsmath",
            "value": 3.532705732886839,
            "unit": "iter/sec",
            "range": "stddev: 0.011406",
            "group": "plugins",
            "extra": "mean: 283.07 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_container",
            "value": 4.267167735481132,
            "unit": "iter/sec",
            "range": "stddev: 0.012385",
            "group": "plugins",
            "extra": "mean: 234.35 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_deflist",
            "value": 4.290514583304193,
            "unit": "iter/sec",
            "range": "stddev: 0.0076605",
            "group": "plugins",
            "extra": "mean: 233.07 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_footnote",
            "value": 4.219572183112342,
            "unit": "iter/sec",
            "range": "stddev: 0.011060",
            "group": "plugins",
            "extra": "mean: 236.99 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_front_matter",
            "value": 4.320699255780074,
            "unit": "iter/sec",
            "range": "stddev: 0.014402",
            "group": "plugins",
            "extra": "mean: 231.44 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_texmath",
            "value": 4.223396235572742,
            "unit": "iter/sec",
            "range": "stddev: 0.012233",
            "group": "plugins",
            "extra": "mean: 236.78 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_dollarmath",
            "value": 4.257152576836415,
            "unit": "iter/sec",
            "range": "stddev: 0.0077934",
            "group": "plugins",
            "extra": "mean: 234.90 msec\nrounds: 20"
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
          "pythonVersion": "3.8.6"
        },
        "commit": {
          "id": "2136ab738b9f484416fd056370ae3930db343499",
          "message": "🐛 FIX: Add content to image tokens (#113)",
          "timestamp": "2020-12-29T00:59:18Z",
          "url": "https://github.com/executablebooks/markdown-it-py/commit/2136ab738b9f484416fd056370ae3930db343499",
          "distinct": true,
          "tree_id": "259176fd5f64efab7f55c21cc7b02eb5ffb78372"
        },
        "date": 1609203701042,
        "benches": [
          {
            "name": "benchmarking/bench_packages.py::test_markdown_it_py",
            "value": 4.625246411014242,
            "unit": "iter/sec",
            "range": "stddev: 0.0065690",
            "group": "packages",
            "extra": "mean: 216.20 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_mistune",
            "value": 13.208948670417316,
            "unit": "iter/sec",
            "range": "stddev: 0.0031356",
            "group": "packages",
            "extra": "mean: 75.706 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_commonmark_py",
            "value": 2.271415260425716,
            "unit": "iter/sec",
            "range": "stddev: 0.015175",
            "group": "packages",
            "extra": "mean: 440.25 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_pymarkdown",
            "value": 0.9888369586124193,
            "unit": "iter/sec",
            "range": "stddev: 0.010877",
            "group": "packages",
            "extra": "mean: 1.0113 sec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_pymarkdown_extra",
            "value": 0.9010456257940339,
            "unit": "iter/sec",
            "range": "stddev: 0.019086",
            "group": "packages",
            "extra": "mean: 1.1098 sec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_mistletoe",
            "value": 4.138186503286087,
            "unit": "iter/sec",
            "range": "stddev: 0.0072834",
            "group": "packages",
            "extra": "mean: 241.65 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_panflute",
            "value": 1.0190423476177455,
            "unit": "iter/sec",
            "range": "stddev: 0.0068622",
            "group": "packages",
            "extra": "mean: 981.31 msec\nrounds: 20"
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
          "pythonVersion": "3.8.6"
        },
        "commit": {
          "id": "ef607029bdd085c9a4c6fa15ed2b368d1cc1b63e",
          "message": "👌 IMPROVE: Ensure len(state.src) == len(state.srcCharCode) (#108)\n\nCo-authored-by: Taneli Hukkinen <hukkinj1@users.noreply.github.com>\r\nCo-authored-by: tongyulong <tongyulong@bytedance.com>",
          "timestamp": "2020-12-29T01:05:45Z",
          "url": "https://github.com/executablebooks/markdown-it-py/commit/ef607029bdd085c9a4c6fa15ed2b368d1cc1b63e",
          "distinct": true,
          "tree_id": "23d41efafeec8dd09328b520719fb4e5a9e3563b"
        },
        "date": 1609204030993,
        "benches": [
          {
            "name": "benchmarking/bench_plugins.py::test_base",
            "value": 4.429694882503548,
            "unit": "iter/sec",
            "range": "stddev: 0.0090354",
            "group": "plugins",
            "extra": "mean: 225.75 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_table",
            "value": 4.372282399130234,
            "unit": "iter/sec",
            "range": "stddev: 0.0093590",
            "group": "plugins",
            "extra": "mean: 228.71 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_amsmath",
            "value": 3.430926297770195,
            "unit": "iter/sec",
            "range": "stddev: 0.011004",
            "group": "plugins",
            "extra": "mean: 291.47 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_container",
            "value": 4.396179304745231,
            "unit": "iter/sec",
            "range": "stddev: 0.011110",
            "group": "plugins",
            "extra": "mean: 227.47 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_deflist",
            "value": 4.450326469619238,
            "unit": "iter/sec",
            "range": "stddev: 0.0079988",
            "group": "plugins",
            "extra": "mean: 224.70 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_footnote",
            "value": 4.395287716573481,
            "unit": "iter/sec",
            "range": "stddev: 0.0088302",
            "group": "plugins",
            "extra": "mean: 227.52 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_front_matter",
            "value": 4.367675632626388,
            "unit": "iter/sec",
            "range": "stddev: 0.011099",
            "group": "plugins",
            "extra": "mean: 228.95 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_texmath",
            "value": 4.204350900572428,
            "unit": "iter/sec",
            "range": "stddev: 0.0087847",
            "group": "plugins",
            "extra": "mean: 237.85 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_dollarmath",
            "value": 4.390571651223779,
            "unit": "iter/sec",
            "range": "stddev: 0.0098801",
            "group": "plugins",
            "extra": "mean: 227.76 msec\nrounds: 20"
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
          "pythonVersion": "3.8.6"
        },
        "commit": {
          "id": "ef607029bdd085c9a4c6fa15ed2b368d1cc1b63e",
          "message": "👌 IMPROVE: Ensure len(state.src) == len(state.srcCharCode) (#108)\n\nCo-authored-by: Taneli Hukkinen <hukkinj1@users.noreply.github.com>\r\nCo-authored-by: tongyulong <tongyulong@bytedance.com>",
          "timestamp": "2020-12-29T01:05:45Z",
          "url": "https://github.com/executablebooks/markdown-it-py/commit/ef607029bdd085c9a4c6fa15ed2b368d1cc1b63e",
          "distinct": true,
          "tree_id": "23d41efafeec8dd09328b520719fb4e5a9e3563b"
        },
        "date": 1609204099558,
        "benches": [
          {
            "name": "benchmarking/bench_packages.py::test_markdown_it_py",
            "value": 4.269606248897688,
            "unit": "iter/sec",
            "range": "stddev: 0.0083387",
            "group": "packages",
            "extra": "mean: 234.21 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_mistune",
            "value": 13.270522966116248,
            "unit": "iter/sec",
            "range": "stddev: 0.0046080",
            "group": "packages",
            "extra": "mean: 75.355 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_commonmark_py",
            "value": 2.2397419335658437,
            "unit": "iter/sec",
            "range": "stddev: 0.015665",
            "group": "packages",
            "extra": "mean: 446.48 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_pymarkdown",
            "value": 1.0214569457478082,
            "unit": "iter/sec",
            "range": "stddev: 0.027673",
            "group": "packages",
            "extra": "mean: 978.99 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_pymarkdown_extra",
            "value": 0.9481388149786824,
            "unit": "iter/sec",
            "range": "stddev: 0.026806",
            "group": "packages",
            "extra": "mean: 1.0547 sec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_mistletoe",
            "value": 4.160542245334751,
            "unit": "iter/sec",
            "range": "stddev: 0.0094568",
            "group": "packages",
            "extra": "mean: 240.35 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_panflute",
            "value": 1.055520565400651,
            "unit": "iter/sec",
            "range": "stddev: 0.036981",
            "group": "packages",
            "extra": "mean: 947.40 msec\nrounds: 20"
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
          "pythonVersion": "3.8.6"
        },
        "commit": {
          "id": "8290faad18c82151a82089e1d66c8f99ad3e02ee",
          "message": "👌 IMPROVE: Add more typing (#106)\n\nCo-authored-by: Chris Sewell <chrisj_sewell@hotmail.com>",
          "timestamp": "2020-12-29T01:22:21Z",
          "url": "https://github.com/executablebooks/markdown-it-py/commit/8290faad18c82151a82089e1d66c8f99ad3e02ee",
          "distinct": true,
          "tree_id": "da3bdb0e73d16a66b11f63795aac872b659f3a8a"
        },
        "date": 1609205022048,
        "benches": [
          {
            "name": "benchmarking/bench_plugins.py::test_base",
            "value": 4.955663800715832,
            "unit": "iter/sec",
            "range": "stddev: 0.0058534",
            "group": "plugins",
            "extra": "mean: 201.79 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_table",
            "value": 4.880496231501778,
            "unit": "iter/sec",
            "range": "stddev: 0.0055082",
            "group": "plugins",
            "extra": "mean: 204.90 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_amsmath",
            "value": 4.068613139174938,
            "unit": "iter/sec",
            "range": "stddev: 0.0060008",
            "group": "plugins",
            "extra": "mean: 245.78 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_container",
            "value": 4.89385062668522,
            "unit": "iter/sec",
            "range": "stddev: 0.0064399",
            "group": "plugins",
            "extra": "mean: 204.34 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_deflist",
            "value": 4.905804856366031,
            "unit": "iter/sec",
            "range": "stddev: 0.0055264",
            "group": "plugins",
            "extra": "mean: 203.84 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_footnote",
            "value": 4.891852222513661,
            "unit": "iter/sec",
            "range": "stddev: 0.0054075",
            "group": "plugins",
            "extra": "mean: 204.42 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_front_matter",
            "value": 4.9267146418117775,
            "unit": "iter/sec",
            "range": "stddev: 0.0063546",
            "group": "plugins",
            "extra": "mean: 202.98 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_texmath",
            "value": 4.789110103453312,
            "unit": "iter/sec",
            "range": "stddev: 0.0069849",
            "group": "plugins",
            "extra": "mean: 208.81 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_dollarmath",
            "value": 4.906961609604326,
            "unit": "iter/sec",
            "range": "stddev: 0.0061366",
            "group": "plugins",
            "extra": "mean: 203.79 msec\nrounds: 20"
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
          "pythonVersion": "3.8.6"
        },
        "commit": {
          "id": "8290faad18c82151a82089e1d66c8f99ad3e02ee",
          "message": "👌 IMPROVE: Add more typing (#106)\n\nCo-authored-by: Chris Sewell <chrisj_sewell@hotmail.com>",
          "timestamp": "2020-12-29T01:22:21Z",
          "url": "https://github.com/executablebooks/markdown-it-py/commit/8290faad18c82151a82089e1d66c8f99ad3e02ee",
          "distinct": true,
          "tree_id": "da3bdb0e73d16a66b11f63795aac872b659f3a8a"
        },
        "date": 1609205091585,
        "benches": [
          {
            "name": "benchmarking/bench_packages.py::test_markdown_it_py",
            "value": 4.410292120369045,
            "unit": "iter/sec",
            "range": "stddev: 0.0053963",
            "group": "packages",
            "extra": "mean: 226.74 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_mistune",
            "value": 13.704570683522489,
            "unit": "iter/sec",
            "range": "stddev: 0.0027615",
            "group": "packages",
            "extra": "mean: 72.968 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_commonmark_py",
            "value": 2.1894028777415016,
            "unit": "iter/sec",
            "range": "stddev: 0.015033",
            "group": "packages",
            "extra": "mean: 456.75 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_pymarkdown",
            "value": 1.011719809111373,
            "unit": "iter/sec",
            "range": "stddev: 0.0082011",
            "group": "packages",
            "extra": "mean: 988.42 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_pymarkdown_extra",
            "value": 0.9060323098168797,
            "unit": "iter/sec",
            "range": "stddev: 0.026762",
            "group": "packages",
            "extra": "mean: 1.1037 sec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_mistletoe",
            "value": 4.236297367956275,
            "unit": "iter/sec",
            "range": "stddev: 0.0081221",
            "group": "packages",
            "extra": "mean: 236.06 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_panflute",
            "value": 1.0478497903850834,
            "unit": "iter/sec",
            "range": "stddev: 0.017493",
            "group": "packages",
            "extra": "mean: 954.34 msec\nrounds: 20"
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
          "pythonVersion": "3.8.6"
        },
        "commit": {
          "id": "e303bd42312b3b824a29656d0c30f66ff445e217",
          "message": "👌 IMPROVE: Make `srcCharCode` immutable (#114)",
          "timestamp": "2020-12-29T19:28:31Z",
          "url": "https://github.com/executablebooks/markdown-it-py/commit/e303bd42312b3b824a29656d0c30f66ff445e217",
          "distinct": true,
          "tree_id": "3017966654e12d6cf3e5bf58996df21410b75213"
        },
        "date": 1609270205587,
        "benches": [
          {
            "name": "benchmarking/bench_plugins.py::test_base",
            "value": 3.8293843153502474,
            "unit": "iter/sec",
            "range": "stddev: 0.0093368",
            "group": "plugins",
            "extra": "mean: 261.14 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_table",
            "value": 3.840774273054345,
            "unit": "iter/sec",
            "range": "stddev: 0.0076761",
            "group": "plugins",
            "extra": "mean: 260.36 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_amsmath",
            "value": 3.200458878209451,
            "unit": "iter/sec",
            "range": "stddev: 0.010067",
            "group": "plugins",
            "extra": "mean: 312.46 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_container",
            "value": 3.7867004663813737,
            "unit": "iter/sec",
            "range": "stddev: 0.0085356",
            "group": "plugins",
            "extra": "mean: 264.08 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_deflist",
            "value": 3.837633153690778,
            "unit": "iter/sec",
            "range": "stddev: 0.0072618",
            "group": "plugins",
            "extra": "mean: 260.58 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_footnote",
            "value": 3.813418086601168,
            "unit": "iter/sec",
            "range": "stddev: 0.0067134",
            "group": "plugins",
            "extra": "mean: 262.23 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_front_matter",
            "value": 3.7786992503273216,
            "unit": "iter/sec",
            "range": "stddev: 0.0084422",
            "group": "plugins",
            "extra": "mean: 264.64 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_texmath",
            "value": 3.733670064971809,
            "unit": "iter/sec",
            "range": "stddev: 0.0078975",
            "group": "plugins",
            "extra": "mean: 267.83 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_dollarmath",
            "value": 3.8153458768983053,
            "unit": "iter/sec",
            "range": "stddev: 0.0070258",
            "group": "plugins",
            "extra": "mean: 262.10 msec\nrounds: 20"
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
          "pythonVersion": "3.8.6"
        },
        "commit": {
          "id": "e303bd42312b3b824a29656d0c30f66ff445e217",
          "message": "👌 IMPROVE: Make `srcCharCode` immutable (#114)",
          "timestamp": "2020-12-29T19:28:31Z",
          "url": "https://github.com/executablebooks/markdown-it-py/commit/e303bd42312b3b824a29656d0c30f66ff445e217",
          "distinct": true,
          "tree_id": "3017966654e12d6cf3e5bf58996df21410b75213"
        },
        "date": 1609270269948,
        "benches": [
          {
            "name": "benchmarking/bench_packages.py::test_markdown_it_py",
            "value": 3.834075600369028,
            "unit": "iter/sec",
            "range": "stddev: 0.0066306",
            "group": "packages",
            "extra": "mean: 260.82 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_mistune",
            "value": 12.349797250445436,
            "unit": "iter/sec",
            "range": "stddev: 0.0030585",
            "group": "packages",
            "extra": "mean: 80.973 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_commonmark_py",
            "value": 2.114735227493117,
            "unit": "iter/sec",
            "range": "stddev: 0.017888",
            "group": "packages",
            "extra": "mean: 472.87 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_pymarkdown",
            "value": 0.9443148376710353,
            "unit": "iter/sec",
            "range": "stddev: 0.010545",
            "group": "packages",
            "extra": "mean: 1.0590 sec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_pymarkdown_extra",
            "value": 0.8546990432867667,
            "unit": "iter/sec",
            "range": "stddev: 0.017082",
            "group": "packages",
            "extra": "mean: 1.1700 sec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_mistletoe",
            "value": 3.903635688671127,
            "unit": "iter/sec",
            "range": "stddev: 0.0080701",
            "group": "packages",
            "extra": "mean: 256.17 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_panflute",
            "value": 0.9526394968351125,
            "unit": "iter/sec",
            "range": "stddev: 0.0095056",
            "group": "packages",
            "extra": "mean: 1.0497 sec\nrounds: 20"
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
          "pythonVersion": "3.8.6"
        },
        "commit": {
          "id": "4f1346c7c35f7d67f2fbe3f7cb7c839c6852b8ed",
          "message": "👌 IMPROVE: Add more typing (#116)",
          "timestamp": "2020-12-31T01:12:29Z",
          "url": "https://github.com/executablebooks/markdown-it-py/commit/4f1346c7c35f7d67f2fbe3f7cb7c839c6852b8ed",
          "distinct": true,
          "tree_id": "448e7fb6af517328992382c6ce7047031607e5ca"
        },
        "date": 1609377240638,
        "benches": [
          {
            "name": "benchmarking/bench_plugins.py::test_base",
            "value": 4.022095860630942,
            "unit": "iter/sec",
            "range": "stddev: 0.0055638",
            "group": "plugins",
            "extra": "mean: 248.63 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_table",
            "value": 3.93748328946859,
            "unit": "iter/sec",
            "range": "stddev: 0.0058107",
            "group": "plugins",
            "extra": "mean: 253.97 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_amsmath",
            "value": 3.3782250451946263,
            "unit": "iter/sec",
            "range": "stddev: 0.0054395",
            "group": "plugins",
            "extra": "mean: 296.01 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_container",
            "value": 4.014282812627315,
            "unit": "iter/sec",
            "range": "stddev: 0.0064732",
            "group": "plugins",
            "extra": "mean: 249.11 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_deflist",
            "value": 4.023812871458942,
            "unit": "iter/sec",
            "range": "stddev: 0.0052398",
            "group": "plugins",
            "extra": "mean: 248.52 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_footnote",
            "value": 4.004117413114494,
            "unit": "iter/sec",
            "range": "stddev: 0.0058655",
            "group": "plugins",
            "extra": "mean: 249.74 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_front_matter",
            "value": 3.960027582954336,
            "unit": "iter/sec",
            "range": "stddev: 0.0064660",
            "group": "plugins",
            "extra": "mean: 252.52 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_texmath",
            "value": 3.731354923181799,
            "unit": "iter/sec",
            "range": "stddev: 0.0080288",
            "group": "plugins",
            "extra": "mean: 268.00 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_dollarmath",
            "value": 3.8737383030491634,
            "unit": "iter/sec",
            "range": "stddev: 0.0071063",
            "group": "plugins",
            "extra": "mean: 258.15 msec\nrounds: 20"
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
          "pythonVersion": "3.8.6"
        },
        "commit": {
          "id": "4f1346c7c35f7d67f2fbe3f7cb7c839c6852b8ed",
          "message": "👌 IMPROVE: Add more typing (#116)",
          "timestamp": "2020-12-31T01:12:29Z",
          "url": "https://github.com/executablebooks/markdown-it-py/commit/4f1346c7c35f7d67f2fbe3f7cb7c839c6852b8ed",
          "distinct": true,
          "tree_id": "448e7fb6af517328992382c6ce7047031607e5ca"
        },
        "date": 1609377281880,
        "benches": [
          {
            "name": "benchmarking/bench_packages.py::test_markdown_it_py",
            "value": 4.715431287697003,
            "unit": "iter/sec",
            "range": "stddev: 0.0054519",
            "group": "packages",
            "extra": "mean: 212.07 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_mistune",
            "value": 15.01802490005499,
            "unit": "iter/sec",
            "range": "stddev: 0.0033047",
            "group": "packages",
            "extra": "mean: 66.587 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_commonmark_py",
            "value": 2.516047961207654,
            "unit": "iter/sec",
            "range": "stddev: 0.015980",
            "group": "packages",
            "extra": "mean: 397.45 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_pymarkdown",
            "value": 1.1674380319376143,
            "unit": "iter/sec",
            "range": "stddev: 0.0091315",
            "group": "packages",
            "extra": "mean: 856.58 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_pymarkdown_extra",
            "value": 1.0656871623923896,
            "unit": "iter/sec",
            "range": "stddev: 0.0081576",
            "group": "packages",
            "extra": "mean: 938.36 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_mistletoe",
            "value": 4.723400501833754,
            "unit": "iter/sec",
            "range": "stddev: 0.0076422",
            "group": "packages",
            "extra": "mean: 211.71 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_panflute",
            "value": 1.1642650041477232,
            "unit": "iter/sec",
            "range": "stddev: 0.0022751",
            "group": "packages",
            "extra": "mean: 858.91 msec\nrounds: 20"
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
          "pythonVersion": "3.8.6"
        },
        "commit": {
          "id": "9f826bdfd96eac4074007d256eea7f091b8cf325",
          "message": "🚀 RELEASE: v0.6.1",
          "timestamp": "2021-01-01T15:54:43Z",
          "url": "https://github.com/executablebooks/markdown-it-py/commit/9f826bdfd96eac4074007d256eea7f091b8cf325",
          "distinct": true,
          "tree_id": "289c09e2d02815fec9bac4d078b7588cabcebfd9"
        },
        "date": 1609516571515,
        "benches": [
          {
            "name": "benchmarking/bench_plugins.py::test_base",
            "value": 4.723395382692271,
            "unit": "iter/sec",
            "range": "stddev: 0.0050218",
            "group": "plugins",
            "extra": "mean: 211.71 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_table",
            "value": 4.65391217806582,
            "unit": "iter/sec",
            "range": "stddev: 0.0049131",
            "group": "plugins",
            "extra": "mean: 214.87 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_amsmath",
            "value": 3.901252618072344,
            "unit": "iter/sec",
            "range": "stddev: 0.0057597",
            "group": "plugins",
            "extra": "mean: 256.33 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_container",
            "value": 4.639327958939807,
            "unit": "iter/sec",
            "range": "stddev: 0.0058831",
            "group": "plugins",
            "extra": "mean: 215.55 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_deflist",
            "value": 4.683365157521627,
            "unit": "iter/sec",
            "range": "stddev: 0.0049836",
            "group": "plugins",
            "extra": "mean: 213.52 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_footnote",
            "value": 4.687831066349412,
            "unit": "iter/sec",
            "range": "stddev: 0.0053050",
            "group": "plugins",
            "extra": "mean: 213.32 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_front_matter",
            "value": 4.679721569716605,
            "unit": "iter/sec",
            "range": "stddev: 0.0067742",
            "group": "plugins",
            "extra": "mean: 213.69 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_texmath",
            "value": 4.584830928238753,
            "unit": "iter/sec",
            "range": "stddev: 0.0064800",
            "group": "plugins",
            "extra": "mean: 218.11 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_dollarmath",
            "value": 4.677791270895277,
            "unit": "iter/sec",
            "range": "stddev: 0.0050339",
            "group": "plugins",
            "extra": "mean: 213.78 msec\nrounds: 20"
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
          "pythonVersion": "3.8.6"
        },
        "commit": {
          "id": "9f826bdfd96eac4074007d256eea7f091b8cf325",
          "message": "🚀 RELEASE: v0.6.1",
          "timestamp": "2021-01-01T15:54:43Z",
          "url": "https://github.com/executablebooks/markdown-it-py/commit/9f826bdfd96eac4074007d256eea7f091b8cf325",
          "distinct": true,
          "tree_id": "289c09e2d02815fec9bac4d078b7588cabcebfd9"
        },
        "date": 1609516637996,
        "benches": [
          {
            "name": "benchmarking/bench_packages.py::test_markdown_it_py",
            "value": 4.331064906255371,
            "unit": "iter/sec",
            "range": "stddev: 0.0083710",
            "group": "packages",
            "extra": "mean: 230.89 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_mistune",
            "value": 11.712025138166416,
            "unit": "iter/sec",
            "range": "stddev: 0.0035282",
            "group": "packages",
            "extra": "mean: 85.382 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_commonmark_py",
            "value": 1.5112035188555324,
            "unit": "iter/sec",
            "range": "stddev: 0.019609",
            "group": "packages",
            "extra": "mean: 661.72 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_pymarkdown",
            "value": 1.014471732188382,
            "unit": "iter/sec",
            "range": "stddev: 0.024705",
            "group": "packages",
            "extra": "mean: 985.73 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_pymarkdown_extra",
            "value": 0.9340367201840368,
            "unit": "iter/sec",
            "range": "stddev: 0.039036",
            "group": "packages",
            "extra": "mean: 1.0706 sec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_mistletoe",
            "value": 4.117092891823569,
            "unit": "iter/sec",
            "range": "stddev: 0.0094425",
            "group": "packages",
            "extra": "mean: 242.89 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_panflute",
            "value": 1.0694919543429369,
            "unit": "iter/sec",
            "range": "stddev: 0.019324",
            "group": "packages",
            "extra": "mean: 935.02 msec\nrounds: 20"
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
          "pythonVersion": "3.8.7"
        },
        "commit": {
          "id": "fa1d3e3c338533e042c327e14d050c7a3a9a7a05",
          "message": "🐛 FIX: port markdown-it v11.0.1 (#109)\n\nThis commit updates the port to be up-to-date with markdown-it v11.0.1 (2020-09-14), applying two fixes:\r\n\r\n- Fix blockquote lazy newlines, [[#696](https://github.com/markdown-it/markdown-it/issues/696)].\r\n- Fix missed mappings for table rows, [[#705](https://github.com/markdown-it/markdown-it/issues/705)].",
          "timestamp": "2021-01-14T17:51:56Z",
          "url": "https://github.com/executablebooks/markdown-it-py/commit/fa1d3e3c338533e042c327e14d050c7a3a9a7a05",
          "distinct": true,
          "tree_id": "81ca0745ed15786e808d739baac63add392fa4c8"
        },
        "date": 1610646798673,
        "benches": [
          {
            "name": "benchmarking/bench_plugins.py::test_base",
            "value": 4.623339513079306,
            "unit": "iter/sec",
            "range": "stddev: 0.0088352",
            "group": "plugins",
            "extra": "mean: 216.29 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_table",
            "value": 4.744865657857129,
            "unit": "iter/sec",
            "range": "stddev: 0.0081221",
            "group": "plugins",
            "extra": "mean: 210.75 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_amsmath",
            "value": 3.934477428024486,
            "unit": "iter/sec",
            "range": "stddev: 0.010600",
            "group": "plugins",
            "extra": "mean: 254.16 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_container",
            "value": 4.716553424109497,
            "unit": "iter/sec",
            "range": "stddev: 0.0077467",
            "group": "plugins",
            "extra": "mean: 212.02 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_deflist",
            "value": 4.6792957253676875,
            "unit": "iter/sec",
            "range": "stddev: 0.0091985",
            "group": "plugins",
            "extra": "mean: 213.71 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_footnote",
            "value": 4.675437700205752,
            "unit": "iter/sec",
            "range": "stddev: 0.010824",
            "group": "plugins",
            "extra": "mean: 213.88 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_front_matter",
            "value": 4.629197694409144,
            "unit": "iter/sec",
            "range": "stddev: 0.012827",
            "group": "plugins",
            "extra": "mean: 216.02 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_texmath",
            "value": 4.265759864857543,
            "unit": "iter/sec",
            "range": "stddev: 0.017864",
            "group": "plugins",
            "extra": "mean: 234.42 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_dollarmath",
            "value": 4.642265945232274,
            "unit": "iter/sec",
            "range": "stddev: 0.013322",
            "group": "plugins",
            "extra": "mean: 215.41 msec\nrounds: 20"
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
          "pythonVersion": "3.8.7"
        },
        "commit": {
          "id": "fa1d3e3c338533e042c327e14d050c7a3a9a7a05",
          "message": "🐛 FIX: port markdown-it v11.0.1 (#109)\n\nThis commit updates the port to be up-to-date with markdown-it v11.0.1 (2020-09-14), applying two fixes:\r\n\r\n- Fix blockquote lazy newlines, [[#696](https://github.com/markdown-it/markdown-it/issues/696)].\r\n- Fix missed mappings for table rows, [[#705](https://github.com/markdown-it/markdown-it/issues/705)].",
          "timestamp": "2021-01-14T17:51:56Z",
          "url": "https://github.com/executablebooks/markdown-it-py/commit/fa1d3e3c338533e042c327e14d050c7a3a9a7a05",
          "distinct": true,
          "tree_id": "81ca0745ed15786e808d739baac63add392fa4c8"
        },
        "date": 1610646856577,
        "benches": [
          {
            "name": "benchmarking/bench_packages.py::test_markdown_it_py",
            "value": 4.114597924051147,
            "unit": "iter/sec",
            "range": "stddev: 0.0057686",
            "group": "packages",
            "extra": "mean: 243.04 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_mistune",
            "value": 13.258964772250106,
            "unit": "iter/sec",
            "range": "stddev: 0.0026317",
            "group": "packages",
            "extra": "mean: 75.421 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_commonmark_py",
            "value": 2.4246165261144013,
            "unit": "iter/sec",
            "range": "stddev: 0.025981",
            "group": "packages",
            "extra": "mean: 412.44 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_pymarkdown",
            "value": 1.0915013095529824,
            "unit": "iter/sec",
            "range": "stddev: 0.029240",
            "group": "packages",
            "extra": "mean: 916.17 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_pymarkdown_extra",
            "value": 0.9595096342805336,
            "unit": "iter/sec",
            "range": "stddev: 0.058085",
            "group": "packages",
            "extra": "mean: 1.0422 sec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_mistletoe",
            "value": 4.243613106067212,
            "unit": "iter/sec",
            "range": "stddev: 0.0097831",
            "group": "packages",
            "extra": "mean: 235.65 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_panflute",
            "value": 1.0238872800036092,
            "unit": "iter/sec",
            "range": "stddev: 0.064356",
            "group": "packages",
            "extra": "mean: 976.67 msec\nrounds: 20"
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
          "pythonVersion": "3.8.7"
        },
        "commit": {
          "id": "6c2f9005c93d8e2dd9acf3aa367fdaafac516e7f",
          "message": "🚀 RELEASE: v0.6.2",
          "timestamp": "2021-02-07T00:40:16+01:00",
          "url": "https://github.com/executablebooks/markdown-it-py/commit/6c2f9005c93d8e2dd9acf3aa367fdaafac516e7f",
          "distinct": true,
          "tree_id": "45da0bdb292e9d7fee43f71cb1060e06e9869089"
        },
        "date": 1612654899369,
        "benches": [
          {
            "name": "benchmarking/bench_plugins.py::test_base",
            "value": 4.224659281049458,
            "unit": "iter/sec",
            "range": "stddev: 0.0064940",
            "group": "plugins",
            "extra": "mean: 236.71 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_table",
            "value": 4.169754213295867,
            "unit": "iter/sec",
            "range": "stddev: 0.0092895",
            "group": "plugins",
            "extra": "mean: 239.82 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_amsmath",
            "value": 3.057810262105743,
            "unit": "iter/sec",
            "range": "stddev: 0.010611",
            "group": "plugins",
            "extra": "mean: 327.03 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_container",
            "value": 4.0985625082615,
            "unit": "iter/sec",
            "range": "stddev: 0.016179",
            "group": "plugins",
            "extra": "mean: 243.99 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_deflist",
            "value": 4.151963998174026,
            "unit": "iter/sec",
            "range": "stddev: 0.011225",
            "group": "plugins",
            "extra": "mean: 240.85 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_footnote",
            "value": 4.193339738956106,
            "unit": "iter/sec",
            "range": "stddev: 0.011073",
            "group": "plugins",
            "extra": "mean: 238.47 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_front_matter",
            "value": 4.106398956097036,
            "unit": "iter/sec",
            "range": "stddev: 0.014006",
            "group": "plugins",
            "extra": "mean: 243.52 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_texmath",
            "value": 4.292560268406237,
            "unit": "iter/sec",
            "range": "stddev: 0.013096",
            "group": "plugins",
            "extra": "mean: 232.96 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_dollarmath",
            "value": 4.4020819392091175,
            "unit": "iter/sec",
            "range": "stddev: 0.010010",
            "group": "plugins",
            "extra": "mean: 227.17 msec\nrounds: 20"
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
          "pythonVersion": "3.8.7"
        },
        "commit": {
          "id": "6c2f9005c93d8e2dd9acf3aa367fdaafac516e7f",
          "message": "🚀 RELEASE: v0.6.2",
          "timestamp": "2021-02-07T00:40:16+01:00",
          "url": "https://github.com/executablebooks/markdown-it-py/commit/6c2f9005c93d8e2dd9acf3aa367fdaafac516e7f",
          "distinct": true,
          "tree_id": "45da0bdb292e9d7fee43f71cb1060e06e9869089"
        },
        "date": 1612654959472,
        "benches": [
          {
            "name": "benchmarking/bench_packages.py::test_markdown_it_py",
            "value": 3.9289779240652987,
            "unit": "iter/sec",
            "range": "stddev: 0.0085950",
            "group": "packages",
            "extra": "mean: 254.52 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_mistune",
            "value": 10.992495555743606,
            "unit": "iter/sec",
            "range": "stddev: 0.0028006",
            "group": "packages",
            "extra": "mean: 90.971 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_commonmark_py",
            "value": 1.5578724213954245,
            "unit": "iter/sec",
            "range": "stddev: 0.016879",
            "group": "packages",
            "extra": "mean: 641.90 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_pymarkdown",
            "value": 0.9241887215402049,
            "unit": "iter/sec",
            "range": "stddev: 0.021892",
            "group": "packages",
            "extra": "mean: 1.0820 sec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_pymarkdown_extra",
            "value": 0.8500043039075413,
            "unit": "iter/sec",
            "range": "stddev: 0.0091777",
            "group": "packages",
            "extra": "mean: 1.1765 sec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_mistletoe",
            "value": 3.933844964318305,
            "unit": "iter/sec",
            "range": "stddev: 0.0078718",
            "group": "packages",
            "extra": "mean: 254.20 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_panflute",
            "value": 1.0071484114465672,
            "unit": "iter/sec",
            "range": "stddev: 0.010541",
            "group": "packages",
            "extra": "mean: 992.90 msec\nrounds: 20"
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
          "pythonVersion": "3.8.7"
        },
        "commit": {
          "id": "ea8d4bdc35b6a3c498b136584e60a12c09d3435d",
          "message": "🔧 MAINTAIN: Fix broken changelog links (#123)",
          "timestamp": "2021-02-07T13:54:42+01:00",
          "url": "https://github.com/executablebooks/markdown-it-py/commit/ea8d4bdc35b6a3c498b136584e60a12c09d3435d",
          "distinct": true,
          "tree_id": "87cbe50b8cb9a4d3336e1ff6807297b4c5d2b458"
        },
        "date": 1612702566211,
        "benches": [
          {
            "name": "benchmarking/bench_plugins.py::test_base",
            "value": 4.051036581701558,
            "unit": "iter/sec",
            "range": "stddev: 0.0095009",
            "group": "plugins",
            "extra": "mean: 246.85 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_table",
            "value": 3.9854570608084066,
            "unit": "iter/sec",
            "range": "stddev: 0.0096768",
            "group": "plugins",
            "extra": "mean: 250.91 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_amsmath",
            "value": 3.160487270078005,
            "unit": "iter/sec",
            "range": "stddev: 0.0087976",
            "group": "plugins",
            "extra": "mean: 316.41 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_container",
            "value": 4.092770118781675,
            "unit": "iter/sec",
            "range": "stddev: 0.0070582",
            "group": "plugins",
            "extra": "mean: 244.33 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_deflist",
            "value": 4.033271384106553,
            "unit": "iter/sec",
            "range": "stddev: 0.0084200",
            "group": "plugins",
            "extra": "mean: 247.94 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_footnote",
            "value": 4.0124180035899295,
            "unit": "iter/sec",
            "range": "stddev: 0.0086274",
            "group": "plugins",
            "extra": "mean: 249.23 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_front_matter",
            "value": 4.026272471486264,
            "unit": "iter/sec",
            "range": "stddev: 0.0064595",
            "group": "plugins",
            "extra": "mean: 248.37 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_texmath",
            "value": 3.9311771142012217,
            "unit": "iter/sec",
            "range": "stddev: 0.010771",
            "group": "plugins",
            "extra": "mean: 254.38 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_dollarmath",
            "value": 4.014784974012539,
            "unit": "iter/sec",
            "range": "stddev: 0.0072519",
            "group": "plugins",
            "extra": "mean: 249.08 msec\nrounds: 20"
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
          "pythonVersion": "3.8.7"
        },
        "commit": {
          "id": "ea8d4bdc35b6a3c498b136584e60a12c09d3435d",
          "message": "🔧 MAINTAIN: Fix broken changelog links (#123)",
          "timestamp": "2021-02-07T13:54:42+01:00",
          "url": "https://github.com/executablebooks/markdown-it-py/commit/ea8d4bdc35b6a3c498b136584e60a12c09d3435d",
          "distinct": true,
          "tree_id": "87cbe50b8cb9a4d3336e1ff6807297b4c5d2b458"
        },
        "date": 1612702618936,
        "benches": [
          {
            "name": "benchmarking/bench_packages.py::test_markdown_it_py",
            "value": 3.9500369277497303,
            "unit": "iter/sec",
            "range": "stddev: 0.0085860",
            "group": "packages",
            "extra": "mean: 253.16 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_mistune",
            "value": 12.893279772388803,
            "unit": "iter/sec",
            "range": "stddev: 0.0044745",
            "group": "packages",
            "extra": "mean: 77.560 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_commonmark_py",
            "value": 2.201719379093197,
            "unit": "iter/sec",
            "range": "stddev: 0.016097",
            "group": "packages",
            "extra": "mean: 454.19 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_pymarkdown",
            "value": 0.9914617614779977,
            "unit": "iter/sec",
            "range": "stddev: 0.021034",
            "group": "packages",
            "extra": "mean: 1.0086 sec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_pymarkdown_extra",
            "value": 0.8872894859028798,
            "unit": "iter/sec",
            "range": "stddev: 0.016596",
            "group": "packages",
            "extra": "mean: 1.1270 sec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_mistletoe",
            "value": 4.190635944861919,
            "unit": "iter/sec",
            "range": "stddev: 0.0074990",
            "group": "packages",
            "extra": "mean: 238.63 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_panflute",
            "value": 1.0269677669844772,
            "unit": "iter/sec",
            "range": "stddev: 0.011863",
            "group": "packages",
            "extra": "mean: 973.74 msec\nrounds: 20"
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
          "pythonVersion": "3.8.7"
        },
        "commit": {
          "id": "ea891e253d1ca9522ea9fb44c90cd54173ac2a43",
          "message": "🐛 FIX: Version info in CLI help text (#125)",
          "timestamp": "2021-02-15T12:56:23+01:00",
          "url": "https://github.com/executablebooks/markdown-it-py/commit/ea891e253d1ca9522ea9fb44c90cd54173ac2a43",
          "distinct": true,
          "tree_id": "a37ec55aea6d1785f947280bc1858a62869b8036"
        },
        "date": 1613390262435,
        "benches": [
          {
            "name": "benchmarking/bench_plugins.py::test_base",
            "value": 4.202670089406349,
            "unit": "iter/sec",
            "range": "stddev: 0.0062176",
            "group": "plugins",
            "extra": "mean: 237.94 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_table",
            "value": 4.122728651705055,
            "unit": "iter/sec",
            "range": "stddev: 0.0055171",
            "group": "plugins",
            "extra": "mean: 242.56 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_amsmath",
            "value": 3.4602437738001632,
            "unit": "iter/sec",
            "range": "stddev: 0.0057520",
            "group": "plugins",
            "extra": "mean: 289.00 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_container",
            "value": 4.115116729705641,
            "unit": "iter/sec",
            "range": "stddev: 0.0065544",
            "group": "plugins",
            "extra": "mean: 243.01 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_deflist",
            "value": 4.114713062553201,
            "unit": "iter/sec",
            "range": "stddev: 0.0049792",
            "group": "plugins",
            "extra": "mean: 243.03 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_footnote",
            "value": 4.170088017117823,
            "unit": "iter/sec",
            "range": "stddev: 0.0047203",
            "group": "plugins",
            "extra": "mean: 239.80 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_front_matter",
            "value": 4.154274446951025,
            "unit": "iter/sec",
            "range": "stddev: 0.0054610",
            "group": "plugins",
            "extra": "mean: 240.72 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_texmath",
            "value": 4.052280804723177,
            "unit": "iter/sec",
            "range": "stddev: 0.0091880",
            "group": "plugins",
            "extra": "mean: 246.77 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_dollarmath",
            "value": 4.191448118155867,
            "unit": "iter/sec",
            "range": "stddev: 0.0054871",
            "group": "plugins",
            "extra": "mean: 238.58 msec\nrounds: 20"
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
          "pythonVersion": "3.8.7"
        },
        "commit": {
          "id": "ea891e253d1ca9522ea9fb44c90cd54173ac2a43",
          "message": "🐛 FIX: Version info in CLI help text (#125)",
          "timestamp": "2021-02-15T12:56:23+01:00",
          "url": "https://github.com/executablebooks/markdown-it-py/commit/ea891e253d1ca9522ea9fb44c90cd54173ac2a43",
          "distinct": true,
          "tree_id": "a37ec55aea6d1785f947280bc1858a62869b8036"
        },
        "date": 1613390342737,
        "benches": [
          {
            "name": "benchmarking/bench_packages.py::test_markdown_it_py",
            "value": 3.9667140591613683,
            "unit": "iter/sec",
            "range": "stddev: 0.0053186",
            "group": "packages",
            "extra": "mean: 252.10 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_mistune",
            "value": 10.811385485622885,
            "unit": "iter/sec",
            "range": "stddev: 0.0082849",
            "group": "packages",
            "extra": "mean: 92.495 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_commonmark_py",
            "value": 1.5496581126412072,
            "unit": "iter/sec",
            "range": "stddev: 0.018979",
            "group": "packages",
            "extra": "mean: 645.30 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_pymarkdown",
            "value": 0.9317347204005254,
            "unit": "iter/sec",
            "range": "stddev: 0.016502",
            "group": "packages",
            "extra": "mean: 1.0733 sec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_pymarkdown_extra",
            "value": 0.847536150983906,
            "unit": "iter/sec",
            "range": "stddev: 0.011031",
            "group": "packages",
            "extra": "mean: 1.1799 sec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_mistletoe",
            "value": 3.9079041142976383,
            "unit": "iter/sec",
            "range": "stddev: 0.0063794",
            "group": "packages",
            "extra": "mean: 255.89 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_panflute",
            "value": 1.012476844338805,
            "unit": "iter/sec",
            "range": "stddev: 0.0084345",
            "group": "packages",
            "extra": "mean: 987.68 msec\nrounds: 20"
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
          "pythonVersion": "3.8.7"
        },
        "commit": {
          "id": "2afb7cc5a824cf8340e405704cc996208ae33d0e",
          "message": "🐛 FIX: cli.parse: return 0 for non-error (#124)\n\nCo-authored-by: Taneli Hukkinen <hukkinj1@users.noreply.github.com>\r\nCo-authored-by: Wes Turner <wes@wrd.nu>\r\nCo-authored-by: Wes Turner <50891+westurner@users.noreply.github.com>\r\nCo-authored-by: Chris Sewell <chrisj_sewell@hotmail.com>",
          "timestamp": "2021-02-15T12:59:04+01:00",
          "url": "https://github.com/executablebooks/markdown-it-py/commit/2afb7cc5a824cf8340e405704cc996208ae33d0e",
          "distinct": true,
          "tree_id": "d5ab31962bf07cef9b67639e3e0efe4e44a27dc6"
        },
        "date": 1613390419145,
        "benches": [
          {
            "name": "benchmarking/bench_plugins.py::test_base",
            "value": 4.769984183829507,
            "unit": "iter/sec",
            "range": "stddev: 0.0068171",
            "group": "plugins",
            "extra": "mean: 209.64 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_table",
            "value": 4.6249877863321975,
            "unit": "iter/sec",
            "range": "stddev: 0.0092404",
            "group": "plugins",
            "extra": "mean: 216.22 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_amsmath",
            "value": 3.968576011897994,
            "unit": "iter/sec",
            "range": "stddev: 0.0063662",
            "group": "plugins",
            "extra": "mean: 251.98 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_container",
            "value": 4.617207603311058,
            "unit": "iter/sec",
            "range": "stddev: 0.0052910",
            "group": "plugins",
            "extra": "mean: 216.58 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_deflist",
            "value": 4.637731028605973,
            "unit": "iter/sec",
            "range": "stddev: 0.0080408",
            "group": "plugins",
            "extra": "mean: 215.62 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_footnote",
            "value": 4.5601635862923136,
            "unit": "iter/sec",
            "range": "stddev: 0.011050",
            "group": "plugins",
            "extra": "mean: 219.29 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_front_matter",
            "value": 4.6849145877937675,
            "unit": "iter/sec",
            "range": "stddev: 0.0058165",
            "group": "plugins",
            "extra": "mean: 213.45 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_texmath",
            "value": 4.574562946942238,
            "unit": "iter/sec",
            "range": "stddev: 0.0082432",
            "group": "plugins",
            "extra": "mean: 218.60 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_dollarmath",
            "value": 4.576680821598286,
            "unit": "iter/sec",
            "range": "stddev: 0.0075419",
            "group": "plugins",
            "extra": "mean: 218.50 msec\nrounds: 20"
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
          "pythonVersion": "3.8.7"
        },
        "commit": {
          "id": "2afb7cc5a824cf8340e405704cc996208ae33d0e",
          "message": "🐛 FIX: cli.parse: return 0 for non-error (#124)\n\nCo-authored-by: Taneli Hukkinen <hukkinj1@users.noreply.github.com>\r\nCo-authored-by: Wes Turner <wes@wrd.nu>\r\nCo-authored-by: Wes Turner <50891+westurner@users.noreply.github.com>\r\nCo-authored-by: Chris Sewell <chrisj_sewell@hotmail.com>",
          "timestamp": "2021-02-15T12:59:04+01:00",
          "url": "https://github.com/executablebooks/markdown-it-py/commit/2afb7cc5a824cf8340e405704cc996208ae33d0e",
          "distinct": true,
          "tree_id": "d5ab31962bf07cef9b67639e3e0efe4e44a27dc6"
        },
        "date": 1613390486126,
        "benches": [
          {
            "name": "benchmarking/bench_packages.py::test_markdown_it_py",
            "value": 4.291824504145787,
            "unit": "iter/sec",
            "range": "stddev: 0.0058112",
            "group": "packages",
            "extra": "mean: 233.00 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_mistune",
            "value": 13.991555561740878,
            "unit": "iter/sec",
            "range": "stddev: 0.0026525",
            "group": "packages",
            "extra": "mean: 71.472 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_commonmark_py",
            "value": 2.356323209113114,
            "unit": "iter/sec",
            "range": "stddev: 0.015508",
            "group": "packages",
            "extra": "mean: 424.39 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_pymarkdown",
            "value": 1.0365993735632117,
            "unit": "iter/sec",
            "range": "stddev: 0.011874",
            "group": "packages",
            "extra": "mean: 964.69 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_pymarkdown_extra",
            "value": 0.9168789978679248,
            "unit": "iter/sec",
            "range": "stddev: 0.015659",
            "group": "packages",
            "extra": "mean: 1.0907 sec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_mistletoe",
            "value": 4.348004827763632,
            "unit": "iter/sec",
            "range": "stddev: 0.0046475",
            "group": "packages",
            "extra": "mean: 229.99 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_panflute",
            "value": 1.0612851642874672,
            "unit": "iter/sec",
            "range": "stddev: 0.014775",
            "group": "packages",
            "extra": "mean: 942.25 msec\nrounds: 20"
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
          "pythonVersion": "3.8.7"
        },
        "commit": {
          "id": "031b329a30c84f9552ed27cbf7d431d70c982db9",
          "message": "👌 IMPROVE: Make `NestedTokens.closing` not optional (#118)\n\nCo-authored-by: Chris Sewell <chrisj_sewell@hotmail.com>",
          "timestamp": "2021-02-25T01:33:06+01:00",
          "url": "https://github.com/executablebooks/markdown-it-py/commit/031b329a30c84f9552ed27cbf7d431d70c982db9",
          "distinct": true,
          "tree_id": "8ebbb6a4df0291ae19bdf952d754e020a027d4e9"
        },
        "date": 1614213275587,
        "benches": [
          {
            "name": "benchmarking/bench_plugins.py::test_base",
            "value": 3.9012568027531658,
            "unit": "iter/sec",
            "range": "stddev: 0.0050640",
            "group": "plugins",
            "extra": "mean: 256.33 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_table",
            "value": 3.8398082086452114,
            "unit": "iter/sec",
            "range": "stddev: 0.0047714",
            "group": "plugins",
            "extra": "mean: 260.43 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_amsmath",
            "value": 3.2483792604327832,
            "unit": "iter/sec",
            "range": "stddev: 0.0079150",
            "group": "plugins",
            "extra": "mean: 307.85 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_container",
            "value": 3.860760460925758,
            "unit": "iter/sec",
            "range": "stddev: 0.0052276",
            "group": "plugins",
            "extra": "mean: 259.02 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_deflist",
            "value": 3.860120293627374,
            "unit": "iter/sec",
            "range": "stddev: 0.0057767",
            "group": "plugins",
            "extra": "mean: 259.06 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_footnote",
            "value": 3.8557747932137674,
            "unit": "iter/sec",
            "range": "stddev: 0.0051193",
            "group": "plugins",
            "extra": "mean: 259.35 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_front_matter",
            "value": 3.862796778874528,
            "unit": "iter/sec",
            "range": "stddev: 0.0047235",
            "group": "plugins",
            "extra": "mean: 258.88 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_texmath",
            "value": 3.7678019325422394,
            "unit": "iter/sec",
            "range": "stddev: 0.0067053",
            "group": "plugins",
            "extra": "mean: 265.41 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_dollarmath",
            "value": 3.8541745761555335,
            "unit": "iter/sec",
            "range": "stddev: 0.0058215",
            "group": "plugins",
            "extra": "mean: 259.46 msec\nrounds: 20"
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
          "pythonVersion": "3.8.7"
        },
        "commit": {
          "id": "031b329a30c84f9552ed27cbf7d431d70c982db9",
          "message": "👌 IMPROVE: Make `NestedTokens.closing` not optional (#118)\n\nCo-authored-by: Chris Sewell <chrisj_sewell@hotmail.com>",
          "timestamp": "2021-02-25T01:33:06+01:00",
          "url": "https://github.com/executablebooks/markdown-it-py/commit/031b329a30c84f9552ed27cbf7d431d70c982db9",
          "distinct": true,
          "tree_id": "8ebbb6a4df0291ae19bdf952d754e020a027d4e9"
        },
        "date": 1614213313977,
        "benches": [
          {
            "name": "benchmarking/bench_packages.py::test_markdown_it_py",
            "value": 4.815451015616474,
            "unit": "iter/sec",
            "range": "stddev: 0.0057011",
            "group": "packages",
            "extra": "mean: 207.66 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_mistune",
            "value": 15.698995830921689,
            "unit": "iter/sec",
            "range": "stddev: 0.0022566",
            "group": "packages",
            "extra": "mean: 63.698 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_commonmark_py",
            "value": 2.534646578977786,
            "unit": "iter/sec",
            "range": "stddev: 0.014918",
            "group": "packages",
            "extra": "mean: 394.53 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_pymarkdown",
            "value": 1.1816397261287372,
            "unit": "iter/sec",
            "range": "stddev: 0.0093531",
            "group": "packages",
            "extra": "mean: 846.28 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_pymarkdown_extra",
            "value": 1.026184426816662,
            "unit": "iter/sec",
            "range": "stddev: 0.021065",
            "group": "packages",
            "extra": "mean: 974.48 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_mistletoe",
            "value": 4.837289541664603,
            "unit": "iter/sec",
            "range": "stddev: 0.0058240",
            "group": "packages",
            "extra": "mean: 206.73 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_panflute",
            "value": 1.2518528964210898,
            "unit": "iter/sec",
            "range": "stddev: 0.046857",
            "group": "packages",
            "extra": "mean: 798.82 msec\nrounds: 20"
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
          "pythonVersion": "3.8.7"
        },
        "commit": {
          "id": "11eb374b0b13a915693a9eeb1ef72dd496367ec7",
          "message": "🐛 FIX: `Token.attrs` type annotations (#95)\n\nCo-authored-by: Chris Sewell <chrisj_sewell@hotmail.com>",
          "timestamp": "2021-02-25T01:37:56+01:00",
          "url": "https://github.com/executablebooks/markdown-it-py/commit/11eb374b0b13a915693a9eeb1ef72dd496367ec7",
          "distinct": true,
          "tree_id": "4292232563f400833bcc9546cafccd974e39e27e"
        },
        "date": 1614213568337,
        "benches": [
          {
            "name": "benchmarking/bench_plugins.py::test_base",
            "value": 3.875367139469879,
            "unit": "iter/sec",
            "range": "stddev: 0.0087765",
            "group": "plugins",
            "extra": "mean: 258.04 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_table",
            "value": 3.8422739334526823,
            "unit": "iter/sec",
            "range": "stddev: 0.0067299",
            "group": "plugins",
            "extra": "mean: 260.26 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_amsmath",
            "value": 3.294587508260983,
            "unit": "iter/sec",
            "range": "stddev: 0.0074693",
            "group": "plugins",
            "extra": "mean: 303.53 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_container",
            "value": 3.8567484810845007,
            "unit": "iter/sec",
            "range": "stddev: 0.0081059",
            "group": "plugins",
            "extra": "mean: 259.29 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_deflist",
            "value": 3.8976183496279724,
            "unit": "iter/sec",
            "range": "stddev: 0.0076238",
            "group": "plugins",
            "extra": "mean: 256.57 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_footnote",
            "value": 4.115036532658593,
            "unit": "iter/sec",
            "range": "stddev: 0.0062553",
            "group": "plugins",
            "extra": "mean: 243.01 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_front_matter",
            "value": 4.127167589475525,
            "unit": "iter/sec",
            "range": "stddev: 0.0060545",
            "group": "plugins",
            "extra": "mean: 242.30 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_texmath",
            "value": 3.9898269443345065,
            "unit": "iter/sec",
            "range": "stddev: 0.0052759",
            "group": "plugins",
            "extra": "mean: 250.64 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_dollarmath",
            "value": 4.075880629740299,
            "unit": "iter/sec",
            "range": "stddev: 0.0053617",
            "group": "plugins",
            "extra": "mean: 245.35 msec\nrounds: 20"
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
          "pythonVersion": "3.8.7"
        },
        "commit": {
          "id": "11eb374b0b13a915693a9eeb1ef72dd496367ec7",
          "message": "🐛 FIX: `Token.attrs` type annotations (#95)\n\nCo-authored-by: Chris Sewell <chrisj_sewell@hotmail.com>",
          "timestamp": "2021-02-25T01:37:56+01:00",
          "url": "https://github.com/executablebooks/markdown-it-py/commit/11eb374b0b13a915693a9eeb1ef72dd496367ec7",
          "distinct": true,
          "tree_id": "4292232563f400833bcc9546cafccd974e39e27e"
        },
        "date": 1614213642555,
        "benches": [
          {
            "name": "benchmarking/bench_packages.py::test_markdown_it_py",
            "value": 3.7157356983427037,
            "unit": "iter/sec",
            "range": "stddev: 0.012417",
            "group": "packages",
            "extra": "mean: 269.13 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_mistune",
            "value": 13.079118021552388,
            "unit": "iter/sec",
            "range": "stddev: 0.0024812",
            "group": "packages",
            "extra": "mean: 76.458 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_commonmark_py",
            "value": 2.173339929486658,
            "unit": "iter/sec",
            "range": "stddev: 0.015222",
            "group": "packages",
            "extra": "mean: 460.12 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_pymarkdown",
            "value": 0.9936867793777642,
            "unit": "iter/sec",
            "range": "stddev: 0.0078836",
            "group": "packages",
            "extra": "mean: 1.0064 sec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_pymarkdown_extra",
            "value": 0.8583405581889514,
            "unit": "iter/sec",
            "range": "stddev: 0.027571",
            "group": "packages",
            "extra": "mean: 1.1650 sec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_mistletoe",
            "value": 4.15545158849762,
            "unit": "iter/sec",
            "range": "stddev: 0.0045153",
            "group": "packages",
            "extra": "mean: 240.65 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_panflute",
            "value": 0.9986990350146583,
            "unit": "iter/sec",
            "range": "stddev: 0.024948",
            "group": "packages",
            "extra": "mean: 1.0013 sec\nrounds: 20"
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
          "pythonVersion": "3.8.7"
        },
        "commit": {
          "id": "888636c972fa415466b221253e957756796f7b71",
          "message": "✨ NEW: Add SyntaxTreeNode (#129)\n\nThis is a more comprehensive replacement for\r\n`nest_tokens` and `NestedTokens` (which are now deprecated).\r\nIt allows for the `Token` stream to be converted to/from\r\na nested tree structure, with opening/closing tokens collapsed into a single\r\n`SyntaxTreeNode` and the intermediate tokens set as children.",
          "timestamp": "2021-02-25T21:29:52+01:00",
          "url": "https://github.com/executablebooks/markdown-it-py/commit/888636c972fa415466b221253e957756796f7b71",
          "distinct": true,
          "tree_id": "6db12890be798219172f0e74ab77e7e191ed579c"
        },
        "date": 1614285059578,
        "benches": [
          {
            "name": "benchmarking/bench_plugins.py::test_base",
            "value": 4.745550778140485,
            "unit": "iter/sec",
            "range": "stddev: 0.0059907",
            "group": "plugins",
            "extra": "mean: 210.72 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_table",
            "value": 4.703043909911157,
            "unit": "iter/sec",
            "range": "stddev: 0.0052626",
            "group": "plugins",
            "extra": "mean: 212.63 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_amsmath",
            "value": 4.12606426791414,
            "unit": "iter/sec",
            "range": "stddev: 0.014161",
            "group": "plugins",
            "extra": "mean: 242.36 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_container",
            "value": 5.338666601475196,
            "unit": "iter/sec",
            "range": "stddev: 0.0058440",
            "group": "plugins",
            "extra": "mean: 187.31 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_deflist",
            "value": 5.362985854172873,
            "unit": "iter/sec",
            "range": "stddev: 0.0053100",
            "group": "plugins",
            "extra": "mean: 186.46 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_footnote",
            "value": 5.341423130897686,
            "unit": "iter/sec",
            "range": "stddev: 0.0054062",
            "group": "plugins",
            "extra": "mean: 187.22 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_front_matter",
            "value": 5.342911429600261,
            "unit": "iter/sec",
            "range": "stddev: 0.0052539",
            "group": "plugins",
            "extra": "mean: 187.16 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_texmath",
            "value": 5.222679765354373,
            "unit": "iter/sec",
            "range": "stddev: 0.0058382",
            "group": "plugins",
            "extra": "mean: 191.47 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_dollarmath",
            "value": 5.352226994348112,
            "unit": "iter/sec",
            "range": "stddev: 0.0055350",
            "group": "plugins",
            "extra": "mean: 186.84 msec\nrounds: 20"
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
          "pythonVersion": "3.8.7"
        },
        "commit": {
          "id": "888636c972fa415466b221253e957756796f7b71",
          "message": "✨ NEW: Add SyntaxTreeNode (#129)\n\nThis is a more comprehensive replacement for\r\n`nest_tokens` and `NestedTokens` (which are now deprecated).\r\nIt allows for the `Token` stream to be converted to/from\r\na nested tree structure, with opening/closing tokens collapsed into a single\r\n`SyntaxTreeNode` and the intermediate tokens set as children.",
          "timestamp": "2021-02-25T21:29:52+01:00",
          "url": "https://github.com/executablebooks/markdown-it-py/commit/888636c972fa415466b221253e957756796f7b71",
          "distinct": true,
          "tree_id": "6db12890be798219172f0e74ab77e7e191ed579c"
        },
        "date": 1614285104747,
        "benches": [
          {
            "name": "benchmarking/bench_packages.py::test_markdown_it_py",
            "value": 5.483123910592621,
            "unit": "iter/sec",
            "range": "stddev: 0.0064352",
            "group": "packages",
            "extra": "mean: 182.38 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_mistune",
            "value": 17.62579167289861,
            "unit": "iter/sec",
            "range": "stddev: 0.0027647",
            "group": "packages",
            "extra": "mean: 56.735 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_commonmark_py",
            "value": 2.8290325166417354,
            "unit": "iter/sec",
            "range": "stddev: 0.012751",
            "group": "packages",
            "extra": "mean: 353.48 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_pymarkdown",
            "value": 1.3232356946651185,
            "unit": "iter/sec",
            "range": "stddev: 0.015875",
            "group": "packages",
            "extra": "mean: 755.72 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_pymarkdown_extra",
            "value": 1.1648769321875312,
            "unit": "iter/sec",
            "range": "stddev: 0.010035",
            "group": "packages",
            "extra": "mean: 858.46 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_mistletoe",
            "value": 5.585716667611401,
            "unit": "iter/sec",
            "range": "stddev: 0.0051935",
            "group": "packages",
            "extra": "mean: 179.03 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_panflute",
            "value": 1.3265494526447168,
            "unit": "iter/sec",
            "range": "stddev: 0.013252",
            "group": "packages",
            "extra": "mean: 753.84 msec\nrounds: 20"
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
          "pythonVersion": "3.8.7"
        },
        "commit": {
          "id": "261dc90aebbbb38fa6df70726b7d62ea4a7dcf02",
          "message": "👌 IMPROVE: Make `SyntaxTreeNode` subclassable (#130)",
          "timestamp": "2021-02-25T22:07:18+01:00",
          "url": "https://github.com/executablebooks/markdown-it-py/commit/261dc90aebbbb38fa6df70726b7d62ea4a7dcf02",
          "distinct": true,
          "tree_id": "ee865f9bf958b1741ef0ab09eb24a61d6a76f297"
        },
        "date": 1614287315310,
        "benches": [
          {
            "name": "benchmarking/bench_plugins.py::test_base",
            "value": 4.552695474129379,
            "unit": "iter/sec",
            "range": "stddev: 0.016630",
            "group": "plugins",
            "extra": "mean: 219.65 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_table",
            "value": 4.543976636675186,
            "unit": "iter/sec",
            "range": "stddev: 0.012018",
            "group": "plugins",
            "extra": "mean: 220.07 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_amsmath",
            "value": 3.352132677216959,
            "unit": "iter/sec",
            "range": "stddev: 0.014867",
            "group": "plugins",
            "extra": "mean: 298.32 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_container",
            "value": 4.54184932352416,
            "unit": "iter/sec",
            "range": "stddev: 0.012104",
            "group": "plugins",
            "extra": "mean: 220.17 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_deflist",
            "value": 4.561905423372355,
            "unit": "iter/sec",
            "range": "stddev: 0.0099799",
            "group": "plugins",
            "extra": "mean: 219.21 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_footnote",
            "value": 4.556361432975169,
            "unit": "iter/sec",
            "range": "stddev: 0.014673",
            "group": "plugins",
            "extra": "mean: 219.47 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_front_matter",
            "value": 4.601042575680967,
            "unit": "iter/sec",
            "range": "stddev: 0.011497",
            "group": "plugins",
            "extra": "mean: 217.34 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_texmath",
            "value": 4.46214677426933,
            "unit": "iter/sec",
            "range": "stddev: 0.012134",
            "group": "plugins",
            "extra": "mean: 224.11 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_dollarmath",
            "value": 4.504379893472415,
            "unit": "iter/sec",
            "range": "stddev: 0.012010",
            "group": "plugins",
            "extra": "mean: 222.01 msec\nrounds: 20"
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
          "pythonVersion": "3.8.7"
        },
        "commit": {
          "id": "261dc90aebbbb38fa6df70726b7d62ea4a7dcf02",
          "message": "👌 IMPROVE: Make `SyntaxTreeNode` subclassable (#130)",
          "timestamp": "2021-02-25T22:07:18+01:00",
          "url": "https://github.com/executablebooks/markdown-it-py/commit/261dc90aebbbb38fa6df70726b7d62ea4a7dcf02",
          "distinct": true,
          "tree_id": "ee865f9bf958b1741ef0ab09eb24a61d6a76f297"
        },
        "date": 1614287388013,
        "benches": [
          {
            "name": "benchmarking/bench_packages.py::test_markdown_it_py",
            "value": 3.9036440690316043,
            "unit": "iter/sec",
            "range": "stddev: 0.0056317",
            "group": "packages",
            "extra": "mean: 256.17 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_mistune",
            "value": 10.938289001004058,
            "unit": "iter/sec",
            "range": "stddev: 0.0033522",
            "group": "packages",
            "extra": "mean: 91.422 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_commonmark_py",
            "value": 1.5072081065260412,
            "unit": "iter/sec",
            "range": "stddev: 0.021558",
            "group": "packages",
            "extra": "mean: 663.48 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_pymarkdown",
            "value": 0.9062035947907391,
            "unit": "iter/sec",
            "range": "stddev: 0.026010",
            "group": "packages",
            "extra": "mean: 1.1035 sec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_pymarkdown_extra",
            "value": 0.8278412084796816,
            "unit": "iter/sec",
            "range": "stddev: 0.020154",
            "group": "packages",
            "extra": "mean: 1.2080 sec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_mistletoe",
            "value": 3.834341525891733,
            "unit": "iter/sec",
            "range": "stddev: 0.0065265",
            "group": "packages",
            "extra": "mean: 260.80 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_panflute",
            "value": 0.9942839641993545,
            "unit": "iter/sec",
            "range": "stddev: 0.0098597",
            "group": "packages",
            "extra": "mean: 1.0057 sec\nrounds: 20"
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
          "pythonVersion": "3.8.8"
        },
        "commit": {
          "id": "a40f6a80f84f2c02e999c6b77f8112c050f8cbe6",
          "message": "🐛 FIX: empty lines after blockquote+footnote (#134)",
          "timestamp": "2021-03-03T12:34:16+01:00",
          "url": "https://github.com/executablebooks/markdown-it-py/commit/a40f6a80f84f2c02e999c6b77f8112c050f8cbe6",
          "distinct": true,
          "tree_id": "7be54f29050dce744f929fb48a29ab7a48773988"
        },
        "date": 1614771358717,
        "benches": [
          {
            "name": "benchmarking/bench_plugins.py::test_base",
            "value": 4.008921235231564,
            "unit": "iter/sec",
            "range": "stddev: 0.0053120",
            "group": "plugins",
            "extra": "mean: 249.44 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_table",
            "value": 3.921478478043151,
            "unit": "iter/sec",
            "range": "stddev: 0.0053953",
            "group": "plugins",
            "extra": "mean: 255.01 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_amsmath",
            "value": 3.3520457920870483,
            "unit": "iter/sec",
            "range": "stddev: 0.0061515",
            "group": "plugins",
            "extra": "mean: 298.33 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_container",
            "value": 3.9749850423001885,
            "unit": "iter/sec",
            "range": "stddev: 0.0057991",
            "group": "plugins",
            "extra": "mean: 251.57 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_deflist",
            "value": 3.9777983607804632,
            "unit": "iter/sec",
            "range": "stddev: 0.0053633",
            "group": "plugins",
            "extra": "mean: 251.40 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_footnote",
            "value": 3.9465855363605282,
            "unit": "iter/sec",
            "range": "stddev: 0.0049147",
            "group": "plugins",
            "extra": "mean: 253.38 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_front_matter",
            "value": 3.985869399437724,
            "unit": "iter/sec",
            "range": "stddev: 0.0057654",
            "group": "plugins",
            "extra": "mean: 250.89 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_texmath",
            "value": 3.883781937663689,
            "unit": "iter/sec",
            "range": "stddev: 0.0051693",
            "group": "plugins",
            "extra": "mean: 257.48 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_dollarmath",
            "value": 3.976198702798828,
            "unit": "iter/sec",
            "range": "stddev: 0.0054613",
            "group": "plugins",
            "extra": "mean: 251.50 msec\nrounds: 20"
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
          "pythonVersion": "3.8.8"
        },
        "commit": {
          "id": "a40f6a80f84f2c02e999c6b77f8112c050f8cbe6",
          "message": "🐛 FIX: empty lines after blockquote+footnote (#134)",
          "timestamp": "2021-03-03T12:34:16+01:00",
          "url": "https://github.com/executablebooks/markdown-it-py/commit/a40f6a80f84f2c02e999c6b77f8112c050f8cbe6",
          "distinct": true,
          "tree_id": "7be54f29050dce744f929fb48a29ab7a48773988"
        },
        "date": 1614771418954,
        "benches": [
          {
            "name": "benchmarking/bench_packages.py::test_markdown_it_py",
            "value": 3.74396019474239,
            "unit": "iter/sec",
            "range": "stddev: 0.0065509",
            "group": "packages",
            "extra": "mean: 267.10 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_mistune",
            "value": 10.549453105432292,
            "unit": "iter/sec",
            "range": "stddev: 0.0046666",
            "group": "packages",
            "extra": "mean: 94.792 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_commonmark_py",
            "value": 1.402070427726333,
            "unit": "iter/sec",
            "range": "stddev: 0.017746",
            "group": "packages",
            "extra": "mean: 713.23 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_pymarkdown",
            "value": 0.9183980486762879,
            "unit": "iter/sec",
            "range": "stddev: 0.018903",
            "group": "packages",
            "extra": "mean: 1.0889 sec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_pymarkdown_extra",
            "value": 0.8416983631686241,
            "unit": "iter/sec",
            "range": "stddev: 0.016573",
            "group": "packages",
            "extra": "mean: 1.1881 sec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_mistletoe",
            "value": 3.7333664547649605,
            "unit": "iter/sec",
            "range": "stddev: 0.0064506",
            "group": "packages",
            "extra": "mean: 267.85 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_panflute",
            "value": 0.9554005864244297,
            "unit": "iter/sec",
            "range": "stddev: 0.020531",
            "group": "packages",
            "extra": "mean: 1.0467 sec\nrounds: 20"
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
          "pythonVersion": "3.8.8"
        },
        "commit": {
          "id": "a70db2a8b4860445745c6398251589e3a8fb1aa2",
          "message": "👌 IMPROVE: Make link functions overridable (#135)\n\n`validateLink`,  `normalizeLink` and `normalizeLinkText` are now methods of `MarkdownIt`,\r\nmeaning that they can be overriden by subclassing\r\n`MarkdownIt`.",
          "timestamp": "2021-03-03T13:33:54+01:00",
          "url": "https://github.com/executablebooks/markdown-it-py/commit/a70db2a8b4860445745c6398251589e3a8fb1aa2",
          "distinct": true,
          "tree_id": "639e520e372834c79a86515e7719768152524b51"
        },
        "date": 1614774917989,
        "benches": [
          {
            "name": "benchmarking/bench_plugins.py::test_base",
            "value": 4.234709028227239,
            "unit": "iter/sec",
            "range": "stddev: 0.0068779",
            "group": "plugins",
            "extra": "mean: 236.14 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_table",
            "value": 4.232820239583506,
            "unit": "iter/sec",
            "range": "stddev: 0.0062738",
            "group": "plugins",
            "extra": "mean: 236.25 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_amsmath",
            "value": 3.110481047231671,
            "unit": "iter/sec",
            "range": "stddev: 0.010026",
            "group": "plugins",
            "extra": "mean: 321.49 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_container",
            "value": 4.164428568277756,
            "unit": "iter/sec",
            "range": "stddev: 0.010049",
            "group": "plugins",
            "extra": "mean: 240.13 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_deflist",
            "value": 4.204472142335249,
            "unit": "iter/sec",
            "range": "stddev: 0.0084400",
            "group": "plugins",
            "extra": "mean: 237.84 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_footnote",
            "value": 4.181871269305348,
            "unit": "iter/sec",
            "range": "stddev: 0.0056991",
            "group": "plugins",
            "extra": "mean: 239.13 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_front_matter",
            "value": 4.1689121930283735,
            "unit": "iter/sec",
            "range": "stddev: 0.0091626",
            "group": "plugins",
            "extra": "mean: 239.87 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_texmath",
            "value": 4.088356404052516,
            "unit": "iter/sec",
            "range": "stddev: 0.0086920",
            "group": "plugins",
            "extra": "mean: 244.60 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_dollarmath",
            "value": 4.245612113285312,
            "unit": "iter/sec",
            "range": "stddev: 0.0073419",
            "group": "plugins",
            "extra": "mean: 235.54 msec\nrounds: 20"
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
          "pythonVersion": "3.8.8"
        },
        "commit": {
          "id": "a70db2a8b4860445745c6398251589e3a8fb1aa2",
          "message": "👌 IMPROVE: Make link functions overridable (#135)\n\n`validateLink`,  `normalizeLink` and `normalizeLinkText` are now methods of `MarkdownIt`,\r\nmeaning that they can be overriden by subclassing\r\n`MarkdownIt`.",
          "timestamp": "2021-03-03T13:33:54+01:00",
          "url": "https://github.com/executablebooks/markdown-it-py/commit/a70db2a8b4860445745c6398251589e3a8fb1aa2",
          "distinct": true,
          "tree_id": "639e520e372834c79a86515e7719768152524b51"
        },
        "date": 1614774981316,
        "benches": [
          {
            "name": "benchmarking/bench_packages.py::test_markdown_it_py",
            "value": 3.946845333955803,
            "unit": "iter/sec",
            "range": "stddev: 0.010144",
            "group": "packages",
            "extra": "mean: 253.37 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_mistune",
            "value": 10.807673495087013,
            "unit": "iter/sec",
            "range": "stddev: 0.0025996",
            "group": "packages",
            "extra": "mean: 92.527 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_commonmark_py",
            "value": 1.5218386350599318,
            "unit": "iter/sec",
            "range": "stddev: 0.022562",
            "group": "packages",
            "extra": "mean: 657.10 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_pymarkdown",
            "value": 0.9899385458614071,
            "unit": "iter/sec",
            "range": "stddev: 0.045203",
            "group": "packages",
            "extra": "mean: 1.0102 sec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_pymarkdown_extra",
            "value": 0.8998229709837683,
            "unit": "iter/sec",
            "range": "stddev: 0.033563",
            "group": "packages",
            "extra": "mean: 1.1113 sec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_mistletoe",
            "value": 4.314092684448682,
            "unit": "iter/sec",
            "range": "stddev: 0.0059054",
            "group": "packages",
            "extra": "mean: 231.80 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_panflute",
            "value": 1.0815371801006786,
            "unit": "iter/sec",
            "range": "stddev: 0.026861",
            "group": "packages",
            "extra": "mean: 924.61 msec\nrounds: 20"
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
          "pythonVersion": "3.8.8"
        },
        "commit": {
          "id": "09edd663973f12155459506aafa94f1a857b83dd",
          "message": "👌 IMPROVE: MarkdownIt config and documentation (#136)\n\nAdd additional configuration presets,\r\nallow for options to be overridden in the `MarkdownIt` initialisation,\r\nAdd convenience methods to `SyntaxTreeNode`.",
          "timestamp": "2021-03-04T00:56:32+01:00",
          "url": "https://github.com/executablebooks/markdown-it-py/commit/09edd663973f12155459506aafa94f1a857b83dd",
          "distinct": true,
          "tree_id": "96286a9d6d5b8aa7e4ed5aaa3770f9ae756c95a5"
        },
        "date": 1614815885889,
        "benches": [
          {
            "name": "benchmarking/bench_plugins.py::test_base",
            "value": 3.784234237037876,
            "unit": "iter/sec",
            "range": "stddev: 0.012524",
            "group": "plugins",
            "extra": "mean: 264.25 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_table",
            "value": 3.5293207117608505,
            "unit": "iter/sec",
            "range": "stddev: 0.011226",
            "group": "plugins",
            "extra": "mean: 283.34 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_amsmath",
            "value": 2.789136986353534,
            "unit": "iter/sec",
            "range": "stddev: 0.0091678",
            "group": "plugins",
            "extra": "mean: 358.53 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_container",
            "value": 3.6586037972639014,
            "unit": "iter/sec",
            "range": "stddev: 0.011213",
            "group": "plugins",
            "extra": "mean: 273.33 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_deflist",
            "value": 3.696855863551962,
            "unit": "iter/sec",
            "range": "stddev: 0.010566",
            "group": "plugins",
            "extra": "mean: 270.50 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_footnote",
            "value": 3.491571397361833,
            "unit": "iter/sec",
            "range": "stddev: 0.016363",
            "group": "plugins",
            "extra": "mean: 286.40 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_front_matter",
            "value": 3.8135506742421943,
            "unit": "iter/sec",
            "range": "stddev: 0.010572",
            "group": "plugins",
            "extra": "mean: 262.22 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_texmath",
            "value": 3.532618074849094,
            "unit": "iter/sec",
            "range": "stddev: 0.012020",
            "group": "plugins",
            "extra": "mean: 283.08 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_dollarmath",
            "value": 3.518337006730533,
            "unit": "iter/sec",
            "range": "stddev: 0.013283",
            "group": "plugins",
            "extra": "mean: 284.23 msec\nrounds: 20"
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
          "pythonVersion": "3.8.8"
        },
        "commit": {
          "id": "09edd663973f12155459506aafa94f1a857b83dd",
          "message": "👌 IMPROVE: MarkdownIt config and documentation (#136)\n\nAdd additional configuration presets,\r\nallow for options to be overridden in the `MarkdownIt` initialisation,\r\nAdd convenience methods to `SyntaxTreeNode`.",
          "timestamp": "2021-03-04T00:56:32+01:00",
          "url": "https://github.com/executablebooks/markdown-it-py/commit/09edd663973f12155459506aafa94f1a857b83dd",
          "distinct": true,
          "tree_id": "96286a9d6d5b8aa7e4ed5aaa3770f9ae756c95a5"
        },
        "date": 1614815935502,
        "benches": [
          {
            "name": "benchmarking/bench_packages.py::test_markdown_it_py",
            "value": 3.777844133385249,
            "unit": "iter/sec",
            "range": "stddev: 0.0051606",
            "group": "packages",
            "extra": "mean: 264.70 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_mistune",
            "value": 12.653673582753727,
            "unit": "iter/sec",
            "range": "stddev: 0.0025461",
            "group": "packages",
            "extra": "mean: 79.028 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_commonmark_py",
            "value": 2.1336961702447423,
            "unit": "iter/sec",
            "range": "stddev: 0.017074",
            "group": "packages",
            "extra": "mean: 468.67 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_pymarkdown",
            "value": 0.9538509880524764,
            "unit": "iter/sec",
            "range": "stddev: 0.0089556",
            "group": "packages",
            "extra": "mean: 1.0484 sec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_pymarkdown_extra",
            "value": 0.818671846380191,
            "unit": "iter/sec",
            "range": "stddev: 0.028596",
            "group": "packages",
            "extra": "mean: 1.2215 sec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_mistletoe",
            "value": 3.9339927233734553,
            "unit": "iter/sec",
            "range": "stddev: 0.0076651",
            "group": "packages",
            "extra": "mean: 254.19 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_panflute",
            "value": 0.9557593356180333,
            "unit": "iter/sec",
            "range": "stddev: 0.015722",
            "group": "packages",
            "extra": "mean: 1.0463 sec\nrounds: 20"
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
          "pythonVersion": "3.8.8"
        },
        "commit": {
          "id": "29a8d5e12286e6b0141110264251974768a9930e",
          "message": "🔀 MERGE: Synchronize with markdown-it v12.0.4 (#140)\n\nApply all relevant modifications in https://github.com/markdown-it/markdown-it/compare/11.0.1...12.0.4",
          "timestamp": "2021-03-10T14:05:54+01:00",
          "url": "https://github.com/executablebooks/markdown-it-py/commit/29a8d5e12286e6b0141110264251974768a9930e",
          "distinct": true,
          "tree_id": "7d49975b5905912bc661b43e02c36a5ef5dcd177"
        },
        "date": 1615381646009,
        "benches": [
          {
            "name": "benchmarking/bench_plugins.py::test_base",
            "value": 3.8808918057292328,
            "unit": "iter/sec",
            "range": "stddev: 0.0089566",
            "group": "plugins",
            "extra": "mean: 257.67 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_table",
            "value": 3.840664346197181,
            "unit": "iter/sec",
            "range": "stddev: 0.0059958",
            "group": "plugins",
            "extra": "mean: 260.37 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_amsmath",
            "value": 3.2541761196849093,
            "unit": "iter/sec",
            "range": "stddev: 0.0062489",
            "group": "plugins",
            "extra": "mean: 307.30 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_container",
            "value": 3.8609804700213575,
            "unit": "iter/sec",
            "range": "stddev: 0.0067323",
            "group": "plugins",
            "extra": "mean: 259.00 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_deflist",
            "value": 3.875821781626412,
            "unit": "iter/sec",
            "range": "stddev: 0.0060024",
            "group": "plugins",
            "extra": "mean: 258.01 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_footnote",
            "value": 3.8570980302526285,
            "unit": "iter/sec",
            "range": "stddev: 0.0057357",
            "group": "plugins",
            "extra": "mean: 259.26 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_front_matter",
            "value": 3.8574637399334235,
            "unit": "iter/sec",
            "range": "stddev: 0.0064491",
            "group": "plugins",
            "extra": "mean: 259.24 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_texmath",
            "value": 3.769913435334407,
            "unit": "iter/sec",
            "range": "stddev: 0.0071267",
            "group": "plugins",
            "extra": "mean: 265.26 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_dollarmath",
            "value": 3.8393021890741887,
            "unit": "iter/sec",
            "range": "stddev: 0.0078867",
            "group": "plugins",
            "extra": "mean: 260.46 msec\nrounds: 20"
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
          "pythonVersion": "3.8.8"
        },
        "commit": {
          "id": "29a8d5e12286e6b0141110264251974768a9930e",
          "message": "🔀 MERGE: Synchronize with markdown-it v12.0.4 (#140)\n\nApply all relevant modifications in https://github.com/markdown-it/markdown-it/compare/11.0.1...12.0.4",
          "timestamp": "2021-03-10T14:05:54+01:00",
          "url": "https://github.com/executablebooks/markdown-it-py/commit/29a8d5e12286e6b0141110264251974768a9930e",
          "distinct": true,
          "tree_id": "7d49975b5905912bc661b43e02c36a5ef5dcd177"
        },
        "date": 1615381707588,
        "benches": [
          {
            "name": "benchmarking/bench_packages.py::test_markdown_it_py",
            "value": 4.0931557803946,
            "unit": "iter/sec",
            "range": "stddev: 0.017122",
            "group": "packages",
            "extra": "mean: 244.31 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_mistune",
            "value": 11.530721823053629,
            "unit": "iter/sec",
            "range": "stddev: 0.0037887",
            "group": "packages",
            "extra": "mean: 86.725 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_commonmark_py",
            "value": 1.4713771483400788,
            "unit": "iter/sec",
            "range": "stddev: 0.025855",
            "group": "packages",
            "extra": "mean: 679.64 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_pymarkdown",
            "value": 0.9923714007890169,
            "unit": "iter/sec",
            "range": "stddev: 0.043795",
            "group": "packages",
            "extra": "mean: 1.0077 sec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_pymarkdown_extra",
            "value": 0.905825858097271,
            "unit": "iter/sec",
            "range": "stddev: 0.065583",
            "group": "packages",
            "extra": "mean: 1.1040 sec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_mistletoe",
            "value": 4.0373662330685125,
            "unit": "iter/sec",
            "range": "stddev: 0.013941",
            "group": "packages",
            "extra": "mean: 247.69 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_panflute",
            "value": 1.0347254860237691,
            "unit": "iter/sec",
            "range": "stddev: 0.035933",
            "group": "packages",
            "extra": "mean: 966.44 msec\nrounds: 20"
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
          "pythonVersion": "3.8.8"
        },
        "commit": {
          "id": "9a06bfc9a5bd058fc9a9d6fd29a567fb56e40092",
          "message": "🐛 FIX: Porting regressions (#141)\n\nFix a few mistaken regressions from #140",
          "timestamp": "2021-03-10T14:42:18+01:00",
          "url": "https://github.com/executablebooks/markdown-it-py/commit/9a06bfc9a5bd058fc9a9d6fd29a567fb56e40092",
          "distinct": true,
          "tree_id": "ecf3a915ade66b6a84ba701f9c8e49c379fcd7e1"
        },
        "date": 1615383820098,
        "benches": [
          {
            "name": "benchmarking/bench_plugins.py::test_base",
            "value": 4.070882596125987,
            "unit": "iter/sec",
            "range": "stddev: 0.018948",
            "group": "plugins",
            "extra": "mean: 245.65 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_table",
            "value": 4.518087463874608,
            "unit": "iter/sec",
            "range": "stddev: 0.010733",
            "group": "plugins",
            "extra": "mean: 221.33 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_amsmath",
            "value": 3.285154811131706,
            "unit": "iter/sec",
            "range": "stddev: 0.020009",
            "group": "plugins",
            "extra": "mean: 304.40 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_container",
            "value": 4.315442687003907,
            "unit": "iter/sec",
            "range": "stddev: 0.017642",
            "group": "plugins",
            "extra": "mean: 231.73 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_deflist",
            "value": 4.4245431903556645,
            "unit": "iter/sec",
            "range": "stddev: 0.020274",
            "group": "plugins",
            "extra": "mean: 226.01 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_footnote",
            "value": 4.239282625558799,
            "unit": "iter/sec",
            "range": "stddev: 0.015439",
            "group": "plugins",
            "extra": "mean: 235.89 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_front_matter",
            "value": 4.46310808536071,
            "unit": "iter/sec",
            "range": "stddev: 0.013635",
            "group": "plugins",
            "extra": "mean: 224.06 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_texmath",
            "value": 4.050409542893378,
            "unit": "iter/sec",
            "range": "stddev: 0.015863",
            "group": "plugins",
            "extra": "mean: 246.89 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_dollarmath",
            "value": 4.520355787729401,
            "unit": "iter/sec",
            "range": "stddev: 0.010259",
            "group": "plugins",
            "extra": "mean: 221.22 msec\nrounds: 20"
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
          "pythonVersion": "3.8.8"
        },
        "commit": {
          "id": "9a06bfc9a5bd058fc9a9d6fd29a567fb56e40092",
          "message": "🐛 FIX: Porting regressions (#141)\n\nFix a few mistaken regressions from #140",
          "timestamp": "2021-03-10T14:42:18+01:00",
          "url": "https://github.com/executablebooks/markdown-it-py/commit/9a06bfc9a5bd058fc9a9d6fd29a567fb56e40092",
          "distinct": true,
          "tree_id": "ecf3a915ade66b6a84ba701f9c8e49c379fcd7e1"
        },
        "date": 1615383888301,
        "benches": [
          {
            "name": "benchmarking/bench_packages.py::test_markdown_it_py",
            "value": 3.799873763747711,
            "unit": "iter/sec",
            "range": "stddev: 0.0081681",
            "group": "packages",
            "extra": "mean: 263.17 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_mistune",
            "value": 10.365139119974696,
            "unit": "iter/sec",
            "range": "stddev: 0.0060974",
            "group": "packages",
            "extra": "mean: 96.477 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_commonmark_py",
            "value": 1.4046403319455596,
            "unit": "iter/sec",
            "range": "stddev: 0.018237",
            "group": "packages",
            "extra": "mean: 711.93 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_pymarkdown",
            "value": 0.9564707879024532,
            "unit": "iter/sec",
            "range": "stddev: 0.035459",
            "group": "packages",
            "extra": "mean: 1.0455 sec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_pymarkdown_extra",
            "value": 0.8745597777859184,
            "unit": "iter/sec",
            "range": "stddev: 0.024234",
            "group": "packages",
            "extra": "mean: 1.1434 sec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_mistletoe",
            "value": 3.8779207843493704,
            "unit": "iter/sec",
            "range": "stddev: 0.013138",
            "group": "packages",
            "extra": "mean: 257.87 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_panflute",
            "value": 0.9946523308676816,
            "unit": "iter/sec",
            "range": "stddev: 0.031940",
            "group": "packages",
            "extra": "mean: 1.0054 sec\nrounds: 20"
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
          "pythonVersion": "3.8.8"
        },
        "commit": {
          "id": "0cd5dc3c753c1d32653d603add96d10f8ed86eef",
          "message": "🔧 MAINTAIN: Pin PyPy Python version (#138)",
          "timestamp": "2021-03-10T15:20:06+01:00",
          "url": "https://github.com/executablebooks/markdown-it-py/commit/0cd5dc3c753c1d32653d603add96d10f8ed86eef",
          "distinct": true,
          "tree_id": "9bcd72ff5ce237b70e2f8b2be3713c106e3b4211"
        },
        "date": 1615386101517,
        "benches": [
          {
            "name": "benchmarking/bench_plugins.py::test_base",
            "value": 3.775146764365781,
            "unit": "iter/sec",
            "range": "stddev: 0.0069355",
            "group": "plugins",
            "extra": "mean: 264.89 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_table",
            "value": 3.7668852536124566,
            "unit": "iter/sec",
            "range": "stddev: 0.0065995",
            "group": "plugins",
            "extra": "mean: 265.47 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_amsmath",
            "value": 2.9305091453651038,
            "unit": "iter/sec",
            "range": "stddev: 0.0058466",
            "group": "plugins",
            "extra": "mean: 341.24 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_container",
            "value": 3.7654979106271016,
            "unit": "iter/sec",
            "range": "stddev: 0.0059472",
            "group": "plugins",
            "extra": "mean: 265.57 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_deflist",
            "value": 3.762909303352253,
            "unit": "iter/sec",
            "range": "stddev: 0.0087645",
            "group": "plugins",
            "extra": "mean: 265.75 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_footnote",
            "value": 3.7244471250796543,
            "unit": "iter/sec",
            "range": "stddev: 0.0076579",
            "group": "plugins",
            "extra": "mean: 268.50 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_front_matter",
            "value": 3.7449667102053925,
            "unit": "iter/sec",
            "range": "stddev: 0.0059144",
            "group": "plugins",
            "extra": "mean: 267.03 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_texmath",
            "value": 3.6852495843757067,
            "unit": "iter/sec",
            "range": "stddev: 0.0067284",
            "group": "plugins",
            "extra": "mean: 271.35 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_dollarmath",
            "value": 3.748237192803476,
            "unit": "iter/sec",
            "range": "stddev: 0.0065989",
            "group": "plugins",
            "extra": "mean: 266.79 msec\nrounds: 20"
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
          "pythonVersion": "3.8.8"
        },
        "commit": {
          "id": "0cd5dc3c753c1d32653d603add96d10f8ed86eef",
          "message": "🔧 MAINTAIN: Pin PyPy Python version (#138)",
          "timestamp": "2021-03-10T15:20:06+01:00",
          "url": "https://github.com/executablebooks/markdown-it-py/commit/0cd5dc3c753c1d32653d603add96d10f8ed86eef",
          "distinct": true,
          "tree_id": "9bcd72ff5ce237b70e2f8b2be3713c106e3b4211"
        },
        "date": 1615386158312,
        "benches": [
          {
            "name": "benchmarking/bench_packages.py::test_markdown_it_py",
            "value": 3.8113613946235185,
            "unit": "iter/sec",
            "range": "stddev: 0.011391",
            "group": "packages",
            "extra": "mean: 262.37 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_mistune",
            "value": 10.619148226779663,
            "unit": "iter/sec",
            "range": "stddev: 0.0056726",
            "group": "packages",
            "extra": "mean: 94.170 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_commonmark_py",
            "value": 1.417730684160387,
            "unit": "iter/sec",
            "range": "stddev: 0.023587",
            "group": "packages",
            "extra": "mean: 705.35 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_pymarkdown",
            "value": 0.9685396427297142,
            "unit": "iter/sec",
            "range": "stddev: 0.017333",
            "group": "packages",
            "extra": "mean: 1.0325 sec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_pymarkdown_extra",
            "value": 0.8750994124308795,
            "unit": "iter/sec",
            "range": "stddev: 0.032620",
            "group": "packages",
            "extra": "mean: 1.1427 sec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_mistletoe",
            "value": 3.815940637151654,
            "unit": "iter/sec",
            "range": "stddev: 0.0082993",
            "group": "packages",
            "extra": "mean: 262.06 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_panflute",
            "value": 0.9632732960899161,
            "unit": "iter/sec",
            "range": "stddev: 0.018784",
            "group": "packages",
            "extra": "mean: 1.0381 sec\nrounds: 20"
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
          "pythonVersion": "3.8.8"
        },
        "commit": {
          "id": "de09ccf6014701ff8c43b5a77c2e35c1f0733cab",
          "message": "👌 IMPROVE: Make SyntaxTreeNode type annotations work when subclassing (#131)\n\nThis commit makes `SyntaxTreeNode.children` and `SyntaxTreeNode.parent`\r\n`@property` s, so that they can be type annotated\r\nin a way where the getter return type is automatically bound to type of `self`.",
          "timestamp": "2021-03-10T15:26:19+01:00",
          "url": "https://github.com/executablebooks/markdown-it-py/commit/de09ccf6014701ff8c43b5a77c2e35c1f0733cab",
          "distinct": true,
          "tree_id": "3555d2da628dc5e7948b44d0f6c3b8bf594f7444"
        },
        "date": 1615386475747,
        "benches": [
          {
            "name": "benchmarking/bench_plugins.py::test_base",
            "value": 4.0503262120782475,
            "unit": "iter/sec",
            "range": "stddev: 0.015588",
            "group": "plugins",
            "extra": "mean: 246.89 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_table",
            "value": 4.0790602320191445,
            "unit": "iter/sec",
            "range": "stddev: 0.015786",
            "group": "plugins",
            "extra": "mean: 245.15 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_amsmath",
            "value": 3.1773945989758374,
            "unit": "iter/sec",
            "range": "stddev: 0.018079",
            "group": "plugins",
            "extra": "mean: 314.72 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_container",
            "value": 3.954572647121732,
            "unit": "iter/sec",
            "range": "stddev: 0.010816",
            "group": "plugins",
            "extra": "mean: 252.87 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_deflist",
            "value": 4.0664318345928265,
            "unit": "iter/sec",
            "range": "stddev: 0.016582",
            "group": "plugins",
            "extra": "mean: 245.92 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_footnote",
            "value": 4.163367764105116,
            "unit": "iter/sec",
            "range": "stddev: 0.016704",
            "group": "plugins",
            "extra": "mean: 240.19 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_front_matter",
            "value": 4.043861731715079,
            "unit": "iter/sec",
            "range": "stddev: 0.015896",
            "group": "plugins",
            "extra": "mean: 247.29 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_texmath",
            "value": 3.8718777613560422,
            "unit": "iter/sec",
            "range": "stddev: 0.015869",
            "group": "plugins",
            "extra": "mean: 258.27 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_dollarmath",
            "value": 3.9021963755406026,
            "unit": "iter/sec",
            "range": "stddev: 0.019573",
            "group": "plugins",
            "extra": "mean: 256.27 msec\nrounds: 20"
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
          "pythonVersion": "3.8.8"
        },
        "commit": {
          "id": "de09ccf6014701ff8c43b5a77c2e35c1f0733cab",
          "message": "👌 IMPROVE: Make SyntaxTreeNode type annotations work when subclassing (#131)\n\nThis commit makes `SyntaxTreeNode.children` and `SyntaxTreeNode.parent`\r\n`@property` s, so that they can be type annotated\r\nin a way where the getter return type is automatically bound to type of `self`.",
          "timestamp": "2021-03-10T15:26:19+01:00",
          "url": "https://github.com/executablebooks/markdown-it-py/commit/de09ccf6014701ff8c43b5a77c2e35c1f0733cab",
          "distinct": true,
          "tree_id": "3555d2da628dc5e7948b44d0f6c3b8bf594f7444"
        },
        "date": 1615386553786,
        "benches": [
          {
            "name": "benchmarking/bench_packages.py::test_markdown_it_py",
            "value": 3.4778784843864567,
            "unit": "iter/sec",
            "range": "stddev: 0.012835",
            "group": "packages",
            "extra": "mean: 287.53 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_mistune",
            "value": 9.769533128089801,
            "unit": "iter/sec",
            "range": "stddev: 0.0058232",
            "group": "packages",
            "extra": "mean: 102.36 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_commonmark_py",
            "value": 1.3646565023697863,
            "unit": "iter/sec",
            "range": "stddev: 0.044210",
            "group": "packages",
            "extra": "mean: 732.79 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_pymarkdown",
            "value": 0.9180978375666762,
            "unit": "iter/sec",
            "range": "stddev: 0.020102",
            "group": "packages",
            "extra": "mean: 1.0892 sec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_pymarkdown_extra",
            "value": 0.8055401454953739,
            "unit": "iter/sec",
            "range": "stddev: 0.031936",
            "group": "packages",
            "extra": "mean: 1.2414 sec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_mistletoe",
            "value": 3.6505871782474624,
            "unit": "iter/sec",
            "range": "stddev: 0.0094644",
            "group": "packages",
            "extra": "mean: 273.93 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_panflute",
            "value": 0.9276163395620576,
            "unit": "iter/sec",
            "range": "stddev: 0.026788",
            "group": "packages",
            "extra": "mean: 1.0780 sec\nrounds: 20"
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
          "pythonVersion": "3.8.8"
        },
        "commit": {
          "id": "ab287be3997f6186a64ad7213f9c8ffe3ae05c30",
          "message": "🐛 FIX: Linkify link nesting levels (#142)\n\nDue to a porting error, linkify link tokens have incorrect nesting levels.",
          "timestamp": "2021-03-13T00:45:08+01:00",
          "url": "https://github.com/executablebooks/markdown-it-py/commit/ab287be3997f6186a64ad7213f9c8ffe3ae05c30",
          "distinct": true,
          "tree_id": "4b3499b4f1709d0ac67b86a0e320784db631eafb"
        },
        "date": 1615592793557,
        "benches": [
          {
            "name": "benchmarking/bench_plugins.py::test_base",
            "value": 3.9039581562021883,
            "unit": "iter/sec",
            "range": "stddev: 0.0057050",
            "group": "plugins",
            "extra": "mean: 256.15 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_table",
            "value": 3.8663825738966975,
            "unit": "iter/sec",
            "range": "stddev: 0.0055960",
            "group": "plugins",
            "extra": "mean: 258.64 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_amsmath",
            "value": 3.2817326490356313,
            "unit": "iter/sec",
            "range": "stddev: 0.0063564",
            "group": "plugins",
            "extra": "mean: 304.72 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_container",
            "value": 3.8776058611900024,
            "unit": "iter/sec",
            "range": "stddev: 0.0059695",
            "group": "plugins",
            "extra": "mean: 257.89 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_deflist",
            "value": 3.892695773969079,
            "unit": "iter/sec",
            "range": "stddev: 0.0067012",
            "group": "plugins",
            "extra": "mean: 256.89 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_footnote",
            "value": 3.8827452706599432,
            "unit": "iter/sec",
            "range": "stddev: 0.0055861",
            "group": "plugins",
            "extra": "mean: 257.55 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_front_matter",
            "value": 3.880933803924834,
            "unit": "iter/sec",
            "range": "stddev: 0.0056322",
            "group": "plugins",
            "extra": "mean: 257.67 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_texmath",
            "value": 3.803467869300271,
            "unit": "iter/sec",
            "range": "stddev: 0.0061928",
            "group": "plugins",
            "extra": "mean: 262.92 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_dollarmath",
            "value": 3.8935683611533225,
            "unit": "iter/sec",
            "range": "stddev: 0.0058879",
            "group": "plugins",
            "extra": "mean: 256.83 msec\nrounds: 20"
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
          "pythonVersion": "3.8.8"
        },
        "commit": {
          "id": "ab287be3997f6186a64ad7213f9c8ffe3ae05c30",
          "message": "🐛 FIX: Linkify link nesting levels (#142)\n\nDue to a porting error, linkify link tokens have incorrect nesting levels.",
          "timestamp": "2021-03-13T00:45:08+01:00",
          "url": "https://github.com/executablebooks/markdown-it-py/commit/ab287be3997f6186a64ad7213f9c8ffe3ae05c30",
          "distinct": true,
          "tree_id": "4b3499b4f1709d0ac67b86a0e320784db631eafb"
        },
        "date": 1615592847855,
        "benches": [
          {
            "name": "benchmarking/bench_packages.py::test_markdown_it_py",
            "value": 4.2438685856122325,
            "unit": "iter/sec",
            "range": "stddev: 0.0087954",
            "group": "packages",
            "extra": "mean: 235.63 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_mistune",
            "value": 11.026466186148943,
            "unit": "iter/sec",
            "range": "stddev: 0.0046386",
            "group": "packages",
            "extra": "mean: 90.691 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_commonmark_py",
            "value": 1.5655560980864989,
            "unit": "iter/sec",
            "range": "stddev: 0.020625",
            "group": "packages",
            "extra": "mean: 638.75 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_pymarkdown",
            "value": 1.027050484890636,
            "unit": "iter/sec",
            "range": "stddev: 0.018021",
            "group": "packages",
            "extra": "mean: 973.66 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_pymarkdown_extra",
            "value": 0.9120232830387445,
            "unit": "iter/sec",
            "range": "stddev: 0.024971",
            "group": "packages",
            "extra": "mean: 1.0965 sec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_mistletoe",
            "value": 4.235981908647358,
            "unit": "iter/sec",
            "range": "stddev: 0.0094773",
            "group": "packages",
            "extra": "mean: 236.07 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_panflute",
            "value": 1.0871670011110826,
            "unit": "iter/sec",
            "range": "stddev: 0.028795",
            "group": "packages",
            "extra": "mean: 919.82 msec\nrounds: 20"
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
          "pythonVersion": "3.8.8"
        },
        "commit": {
          "id": "00a28a6c72b2a659327573d3a4f87ae516da010b",
          "message": "👌 IMPROVE: Use regular __init__ to create SyntaxTreeNodes (#132)\n\nCo-authored-by: Chris Sewell <chrisj_sewell@hotmail.com>",
          "timestamp": "2021-03-13T00:53:17+01:00",
          "url": "https://github.com/executablebooks/markdown-it-py/commit/00a28a6c72b2a659327573d3a4f87ae516da010b",
          "distinct": true,
          "tree_id": "179b93222987e07ba645500ce97e6ec72a360943"
        },
        "date": 1615593290307,
        "benches": [
          {
            "name": "benchmarking/bench_plugins.py::test_base",
            "value": 3.4576122377842142,
            "unit": "iter/sec",
            "range": "stddev: 0.014404",
            "group": "plugins",
            "extra": "mean: 289.22 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_table",
            "value": 3.492650292959914,
            "unit": "iter/sec",
            "range": "stddev: 0.0066904",
            "group": "plugins",
            "extra": "mean: 286.32 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_amsmath",
            "value": 2.726251572693918,
            "unit": "iter/sec",
            "range": "stddev: 0.0070935",
            "group": "plugins",
            "extra": "mean: 366.80 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_container",
            "value": 3.5153991152147848,
            "unit": "iter/sec",
            "range": "stddev: 0.0068610",
            "group": "plugins",
            "extra": "mean: 284.46 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_deflist",
            "value": 3.49047364104585,
            "unit": "iter/sec",
            "range": "stddev: 0.0083789",
            "group": "plugins",
            "extra": "mean: 286.49 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_footnote",
            "value": 3.507880518919994,
            "unit": "iter/sec",
            "range": "stddev: 0.0066399",
            "group": "plugins",
            "extra": "mean: 285.07 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_front_matter",
            "value": 3.454380500465352,
            "unit": "iter/sec",
            "range": "stddev: 0.0089784",
            "group": "plugins",
            "extra": "mean: 289.49 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_texmath",
            "value": 3.44631615241721,
            "unit": "iter/sec",
            "range": "stddev: 0.0081923",
            "group": "plugins",
            "extra": "mean: 290.16 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_dollarmath",
            "value": 3.545826503557384,
            "unit": "iter/sec",
            "range": "stddev: 0.0067889",
            "group": "plugins",
            "extra": "mean: 282.02 msec\nrounds: 20"
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
          "pythonVersion": "3.8.8"
        },
        "commit": {
          "id": "00a28a6c72b2a659327573d3a4f87ae516da010b",
          "message": "👌 IMPROVE: Use regular __init__ to create SyntaxTreeNodes (#132)\n\nCo-authored-by: Chris Sewell <chrisj_sewell@hotmail.com>",
          "timestamp": "2021-03-13T00:53:17+01:00",
          "url": "https://github.com/executablebooks/markdown-it-py/commit/00a28a6c72b2a659327573d3a4f87ae516da010b",
          "distinct": true,
          "tree_id": "179b93222987e07ba645500ce97e6ec72a360943"
        },
        "date": 1615593362632,
        "benches": [
          {
            "name": "benchmarking/bench_packages.py::test_markdown_it_py",
            "value": 4.22145165128977,
            "unit": "iter/sec",
            "range": "stddev: 0.010241",
            "group": "packages",
            "extra": "mean: 236.89 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_mistune",
            "value": 11.950479766859175,
            "unit": "iter/sec",
            "range": "stddev: 0.0046271",
            "group": "packages",
            "extra": "mean: 83.679 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_commonmark_py",
            "value": 1.6662082394613293,
            "unit": "iter/sec",
            "range": "stddev: 0.019921",
            "group": "packages",
            "extra": "mean: 600.17 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_pymarkdown",
            "value": 1.0430704072429964,
            "unit": "iter/sec",
            "range": "stddev: 0.012364",
            "group": "packages",
            "extra": "mean: 958.71 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_pymarkdown_extra",
            "value": 0.9350463711303048,
            "unit": "iter/sec",
            "range": "stddev: 0.017689",
            "group": "packages",
            "extra": "mean: 1.0695 sec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_mistletoe",
            "value": 4.257241133888047,
            "unit": "iter/sec",
            "range": "stddev: 0.013931",
            "group": "packages",
            "extra": "mean: 234.89 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_panflute",
            "value": 1.1128450719889573,
            "unit": "iter/sec",
            "range": "stddev: 0.0084577",
            "group": "packages",
            "extra": "mean: 898.60 msec\nrounds: 20"
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
          "pythonVersion": "3.8.8"
        },
        "commit": {
          "id": "62046741e10df2404a874c3a1711349a9ca69f5e",
          "message": "‼️ BREAKING: Change `Token.attrs` to a dict (#144)\n\nInstead of storing `attrs` as `[[\"key1\", \"value1\"], [\"key2\", \"value2\"]]`,\r\nuse `{\"key1\": \"value1\", \"key2\": \"value2\"}`.\r\n\r\nUpstream the list format is only used to guarantee order: https://github.com/markdown-it/markdown-it/issues/142,\r\nbut in Python 3.7+ dictionary order is now guaranteed by the specification\r\n(in Python 3.6 it is also preserved as an implementation detail).\r\nThis change improves typing and performance.\r\n\r\nOne should anyhow generally use the `attrGet`, `attrSet`, `attrPush` and `attrJoin` methods\r\nto manipulate `Token.attrs`, which all have an identical signature to those upstream.\r\n\r\nTo minimize how breaking this change is,\r\nauto-conversion is done on `Token` initiation,\r\ni.e. you can still use `Token(\"type\", \"tag\", 0, attrs=[[\"key\", \"value\"]])`,\r\nand also `Token.as_dict(as_upstream=True)` converts the dict back to `null`/`list`, \r\no that they can still be directly compared to those produced in the `debug` tab of https://markdown-it.github.io/.\r\n\r\nThe `meta_serializer` option has also been added to `Token.as_dict`,\r\nwhich now ensures that this method is always able to produce valid JSON.",
          "timestamp": "2021-03-17T12:21:30+01:00",
          "url": "https://github.com/executablebooks/markdown-it-py/commit/62046741e10df2404a874c3a1711349a9ca69f5e",
          "distinct": true,
          "tree_id": "b078245aea62b7e8734ff395f570485140f60253"
        },
        "date": 1615980204295,
        "benches": [
          {
            "name": "benchmarking/bench_plugins.py::test_base",
            "value": 3.853604784334703,
            "unit": "iter/sec",
            "range": "stddev: 0.016450",
            "group": "plugins",
            "extra": "mean: 259.50 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_table",
            "value": 3.88784192124635,
            "unit": "iter/sec",
            "range": "stddev: 0.014686",
            "group": "plugins",
            "extra": "mean: 257.21 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_amsmath",
            "value": 3.049403549747616,
            "unit": "iter/sec",
            "range": "stddev: 0.010399",
            "group": "plugins",
            "extra": "mean: 327.93 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_container",
            "value": 3.9371280269477587,
            "unit": "iter/sec",
            "range": "stddev: 0.010288",
            "group": "plugins",
            "extra": "mean: 253.99 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_deflist",
            "value": 3.946877600856873,
            "unit": "iter/sec",
            "range": "stddev: 0.011498",
            "group": "plugins",
            "extra": "mean: 253.36 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_footnote",
            "value": 3.8848762749683794,
            "unit": "iter/sec",
            "range": "stddev: 0.0096085",
            "group": "plugins",
            "extra": "mean: 257.41 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_front_matter",
            "value": 3.9417964855541867,
            "unit": "iter/sec",
            "range": "stddev: 0.010743",
            "group": "plugins",
            "extra": "mean: 253.69 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_texmath",
            "value": 3.7790341167041834,
            "unit": "iter/sec",
            "range": "stddev: 0.016846",
            "group": "plugins",
            "extra": "mean: 264.62 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_dollarmath",
            "value": 3.959904867902925,
            "unit": "iter/sec",
            "range": "stddev: 0.010090",
            "group": "plugins",
            "extra": "mean: 252.53 msec\nrounds: 20"
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
          "pythonVersion": "3.8.8"
        },
        "commit": {
          "id": "62046741e10df2404a874c3a1711349a9ca69f5e",
          "message": "‼️ BREAKING: Change `Token.attrs` to a dict (#144)\n\nInstead of storing `attrs` as `[[\"key1\", \"value1\"], [\"key2\", \"value2\"]]`,\r\nuse `{\"key1\": \"value1\", \"key2\": \"value2\"}`.\r\n\r\nUpstream the list format is only used to guarantee order: https://github.com/markdown-it/markdown-it/issues/142,\r\nbut in Python 3.7+ dictionary order is now guaranteed by the specification\r\n(in Python 3.6 it is also preserved as an implementation detail).\r\nThis change improves typing and performance.\r\n\r\nOne should anyhow generally use the `attrGet`, `attrSet`, `attrPush` and `attrJoin` methods\r\nto manipulate `Token.attrs`, which all have an identical signature to those upstream.\r\n\r\nTo minimize how breaking this change is,\r\nauto-conversion is done on `Token` initiation,\r\ni.e. you can still use `Token(\"type\", \"tag\", 0, attrs=[[\"key\", \"value\"]])`,\r\nand also `Token.as_dict(as_upstream=True)` converts the dict back to `null`/`list`, \r\no that they can still be directly compared to those produced in the `debug` tab of https://markdown-it.github.io/.\r\n\r\nThe `meta_serializer` option has also been added to `Token.as_dict`,\r\nwhich now ensures that this method is always able to produce valid JSON.",
          "timestamp": "2021-03-17T12:21:30+01:00",
          "url": "https://github.com/executablebooks/markdown-it-py/commit/62046741e10df2404a874c3a1711349a9ca69f5e",
          "distinct": true,
          "tree_id": "b078245aea62b7e8734ff395f570485140f60253"
        },
        "date": 1615980329060,
        "benches": [
          {
            "name": "benchmarking/bench_packages.py::test_markdown_it_py",
            "value": 3.432025002376213,
            "unit": "iter/sec",
            "range": "stddev: 0.0072515",
            "group": "packages",
            "extra": "mean: 291.37 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_mistune",
            "value": 10.014638642663378,
            "unit": "iter/sec",
            "range": "stddev: 0.0029436",
            "group": "packages",
            "extra": "mean: 99.854 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_commonmark_py",
            "value": 1.3754186284569958,
            "unit": "iter/sec",
            "range": "stddev: 0.022205",
            "group": "packages",
            "extra": "mean: 727.05 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_pymarkdown",
            "value": 0.8738655250276027,
            "unit": "iter/sec",
            "range": "stddev: 0.032842",
            "group": "packages",
            "extra": "mean: 1.1443 sec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_pymarkdown_extra",
            "value": 0.8162502222441734,
            "unit": "iter/sec",
            "range": "stddev: 0.060893",
            "group": "packages",
            "extra": "mean: 1.2251 sec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_mistletoe",
            "value": 3.749659026162499,
            "unit": "iter/sec",
            "range": "stddev: 0.0094865",
            "group": "packages",
            "extra": "mean: 266.69 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_panflute",
            "value": 0.9396946216972594,
            "unit": "iter/sec",
            "range": "stddev: 0.023074",
            "group": "packages",
            "extra": "mean: 1.0642 sec\nrounds: 20"
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
          "pythonVersion": "3.8.8"
        },
        "commit": {
          "id": "d5a6b7062c702ca6bfa930e087add5fd5bc4a6f5",
          "message": "📚 DOCS: Fix deprecation warning",
          "timestamp": "2021-03-20T16:41:12+01:00",
          "url": "https://github.com/executablebooks/markdown-it-py/commit/d5a6b7062c702ca6bfa930e087add5fd5bc4a6f5",
          "distinct": true,
          "tree_id": "1356d72ded547add26022de45b771ae752407df7"
        },
        "date": 1616254955366,
        "benches": [
          {
            "name": "benchmarking/bench_plugins.py::test_base",
            "value": 3.9905396038180165,
            "unit": "iter/sec",
            "range": "stddev: 0.0055229",
            "group": "plugins",
            "extra": "mean: 250.59 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_table",
            "value": 3.9647040564131726,
            "unit": "iter/sec",
            "range": "stddev: 0.0074283",
            "group": "plugins",
            "extra": "mean: 252.23 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_amsmath",
            "value": 2.9681404874117585,
            "unit": "iter/sec",
            "range": "stddev: 0.010979",
            "group": "plugins",
            "extra": "mean: 336.91 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_container",
            "value": 3.8911105022171832,
            "unit": "iter/sec",
            "range": "stddev: 0.0088739",
            "group": "plugins",
            "extra": "mean: 257.00 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_deflist",
            "value": 3.967962499364132,
            "unit": "iter/sec",
            "range": "stddev: 0.0098192",
            "group": "plugins",
            "extra": "mean: 252.02 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_footnote",
            "value": 4.012025231189364,
            "unit": "iter/sec",
            "range": "stddev: 0.0077678",
            "group": "plugins",
            "extra": "mean: 249.25 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_front_matter",
            "value": 3.9637424696062418,
            "unit": "iter/sec",
            "range": "stddev: 0.0084652",
            "group": "plugins",
            "extra": "mean: 252.29 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_texmath",
            "value": 3.8806014594882887,
            "unit": "iter/sec",
            "range": "stddev: 0.0079311",
            "group": "plugins",
            "extra": "mean: 257.69 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_dollarmath",
            "value": 3.9778431732631367,
            "unit": "iter/sec",
            "range": "stddev: 0.0073359",
            "group": "plugins",
            "extra": "mean: 251.39 msec\nrounds: 20"
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
          "pythonVersion": "3.8.8"
        },
        "commit": {
          "id": "d5a6b7062c702ca6bfa930e087add5fd5bc4a6f5",
          "message": "📚 DOCS: Fix deprecation warning",
          "timestamp": "2021-03-20T16:41:12+01:00",
          "url": "https://github.com/executablebooks/markdown-it-py/commit/d5a6b7062c702ca6bfa930e087add5fd5bc4a6f5",
          "distinct": true,
          "tree_id": "1356d72ded547add26022de45b771ae752407df7"
        },
        "date": 1616255014954,
        "benches": [
          {
            "name": "benchmarking/bench_packages.py::test_markdown_it_py",
            "value": 3.973642306063137,
            "unit": "iter/sec",
            "range": "stddev: 0.015635",
            "group": "packages",
            "extra": "mean: 251.66 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_mistune",
            "value": 11.569574627668347,
            "unit": "iter/sec",
            "range": "stddev: 0.0058429",
            "group": "packages",
            "extra": "mean: 86.434 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_commonmark_py",
            "value": 1.437994410892331,
            "unit": "iter/sec",
            "range": "stddev: 0.034101",
            "group": "packages",
            "extra": "mean: 695.41 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_pymarkdown",
            "value": 1.0047270285210808,
            "unit": "iter/sec",
            "range": "stddev: 0.032959",
            "group": "packages",
            "extra": "mean: 995.30 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_pymarkdown_extra",
            "value": 0.8960345812862353,
            "unit": "iter/sec",
            "range": "stddev: 0.052799",
            "group": "packages",
            "extra": "mean: 1.1160 sec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_mistletoe",
            "value": 3.9003611859270335,
            "unit": "iter/sec",
            "range": "stddev: 0.016768",
            "group": "packages",
            "extra": "mean: 256.39 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_panflute",
            "value": 0.9968693896497582,
            "unit": "iter/sec",
            "range": "stddev: 0.019095",
            "group": "packages",
            "extra": "mean: 1.0031 sec\nrounds: 20"
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
          "pythonVersion": "3.8.8"
        },
        "commit": {
          "id": "8e8d1e786de7d048175eecdbcaa5e9b7f7eee06f",
          "message": "🐛 FIX: Ruler.at (#146)\n\nand add basic plugin creation tests\r\n(that don't rely on mdit_py_plugins)",
          "timestamp": "2021-03-20T18:10:56+01:00",
          "url": "https://github.com/executablebooks/markdown-it-py/commit/8e8d1e786de7d048175eecdbcaa5e9b7f7eee06f",
          "distinct": true,
          "tree_id": "2eb274342e60d732f597538130d02e06ed0863e9"
        },
        "date": 1616260341378,
        "benches": [
          {
            "name": "benchmarking/bench_plugins.py::test_base",
            "value": 3.680585681941704,
            "unit": "iter/sec",
            "range": "stddev: 0.011319",
            "group": "plugins",
            "extra": "mean: 271.70 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_table",
            "value": 3.7440148508535653,
            "unit": "iter/sec",
            "range": "stddev: 0.011683",
            "group": "plugins",
            "extra": "mean: 267.09 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_amsmath",
            "value": 3.2124436559548752,
            "unit": "iter/sec",
            "range": "stddev: 0.0069969",
            "group": "plugins",
            "extra": "mean: 311.29 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_container",
            "value": 3.7868080492556793,
            "unit": "iter/sec",
            "range": "stddev: 0.0088746",
            "group": "plugins",
            "extra": "mean: 264.07 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_deflist",
            "value": 3.7962378512637405,
            "unit": "iter/sec",
            "range": "stddev: 0.0072515",
            "group": "plugins",
            "extra": "mean: 263.42 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_footnote",
            "value": 3.7799984640014004,
            "unit": "iter/sec",
            "range": "stddev: 0.0074480",
            "group": "plugins",
            "extra": "mean: 264.55 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_front_matter",
            "value": 3.6927653238748244,
            "unit": "iter/sec",
            "range": "stddev: 0.011011",
            "group": "plugins",
            "extra": "mean: 270.80 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_texmath",
            "value": 3.5471010329915695,
            "unit": "iter/sec",
            "range": "stddev: 0.0092944",
            "group": "plugins",
            "extra": "mean: 281.92 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_dollarmath",
            "value": 3.6087864386496973,
            "unit": "iter/sec",
            "range": "stddev: 0.010285",
            "group": "plugins",
            "extra": "mean: 277.10 msec\nrounds: 20"
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
          "pythonVersion": "3.8.8"
        },
        "commit": {
          "id": "8e8d1e786de7d048175eecdbcaa5e9b7f7eee06f",
          "message": "🐛 FIX: Ruler.at (#146)\n\nand add basic plugin creation tests\r\n(that don't rely on mdit_py_plugins)",
          "timestamp": "2021-03-20T18:10:56+01:00",
          "url": "https://github.com/executablebooks/markdown-it-py/commit/8e8d1e786de7d048175eecdbcaa5e9b7f7eee06f",
          "distinct": true,
          "tree_id": "2eb274342e60d732f597538130d02e06ed0863e9"
        },
        "date": 1616260376375,
        "benches": [
          {
            "name": "benchmarking/bench_packages.py::test_markdown_it_py",
            "value": 4.546932444207439,
            "unit": "iter/sec",
            "range": "stddev: 0.0054263",
            "group": "packages",
            "extra": "mean: 219.93 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_mistune",
            "value": 15.415941823534627,
            "unit": "iter/sec",
            "range": "stddev: 0.0023778",
            "group": "packages",
            "extra": "mean: 64.868 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_commonmark_py",
            "value": 2.584588639594338,
            "unit": "iter/sec",
            "range": "stddev: 0.013903",
            "group": "packages",
            "extra": "mean: 386.91 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_pymarkdown",
            "value": 1.1861783810246909,
            "unit": "iter/sec",
            "range": "stddev: 0.0077592",
            "group": "packages",
            "extra": "mean: 843.04 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_pymarkdown_extra",
            "value": 1.0181564773333833,
            "unit": "iter/sec",
            "range": "stddev: 0.011443",
            "group": "packages",
            "extra": "mean: 982.17 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_mistletoe",
            "value": 4.844734454393826,
            "unit": "iter/sec",
            "range": "stddev: 0.0061898",
            "group": "packages",
            "extra": "mean: 206.41 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_panflute",
            "value": 1.1919254107238042,
            "unit": "iter/sec",
            "range": "stddev: 0.0031481",
            "group": "packages",
            "extra": "mean: 838.98 msec\nrounds: 20"
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
          "pythonVersion": "3.8.8"
        },
        "commit": {
          "id": "2fbc41975fb542abf3bb188e20d169500580cefd",
          "message": "🧪 TESTS: Use pytest.xfail not pytest.skip (#147)",
          "timestamp": "2021-03-21T11:45:40+01:00",
          "url": "https://github.com/executablebooks/markdown-it-py/commit/2fbc41975fb542abf3bb188e20d169500580cefd",
          "distinct": true,
          "tree_id": "fe3af6aaa120d08f33ba731217b19370b4957f9b"
        },
        "date": 1616323638569,
        "benches": [
          {
            "name": "benchmarking/bench_plugins.py::test_base",
            "value": 3.3726350969927195,
            "unit": "iter/sec",
            "range": "stddev: 0.010852",
            "group": "plugins",
            "extra": "mean: 296.50 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_table",
            "value": 3.251167684346219,
            "unit": "iter/sec",
            "range": "stddev: 0.010360",
            "group": "plugins",
            "extra": "mean: 307.58 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_amsmath",
            "value": 2.5933873618433676,
            "unit": "iter/sec",
            "range": "stddev: 0.011309",
            "group": "plugins",
            "extra": "mean: 385.60 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_container",
            "value": 3.3086975483805796,
            "unit": "iter/sec",
            "range": "stddev: 0.0058487",
            "group": "plugins",
            "extra": "mean: 302.23 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_deflist",
            "value": 3.2828763085314865,
            "unit": "iter/sec",
            "range": "stddev: 0.0092656",
            "group": "plugins",
            "extra": "mean: 304.61 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_footnote",
            "value": 3.3041963385686675,
            "unit": "iter/sec",
            "range": "stddev: 0.0077086",
            "group": "plugins",
            "extra": "mean: 302.65 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_front_matter",
            "value": 3.3081751065971687,
            "unit": "iter/sec",
            "range": "stddev: 0.010937",
            "group": "plugins",
            "extra": "mean: 302.28 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_texmath",
            "value": 3.225275795945796,
            "unit": "iter/sec",
            "range": "stddev: 0.010812",
            "group": "plugins",
            "extra": "mean: 310.05 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_dollarmath",
            "value": 3.329437700890424,
            "unit": "iter/sec",
            "range": "stddev: 0.0090516",
            "group": "plugins",
            "extra": "mean: 300.35 msec\nrounds: 20"
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
          "pythonVersion": "3.8.8"
        },
        "commit": {
          "id": "2fbc41975fb542abf3bb188e20d169500580cefd",
          "message": "🧪 TESTS: Use pytest.xfail not pytest.skip (#147)",
          "timestamp": "2021-03-21T11:45:40+01:00",
          "url": "https://github.com/executablebooks/markdown-it-py/commit/2fbc41975fb542abf3bb188e20d169500580cefd",
          "distinct": true,
          "tree_id": "fe3af6aaa120d08f33ba731217b19370b4957f9b"
        },
        "date": 1616323685654,
        "benches": [
          {
            "name": "benchmarking/bench_packages.py::test_markdown_it_py",
            "value": 3.7875054531793375,
            "unit": "iter/sec",
            "range": "stddev: 0.0065036",
            "group": "packages",
            "extra": "mean: 264.03 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_mistune",
            "value": 10.780088932542665,
            "unit": "iter/sec",
            "range": "stddev: 0.0056097",
            "group": "packages",
            "extra": "mean: 92.764 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_commonmark_py",
            "value": 1.518536810545791,
            "unit": "iter/sec",
            "range": "stddev: 0.020416",
            "group": "packages",
            "extra": "mean: 658.53 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_pymarkdown",
            "value": 0.9363792228210044,
            "unit": "iter/sec",
            "range": "stddev: 0.013344",
            "group": "packages",
            "extra": "mean: 1.0679 sec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_pymarkdown_extra",
            "value": 0.8513912238046666,
            "unit": "iter/sec",
            "range": "stddev: 0.015933",
            "group": "packages",
            "extra": "mean: 1.1745 sec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_mistletoe",
            "value": 3.9282564247050176,
            "unit": "iter/sec",
            "range": "stddev: 0.0072173",
            "group": "packages",
            "extra": "mean: 254.57 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_panflute",
            "value": 1.0079163678668348,
            "unit": "iter/sec",
            "range": "stddev: 0.016615",
            "group": "packages",
            "extra": "mean: 992.15 msec\nrounds: 20"
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
          "pythonVersion": "3.8.8"
        },
        "commit": {
          "id": "7a1df9c6868cf7865536aecb9fafb9d85305998e",
          "message": "✨ NEW: Add SyntaxTreeNode.walk (#148)",
          "timestamp": "2021-03-23T15:54:55+01:00",
          "url": "https://github.com/executablebooks/markdown-it-py/commit/7a1df9c6868cf7865536aecb9fafb9d85305998e",
          "distinct": true,
          "tree_id": "88ab15c5a6e4bd3129695716e62682d7096e0bf9"
        },
        "date": 1616511386796,
        "benches": [
          {
            "name": "benchmarking/bench_plugins.py::test_base",
            "value": 3.787979109061875,
            "unit": "iter/sec",
            "range": "stddev: 0.013817",
            "group": "plugins",
            "extra": "mean: 263.99 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_table",
            "value": 3.6950453564147754,
            "unit": "iter/sec",
            "range": "stddev: 0.015485",
            "group": "plugins",
            "extra": "mean: 270.63 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_amsmath",
            "value": 3.3923178398602514,
            "unit": "iter/sec",
            "range": "stddev: 0.0079391",
            "group": "plugins",
            "extra": "mean: 294.78 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_container",
            "value": 3.9916188633352405,
            "unit": "iter/sec",
            "range": "stddev: 0.0078804",
            "group": "plugins",
            "extra": "mean: 250.52 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_deflist",
            "value": 4.015427509401361,
            "unit": "iter/sec",
            "range": "stddev: 0.010182",
            "group": "plugins",
            "extra": "mean: 249.04 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_footnote",
            "value": 4.012775131098984,
            "unit": "iter/sec",
            "range": "stddev: 0.0069487",
            "group": "plugins",
            "extra": "mean: 249.20 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_front_matter",
            "value": 3.921439071562085,
            "unit": "iter/sec",
            "range": "stddev: 0.0087267",
            "group": "plugins",
            "extra": "mean: 255.01 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_texmath",
            "value": 3.897455456466327,
            "unit": "iter/sec",
            "range": "stddev: 0.0083490",
            "group": "plugins",
            "extra": "mean: 256.58 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_dollarmath",
            "value": 4.031971037764979,
            "unit": "iter/sec",
            "range": "stddev: 0.0065567",
            "group": "plugins",
            "extra": "mean: 248.02 msec\nrounds: 20"
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
          "pythonVersion": "3.8.8"
        },
        "commit": {
          "id": "7a1df9c6868cf7865536aecb9fafb9d85305998e",
          "message": "✨ NEW: Add SyntaxTreeNode.walk (#148)",
          "timestamp": "2021-03-23T15:54:55+01:00",
          "url": "https://github.com/executablebooks/markdown-it-py/commit/7a1df9c6868cf7865536aecb9fafb9d85305998e",
          "distinct": true,
          "tree_id": "88ab15c5a6e4bd3129695716e62682d7096e0bf9"
        },
        "date": 1616511446262,
        "benches": [
          {
            "name": "benchmarking/bench_packages.py::test_markdown_it_py",
            "value": 3.8453470243150853,
            "unit": "iter/sec",
            "range": "stddev: 0.0069969",
            "group": "packages",
            "extra": "mean: 260.05 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_mistune",
            "value": 11.377431143352904,
            "unit": "iter/sec",
            "range": "stddev: 0.0026338",
            "group": "packages",
            "extra": "mean: 87.893 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_commonmark_py",
            "value": 1.581058610613542,
            "unit": "iter/sec",
            "range": "stddev: 0.013823",
            "group": "packages",
            "extra": "mean: 632.49 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_pymarkdown",
            "value": 0.9654874031908688,
            "unit": "iter/sec",
            "range": "stddev: 0.010221",
            "group": "packages",
            "extra": "mean: 1.0357 sec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_pymarkdown_extra",
            "value": 0.8681693825093793,
            "unit": "iter/sec",
            "range": "stddev: 0.011428",
            "group": "packages",
            "extra": "mean: 1.1518 sec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_mistletoe",
            "value": 3.9658856554384196,
            "unit": "iter/sec",
            "range": "stddev: 0.0080558",
            "group": "packages",
            "extra": "mean: 252.15 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_panflute",
            "value": 1.017235665967641,
            "unit": "iter/sec",
            "range": "stddev: 0.019392",
            "group": "packages",
            "extra": "mean: 983.06 msec\nrounds: 20"
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
          "pythonVersion": "3.8.8"
        },
        "commit": {
          "id": "9ecda044ab58572d6e4a40359b31563eae463ff5",
          "message": "‼️ BREAKING: Replace use of AttrDict for env/options (#151)\n\nFor `env` any Python mutable mapping is now allowed,\r\nand so attribute access to keys is not allowed.\r\nFor `MarkdownIt.options` it is now set as an `OptionsDict`,\r\nwhich is a dictionary sub-class, with attribute access\r\nonly for core markdownit configuration keys.",
          "timestamp": "2021-03-31T07:08:36+02:00",
          "url": "https://github.com/executablebooks/markdown-it-py/commit/9ecda044ab58572d6e4a40359b31563eae463ff5",
          "distinct": true,
          "tree_id": "cf49f92a73b36ca2eba88cddb507e3eb223a8764"
        },
        "date": 1617167399395,
        "benches": [
          {
            "name": "benchmarking/bench_plugins.py::test_base",
            "value": 3.994687895993451,
            "unit": "iter/sec",
            "range": "stddev: 0.0094460",
            "group": "plugins",
            "extra": "mean: 250.33 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_table",
            "value": 3.9494179629300823,
            "unit": "iter/sec",
            "range": "stddev: 0.0087317",
            "group": "plugins",
            "extra": "mean: 253.20 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_amsmath",
            "value": 3.375540648594581,
            "unit": "iter/sec",
            "range": "stddev: 0.010491",
            "group": "plugins",
            "extra": "mean: 296.25 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_container",
            "value": 3.966408069619102,
            "unit": "iter/sec",
            "range": "stddev: 0.0082665",
            "group": "plugins",
            "extra": "mean: 252.12 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_deflist",
            "value": 3.9747677427094934,
            "unit": "iter/sec",
            "range": "stddev: 0.0082889",
            "group": "plugins",
            "extra": "mean: 251.59 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_footnote",
            "value": 3.937673701307922,
            "unit": "iter/sec",
            "range": "stddev: 0.010148",
            "group": "plugins",
            "extra": "mean: 253.96 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_front_matter",
            "value": 3.9863860324674443,
            "unit": "iter/sec",
            "range": "stddev: 0.011508",
            "group": "plugins",
            "extra": "mean: 250.85 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_texmath",
            "value": 3.973610258486657,
            "unit": "iter/sec",
            "range": "stddev: 0.0074292",
            "group": "plugins",
            "extra": "mean: 251.66 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_dollarmath",
            "value": 4.056301801623314,
            "unit": "iter/sec",
            "range": "stddev: 0.0085144",
            "group": "plugins",
            "extra": "mean: 246.53 msec\nrounds: 20"
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
          "pythonVersion": "3.8.8"
        },
        "commit": {
          "id": "9ecda044ab58572d6e4a40359b31563eae463ff5",
          "message": "‼️ BREAKING: Replace use of AttrDict for env/options (#151)\n\nFor `env` any Python mutable mapping is now allowed,\r\nand so attribute access to keys is not allowed.\r\nFor `MarkdownIt.options` it is now set as an `OptionsDict`,\r\nwhich is a dictionary sub-class, with attribute access\r\nonly for core markdownit configuration keys.",
          "timestamp": "2021-03-31T07:08:36+02:00",
          "url": "https://github.com/executablebooks/markdown-it-py/commit/9ecda044ab58572d6e4a40359b31563eae463ff5",
          "distinct": true,
          "tree_id": "cf49f92a73b36ca2eba88cddb507e3eb223a8764"
        },
        "date": 1617167454659,
        "benches": [
          {
            "name": "benchmarking/bench_packages.py::test_markdown_it_py",
            "value": 3.980101373333221,
            "unit": "iter/sec",
            "range": "stddev: 0.0077877",
            "group": "packages",
            "extra": "mean: 251.25 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_mistune",
            "value": 13.127106335280802,
            "unit": "iter/sec",
            "range": "stddev: 0.0024192",
            "group": "packages",
            "extra": "mean: 76.178 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_commonmark_py",
            "value": 2.263309555762867,
            "unit": "iter/sec",
            "range": "stddev: 0.017121",
            "group": "packages",
            "extra": "mean: 441.83 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_pymarkdown",
            "value": 1.0120204378618396,
            "unit": "iter/sec",
            "range": "stddev: 0.012383",
            "group": "packages",
            "extra": "mean: 988.12 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_pymarkdown_extra",
            "value": 0.8810616467061463,
            "unit": "iter/sec",
            "range": "stddev: 0.022844",
            "group": "packages",
            "extra": "mean: 1.1350 sec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_mistletoe",
            "value": 4.300611794196272,
            "unit": "iter/sec",
            "range": "stddev: 0.0050228",
            "group": "packages",
            "extra": "mean: 232.53 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_panflute",
            "value": 1.0415066628730396,
            "unit": "iter/sec",
            "range": "stddev: 0.014009",
            "group": "packages",
            "extra": "mean: 960.15 msec\nrounds: 20"
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
          "pythonVersion": "3.8.8"
        },
        "commit": {
          "id": "ed48ece1c48eee03672cf72b2310de3802d58c0f",
          "message": "🐛 FIX: List/table parsing ambiguity (#149)\n\nA list should take precedence in case of ambiguity\r\n\r\nImplements: https://github.com/markdown-it/markdown-it/commit/cd5296f1e7de2b978526178631859c18bb9d9928",
          "timestamp": "2021-03-31T08:02:08+02:00",
          "url": "https://github.com/executablebooks/markdown-it-py/commit/ed48ece1c48eee03672cf72b2310de3802d58c0f",
          "distinct": true,
          "tree_id": "9a2943a8f370a1897e13405d8942ab9341173966"
        },
        "date": 1617170601671,
        "benches": [
          {
            "name": "benchmarking/bench_plugins.py::test_base",
            "value": 4.370458834867192,
            "unit": "iter/sec",
            "range": "stddev: 0.012413",
            "group": "plugins",
            "extra": "mean: 228.81 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_table",
            "value": 4.57138441864691,
            "unit": "iter/sec",
            "range": "stddev: 0.0077758",
            "group": "plugins",
            "extra": "mean: 218.75 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_amsmath",
            "value": 3.8332123389441413,
            "unit": "iter/sec",
            "range": "stddev: 0.010232",
            "group": "plugins",
            "extra": "mean: 260.88 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_container",
            "value": 4.359779367026017,
            "unit": "iter/sec",
            "range": "stddev: 0.0081728",
            "group": "plugins",
            "extra": "mean: 229.37 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_deflist",
            "value": 4.610301078957605,
            "unit": "iter/sec",
            "range": "stddev: 0.0083713",
            "group": "plugins",
            "extra": "mean: 216.91 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_footnote",
            "value": 4.526214012930124,
            "unit": "iter/sec",
            "range": "stddev: 0.011555",
            "group": "plugins",
            "extra": "mean: 220.94 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_front_matter",
            "value": 4.385150107154603,
            "unit": "iter/sec",
            "range": "stddev: 0.0096306",
            "group": "plugins",
            "extra": "mean: 228.04 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_texmath",
            "value": 4.241629419939604,
            "unit": "iter/sec",
            "range": "stddev: 0.015509",
            "group": "plugins",
            "extra": "mean: 235.76 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_dollarmath",
            "value": 4.678329301696912,
            "unit": "iter/sec",
            "range": "stddev: 0.0074305",
            "group": "plugins",
            "extra": "mean: 213.75 msec\nrounds: 20"
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
          "pythonVersion": "3.8.8"
        },
        "commit": {
          "id": "ed48ece1c48eee03672cf72b2310de3802d58c0f",
          "message": "🐛 FIX: List/table parsing ambiguity (#149)\n\nA list should take precedence in case of ambiguity\r\n\r\nImplements: https://github.com/markdown-it/markdown-it/commit/cd5296f1e7de2b978526178631859c18bb9d9928",
          "timestamp": "2021-03-31T08:02:08+02:00",
          "url": "https://github.com/executablebooks/markdown-it-py/commit/ed48ece1c48eee03672cf72b2310de3802d58c0f",
          "distinct": true,
          "tree_id": "9a2943a8f370a1897e13405d8942ab9341173966"
        },
        "date": 1617170684104,
        "benches": [
          {
            "name": "benchmarking/bench_packages.py::test_markdown_it_py",
            "value": 3.670046575814248,
            "unit": "iter/sec",
            "range": "stddev: 0.011586",
            "group": "packages",
            "extra": "mean: 272.48 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_mistune",
            "value": 13.071757974874101,
            "unit": "iter/sec",
            "range": "stddev: 0.0024283",
            "group": "packages",
            "extra": "mean: 76.501 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_commonmark_py",
            "value": 2.139574452383909,
            "unit": "iter/sec",
            "range": "stddev: 0.015375",
            "group": "packages",
            "extra": "mean: 467.38 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_pymarkdown",
            "value": 0.9893277035269715,
            "unit": "iter/sec",
            "range": "stddev: 0.011001",
            "group": "packages",
            "extra": "mean: 1.0108 sec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_pymarkdown_extra",
            "value": 0.8567512307210462,
            "unit": "iter/sec",
            "range": "stddev: 0.0069411",
            "group": "packages",
            "extra": "mean: 1.1672 sec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_mistletoe",
            "value": 4.123005421320715,
            "unit": "iter/sec",
            "range": "stddev: 0.0046445",
            "group": "packages",
            "extra": "mean: 242.54 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_panflute",
            "value": 0.9819934374335015,
            "unit": "iter/sec",
            "range": "stddev: 0.028080",
            "group": "packages",
            "extra": "mean: 1.0183 sec\nrounds: 20"
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
          "pythonVersion": "3.8.8"
        },
        "commit": {
          "id": "06d66b835721a20e2420f37cedde92ddd0d0e872",
          "message": "📚 DOCS: Fix deprecated import (#150)",
          "timestamp": "2021-03-31T08:57:03+02:00",
          "url": "https://github.com/executablebooks/markdown-it-py/commit/06d66b835721a20e2420f37cedde92ddd0d0e872",
          "distinct": true,
          "tree_id": "c730e88e01fb516e8df6ba566e92fcf96a860d34"
        },
        "date": 1617173915066,
        "benches": [
          {
            "name": "benchmarking/bench_plugins.py::test_base",
            "value": 3.5901897477786866,
            "unit": "iter/sec",
            "range": "stddev: 0.0069280",
            "group": "plugins",
            "extra": "mean: 278.54 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_table",
            "value": 3.5415256320856114,
            "unit": "iter/sec",
            "range": "stddev: 0.0066809",
            "group": "plugins",
            "extra": "mean: 282.36 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_amsmath",
            "value": 2.8490756087931586,
            "unit": "iter/sec",
            "range": "stddev: 0.0072564",
            "group": "plugins",
            "extra": "mean: 350.99 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_container",
            "value": 3.6125274870556296,
            "unit": "iter/sec",
            "range": "stddev: 0.0063432",
            "group": "plugins",
            "extra": "mean: 276.81 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_deflist",
            "value": 3.567510066787388,
            "unit": "iter/sec",
            "range": "stddev: 0.0066331",
            "group": "plugins",
            "extra": "mean: 280.31 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_footnote",
            "value": 3.585405225609848,
            "unit": "iter/sec",
            "range": "stddev: 0.0051930",
            "group": "plugins",
            "extra": "mean: 278.91 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_front_matter",
            "value": 3.591318944543671,
            "unit": "iter/sec",
            "range": "stddev: 0.0071580",
            "group": "plugins",
            "extra": "mean: 278.45 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_texmath",
            "value": 3.50638824710906,
            "unit": "iter/sec",
            "range": "stddev: 0.0075753",
            "group": "plugins",
            "extra": "mean: 285.19 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_dollarmath",
            "value": 3.568164439449064,
            "unit": "iter/sec",
            "range": "stddev: 0.0073123",
            "group": "plugins",
            "extra": "mean: 280.26 msec\nrounds: 20"
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
          "pythonVersion": "3.8.8"
        },
        "commit": {
          "id": "06d66b835721a20e2420f37cedde92ddd0d0e872",
          "message": "📚 DOCS: Fix deprecated import (#150)",
          "timestamp": "2021-03-31T08:57:03+02:00",
          "url": "https://github.com/executablebooks/markdown-it-py/commit/06d66b835721a20e2420f37cedde92ddd0d0e872",
          "distinct": true,
          "tree_id": "c730e88e01fb516e8df6ba566e92fcf96a860d34"
        },
        "date": 1617173989820,
        "benches": [
          {
            "name": "benchmarking/bench_packages.py::test_markdown_it_py",
            "value": 3.2801672745444233,
            "unit": "iter/sec",
            "range": "stddev: 0.015666",
            "group": "packages",
            "extra": "mean: 304.86 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_mistune",
            "value": 9.601030239702302,
            "unit": "iter/sec",
            "range": "stddev: 0.0055270",
            "group": "packages",
            "extra": "mean: 104.16 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_commonmark_py",
            "value": 1.3141904477602993,
            "unit": "iter/sec",
            "range": "stddev: 0.029277",
            "group": "packages",
            "extra": "mean: 760.92 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_pymarkdown",
            "value": 0.8534637756625781,
            "unit": "iter/sec",
            "range": "stddev: 0.034007",
            "group": "packages",
            "extra": "mean: 1.1717 sec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_pymarkdown_extra",
            "value": 0.7719424897216097,
            "unit": "iter/sec",
            "range": "stddev: 0.028245",
            "group": "packages",
            "extra": "mean: 1.2954 sec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_mistletoe",
            "value": 3.547200349945009,
            "unit": "iter/sec",
            "range": "stddev: 0.013294",
            "group": "packages",
            "extra": "mean: 281.91 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_panflute",
            "value": 0.905965810747211,
            "unit": "iter/sec",
            "range": "stddev: 0.044039",
            "group": "packages",
            "extra": "mean: 1.1038 sec\nrounds: 20"
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
          "pythonVersion": "3.8.8"
        },
        "commit": {
          "id": "36c386df3066bc8781e74f7db9df3fcbf0b10a1d",
          "message": "🚀 RELEASE: v1.0.0b1 (#152)",
          "timestamp": "2021-03-31T09:48:03+02:00",
          "url": "https://github.com/executablebooks/markdown-it-py/commit/36c386df3066bc8781e74f7db9df3fcbf0b10a1d",
          "distinct": true,
          "tree_id": "dd4788540713c540a848bcd1d9f83ccda02edcdc"
        },
        "date": 1617176966774,
        "benches": [
          {
            "name": "benchmarking/bench_plugins.py::test_base",
            "value": 4.266481439934852,
            "unit": "iter/sec",
            "range": "stddev: 0.0079032",
            "group": "plugins",
            "extra": "mean: 234.39 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_table",
            "value": 4.367597120514488,
            "unit": "iter/sec",
            "range": "stddev: 0.0081290",
            "group": "plugins",
            "extra": "mean: 228.96 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_amsmath",
            "value": 3.679005528545376,
            "unit": "iter/sec",
            "range": "stddev: 0.0075347",
            "group": "plugins",
            "extra": "mean: 271.81 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_container",
            "value": 4.308730568179083,
            "unit": "iter/sec",
            "range": "stddev: 0.0067903",
            "group": "plugins",
            "extra": "mean: 232.09 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_deflist",
            "value": 4.3039684445360145,
            "unit": "iter/sec",
            "range": "stddev: 0.010124",
            "group": "plugins",
            "extra": "mean: 232.34 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_footnote",
            "value": 4.340598385791246,
            "unit": "iter/sec",
            "range": "stddev: 0.0099665",
            "group": "plugins",
            "extra": "mean: 230.38 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_front_matter",
            "value": 4.289279226085306,
            "unit": "iter/sec",
            "range": "stddev: 0.0077333",
            "group": "plugins",
            "extra": "mean: 233.14 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_texmath",
            "value": 4.283821927267086,
            "unit": "iter/sec",
            "range": "stddev: 0.0081204",
            "group": "plugins",
            "extra": "mean: 233.44 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_dollarmath",
            "value": 4.3129545908320575,
            "unit": "iter/sec",
            "range": "stddev: 0.0080648",
            "group": "plugins",
            "extra": "mean: 231.86 msec\nrounds: 20"
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
          "pythonVersion": "3.8.8"
        },
        "commit": {
          "id": "36c386df3066bc8781e74f7db9df3fcbf0b10a1d",
          "message": "🚀 RELEASE: v1.0.0b1 (#152)",
          "timestamp": "2021-03-31T09:48:03+02:00",
          "url": "https://github.com/executablebooks/markdown-it-py/commit/36c386df3066bc8781e74f7db9df3fcbf0b10a1d",
          "distinct": true,
          "tree_id": "dd4788540713c540a848bcd1d9f83ccda02edcdc"
        },
        "date": 1617177027277,
        "benches": [
          {
            "name": "benchmarking/bench_packages.py::test_markdown_it_py",
            "value": 4.044778641736068,
            "unit": "iter/sec",
            "range": "stddev: 0.0071931",
            "group": "packages",
            "extra": "mean: 247.23 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_mistune",
            "value": 13.708867759804766,
            "unit": "iter/sec",
            "range": "stddev: 0.0029719",
            "group": "packages",
            "extra": "mean: 72.945 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_commonmark_py",
            "value": 2.1860428212571796,
            "unit": "iter/sec",
            "range": "stddev: 0.015502",
            "group": "packages",
            "extra": "mean: 457.45 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_pymarkdown",
            "value": 1.043721869619906,
            "unit": "iter/sec",
            "range": "stddev: 0.013893",
            "group": "packages",
            "extra": "mean: 958.11 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_pymarkdown_extra",
            "value": 0.9012652636503343,
            "unit": "iter/sec",
            "range": "stddev: 0.013049",
            "group": "packages",
            "extra": "mean: 1.1096 sec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_mistletoe",
            "value": 4.251749862822624,
            "unit": "iter/sec",
            "range": "stddev: 0.0057987",
            "group": "packages",
            "extra": "mean: 235.20 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_packages.py::test_panflute",
            "value": 1.0521432466501532,
            "unit": "iter/sec",
            "range": "stddev: 0.0081393",
            "group": "packages",
            "extra": "mean: 950.44 msec\nrounds: 20"
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
          "pythonVersion": "3.8.8"
        },
        "commit": {
          "id": "b1a74b460d6bcc24e38209ea784164485abe2a1a",
          "message": "🔧 MAINTAIN: Switch to declarative metadata (#139)",
          "timestamp": "2021-04-01T05:38:49+02:00",
          "url": "https://github.com/executablebooks/markdown-it-py/commit/b1a74b460d6bcc24e38209ea784164485abe2a1a",
          "distinct": true,
          "tree_id": "5e170769846c325c6b0d913cba678281e7c54db9"
        },
        "date": 1617248416425,
        "benches": [
          {
            "name": "benchmarking/bench_plugins.py::test_base",
            "value": 3.8711042310767336,
            "unit": "iter/sec",
            "range": "stddev: 0.0054470",
            "group": "plugins",
            "extra": "mean: 258.32 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_table",
            "value": 3.8373622323210723,
            "unit": "iter/sec",
            "range": "stddev: 0.0059487",
            "group": "plugins",
            "extra": "mean: 260.60 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_amsmath",
            "value": 3.287360228424626,
            "unit": "iter/sec",
            "range": "stddev: 0.0063197",
            "group": "plugins",
            "extra": "mean: 304.20 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_container",
            "value": 3.8536228794733622,
            "unit": "iter/sec",
            "range": "stddev: 0.0064118",
            "group": "plugins",
            "extra": "mean: 259.50 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_deflist",
            "value": 3.8406086313889727,
            "unit": "iter/sec",
            "range": "stddev: 0.0062234",
            "group": "plugins",
            "extra": "mean: 260.38 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_footnote",
            "value": 3.836006061702111,
            "unit": "iter/sec",
            "range": "stddev: 0.0058060",
            "group": "plugins",
            "extra": "mean: 260.69 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_front_matter",
            "value": 3.825427021927213,
            "unit": "iter/sec",
            "range": "stddev: 0.0065526",
            "group": "plugins",
            "extra": "mean: 261.41 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_texmath",
            "value": 3.7405011784378766,
            "unit": "iter/sec",
            "range": "stddev: 0.0071191",
            "group": "plugins",
            "extra": "mean: 267.34 msec\nrounds: 20"
          },
          {
            "name": "benchmarking/bench_plugins.py::test_dollarmath",
            "value": 3.863298618618015,
            "unit": "iter/sec",
            "range": "stddev: 0.0062153",
            "group": "plugins",
            "extra": "mean: 258.85 msec\nrounds: 20"
          }
        ]
      }
    ]
  }
}