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
        {countriesData.map((country) => {
          console.log(country.name);
          return (
            <div>
              <p>{country.population} </p>
              <p>{country.region} </p>
              <p>{country.capital} </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
