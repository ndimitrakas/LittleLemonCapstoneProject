import React from 'react';
import logo from './assets/logo.svg'

function Header() {
  return (
    <header>
        <img src={logo} alt="Little Lemon Logo"/>
        <h1>Welcome to My App</h1>
        {/* Add more content here */}
    </header>
  );
}

export default Header;
