import React, {useState} from "react";
import DashboardShell from "./features/Dashboard/DashboardShell";
import {useFetch} from "./hooks/useFetch"; 



export const globalContext = React.createContext();
const {Provider} = globalContext;

const App = () => {

  const [endpoint, setEndPoint] = useState("");
  const value = useFetch(endpoint);

  debugger

  return(   
      <Provider value={value}>
        <DashboardShell fetchDataset={setEndPoint}/>
      </Provider>
  ) 
};

export default App;


