// src/components/Header/Navigation.js
import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <nav>
      <ul>
        <li><Link to="/dashboard"> Dashboard</Link></li>
        <li><Link to="/profile"><i className="icon person-icon"></i> Profile</Link></li>
        <li><Link to="/recycle">Recycling Guide</Link></li>
        <li><Link to="/disposal">Disposal Guide</Link></li>
        <li><Link to="/search">Search</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>
    </nav>
  );
}

export default Navigation;