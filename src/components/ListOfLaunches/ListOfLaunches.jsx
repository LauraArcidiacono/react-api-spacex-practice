/* eslint-disable react/require-default-props */
import PropTypes from 'prop-types';
import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import useFilter from '../../hook/useFilter';
import LaunchCard from '../LaunchCard/LaunchCard';
import Loading from '../Loading/Loading';
import './ListOfLaunches.css';

function ListOfLaunches({ filterKey, filterValue }) {
  const { filteredLaunches, loading } = useFilter(filterKey, filterValue);
  if (loading) return <Loading />;

  return (
    <section className="listOfLaunches">
      <h1 className="listOfLaunches__title">LIST OF PAST LAUNCHES</h1>
      <p className="listOfLaunches__count">
        Number of Launches on your search:
        {' '}
        {filteredLaunches.length}
      </p>
      <ul>
        {filteredLaunches.map((launch) => (
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
    </section>
  );
}
export default ListOfLaunches;

ListOfLaunches.propTypes = {
  filterKey: PropTypes.string,
  filterValue: PropTypes.string
};
