import { Fragment } from 'react/cjs/react.production.min';
import React from 'react';
import SearchLaunche from './components/SearchLaunche';
import ListOfLaunches from './components/ListOfLaunches';

function App() {
  return (
    <Fragment>
      <h1>Search SpaceX Launches</h1>
      <SearchLaunche />
      <ListOfLaunches />
    </Fragment>

  );
}

export default App;
