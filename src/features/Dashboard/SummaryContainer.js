import React from "react";
import {useFetch} from "../../hooks/useFetch";
import Loading from "../../common/components/Loading";
import { globalContext } from "../../App";


const SummaryContainer = () => {

  const {
    loading,
    error,
    data: { salesTotal, subscriptionsTotal }
  } = useFetch(`${process.env.REACT_APP_BASE_URL}/totals/`);

  if (loading) {
    return <Loading/>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="summary flex flex-row">
      <div className="card bg-indigo">
        <p>CellFast sales</p>
        <p>$ {salesTotal}</p>
      </div>
      <div className="card bg-green">
        <p>CellNow subscriptions</p>
        <p>$ {subscriptionsTotal}</p>
      </div>
    </div>
  );
};

export default SummaryContainer;
