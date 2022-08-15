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
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

// Adding the chart and theme as dependency to the core fusioncharts
ReactFC.fcRoot(FusionCharts, Column2D, FusionTheme);

// STEP 2 - Chart Data
// const chartData = [
//   {
//     label: "HTML",
//     value: "13",
//   },
//   {
//     label: "CSS",
//     value: "23",
//   },
//   {
//     label: "Java Script",
//     value: "80",
//   },
// ];

// STEP 3 - Creating the JSON object to store the chart configurations
// const chartConfigs = {
//   type: "column2d", // The chart type
//   width: "50%", // Width of the chart
//   height: "400", // Height of the chart
//   dataFormat: "json", // Data type
//   dataSource: {
//     // Chart Configuration
//     chart: {
//       //Set the chart caption
//       caption: "Countries With Most Oil Reserves [2017-18]",
//       //Set the chart subcaption
//       subCaption: "In MMbbl = One Million barrels",
//       //Set the x-axis name
//       xAxisName: "Country",
//       //Set the y-axis name
//       yAxisName: "Reserves (MMbbl)",
//       numberSuffix: "%",
//       //Set the theme for your chart
//       theme: "fusion",
//     },
//     // Chart Data
//     data: chartData,
//   },
// };

// STEP 4 - Creating the DOM element to pass the react-fusioncharts component
const Pie3D = ({ data }) => {
  const chartConfigs = {
    type: "pie2d", // The chart type
    width: "50%", // Width of the chart
    height: "400", // Height of the chart
    dataFormat: "json", // Data type
    dataSource: {
      // Chart Configuration
      chart: {
        //Set the chart caption
        caption: "Languages",
        // //Set the chart subcaption
        // subCaption: "In MMbbl = One Million barrels",
        // //Set the x-axis name
        // xAxisName: "Country",
        // //Set the y-axis name
        // yAxisName: ы"Reserves (MMbbl)",
        // numberSuffix: "%",
        //Set the theme for your chart
        paletteColors:
          "#d84924, #0066b6 , #f7e018, #1098ad, #12b886,#be4bdb, #868e96",
        theme: "fusion",
        decimals: 0,
        pieRadius: "60%",
      },
      // Chart Data
      data,
    },
  };
  return <ReactFC {...chartConfigs} />;
};

export default Pie3D;
