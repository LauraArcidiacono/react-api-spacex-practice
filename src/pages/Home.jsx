import React from 'react';
import FilterInput from '../components/FilterInput/FilterInput';
import ListOfLaunches from '../components/ListOfLaunches/ListOfLaunches';
import useKeyValue from '../hook/useKeyValue';

function Home() {
  const {
    key, value, handleChange, handleSelect, handleSubmit
  } = useKeyValue();

  return (
    <>
      <FilterInput
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        handleSelect={handleSelect}
      />
      <ListOfLaunches
        filterKey={key}
        filterValue={value}
      />
    </>
  );
}
export default Home;
