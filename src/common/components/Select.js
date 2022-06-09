import React from "react";
import PropTypes from "prop-types";

const Select = ({ handleChange, id, label, options }) => {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <div className="field">
        <select id={id} onChange={handleChange}>
            <option value="">--</option>
            {options.map(option => (
            <option key={option.value} value={option.value}>
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
  );
};

Select.propTypes = {
  handleChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired
    })
  ).isRequired,
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired
};

export default Select;