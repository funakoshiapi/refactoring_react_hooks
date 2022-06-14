import React, {useState} from "react";
import DashboardShell from "./features/Dashboard/DashboardShell";
import DataContextProvider from "./context/DataContext";

const App = () => {

  return(   
      <DataContextProvider>
        <DashboardShell/>
      </DataContextProvider>
  ) 
};

export default App;


