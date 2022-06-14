import React, { useContext, useState } from "react";
import Aside from "../../common/components/Aside";
import ChartContainer from "./ChartContainer";
import Layout from "../../common/components/Layout";
import Main from "../../common/components/Main";
import SummaryContainer from "./SummaryContainer";
import Select from "../../common/components/Select";
import { DataContext } from "../../context/DataContext";

if (process.env.NODE_ENV === "development") {
  const { Server } = require("miragejs");
  const { sales, subscriptions} = require("../../mocks");

  new Server({
    routes() {
      this.namespace = process.env.REACT_APP_BASE_URL;
      this.get("/sales/", () => sales);
      this.get("/subscriptions/", () => subscriptions);
      this.get("/totals/",()=>({
        salesTotal: 2311,
        subscriptionsTotal: 381
      }));
    }
  });
}
const DashboardShell = () => {

  const [selectedLabel, setSelectedLabel] = useState("");
  const { updateEndpoint } = useContext(DataContext);

  const handleSelectChange = (event)  =>{
    
    const selectedLabel = event.target.selectedOptions[0].label;
    setSelectedLabel(selectedLabel);
    debugger;
    updateEndpoint(event.target.value);
    
  }

  const optionsForSelect = [
    {label: "Sales", value:`${process.env.REACT_APP_BASE_URL}/sales/`},
    {label: "Subscriptions", value: `${process.env.REACT_APP_BASE_URL}/subscriptions/`}
  ];

    return (
      <Layout>
        <Aside>
          <h2># Polly dashboard</h2>
          <Select
            label="Please, select a chart"
            handleChange={handleSelectChange}
            id="select-chart"
            options={optionsForSelect}
          >
          </Select>
        </Aside>
        <Main>
          <h1>
            Welcome to your, <span className="bold">Dashboard</span>
          </h1>
          <SummaryContainer />
          <ChartContainer selectedLabel={selectedLabel} />
        </Main>
      </Layout>
    );
  }


export default DashboardShell;
