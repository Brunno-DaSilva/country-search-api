import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import DataContext from "../../Context/DataContext";
import "./Details.css";

const Details = () => {
  // const API_URL_DATA = `https://restcountries.com/v3.1/all`;
  const { countriesData } = useContext(DataContext);
  const { countryId } = useParams();

  const country = countriesData.find((data) => {
    let mutatedName = data.name.common.toLowerCase().replace(/\s+/g, "-");
    return mutatedName === countryId;
  });

  const {
    population,
    region,
    subregion,
    capital,
    flags,
    name,
    tld,
    currencies,
    languages,
  } = country;
  const nativeName =
    name.nativeName[Object.keys(country.name.nativeName)[0]].common;
  const topLevelDomain = tld[0];

  const currenciesData = Object.keys(currencies)
    .map((currency) => currencies[currency].name)
    .join(", ");

  const languagesData = Object.keys(languages)
    .map((key) => languages[key])
    .join(", ");

  console.log("languagesData => ", languagesData);

  return (
    <div className="details">
      {countriesData === undefined ? (
        <div>
          <h2>ERROR</h2>
          <Link to="/" className="details__button_container--btn">
            <FontAwesomeIcon icon={faArrowLeftLong} />
            <span>Back</span>
          </Link>
        </div>
      ) : (
        <div className="details__wrapper">
          <div className="details__button_container">
            <Link to="/" className="details__button_container--btn">
              <FontAwesomeIcon icon={faArrowLeftLong} />
              <span>Back</span>
            </Link>
          </div>
          <div className="details__info">
            <div className="details__left_side">
              <div className="details__left_side__img">
                <div
                  style={{
                    backgroundImage: `url(${flags.png})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "contain",
                  }}
                  className="details__left_side__img"
                ></div>
              </div>
            </div>

            <div className="details__right_side">
              <div className="details__bottom__title">
                <h3>{name.common}</h3>
              </div>

              <div className="details__bottom__description">
                <div className="details__bottom__description_left">
                  <p>
                    Native Name: <span>{nativeName}</span>
                  </p>
                  <p>
                    Population: <span>{population}</span>
                  </p>
                  <p>
                    Region: <span>{region}</span>{" "}
                  </p>
                  <p>
                    Sub Region: <span>{subregion}</span>{" "}
                  </p>
                  <p>
                    Capital: <span>{capital}</span>{" "}
                  </p>
                </div>

                <div className="details__bottom__description_right">
                  <p>
                    Top Level Domain: <span>{topLevelDomain}</span>
                  </p>
                  <p>
                    Currencies: <span>{currenciesData}</span>
                  </p>
                  <p>
                    Languages: <span>{languagesData}</span>{" "}
                  </p>
                </div>
              </div>
              <div className="details__bottom__border_countries">
                <div className="border_countries__title">
                  <h4>Border Countries:</h4>
                </div>
                <div className="border_countries__countries">
                  <p>{capital}</p>
                  <p>{capital}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Details;
