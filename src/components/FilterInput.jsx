/* eslint-disable no-console */
import React, { useState } from 'react';
import { Fragment } from 'react/cjs/react.development';

function FilterInput() {
  const [keyword, setKeyword] = useState();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(keyword);
  };

  const handleChange = (event) => {
    setKeyword(event.target.value);
  };

  return (
    <Fragment>
      <h2>Search</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="searchLaunch"
          type="text"
          placeholder="Search launch..."
          value={keyword}
          onChange={handleChange}
        />
        <button type="button">Search Now</button>
      </form>
    </Fragment>
  );
}
export default FilterInput;
