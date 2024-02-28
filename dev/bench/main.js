// The main interface to the page DOM

'use strict';

import { collectBenchesPerTestCasePerGroup, renderGraph } from "./funcs.js";

(function () {
  const data = setupData(window.BENCHMARK_DATA);
  const config = {
    suites: window.CONFIGURATION_DATA.suites || {},
    groups: window.CONFIGURATION_DATA.groups || {},
  };
  renderAllCharts(data, config);
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
    dataSet: collectBenchesPerTestCasePerGroup(data.entries[name]),
  }));
}

function addResetZoomButton(chart, graphsElem) {
  // assign the chart to the DOM and add a zoom reset
  const chartId = Object.keys(window.charts).length
  window.charts[chartId] = chart;
  const resetButton = document.createElement('button');
  resetButton.className = 'benchmark-button-reset';
  resetButton.id = chartId
  resetButton.innerText = 'Reset Zoom'
  resetButton.onclick = function (event) {
    console.log("resetting zoom");
    console.log(window.charts)
    console.log(event.target.id);
    window.charts[event.target.id].resetZoom();
  };
  graphsElem.appendChild(resetButton);
}


/**
 * Returns the sum of all numbers passed to the function.
 * @param name name of the entry set
 * @param Object benchSets map of {group-key: data, ...}
 * @param Object configEntry map of configuration for the entry
 * @param Object configGroups map of configuration per group: {group-key: data, ...}
 */
function renderBenchSetGroups(domElement, name, benchSets, configEntry, configGroups) {
  const setElem = document.createElement('div');
  setElem.className = 'benchmark-set';
  domElement.appendChild(setElem);

  // add the entry title and description
  const titleElem = document.createElement('h1');
  titleElem.className = 'benchmark-title';
  titleElem.textContent = configEntry.header || name;
  setElem.appendChild(titleElem);
  if (configEntry.description) {
    const descriptElem = document.createElement('p');
    descriptElem.className = 'benchmark-description';
    descriptElem.textContent = configEntry.description;
    setElem.appendChild(descriptElem);
  }

  for (const [groupKey, benchSet] of benchSets.entries()) {

    const configGroup = configGroups[groupKey] || {};
    const groupHeader = configGroup.header || groupKey;

    // add a group title and description
    if (groupHeader) {
      const nameElem = document.createElement('h2');
      nameElem.className = 'benchmark-group-title';
      nameElem.textContent = groupHeader
      setElem.appendChild(nameElem);
    }
    if (configGroup.description) {
      const descriptElem = document.createElement('p');
      descriptElem.className = 'benchmark-group-description';
      descriptElem.textContent = configGroup.description;
      setElem.appendChild(descriptElem);
    }

    // add a container for the group graphs
    const graphsElem = document.createElement('div');
    graphsElem.className = 'benchmark-graphs';
    setElem.appendChild(graphsElem);

    var chart, chartConfig;

    if (configGroup.single_chart) {
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
      const labels = uniqueCommits.map((d) => (configGroup.xAxis === 'date') ? moment(d[0]) : d[1].slice(0, 7));
      chartConfig = {
        fill: configGroup.backgroundFill,
        legendAlign: configGroup.legendAlign,
        yAxisFormat: configGroup.yAxisFormat,
        alpha: 10,
        xAxis: configGroup.xAxis,
        colors: configGroup.colors,
      };
      chart = renderGraph(canvas, datasets, labels, chartConfig);
      addResetZoomButton(chart, graphsElem);

    } else {
      for (const [benchName, benches] of benchSet.entries()) {
        const canvas = document.createElement('canvas');
        canvas.className = 'benchmark-chart';
        graphsElem.appendChild(canvas);
        const datasets = [{
          name: benchName,
          data: benches
        }]
        const labels = benches.map((d) => (configGroup.xAxis === 'date') ? moment(d.commit.timestamp) : d.commit.id.slice(0, 7));
        chartConfig = {
          alpha: 60,
          xAxis: configGroup.xAxis,
          yLabelString: benches.length > 0 ? benches[0].bench.unit : ''
        };
        chart = renderGraph(canvas, datasets, labels, chartConfig);
        addResetZoomButton(chart, graphsElem);
      }
    }

  }
}

/**
 * Returns the sum of all numbers passed to the function.
 * @param Object dataSets map of {group-key: {test-name: data, ...}, ...}
 * @param Object config map of {suites: {key: data}, groups: {key: data}}
 */
function renderAllCharts(dataSets, config) {
  window.charts = {};
  const main = document.getElementById('main');
  for (const { name, dataSet } of dataSets) {
    const configEntry = config.suites[name] || {};
    renderBenchSetGroups(main, name, dataSet, configEntry, config.groups);
  }
}
