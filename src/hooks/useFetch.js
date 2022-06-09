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
        default:
            return state;
    }
}


function useEffect(endpoint){

    const[loading, setLoading] = useState("no");
    const[error, setError] = useState("");
    const [data, setData] = useState([]);

    useEffect(() =>{
        setLoading("yes");

        fetch(endpoint)
            .then(response =>{
                if (!response.ok) throw Error(response.statusText);
                return response.json();
            })
            .then(json => setData(json))
            .catch(error => {
                
                setError(error.message);
            })
            .finally(() =>{
                setLoading("no");
            })
    },[endpoint]);

    return {loading, error, data};

}

export default useEffect;

