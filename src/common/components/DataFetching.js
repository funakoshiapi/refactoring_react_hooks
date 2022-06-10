import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Loading from "./Loading";
import useFetch from "../../hooks/useFetch";

const DataFetching = ({ endpoint }) => {
  
  const {loading, error, data} = useFetch(endpoint);

  
  return (

      <ul>
      {data.map(element => (
        <li key={element.timestamp}>
          {element.timestamp} - {element.amount}
        </li>
      ))}
    </ul>
    

  );
};

DataFetching.propTypes = {
  endpoint: PropTypes.string.isRequired
};

export default DataFetching;