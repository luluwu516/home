import React, { useState } from "react";
import { Link } from "react-router-dom";

import logo from "../assets/logo.png";

const Header = ({ mode, setMode }) => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  const modeHandler = () => {
    setMode((currentMode) => (currentMode === "light" ? "dark" : "light"));
  };

  return (
    <nav className="nav">
      <div className="nav-logo">
        <Link to="/home">
          <img src={logo} alt="Logo" />
        </Link>
      </div>
      <ul className={isNavExpanded ? "nav-menu expanded" : "nav-menu"}>
        <Link to="/home" data-content="HOME" className="nav-menu-item-link">
          <li className="nav-menu-item">HOME</li>
        </Link>

        <Link to="/about" data-content="ABOUT" className="nav-menu-item-link">
          <li className="nav-menu-item">ABOUT</li>
        </Link>

        <Link
          to="/projects"
          data-content="PROJECTS"
          className="nav-menu-item-link"
        >
          <li className="nav-menu-item">PROJECTS</li>
        </Link>

        <Link
          to="/contact"
          data-content="CONTACT"
          className="nav-menu-item-link"
        >
          <li className="nav-menu-item">CONTACT</li>
        </Link>
      </ul>
      <div className="mode-switch">
        <label>
          <input
            type="checkbox"
            id="mode-switch-toggle"
            onChange={modeHandler}
          />
          <div className="mode-switch-img"></div>
        </label>
      </div>
      <button
        className="nav-menu-burger"
        onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }}
      >
        <div
          className="nav-menu-burger-line"
          style={
            isNavExpanded
              ? { transform: "translateX(-50%) translateY(-50%) rotate(45deg)" }
              : {
                  transform: "translateX(-50%) translateY(-400%)",
                }
          }
        ></div>
        <div
          className="nav-menu-burger-line"
          style={
            isNavExpanded
              ? { transform: "translateX(100%) translateY(0)" }
              : {
                  transform: "translate(-50%, -50%)",
                }
          }
        ></div>
        <div
          className="nav-menu-burger-line"
          style={
            isNavExpanded
              ? {
                  transform: "translateX(-50%) translateY(-50%) rotate(-45deg)",
                }
              : {
                  transform: "translateX(-50%) translateY(300%)",
                }
          }
        ></div>
      </button>
    </nav>
  );
};

export default Header;
