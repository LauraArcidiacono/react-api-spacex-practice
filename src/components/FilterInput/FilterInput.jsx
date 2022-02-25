/* eslint-disable react/require-default-props */
import React from 'react';
import PropTypes from 'prop-types';
import './FilterInput.css';

function FilterInput({
  handleChange, handleSubmit
}) {
  return (
    <section className="filterInput">
      <div className="filterInput__container">
        <h2 className="filterInput__title">Search your Launch</h2>
        <form onSubmit={handleSubmit}>
          <input
            id="searchLaunch"
            name="searchLaunch"
            type="text"
            placeholder="Search launch..."
            onChange={handleChange}
            className="filterInput__input"
          />
          <button
            type="button"
            onClick={handleChange}
            className="filterInput__searchButton"
          >
            <i className="fas fa-search" />
          </button>
          <legend className="filterInput__legend">
            <h4>Use a search criteria followed by a colon and your data of interest, e.g.:</h4>
            <span>mission_name:FalconSat</span>
            <span>launch_year:2015</span>
            <span>customers:NASA</span>
          </legend>
        </form>
      </div>

    </section>
  );
}
export default FilterInput;

FilterInput.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired
};
