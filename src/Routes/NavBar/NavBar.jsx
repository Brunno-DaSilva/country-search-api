import React, { useState, Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import DataContext from "../../Context/DataContext";
import SocialMediaIcons from "../../Components/SocialMediaIcons/SocialMediaIcons";
import { faMoon, faSpinner, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./NavBar.css";

const NavBar = () => {
  const [isLightTheme, setIsLightTheme] = useState(true);
  const { socialMediaIcons } = useContext(DataContext);

  const lightThemeHandler = () => {
    setIsLightTheme((prevMode) => !prevMode);
  };

  return (
    <Fragment>
      <div className="nav_bar">
        <div className="nav__container">
          <Link className="nav__logo" to="/">
            <p>
              Where In the World?{" "}
              <FontAwesomeIcon className="spinner" icon={faSpinner} />
            </p>
          </Link>
          <ul className="navbar__icons">
            {socialMediaIcons.map(({ id, name, url, icon }) => {
              return (
                <SocialMediaIcons id={id} name={name} url={url} icon={icon} />
              );
            })}
          </ul>
          <div className="nav__dark_mode">
            <button
              onClick={() => {
                lightThemeHandler();
              }}
            >
              {isLightTheme ? (
                <Fragment>
                  <FontAwesomeIcon icon={faMoon} />
                  <span>Dark Mode</span>
                </Fragment>
              ) : (
                <Fragment>
                  <FontAwesomeIcon icon={faSun} />
                  <span>Light Mode</span>
                </Fragment>
              )}
            </button>
          </div>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default NavBar;
