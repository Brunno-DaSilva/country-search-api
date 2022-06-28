import { createContext, useState, useEffect } from "react";
import { Route, Routes, useParams } from "react-router-dom";

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
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
    <DataContext.Provider
      value={{
        countriesData,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
