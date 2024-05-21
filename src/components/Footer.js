import React from 'react';
import footerLogo from '../assets/logo_footer.png'

function Footer() {
  return (
    <footer>
      <div id="logo-copyright">
        <img id="footer-logo" src={footerLogo} alt="Little Lemon Footer Logo"/>
        <h6>&copy; 2024 Little Lemon</h6>
      </div>
      <div>
        <h5>Contact</h5>
        <ul>
          <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
          <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
          <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
        </ul>
      </div>
      <div>
        <h5>Socials</h5>
        <ul>
          <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
          <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
          <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
