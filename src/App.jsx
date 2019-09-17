import React from "react";
import Builder from "./components/Builder";

const App = () => {
  return (
    <div className="App">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#24E463"
          fillOpacity="1"
          d="M0,224L60,234.7C120,245,240,267,360,261.3C480,256,600,224,720,229.3C840,235,960,277,1080,298.7C1200,320,1320,320,1380,320L1440,320L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
        ></path>
      </svg>
      <div className="xl:-mt-75 lg:-mt-56 md:-mt-40 sm:-mt-32 -mt-20">
        <Builder />
      </div>
    </div>
  );
};

export default App;
