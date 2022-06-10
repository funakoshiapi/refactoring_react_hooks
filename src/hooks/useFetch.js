/*   
    Create a custom React Hook for data fetching.
    Make sure to handle the three states of data fetching: loading, error, and success.

    We create a custom Hook so that the logic for data fetching can be shared and reused across many components

    A reducer helps you to manage state changes in a centralized, well-defined way with clear actions that act on the state.
*/
import {useEffect, useReducer } from "react";


const initialState = {
    loading: false,
    error: "",
    data: []
};

function apiReducer(state, action)
{
    switch(action.type){
        case "FETCH_DATASET_START":
            return {...state, loading: true};
        case "FETCH_DATASET_ERROR":
            return {...state, loading: false, error: action.payload};
        case "FETCH_DATASET_SUCCESS":
            return {...state, loading: false, error: "", data: action.payload};
        case "FETCH_DATASET_FINISH":
            return {...state, loading: false};
        case "EMPTY_OR_NULL":
            return {...state, loading: false, error:"", data: []};
        default:
            return state;
    }
}

export function useFetch(endpoint) {
    const [state, dispatch] = useReducer(apiReducer, initialState);
  
    useEffect(() => {
  
      // Don't call the API if endpoint is null or empty
      if (!endpoint) 
          return dispatch({type: "EMPTY_OR_NULL"});
  
      dispatch({ type: "FETCH_DATASET_START" });
      fetch(endpoint)
        .then(response => {
          if (!response.ok) throw Error(response.statusText);
          return response.json();
        })
        .then(json => {
          dispatch({ type: "FETCH_DATASET_SUCCESS", payload: json });
        })
        .catch(error => {
          dispatch({ type: "FETCH_DATASET_ERROR", payload: error.message });
        })
        .finally(() => {
          dispatch({ type: "FETCH_DATASET_FINISH" });
        });
    }, [endpoint]);

    return state;
}
