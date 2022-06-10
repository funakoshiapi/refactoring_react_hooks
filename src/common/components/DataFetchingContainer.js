import React, { useState } from "react";
import Select from "../../common/components/Select";
import DataFetching from "./DataFetching";


const DataFetchingContainer = () => {
  const [selectedEndpoint, setSelectedEndpoint] = useState("");

  const optionsForSelect = [
    { label: "Sales", value: `${process.env.REACT_APP_BASE_URL}/sales/` },
    {
      label: "Subscriptions",
      value: `${process.env.REACT_APP_BASE_URL}/subscriptions/`
    }
  ];

  function handleSelectChange(event) {
    setSelectedEndpoint(event.target.value);
  }

  return (
    <>
      <Select
        handleChange={handleSelectChange}
        label="Please, select a chart"
        id="select-chart"
        options={optionsForSelect}
      />
      {selectedEndpoint ? <DataFetching endpoint={selectedEndpoint} /> : null}

      
    </>
  );
};

export default DataFetchingContainer;