import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

const DataFetching = ({ endpoint }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(endpoint)
      .then(response => response.json())
      .then(json => setData(json));
  }, [endpoint]);

  debugger
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