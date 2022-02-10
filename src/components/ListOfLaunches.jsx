/* eslint-disable react/require-default-props */
/* eslint-disable no-console */
import propTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import getLaunches from '../helpers/getLaunches';
import LaunchCard from './LaunchCard';

function ListOfLaunches({ filterKey, filterValue }) {
  const [pastLaunches, setLaunches] = useState([]);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getLaunches(filterKey, filterValue)
      .then((data) => {
        setLaunches(data);
        setLoading(false);
      });
  }, [filterKey, filterValue]);

  if (loading) return <h2>Loading Launches...</h2>;

  return (
    <>
      <h1>List of Past Launches</h1>
      <p>
        Number of Launches:
        {' '}
        {pastLaunches.length}
      </p>
      <ul>
        {pastLaunches.map((launch) => (
          <LaunchCard
            key={uuidv4()}
            missionName={launch.missionName}
            launchYear={launch.launchYear}
            flightNumber={launch.flightNumber}
            payloadsCount={launch.payloadsCount}
            customers={launch.customers}
          />
        ))}
      </ul>
    </>
  );
}
export default ListOfLaunches;

ListOfLaunches.propTypes = {
  filterKey: propTypes.string,
  filterValue: propTypes.string
};
