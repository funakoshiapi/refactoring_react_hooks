import React, {useState, useEffect} from "react";

const FETCH_DATASET_START = "FETCH_DATASET_START";
const FETCH_DATASET_SUCCESS = "FETCH_DATASET_SUCCESS";
const FETCH_DATASET_FAILURE = "FETCH_DATASET_FAILURE";

function FetchData({endpoint}){

    useEffect(() => {
        debugger
        if(endpoint !== undefined)
        {
            fetchDataset(endpoint)
            .then((result) => {
                debugger
                if(result != null)
                {
                   updateState(result)
                }
            })
        }


    }, [endpoint]);

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [salesTotal, setSalesTotal] = useState(0);
    const [subscriptionsTotal, setSubscriptionsTotal] = useState(0);
    const [data, setData] = useState(undefined);

    const state = {
        loading,
        setLoading,
        error, 
        setError,
        salesTotal, 
        setSalesTotal,
        subscriptionsTotal,
        setSubscriptionsTotal,
        data, 
        setData
    }

    /*
    Action creators
    */
    function fetchDatasetStart() {
        return { type: FETCH_DATASET_START };
    }
    
    function fetchDatasetFailure(payload) {
        return { type: FETCH_DATASET_FAILURE, payload };
    }
    
    function fetchDatasetSuccess(payload) {
        return { type: FETCH_DATASET_SUCCESS, payload };
    }

    function fetchDataset(endpoint) {
          
          return fetch(endpoint)
            .then(response => response.json())
            .then(fetchDatasetStart())
            .then(json => fetchDatasetSuccess(json))
            .catch(error => fetchDatasetFailure(error.message));
           
    }

    function updateState({type, payload})
    {
        debugger
        switch(type){
            case FETCH_DATASET_START:
                setLoading(true);

            case FETCH_DATASET_FAILURE:
                setError(payload);
                setLoading(false);

            case FETCH_DATASET_SUCCESS:
                
                setLoading(false);
                
                if(Array.isArray(payload))
                {
                    setData(payload);

                }
                else if(payload.salesTotal !== undefined && payload.subscriptionsTotal )
                {
                    setSalesTotal(payload.salesTotal);
                    setSubscriptionsTotal(payload.subscriptionsTotal);
                }   
        }

    }

    return(
        <>
            <div>
                <ul>
                    {  data !== undefined ?  
                        data.map(function(item, i){
                            return <li key={i}>{`${item.from} - ${item.numOfData}`}</li>
                        })
                        :
                        null
                    }
                </ul>
            </div>
        </>
    )
}

export default FetchData