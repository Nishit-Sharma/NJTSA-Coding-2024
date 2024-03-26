import React from 'react';
import Header from './Header.js'
import './Global.css';

const Layout = ({ children }) => {
    return (
      <div>
        {/* This just makes it easier to use header and footer */}
        <Header />
        {children}
      </div>
    );
  };
  
  export default Layout