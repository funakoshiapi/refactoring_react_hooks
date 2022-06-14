import React from "react";
import LineChart from "./LineChart";
import PropTypes from "prop-types";
import { globalContext } from "../../App";
import { useContext } from "react";
import { DataContext } from "../../context/DataContext";

const ChartContainer = ({ selectedLabel }) => {

  const {data: dataset} = useContext(DataContext);
  

  const chartLabels = dataset.map(dataPoint => dataPoint.timestamp);
  const chartValues = dataset.map(dataPoint => dataPoint.amount);
  debugger
  return (
    <div>
      <LineChart
        chartLabels={chartLabels}
        chartValues={chartValues}
        label={selectedLabel}
      />
    </div>
  );
};

ChartContainer.propTypes = {
  selectedLabel: PropTypes.string.isRequired
};

export default ChartContainer;
