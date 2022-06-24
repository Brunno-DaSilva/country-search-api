import React, { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";

import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./NavBar.css";
const dark = false;

const NavBar = () => {
  return (
    <Fragment>
      <div className="NavBar">
        <Link className="nav__logo" to="/">
          <p>Where In the World? 🌎</p>
        </Link>
        <div className="nav__dark_mode">
          {dark ? (
            <FontAwesomeIcon icon={faMoon} />
          ) : (
            <FontAwesomeIcon icon={faSun} />
          )}
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default NavBar;
