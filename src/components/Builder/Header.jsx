import React from "react";
import Save from "../../assets/save.svg";
import Random from "../../assets/random.svg";

const Header = ({ color, handleDownload, handleRandomize }) => {
  return (
    <div className="flex flex-col sm:flex-row justify-center">
      <div className="w-full sm:w-3/5 flex justify-between">
        <span className="font-pixel text-3xl text-white">pxl.bike</span>
        <div>
          <button
            className="text-white mr-2 py-2 px-4 rounded"
            onClick={handleRandomize}
          >
            <img src={Random} />
          </button>
          <button
            className="text-white py-2 px-4 rounded"
            onClick={handleDownload}
          >
            <img src={Save} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
