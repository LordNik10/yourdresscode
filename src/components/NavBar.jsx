import React from 'react';
import logo from '../assests/logo.png';
import { theme } from '../config/theme';
import './NavBar.scss';

function NavBar() {
  return (
    <div
      className="container"
      style={{ backgroundColor: theme.palette.primary.main }}
    >
      <img src={logo} alt="logo" />
      <span>Your Dress Code</span>
    </div>
  );
}

export default NavBar;
