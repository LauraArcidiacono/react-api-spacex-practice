/* eslint-disable no-console */
const getLaunches = () => {
  const apiURL = 'https://api.spacexdata.com/v3/launches/past';

  return fetch(apiURL)
    .then((res) => res.json()
      .then((response) => {
        const data = response;
        console.log('data en fetch', data);
        return data;
      }));
};
getLaunches();

export default getLaunches;

// import axios from 'axios';

// const getLaunches = async () => {
//   const apiURL = 'https://api.spacexdata.com/v3/launches/past';
//   let launchesData = [];
//   const { data } = await axios.get(apiURL);
//   launchesData = data;
//   console.log('launchesdata on get', typeof launchesData);
//   return launchesData;
// };
// export default getLaunches;
