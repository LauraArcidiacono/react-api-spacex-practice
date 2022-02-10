/* eslint-disable react/require-default-props */
/* eslint-disable no-console */
import propTypes from 'prop-types';
import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import useFilter from '../hook/useFilter';
import LaunchCard from './LaunchCard';

function ListOfLaunches({ filterKey, filterValue }) {
  const { pastLaunches, loading } = useFilter(filterKey, filterValue);

  console.log(pastLaunches);

  if (loading) {
    return (
      <>
        <h2>Loading Launches...</h2>
        <h3>Please wait</h3>
      </>
    );
  }

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
