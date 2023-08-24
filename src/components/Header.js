import React, { useState } from "react";
import { Link } from "react-router-dom";

import logo from "../assets/images/logo.png";

const Header = ({ mode, setMode }) => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  const modeHandler = () => {
    setMode((currentMode) => (currentMode === "light" ? "dark" : "light"));
  };

  return (
    <nav className="nav">
      <div className="nav_logo">
        <Link to="/home">
          <img src={logo} alt="Logo" />
        </Link>
      </div>
      <ul className={isNavExpanded ? "nav_menu expanded" : "nav_menu"}>
        <li className="nav_menu_item">
          <Link to="/home" data-content="HOME" className="nav_menu_item_link">
            HOME
          </Link>
        </li>
        <li className="nav_menu_item">
          <Link to="/about" data-content="ABOUT" className="nav_menu_item_link">
            ABOUT
          </Link>
        </li>
        <li className="nav_menu_item">
          <Link
            to="/projects"
            data-content="PROJECTS"
            className="nav_menu_item_link"
          >
            PROJECTS
          </Link>
        </li>
        <li className="nav_menu_item">
          <Link
            to="/contact"
            data-content="CONTACT"
            className="nav_menu_item_link"
          >
            CONTACT
          </Link>
        </li>
      </ul>
      <div className="mode_switch">
        <label>
          <input
            type="checkbox"
            id="mode_switch_toggle"
            onChange={modeHandler}
          />
          <div className="mode_switch_img"></div>
        </label>
      </div>
      <button
        className="nav_menu_burger"
        onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }}
      >
        <div
          className="nav_menu_burger_line"
          style={
            isNavExpanded
              ? { transform: "translateX(-50%) translateY(-50%) rotate(45deg)" }
              : {
                  transform: "translateX(-50%) translateY(-400%)",
                }
          }
        ></div>
        <div
          className="nav_menu_burger_line"
          style={
            isNavExpanded
              ? { transform: "translateX(100%) translateY(0)" }
              : {
                  transform: "translate(-50%, -50%)",
                }
          }
        ></div>
        <div
          className="nav_menu_burger_line"
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
