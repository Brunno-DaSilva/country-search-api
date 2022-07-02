import React from "react";
import Dropdown from "../Dropdown/Dropdown";
import "./FilterForm.css";

const FilterForm = () => {
  return (
    <div className="filter__container">
      <div className="filter__wrapper">
        <div className="filter__select" id="regions" name="regions">
          <Dropdown />
        </div>
      </div>
    </div>
  );
};

export default FilterForm;
