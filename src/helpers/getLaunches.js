/* eslint-disable no-console */
const getLaunches = ({ key = 'launch_year', value = '2018' } = {}) => {
  const apiURL = `https://api.spacexdata.com/v3/launches/?${key}=${value}`;

  return fetch(apiURL)
    .then((res) => res.json()
      .then((response) => {
        const data = response;
        return data;
      }));
};

export default getLaunches;
