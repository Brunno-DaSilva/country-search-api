import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./Details.css";

const Details = ({ countriesData }) => {
  const { countryId } = useParams();

  const country = countriesData.find((data) => {
    let mutatedName = data.name.common.toLowerCase().replace(/\s+/g, "-");
    return mutatedName === countryId;
  });

  const { population, region, capital, flags, name } = country;

  return (
    <div className="details">
      <div className="details__wrapper">
        <div className="details__button_container">
          <Link to="/" className="">
            <FontAwesomeIcon icon={faArrowLeftLong} />
            Back Home
          </Link>
        </div>
        <div className="details__info">
          <h1>{countryId}</h1>
          <div className="home__countries_card">
            <div className="card__top">
              <div className="card__top__img">
                <img src={flags.png} alt={name.official} />
              </div>
            </div>

            <div className="card__bottom">
              <div className="card__bottom__title">
                <h3>{name.common}</h3>
              </div>

              <div className="card__bottom__description">
                <p>
                  Population: <span>{population}</span>
                </p>
                <p>
                  Region: <span>{region}</span>{" "}
                </p>
                <p>
                  Capital: <span>{capital}</span>{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
