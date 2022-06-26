import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./Routes/Home/Home.jsx";
import Details from "./Routes/Details/Details.jsx";

import NavBar from "./Routes/NavBar/NavBar.jsx";

import "./App.css";

function App() {
  const API_URL_DATA = `https://restcountries.com/v3.1/all`;
  const [countriesData, setCountriesData] = useState([]);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch(API_URL_DATA);
        const countriesList = await response.json();

        setCountriesData(countriesList);
      } catch (err) {
        console.log(err.stack);
      }
    };
    fetchCountries();
  }, []);

  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route index element={<Home countriesData={countriesData} />} />
          <Route path="details" element={<Details />}>
            <Route path=":countryId" element={<Details />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
