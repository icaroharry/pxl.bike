import React, { useState, useEffect } from 'react';


const Navbar = ({ color }) => {
  return (
    <div style={{ ...styles, backgroundColor: color }}>
      <span className="pixel-font" style={{ ...logoStyle, color: 'white' }}>
        pixel.bike
      </span>
    </div>
  );
};

const styles = {
  display: 'flex',
  justifyContent: 'center',
  alignSelf: 'flex-start',
  height: '50px',
  width: '100%'
};

const logoStyle = {
  alignSelf: 'center',
  textShadow: '-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black',
  fontSize: 30
};

export default Navbar;

