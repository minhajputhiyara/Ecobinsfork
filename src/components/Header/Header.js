// src/components/Header/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faInfoCircle, faDashboard,faSignInAlt,faUserPlus } from '@fortawesome/free-solid-svg-icons';
import './Header.css';

function Header() {
  return (
    <header className="main-header">
      <div className="logo">EcoBins</div>
      <nav>
        <ul>
          <li>
            <Link to="/">
              <FontAwesomeIcon icon={faHome} /> Home
            </Link>
          </li>
          <li>
            <Link to="/profile">
              <FontAwesomeIcon icon={faUser} /> Profile
            </Link>
          </li>
          <li>
            <Link to="/dashboard">
              <FontAwesomeIcon icon={faDashboard} /> Dashboard
            </Link>
          </li>
          <li>
            <Link to="/about">
              <FontAwesomeIcon icon={faInfoCircle} /> About
            </Link>
          </li>
          <li><Link to="/signin">
                  <FontAwesomeIcon icon={faSignInAlt} /> Login
                </Link>
            </li>
            
            <li>
              <Link to="/signup">
                <FontAwesomeIcon icon={faUserPlus} /> Sign Up
              </Link>
            </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;