const callChart = (specJson) => {
  vegaEmbed("#vis", specJson)
    // result.view provides access to the Vega View API
    .then((result) => console.log(result))
    .catch(console.warn);
};
callChart("stacked-line-chart.vg.json");

const view = new vega.View(runtime, {
  logLevel: vega.Warn, // view logging level
  renderer: "svg", // render type (defaults to 'canvas')
  container: "#vis", // parent DOM element
  hover: true, // enable hover event processing
});
view._runtime;

view.runAsync(); // evaluate and render the view
