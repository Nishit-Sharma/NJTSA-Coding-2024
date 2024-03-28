import React from 'react';
import { Link } from 'react-router-dom';
import './Global.css';
import logo from './static/logo.png';

function Header() {
  return (
    <header className="header">
      <div className="logo header-logo header-logo-size">
        {/* Making the image link to something */}
        {<Link to="/">
          <img src={logo} alt="NJ Getaway" />
        </Link>}
      </div>
      <nav>
          <ul>
            {/* // Adding links to the home and cart */}
            <li className="home">
              <Link to="/">Home</Link>
            </li>
          </ul>
      </nav>
    </header>
  );
}

export default Header;