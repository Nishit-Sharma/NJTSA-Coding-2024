import React from 'react';

const Layout = ({ children }) => {
    return (
      <div>
        {/* This just makes it easier to use header and footer */}
        {children}
      </div>
    );
  };
  
  export default Layout