/* eslint-disable react/require-default-props */
import React from 'react';
import PropTypes from 'prop-types';
import './FilterInput.css';

function FilterInput({
  handleChange, handleSubmit, handleSelect
}) {
  const selectOptions = [
    { label: 'Search by', value: '', key: 1 },
    { label: 'Mision Name', value: 'missionName', key: 2 },
    { label: 'Flight Number', value: 'flightNumber', key: 3 },
    { label: 'Launch Year', value: 'launchYear', key: 4 },
    { label: 'Customers', value: 'customers', key: 5 }
  ];

  return (
    <section className="filterInput">
      <div className="filterInput__container">
        <h2 className="filterInput__title">Search your Launch</h2>
        <form onSubmit={handleSubmit}>
          <select
            name="selectKey"
            id="selectKey"
            onChange={handleSelect}
          >
            {selectOptions.map(({ value, label, key }) => (
              <option
                key={key}
                value={value}
              >
                {label}

              </option>
            ))}
          </select>
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
        </form>
      </div>

    </section>
  );
}
export default FilterInput;

FilterInput.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSelect: PropTypes.func.isRequired
};
