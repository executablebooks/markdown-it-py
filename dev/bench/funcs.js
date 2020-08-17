'use strict';

export function collectBenchesPerTestCasePerGroup(entries) {
    const map = new Map();
    for (const entry of entries) {
        const { commit, date, benches, cpu, extra } = entry;
        for (const bench of benches) {
            const result = { commit, date, bench, cpu, extra };
            const group = bench.group ? bench.group : null
            var gmap = map.get(group);
            if (gmap === undefined) {
                map.set(group, new Map());
                gmap = map.get(group);
            }
            const arr = gmap.get(bench.name);
            if (arr === undefined) {
                gmap.set(bench.name, [result]);
            } else {
                arr.push(result);
            }
        }
    }
    return map;
}


function* cycle(iterable) {
    while (true) {
        yield* iterable;
    }
}

export function renderGraph(canvas, dataset, labels, xAxis, alpha = 60, labelString = 'iter/sec') {

    const colorCycle = cycle(['#1f77b4', '#ff7f0e', '#2ca02c', '#d62728', '#9467bd', '#8c564b', '#e377c2', '#7f7f7f', '#bcbd22', '#17becf']);

    const data = {
        labels,
        datasets: dataset.map(s => {
            const color = colorCycle.next().value;
            return {
                label: s.name,
                data: s.data.map(d => d ? d.bench.value : null),
                borderColor: color,
                // fill: false,
                backgroundColor: color + `${alpha}`, // Add alpha for #rrggbbaa
                spanGaps: true,
            }
        })
    };
    const xAxes = {
        scaleLabel: {
            display: true,
            labelString: 'Commit ID',
        },
    }
    if (xAxis === 'date') {
        xAxes['type'] = 'time'
        xAxes['time'] = {
            minUnit: 'second'
        }
        xAxes.scaleLabel.labelString = 'Commit Time'
    }
    const yAxes = {
        scaleLabel: {
            display: true,
            labelString,
        },
        ticks: {
            beginAtZero: true,
        }
    }
    const options = {
        scales: {
            xAxes: [xAxes],
            yAxes: [yAxes],
        },
        tooltips: {
            callbacks: {
                afterTitle: items => {
                    const { datasetIndex, index } = items[0];
                    const data = dataset[datasetIndex].data[index];
                    const lines = [data.commit.message + '\n', (xAxis === 'date') ? data.commit.id.slice(0, 7) : moment(data.commit.timestamp).toString()]
                    if (data.cpu) {
                        lines.push('\nCPU:')
                        for (const [key, value] of Object.entries(data.cpu)) {
                            lines.push(`  ${key}: ${value}`)
                        }
                    }
                    if (data.extra) {
                        for (const [key, value] of Object.entries(data.extra)) {
                            lines.push(`${key}: ${value}`)
                        }
                    }
                    return '\n' + lines.join('\n') + '\n';
                },
                label: item => {
                    const { datasetIndex, index } = item;
                    const data = dataset[datasetIndex].data[index];
                    const { range, unit, value } = data.bench;
                    let label = Number.parseFloat(value).toPrecision(5);
                    label += ' ' + unit;
                    if (range) {
                        label += ' (' + range + ')';
                    }
                    return label;
                },
                afterLabel: item => {
                    const { datasetIndex, index } = item;
                    const data = dataset[datasetIndex].data[index];
                    const { extra } = data.bench;
                    return extra ? '\n' + extra : '';
                }
            }
        },
        onClick: (_mouseEvent, activeElems) => {
            if (activeElems.length === 0) {
                return;
            }
            const { _datasetIndex, _index } = activeElems[0];
            const data = dataset[_datasetIndex].data[_index];
            const url = data.commit.url;
            window.open(url, '_blank');
        },
    };
    new Chart(canvas, {
        type: 'line',
        data,
        options,
    });
}
