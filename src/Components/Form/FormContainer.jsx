import React from "react";

import SearchForm from "../SearchForm/SearchForm";
import FilterForm from "../FilterForm/FilterForm";

import "./FormContainer.css";

const FormContainer = () => {
  return (
    <div className="form__container">
      <div className="form__wrapper">
        <SearchForm />
        <FilterForm />
      </div>
    </div>
  );
};

export default FormContainer;
