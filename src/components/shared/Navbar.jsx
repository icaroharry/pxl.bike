import React, { useState, useEffect } from 'react';


const Navbar = ({ color }) => {
  return (
    <div>
      <div className= "w-full max-w-full h-12 shadow-lg bg-white">
        <div className="container mx-auto w-xs sm:w-sm md:w-md lg:w-lg xl:w-xl flex-col">
          <span className="font-pixel text-3xl" style={{ textShadow: `1px 1px ${color}` }}>
            pxl.bike
          </span>
        </div>
      </div>
      <div className="w-full max-w-full h-1 shadow-lg" style={{ backgroundColor: color }}>

      </div>
    </div>
  );
};

export default Navbar;

