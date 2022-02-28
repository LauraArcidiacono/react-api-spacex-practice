import React from 'react';
import { Fragment } from 'react/cjs/react.development';
import FilterInput from '../components/FilterInput/FilterInput';
import ListOfLaunches from '../components/ListOfLaunches/ListOfLaunches';
import useKeyValue from '../hook/useKeyValue';

function Home() {
  const {
    key, value, handleChange, handleSelect, handleSubmit
  } = useKeyValue();

  return (
    <Fragment>
      <FilterInput
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        handleSelect={handleSelect}
      />
      <ListOfLaunches
        filterKey={key}
        filterValue={value}
      />
    </Fragment>
  );
}
export default Home;
