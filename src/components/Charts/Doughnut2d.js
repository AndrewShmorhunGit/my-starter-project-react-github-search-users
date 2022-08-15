import React from "react"; // STEP 1 - Include Dependencies

// Include react

import ReactDOM from "react-dom";

// Include the react-fusioncharts component
import ReactFC from "react-fusioncharts";

// Include the fusioncharts library
import FusionCharts from "fusioncharts";

// Include the chart type
import Column2D from "fusioncharts/fusioncharts.charts";

// Include the theme as fusion
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.gammel";

// Adding the chart and theme as dependency to the core fusioncharts
ReactFC.fcRoot(FusionCharts, Column2D, FusionTheme);

const Doughnut2d = ({ data }) => {
  // STEP 3 - Creating the JSON object to store the chart configurations
  const chartConfigs = {
    type: "doughnut2d", // The chart type
    width: "100%", // Width of the chart
    height: "500", // Height of the chart
    dataFormat: "json", // Data type
    dataSource: {
      // Chart Configuration
      chart: {
        //Set the chart caption
        caption: "Stars per Language",
        // //Set the chart subcaption
        paletteColors:
          "#51cf66, #0066b6 ,#d84924, #868e96, #f7e018, #1098ad, #12b886, #be4bdb, #868e96",
        theme: "gammel",
        decimals: 0,
        doughnutRadius: "65%",
        showPercentValues: 0,
      },
      // Chart Data
      data,
    },
  };
  // STEP 4 - Creating the DOM element to pass the react-fusioncharts component
  return <ReactFC {...chartConfigs} />;
};

export default Doughnut2d;
