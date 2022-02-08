/* eslint-disable no-console */
// const getLaunches = async () => {
//   const url = 'https://api.spacexdata.com/v3/launches/past';
//   const resp = await fetch(url)
//     .then((response) => response.json())
//     .then((response) => {
//       const { data } = response;
//     });
//   return resp;
// };

// export default getLaunches;
import axios from 'axios';

const getLaunches = async () => {
  const url = 'https://api.spacexdata.com/v3/launches/past';
  try {
    const { data } = await axios.get(url);
    const apiData = await data;
    return apiData;
  } catch (err) {
    throw Error(err.message);
  }
};
export default getLaunches;
