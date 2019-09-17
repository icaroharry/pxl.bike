import React from "react";
import Builder from "./components/Builder";

const App = () => {
  return (
    <div className="App">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#5A9262"
          fill-opacity="1"
          d="M0,224L48,229.3C96,235,192,245,288,245.3C384,245,480,235,576,213.3C672,192,768,160,864,144C960,128,1056,128,1152,112C1248,96,1344,64,1392,48L1440,32L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
        />
      </svg>
      <div className="xl:-mt-64 lg:-mt-56 md:-mt-40 sm:-mt-32 -mt-20">
        <Builder />
      </div>
    </div>
  );
};

export default App;
