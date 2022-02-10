/* eslint-disable react/require-default-props */
/* eslint-disable no-console */
import React from 'react';
import { Fragment } from 'react/cjs/react.development';
import PropTypes from 'prop-types';

function FilterInput({
  handleChange, handleSubmit
}) {
  return (
    <Fragment>
      <h2>Search</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="searchLaunch"
          type="text"
          placeholder="Search launch..."
          onChange={handleChange}
        />
        <button type="button">Search Now</button>
      </form>
    </Fragment>
  );
}
export default FilterInput;

FilterInput.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired
};
