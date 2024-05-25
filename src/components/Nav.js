import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/">Menu</Link></li>
        <li><Link to="/">About Us</Link></li>
        <li><Link to="/booking">Reservations</Link></li>
        <li><Link to="/">Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Nav;

