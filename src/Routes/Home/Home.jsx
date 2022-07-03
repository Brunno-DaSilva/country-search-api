import React from "react";
import FormContainer from "../../Components/Form/FormContainer";

import { Outlet, useNavigate, Link } from "react-router-dom";
import { useContext } from "react";
import DataContext from "../../Context/DataContext";

import "./Home.css";

const Home = () => {
  const { countriesData, filterCountries, filterByRegion } =
    useContext(DataContext);

  const navigate = useNavigate();

  const filterOrCountries =
    filterCountries.length >= 1 ? filterCountries : countriesData;

  return (
    <div className="home__container">
      <Outlet />
      <div className="home__form">
        <FormContainer />
      </div>
      <div className="home__countries">
        <div className="countries__cards_wrapper">
          {filterOrCountries.map(
            ({ population, region, capital, name, flags }, index) => {
              let mutatedName = name.common.toLowerCase().replace(/\s+/g, "-");

              return (
                <div
                  onClick={() => {
                    navigate(`/details/${mutatedName}`);
                  }}
                  key={mutatedName}
                  className="home__countries_card"
                >
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
              );
            }
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
