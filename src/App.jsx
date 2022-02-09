import { Fragment } from 'react/cjs/react.production.min';
import React from 'react';
import FilterInput from './components/FilterInput';
import ListOfLaunches from './components/ListOfLaunches';

function App() {
  return (
    <Fragment>
      <h1>Search SpaceX Launches</h1>
      <FilterInput />
      <ListOfLaunches />
    </Fragment>

  );
}

export default App;
