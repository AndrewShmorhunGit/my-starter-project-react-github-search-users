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

const Bar3D = ({ data }) => {
  const chartConfigs = {
    type: "bar2D", // The chart type
    width: "100%", // Width of the chart
    height: "500", // Height of the chart
    dataFormat: "json", // Data type
    dataSource: {
      // Chart Configuration
      chart: {
        //Set the chart caption
        caption: "Most Forked",
        xAxisName: "Repos",
        xAxisNameFontSize: "16px",
        yAxisName: "Forks",
        yAxisNameFontSize: "16px",
        paletteColors:
          "#51cf66, #0066b6 ,#d84924, #868e96, #f7e018, #1098ad, #12b886, #be4bdb",
        theme: "gammel",
        decimals: 0,
        pieRadius: "50%",
      },
      // Chart Data
      data,
    },
  };
  return <ReactFC {...chartConfigs} />;
};

export default Bar3D;
