/* eslint-disable react/require-default-props */
import PropTypes from 'prop-types';
import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import useFilter from '../hook/useFilter';
import LaunchCard from './LaunchCard';
import Loading from './Loading';

function ListOfLaunches({ filterKey, filterValue }) {
  const { pastLaunches, loading } = useFilter(filterKey, filterValue);

  if (loading) return <Loading />;

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
  filterKey: PropTypes.string,
  filterValue: PropTypes.string
};
