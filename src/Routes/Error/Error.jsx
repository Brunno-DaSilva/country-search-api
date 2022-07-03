import React from "react";
import { Link } from "react-router-dom";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./Error.css";

const Error = () => {
  return (
    <div className="error_container">
      <div className="error_container_title">
        <div>
          <p className="one">4</p>
          <p className="two">0</p>
          <p className="three">4</p>
        </div>
        <h1>Page not Found</h1>
      </div>
      <Link className="error_container_btn" to="/">
        <FontAwesomeIcon icon={faArrowLeftLong} />
        <span>Back</span>
      </Link>
    </div>
  );
};

export default Error;
