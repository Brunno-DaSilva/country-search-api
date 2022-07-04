import React, { useRef, useEffect } from "react";

import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useContext } from "react";
import DataContext from "../../Context/DataContext.js";

import "./SearchForm.css";

const SearchForm = () => {
  const focusRef = useRef();
  const { handleFilterCountries } = useContext(DataContext);

  useEffect(() => {
    focusRef.current.focus();
  }, []);

  return (
    <div className="search__container">
      <div className="search__wrapper">
        <div className="search__icon">
          <FontAwesomeIcon icon={faSearch} />
        </div>
        <div className="search__input">
          <input
            ref={focusRef}
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
