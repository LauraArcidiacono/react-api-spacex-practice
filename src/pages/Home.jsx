/* eslint-disable no-console */
import React, { useState } from 'react';
import { Fragment } from 'react/cjs/react.development';
import FilterInput from '../components/FilterInput';
import ListOfLaunches from '../components/ListOfLaunches';

function Home() {
  const [key, setKey] = useState();
  const [value, setValue] = useState();

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleChange = (event) => {
    const keyValue = event.target.value;
    const arrayKeyValue = keyValue.split(':');
    const [searchedKey, searchedValue] = arrayKeyValue;

    setKey(searchedKey);
    setValue(searchedValue);
  };
  return (
    <Fragment>
      <FilterInput
        handleSubmit={handleSubmit}
        handleChange={handleChange}
      />
      <ListOfLaunches
        filterKey={key}
        filterValue={value}
      />
    </Fragment>
  );
}
export default Home;
