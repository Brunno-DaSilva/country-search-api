import React from "react";
import { Outlet } from "react-router-dom";
import FormContainer from "../../Components/Form/FormContainer";
import "./Home.css";

const Home = ({ countriesData }) => {
  return (
    <div className="home__container">
      <Outlet />
      <div className="home__form">
        <FormContainer />
      </div>
      <div className="home__countries">
        <div className="countries__cards_wrapper">
          {countriesData.map(({ population, region, capital, name, flags }) => {
            return (
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
                      capital: <span>{capital}</span>{" "}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
