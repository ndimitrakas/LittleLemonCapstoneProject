import React from 'react';
import Nav from './Nav';
import logo from '../assets/logo.svg'

function Header() {
  return (
    <header>
        <img id="logo" src={logo} alt="Little Lemon Logo"/>
        <Nav />
    </header>
  );
}

export default Header;
