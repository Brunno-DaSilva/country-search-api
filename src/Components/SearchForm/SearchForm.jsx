import React from "react";

import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./SearchForm.css";
const SearchForm = () => {
  return (
    <div className="search__container">
      <div className="search__wrapper">
        <div className="search__icon">
          <FontAwesomeIcon icon={faSearch} />
        </div>
        <div className="search__input">
          <input type="text" placeholder="Search for a country" />
        </div>
      </div>
    </div>
  );
};

export default SearchForm;
