/* eslint-disable no-console */
import { useState, useEffect } from 'react';
import getLaunches from '../helpers/getLaunches';

const useFilter = (filterKey, filterValue) => {
  const [pastLaunches, setLaunches] = useState([]);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getLaunches(filterKey, filterValue)
      .then((data) => {
        if (filterKey === 'customers') {
          const customerFilter = pastLaunches.filter(
            (launch) => launch.customers.toLowerCase().indexOf(filterValue.toLowerCase()) !== -1
          );
          console.log('customerfilter', customerFilter);
          setLaunches(customerFilter);
        } else {
          setLaunches(data);
        }
        setLoading(false);
      });
  }, [filterKey, filterValue]);
  return {
    pastLaunches,
    loading
  };
};
export default useFilter;
