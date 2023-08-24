import React from "react";

const NotFound = () => {
  return (
    <div className="notFound">
      <p className="error">
        ERROR 404 <span>ERROR 404</span>
        <span>ERROR 404</span>
      </p>
      <p className="glitch">
        NOT FOUND <span>NOT FOUND</span>
        <span>NOT FOUND</span>
      </p>
      <div className="bigHeading">
        <h1>Whoops!</h1>
        <h2>You seem to be lost.</h2>
        <p>
          No worry! You can find what you are looking for up on the navigation
          bar.
        </p>
      </div>
    </div>
  );
};

export default NotFound;
