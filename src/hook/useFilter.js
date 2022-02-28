import { useState, useEffect } from 'react';
import getLaunches from '../helpers/getLaunches';

const useFilter = (filterKey, filterValue) => {
  const [pastLaunches, setLaunches] = useState([]);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getLaunches(filterKey, filterValue)
      .then((data) => {
        console.log(data);
        if (filterKey === 'customers') {
          const customerFilter = data.filter(
            (launch) => launch.customers.toLowerCase().indexOf(filterValue.toLowerCase()) !== -1
          );
          setLaunches(customerFilter);
        } else if (filterKey === 'mission_name') {
          const missionNameFilter = data.filter(
            (launch) => launch.missionName.toLowerCase().indexOf(filterValue.toLowerCase()) !== -1
          );
          setLaunches(missionNameFilter);
        } else {
          setLaunches(data);
        }
        setLoading(false);
      });
  }, [filterValue]);

  return {
    pastLaunches,
    loading
  };
};
export default useFilter;
