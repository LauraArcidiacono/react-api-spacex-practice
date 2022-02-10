/* eslint-disable no-console */
import React from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';

function LauncheCard({
  missionName,
  launchYear,
  flightNumber,
  payloadsCount,
  customers
}) {
  const arrayCustomers = customers.split(',');
  return (
    <>
      <h1>
        {' '}
        {missionName}
      </h1>
      <p>
        Launch Year:
        {' '}
        {launchYear}
      </p>
      <p>
        Flight Number:
        {' '}
        {flightNumber}
      </p>
      <p>
        Payloads Count:
        {' '}
        {payloadsCount}
      </p>
      <p>
        Customers:
        {' '}
        {arrayCustomers.map((customer) => (
          <li
            key={uuidv4()}
          >
            {customer}
          </li>
        ))}
      </p>

    </>
  );
}
export default LauncheCard;

LauncheCard.propTypes = {
  missionName: PropTypes.string.isRequired,
  launchYear: PropTypes.string.isRequired,
  flightNumber: PropTypes.number.isRequired,
  payloadsCount: PropTypes.number.isRequired,
  customers: PropTypes.string.isRequired
};
