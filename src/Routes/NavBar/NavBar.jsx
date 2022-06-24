import React, { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";

const NavBar = () => {
  return (
    <Fragment>
      <div className="NavBar">
        <Link className="nav__logo" to="/">
          <p>Where In the World? 🌎</p>
        </Link>
        <div className="nav__links_container">
          <Link className="nav__link" to="/details">
            Details
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default NavBar;
