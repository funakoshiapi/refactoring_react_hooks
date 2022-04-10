import React from "react";
import PropTypes from "prop-types";

function Select({handleSelectChange, optionsForSelect, defaultLabel, id}){

    return(
        <>
            <label htmlFor="select-product"> {`${defaultLabel}`}</label>  
            <div className="field">
                <select id="select-product" onChange={ e => handleSelectChange(e)}>
                    <option value="">--</option>
                    {optionsForSelect.map(option =>(
                        <option key={option.label} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>
            <div className="chevron-wrapper flex">
                <svg
                className="chevron"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
            </div>
            </div>
        </>
        
    )
}


export default Select