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
                <img src={flags.png} alt={name.official} />
                <h1>{name.common}</h1>
                <p>{population} </p>
                <p>{region} </p>
                <p>{capital} </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
