/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';
import getLaunches from '../helpers/getLaunches';
import LaunchCard from './LaunchCard';

function ListOfLaunches() {
  const [pastLaunches, setLaunches] = useState([]);
  // const [key, setKet] = useState('');
  // const [value, setValue] = useState('');

  useEffect(() => {
    getLaunches({ key: 'launch_year', value: '2018' })
      .then((data) => setLaunches(data));
  }, []);

  console.log('past launches on list', pastLaunches);

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
            key={launch.static_fire_date_unix}
            missionName={launch.mission_name}
            launchYear={launch.launch_year}
            flightNumber={launch.flight_number}
            customers={launch.rocket.second_stage.payloads
              .map((payload) => (payload.customers
                .map((customer) => (
                  <li
                    key={launch.flight_number}
                  >
                    {customer}

                  </li>
                ))
              ))}
          />
        ))}
      </ul>
    </>
  );
}
export default ListOfLaunches;
