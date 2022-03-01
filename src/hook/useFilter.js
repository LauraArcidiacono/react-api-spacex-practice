/* eslint-disable no-console */
import { useState, useEffect } from 'react';
import getLaunches from '../helpers/getLaunches';

const useFilter = (filterKey, filterValue) => {
  const [pastLaunches, setLaunches] = useState([]);
  const [filteredLaunches, setFilteredLaunches] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getLaunches()
      .then((data) => {
        setLaunches(data);
        setFilteredLaunches(data);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    if (filterKey === 'customers' || filterKey === 'missionName') {
      setFilteredLaunches(pastLaunches.filter(
        (launch) => launch[filterKey].toLowerCase().indexOf(filterValue.toLowerCase()) !== -1
      ));
    } else if (filterKey === 'flightNumber' || filterKey === 'launchYear') {
      setFilteredLaunches(pastLaunches.filter(
        (launch) => launch[filterKey] === filterValue
      ));
    }
  }, [filterValue]);

  return {
    filteredLaunches,
    loading
  };
};
export default useFilter;
