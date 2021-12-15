const horizontalRadioButton = document.querySelector('#horizontal');
const verticalRadioButton = document.querySelector('#vertical');
const radioButtonsGroup = document.getElementsByName('bar-chart-layout');

const callChart = (specJson) => {
    vegaEmbed("#vis", specJson)
    // result.view provides access to the Vega View API
    .then(result => console.log(result))
    .catch(console.warn);
}
callChart("vertical-bar.vg.json");

const findChecked = () => {
    let spec;
    for (let i = 0; i < radioButtonsGroup.length; i++) {
        if (radioButtonsGroup[i].checked) {
            console.log(radioButtonsGroup[i].value);
            if (radioButtonsGroup[i].value === "vertical") {
                spec = "vertical-bar.vg.json";
            }
            else if (radioButtonsGroup[i].value === "horizontal") {
                spec = "horizontal-bar.vg.json";
            }
        }
    }
    callChart(spec);
}

horizontalRadioButton.addEventListener('click', event => findChecked());
verticalRadioButton.addEventListener('click', event => findChecked());