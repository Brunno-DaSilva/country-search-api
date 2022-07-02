import { createContext, useState, useEffect } from "react";
import { Route, Routes, useParams } from "react-router-dom";

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  const API_URL_DATA = `https://restcountries.com/v3.1/all`;
  const [countriesData, setCountriesData] = useState([]);
  const [filterCountries, setFilterCountries] = useState([]);

  const handleFilterCountries = (e) => {
    const filteredCountries = countriesData.filter(({ region, name }) => {
      let wordToMatch = e.target.value;
      const regex = new RegExp(wordToMatch, "gi");
      return name.common.match(regex) || region.match(regex);
    });

    setFilterCountries(filteredCountries);
  };

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
    <DataContext.Provider
      value={{
        countriesData,
        filterCountries,
        handleFilterCountries,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;