import React from 'react';
import getLaunches from '../helpers/getLaunches';

function ListOfLaunches() {
  const launches = getLaunches();
  return (
    <>
      <h1>List Of SpaceX Launches</h1>
      <div>{launches}</div>
    </>
  );
}
export default ListOfLaunches;
