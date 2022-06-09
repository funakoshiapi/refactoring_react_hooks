import React, {useState} from "react";
import DashboardShell from "./features/Dashboard/DashboardShell";
import DataFetchingContainer from "./common/components/DataFetchingContainer";
import {sales} from "./mocks";

export const globalContext = React.createContext();

const {Provider} = globalContext;

const App = () => {

  const initialState = {
    loading: false,
    error:"",
    salesTotal: 3466,
    subscriptionTotal: 1492,
    data: sales
  }
  return(
    
      <Provider value={initialState}>
        <DataFetchingContainer/>
      </Provider>
    

  ) 
};

export default App;


