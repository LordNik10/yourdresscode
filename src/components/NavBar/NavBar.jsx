import React from 'react';
import logo from '../../assests/logo.png';
import hamburgerMenu from '../../assests/hamburger.png';
import { theme } from '../../config/theme';
import './NavBar.scss';

function NavBar() {
  return (
    <nav
      className="container"
      style={{ backgroundColor: theme.palette.primary.main }}
    >
      <div className="container-logo">
        <img src={logo} alt="logo" />
        <span className="website-title">Your Dress Code</span>
      </div>

      <div className="container-hamburger-menu">
        <img
          src={hamburgerMenu}
          alt="hamburger menu"
          className="hamburger-icon"
        />
        <ul className="menu-list-hamburger">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#products">Products</a>
          </li>
          <li>
            <a href="#contacts">Contacts</a>
          </li>
        </ul>
      </div>

      <div className="container-menu">
        <ul className="menu-list">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#products">Products</a>
          </li>
          <li>
            <a href="#contacts">Contacts</a>
          </li>
        </ul>
      </div>

      <div className="container-login">
        <span>
          <a href="#login">Login</a>
        </span>
      </div>
    </nav>
  );
}

export default NavBar;
