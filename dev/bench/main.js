'use strict';

import { collectBenchesPerTestCasePerGroup, renderGraph } from "./funcs.js";

(function () {
  const data = setupData(window.BENCHMARK_DATA);
  renderAllCharts(data);
})();

function setupData(data) {

  // Render header
  document.getElementById('last-update').textContent = new Date(data.lastUpdate).toString();
  const repoLink = document.getElementById('repository-link');
  repoLink.href = data.repoUrl;
  repoLink.textContent = data.repoUrl;

  // Render footer
  document.getElementById('dl-button').onclick = () => {
    const dataUrl = 'data:,' + JSON.stringify(data, null, 2);
    const a = document.createElement('a');
    a.href = dataUrl;
    a.download = 'benchmark_data.json';
    a.click();
  };

  // Prepare data points for charts
  return Object.keys(data.entries).map(name => ({
    name,
    xAxis: data.xAxis,
    oneChartGroups: data.oneChartGroups,
    dataSet: collectBenchesPerTestCasePerGroup(data.entries[name]),
  }));
}

function renderBenchSetGroups(name, benchSets, main, xAxis, oneChartGroups) {
  const setElem = document.createElement('div');
  setElem.className = 'benchmark-set';
  main.appendChild(setElem);

  const nameElem = document.createElement('h1');
  nameElem.className = 'benchmark-title';
  nameElem.textContent = name;
  setElem.appendChild(nameElem);

  for (const [groupName, benchSet] of benchSets.entries()) {

    if (groupName) {
      const nameElem = document.createElement('h2');
      nameElem.className = 'benchmark-group';
      nameElem.textContent = groupName
      setElem.appendChild(nameElem);
    }
    const graphsElem = document.createElement('div');
    graphsElem.className = 'benchmark-graphs';
    setElem.appendChild(graphsElem);

    if ((oneChartGroups ? oneChartGroups : []).includes(groupName)) {
      const canvas = document.createElement('canvas');
      canvas.className = 'benchmark-chart';
      graphsElem.appendChild(canvas);
      const uniqueCommits = [...new Set([...benchSet.values()].flat().map((d) => JSON.stringify([d.commit.timestamp, d.commit.id])))].map(d => JSON.parse(d)).sort((a, b) => moment(a[0]).diff(b[0]));
      const datasets = [...benchSet.entries()].map(l => {
        const lookup = new Map(l[1].map(i => [i.commit.id, i]));
        return {
          name: l[0],
          data: uniqueCommits.map(c => lookup.get(c[1])),
        };
      });
      const labels = uniqueCommits.map((d) => (xAxis === 'date') ? moment(d[0]) : d[1].slice(0, 7));
      renderGraph(canvas, datasets, labels, xAxis, 10)
    } else {
      for (const [benchName, benches] of benchSet.entries()) {
        const canvas = document.createElement('canvas');
        canvas.className = 'benchmark-chart';
        graphsElem.appendChild(canvas);
        const datasets = [{
          name: benchName,
          data: benches
        }]
        const labels = benches.map((d) => (xAxis === 'date') ? moment(d.commit.timestamp) : d.commit.id.slice(0, 7));
        const labelString = benches.length > 0 ? benches[0].bench.unit : '';
        renderGraph(canvas, datasets, labels, xAxis, 60, labelString);
      }
    }

  }
}

function renderAllCharts(dataSets) {
  const main = document.getElementById('main');
  for (const { name, dataSet, xAxis, oneChartGroups } of dataSets) {
    renderBenchSetGroups(name, dataSet, main, xAxis, oneChartGroups);
  }
}
