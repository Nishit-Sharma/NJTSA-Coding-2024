import React from 'react';
import { Link } from 'react-router-dom';
import { Box } from "@chakra-ui/react";
import './Global.css';

function Header() {
  return (
    <header className="header">
      <div className="logo header-logo header-logo-size">
        {/* Making the image link to something */}
        {/* <Link to="/">
          <img src={image} alt="BoboTique" />
        </Link> */}
      </div>
      <nav>
          <ul>
            {/* // Adding links to the home and cart */}
            <li className="home">
              {/* Add a class to the Link component for styling */}
              <Link to="/" className="home-link">Home</Link>
            </li>
          </ul>
      </nav>
    </header>
  );
}

export default Header;