import React from 'react';
import spacexWhite from '../../assets/spacexWhite.svg';
import './Header.css';

function Header() {
  return (
    <header>
      <img
        src={spacexWhite}
        alt="Logo SpaceX"
        className="header__logo"
      />
      <h1 className="header__title">SEARCH LAUNCHES</h1>
    </header>

  );
}
export default Header;
