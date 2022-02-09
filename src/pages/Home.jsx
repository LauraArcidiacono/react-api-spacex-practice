import React from 'react';
import { Fragment } from 'react/cjs/react.development';
import FilterInput from '../components/FilterInput';
import ListOfLaunches from '../components/ListOfLaunches';

function Home() {
  return (
    <Fragment>
      <h1>Home</h1>
      <FilterInput />
      <ListOfLaunches />
    </Fragment>
  );
}
export default Home;
