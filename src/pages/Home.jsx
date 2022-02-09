import React from 'react';
import { Fragment } from 'react/cjs/react.development';
import FilterInput from '../components/FilterInput';
import ListOfLaunches from '../components/ListOfLaunches';

function Home() {
  return (
    <Fragment>
      <FilterInput />
      <ListOfLaunches />
    </Fragment>
  );
}
export default Home;
