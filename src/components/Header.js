import React from 'react';
import { Link } from 'react-router-dom';
import { Box } from "@chakra-ui/react";
import './Global.css';

function Header() {
  return (
    <Box className="header" borderBottomRadius="10px">
    <header>
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
              <Link to="/">Home</Link>
            </li>
          </ul>
      </nav>
    </header>
    </Box>
  );
}

export default Header;