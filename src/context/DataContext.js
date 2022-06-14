import React, { useState } from "react";
import { useFetch } from "../hooks/useFetch";
export const DataContext = React.createContext();
const { Provider } = DataContext;

const DataContextProvider = ({ children }) => {
  const [endpoint, setEndpoint] = useState("");
  const value = useFetch(endpoint);

  const updateEndpoint = endpoint => setEndpoint(endpoint);

  return <Provider value={{ ...value, updateEndpoint }}>{children}</Provider>;
};

export default DataContextProvider;