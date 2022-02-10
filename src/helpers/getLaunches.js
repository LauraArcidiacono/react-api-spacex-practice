/* eslint-disable no-console */
const getLaunches = (key = '', value = '') => {
  let apiURL = 'https://api.spacexdata.com/v3/launches/';

  apiURL += (key !== '' && value !== '') ? `?${key}=${value}` : '';

  return fetch(apiURL)
    .then((res) => res.json()
      .then((response) => {
        const data = response;
        const launchesArray = data.map((launch) => ({
          flightNumber: launch.flight_number,
          missionName: launch.mission_name,
          launchYear: launch.launch_year,
          payloadsCount: launch.rocket.second_stage.payloads.length,
          customers: launch.rocket.second_stage.payloads.map(
            (customer) => customer.customers
          ).toString()
        }));
        return launchesArray;
      }));
};

export default getLaunches;
