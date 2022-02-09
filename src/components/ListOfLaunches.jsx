/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';
import getLaunches from '../helpers/getLaunches';

function ListOfLaunches() {
  const [pastLaunches, setLaunches] = useState([]);

  useEffect(() => {
    getLaunches()
      .then(setLaunches);
  }, []);
  console.log('past launches on list', pastLaunches);

  return (
    <>
      <h1>Lis of Past Launches</h1>
      <p>
        Number of Launches:
        {' '}
        {pastLaunches.length}
      </p>
      <p>{pastLaunches[0].flight_number}</p>
    </>
  );
}
export default ListOfLaunches;
