import React, {useState} from "react";
import Select from "./Select";
import FetchData from "./FetchData";


const DataFetchingContainer = () => {
    
      const [selected, setSelected] = useState(undefined); 
      const [endpoint, setEndPoint] = useState(undefined); 

      const optionsForSelect =  [
        { label: "Sales", value: `${process.env.REACT_APP_BASE_URL}/sales/` },
        {
          label: "Subscriptions",
          value: `${process.env.REACT_APP_BASE_URL}/subscriptions/`
        }
      ];
      
      function handleSelectChange(event){
        const selectedLabel = event.target.selectedOptions[0].label;
        const selectedEndpoint = event.target.selectedOptions[0].value;
        setEndPoint(selectedEndpoint);
        setSelected(selectedLabel);
      }
      
      return(
          <>
            <Select 
                optionsForSelect = {optionsForSelect}
                defaultLabel = "Please, select a chart"
                id = "select-chart"
                handleSelectChange={handleSelectChange} 
            />
            <FetchData
                endpoint={endpoint}
            />
          </>
      )

}



export default DataFetchingContainer