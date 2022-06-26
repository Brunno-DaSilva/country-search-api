import React from "react";

import "./FilterForm.css";

const FILTER_REGIONS = [
  {
    id: 1,
    name: "Africa",
    value: "africa",
  },
  {
    id: 2,
    name: "America",
    value: "america",
  },
  {
    id: 3,
    name: "Asia",
    value: "asia",
  },
  {
    id: 4,
    name: "Europe",
    value: "europe",
  },
  {
    id: 5,
    name: "Oceania",
    value: "oceania",
  },
];

const FilterForm = () => {
  return (
    <div className="filter__container">
      <div className="filter__wrapper">
        <select
          className="filter__select"
          id="regions"
          name="regions"
          placeholder="Filter by region"
        >
          <div className="opt-1">
            <option value="placeholder" disabled defaultValue>
              Filter by Region
            </option>
          </div>
          {FILTER_REGIONS.map((region) => {
            return (
              <option id={region.id} value={region.value}>
                {region.name}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
};

export default FilterForm;
