import React from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import './LaunchCard.css';

function LauncheCard({
  missionName,
  launchYear,
  flightNumber,
  payloadsCount,
  customers
}) {
  const arrayCustomers = customers.split(',');
  return (
    <section className="launchCard">
      <h2 className="launchCard__name">
        {' '}
        {missionName.toUpperCase()}
      </h2>
      <h3>OVERVIEW</h3>
      <table className="launchCard__table">
        <tbody>
          <tr className="launchCard__year">
            <td>LAUNCH YEAR</td>
            <td>
              {' '}
              {launchYear}
            </td>
          </tr>
          <tr className="launchCard__flightNumber">
            <td>FLIGHT NUMBER</td>
            <td>
              {' '}
              {flightNumber}
            </td>
          </tr>
          <tr className="launchCard__payloadCount">
            <td>PAYLOADS COUNT</td>
            <td>
              {' '}
              {payloadsCount}
            </td>
          </tr>
          <tr className="launchCard_customers">
            <td>CUSTOMERS</td>
            <td>
              {' '}
              {arrayCustomers.map((customer) => (
                <li
                  key={uuidv4()}
                  className="launchCard__item"
                >
                  {customer}
                </li>
              ))}
            </td>

          </tr>
        </tbody>
      </table>
    </section>
  );
}
export default LauncheCard;

LauncheCard.propTypes = {
  missionName: PropTypes.string.isRequired,
  launchYear: PropTypes.string.isRequired,
  flightNumber: PropTypes.string.isRequired,
  payloadsCount: PropTypes.number.isRequired,
  customers: PropTypes.string.isRequired
};
