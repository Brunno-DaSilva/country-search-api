import React from "react";

import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useContext } from "react";
import DataContext from "../../Context/DataContext.js";

import "./SearchForm.css";

const SearchForm = () => {
  const { handleFilterCountries } = useContext(DataContext);

  return (
    <div className="search__container">
      <div className="search__wrapper">
        <div className="search__icon">
          <FontAwesomeIcon icon={faSearch} />
        </div>
        <div className="search__input">
          <input
            type="search"
            placeholder="Search for a country"
            onChange={(e) => {
              handleFilterCountries(e);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default SearchForm;
