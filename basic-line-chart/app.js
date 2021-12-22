const callChart = (specJson) => {
  vegaEmbed("#vis", specJson)
    // result.view provides access to the Vega View API
    .then((result) => console.log(result))
    .catch(console.warn);
};
callChart("line-chart.vg.json");
