import React from "react"; 

const Loader = () => {
  return (
    <div className="loader-container">
      <div className="loader">
        <div className="camera">
          <div className="camera-lens"></div>
          <div className="camera-body"></div>
          <div className="camera-strap"></div>
        </div>
        <div className="shutter"></div>
      </div>
    </div>
  );
};

export default Loader;
