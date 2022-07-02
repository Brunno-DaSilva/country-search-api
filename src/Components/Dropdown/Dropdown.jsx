import React, { useState, useRef } from "react";
import ChevronDown from "../../assets/chevron-down.svg";
import ChevronUp from "../../assets/chevron-up.svg";

import "./Dropdown.css";
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

const Dropdown = () => {
  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useState(false);

  const handleIsActive = () => {
    setIsActive((prevMode) => !prevMode);
  };

  return (
    <div className="dropdown">
      <div className="dropdown__button">
        <button
          onClick={() => {
            handleIsActive();
          }}
        >
          <p> Filter By Region</p>{" "}
          {isActive ? (
            <span>
              <img src={ChevronUp} alt="ChevronUp" />
            </span>
          ) : (
            <span>
              <img src={ChevronDown} alt="ChevronDown" />
            </span>
          )}
        </button>
      </div>
      <div
        ref={dropdownRef}
        className={`dropdown__list ${isActive ? "active" : "inactive"}`}
      >
        <ul>
          {FILTER_REGIONS.map(({ id, value, name }) => {
            return (
              <li key={id} id={id} value={value}>
                {name}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Dropdown;
