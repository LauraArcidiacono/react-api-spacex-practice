import React from 'react';
import spacexWhite from '../../assets/spacexWhite.svg';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <img
        src={spacexWhite}
        alt="Logo SpaceX"
        className="footer__logo"
      />
      <h2 className="footer__title">SEARCH LAUNCHES</h2>
      <span>by Laura Arcidiacono</span>
      <span>Febrero 2022</span>
    </footer>
  );
}

export default Footer;
