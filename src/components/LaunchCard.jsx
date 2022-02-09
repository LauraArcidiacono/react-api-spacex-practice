import React from 'react';
import PropTypes from 'prop-types';

function LauncheCard({
  missionName,
  launchYear,
  flightNumber,
  customers
}) {
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
        Customers:
        {' '}
        {customers}
      </p>

    </>
  );
}
export default LauncheCard;

LauncheCard.propTypes = {
  missionName: PropTypes.string.isRequired,
  launchYear: PropTypes.string.isRequired,
  flightNumber: PropTypes.number.isRequired,
  customers: PropTypes.string.isRequired
};
