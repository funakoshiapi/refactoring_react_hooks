import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import App from "./App";
import store from "./store";
import { Provider } from "react-redux";

import {Server} from "miragejs";
export let sales;
export let subscriptions;

if (process.env.NODE_ENV === "development") {
  
  debugger
  /* ONLY FOR DEVELOPMENT! DON'T IMPORT IN PRODUCTION */
  const Series = require("time-series-data-generator");

  const from = "2020-01-01T16:30:41Z";
  const until = "2020-05-01T18:30:00Z";
  const interval = 43200;
  const keyName = "amount";

  const salesSeries = new Series({ from, until, interval, keyName });
  sales = salesSeries.gaussian({
    mean: 360,
    variance: 10,
    decimalDigits: 0,
  });

  const subscriptionsSeries = new Series({ from, until, interval, keyName });
  subscriptions = subscriptionsSeries.gaussian({
    mean: 9,
    variance: 5,
    decimalDigits: 0,
  });



  new Server({
    routes() {
      this.namespace = "/api";
  
      this.get("/sales/", () => {
        
        return [salesSeries];
        
      });

      this.get("/subscriptions/", () => {
        return [subscriptionsSeries];
      });
    }
  });
}

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
