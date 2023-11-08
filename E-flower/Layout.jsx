// Layout.js
import React from 'react';
import { Link } from 'react-router-dom';

const Layout = ({ children }) => {
  return (
    <div>
      <div className="Navigation">
        <div ><h3 style={{position:'absolute',marginBottom:'-6%'}}>NatureDecor</h3></div>
        <div style={{ display: 'flex', columnGap: '30px' }}>
          <div><Link to="/">Home</Link></div>
          <div ><Link  to="/cart">cart</Link></div>
          <div>About</div>
        </div>
      </div>
      {children}
    </div>
  );
};

export default Layout;
