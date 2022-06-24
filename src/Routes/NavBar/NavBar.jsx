import React, { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";

import { faMoon, faSpinner, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./NavBar.css";
const dark = false;

const NavBar = () => {
  return (
    <Fragment>
      <div className="NavBar">
        <div className="nav__container">
          <Link className="nav__logo" to="/">
            <p>
              Where In the World?{" "}
              <FontAwesomeIcon className="spinner" icon={faSpinner} />
            </p>
          </Link>
          <div className="nav__dark_mode">
            {dark ? (
              <button>
                <FontAwesomeIcon icon={faSun} />
                <span>Light Mode</span>
              </button>
            ) : (
              <button>
                <FontAwesomeIcon icon={faMoon} />
                <span>Dark Mode</span>
              </button>
            )}
          </div>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default NavBar;
