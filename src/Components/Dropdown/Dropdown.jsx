import React, { useState, useRef, useEffect } from "react";
import ChevronDown from "../../assets/chevron-down.svg";
import ChevronUp from "../../assets/chevron-up.svg";
import { useContext } from "react";
import DataContext from "../../Context/DataContext.js";

import "./Dropdown.css";
const FILTER_REGIONS = [
  {
    id: 1,
    name: "Africa",
    value: "africa",
  },
  {
    id: 2,
    name: "Americas",
    value: "americas",
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
  const { handleFilterByRegion } = useContext(DataContext);
  let dropdownRef = useRef(null);
  const [isActive, setIsActive] = useState(false);

  const handleIsActive = () => {
    setIsActive((prevMode) => !prevMode);
  };

  useEffect(() => {
    const pageClickEvent = (e) => {
      if (
        dropdownRef.current !== null &&
        !dropdownRef.current.contains(e.target)
      ) {
        setIsActive((prevMode) => !prevMode);
      }
    };
    // If the item is active (ie open) then listen for clicks
    if (isActive) {
      window.addEventListener("click", pageClickEvent);
    }

    return () => {
      window.removeEventListener("click", pageClickEvent);
    };
  }, [isActive]);

  return (
    <div className="dropdown" ref={dropdownRef}>
      <div className="dropdown__button">
        <button
          onClick={() => {
            handleIsActive();
          }}
        >
          <p>Filter By Region</p>{" "}
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
      <div className={`dropdown__list ${isActive ? "active" : "inactive"}`}>
        <ul>
          {FILTER_REGIONS.map(({ id, value, name }) => {
            return (
              <li
                key={id}
                id={id}
                onClick={(e) => handleFilterByRegion(e)}
                value={value}
              >
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
