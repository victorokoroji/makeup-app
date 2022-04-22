import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear } from '@fortawesome/free-solid-svg-icons';
import logo from '../assets/images/logo.jpg';

const Header = () => (
  <header>
    <img src={logo} alt="logo" className="logo" />
    <h1>Awesome MakeUps</h1>
    <div className="icons">
      <FontAwesomeIcon icon={faGear} />
    </div>
  </header>
);

export default Header;
