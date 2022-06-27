import React, { useState, useEffect } from "react";
import { Route, Routes, useParams } from "react-router-dom";

import Home from "./Routes/Home/Home.jsx";
import Details from "./Routes/Details/Details.jsx";
import Error from "./Routes/Error/Error.jsx";
import NavBar from "./Routes/NavBar/NavBar.jsx";

import "./App.css";

function App() {
  const API_URL_DATA = `https://restcountries.com/v3.1/all`;
  const [countriesData, setCountriesData] = useState([]);

  useEffect(() => {
    const localStorageData = window.localStorage.getItem("MY_COUNTRY_API_DATA");
    if (localStorageData !== null)
      setCountriesData(JSON.parse(localStorageData));
  }, []);

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
    window.localStorage.setItem(
      "MY_COUNTRY_API_DATA",
      JSON.stringify(countriesData)
    );
  }, [countriesData]);

  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route index element={<Home countriesData={countriesData} />} />
          <Route
            path="details"
            element={<Details countriesData={countriesData} />}
          />
          <Route
            path="details/:countryId"
            element={<Details countriesData={countriesData} />}
          />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
