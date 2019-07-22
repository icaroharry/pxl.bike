import React, { useState, useEffect } from 'react';


const Navbar = ({ color }) => {
  return (
    <div className="w-full max-w-full h-16 shadow-lg" style={{ backgroundColor: color }}>
      <div className="container mx-auto flex px-6 lg:px-40 xl:px-64 flex-col">
        <span className="font-pixel">
          pixel.bike
        </span>
      </div>
    </div>
  );
};

export default Navbar;

