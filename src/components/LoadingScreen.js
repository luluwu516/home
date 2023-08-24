import React from "react";
import loadingGIF from "../assets/images/loading.gif";

const LoadingScreen = () => {
  return (
    <div className="loadingScreen">
      <div className="container">
        <img src={loadingGIF} alt="Loading" />
        <p>Loading</p>
        <div className="loadingBar">
          <div className="progress"></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
