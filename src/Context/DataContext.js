import { createContext, useState, useEffect } from "react";

import LinkedInIcon from "../assets/social-media/linkedin.svg";
import GithubIcon from "../assets/social-media/github.svg";
import MetaIcon from "../assets/social-media/meta.svg";
import XIcon from "../assets/social-media/x.svg";

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  const API_URL_DATA = `https://restcountries.com/v3.1/all`;
  const [countriesData, setCountriesData] = useState([]);
  const [filterCountries, setFilterCountries] = useState([]);
  const [socialMediaIcons, setSocialMediaIcons] = useState([]);

  useEffect(() => {
    // Fetch social media icons data
    const SOCIAL_MEDIA_DATA = [
      {
        id: 1,
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/bruno-dasilva/",
        icon: LinkedInIcon,
      },
      {
        id: 2,
        name: "GitHub",
        url: "https://github.com/Brunno-DaSilva",
        icon: GithubIcon,
      },
      {
        id: 3,
        name: "Meta",
        url: "https://meta.com/Brunno-DaSilva",
        icon: MetaIcon,
      },
      {
        id: 4,
        name: "X",
        url: "https://twitter.com/Bruno_lDasilva",
        icon: XIcon,
      },
    ];

    setSocialMediaIcons(SOCIAL_MEDIA_DATA);
  }, []);

  const handleFilterCountries = (e) => {
    const filteredCountries = countriesData.filter(({ region, name }) => {
      const wordToMatch = e.target.value;
      const regex = new RegExp(wordToMatch, "gi");
      return name.common.match(regex) || region.match(regex);
    });

    setFilterCountries(filteredCountries);
  };

  const handleFilterByRegion = (e) => {
    const filterRegion = countriesData.filter(
      (data) => data.region === e.target.outerText
    );

    if (e.target.outerText === "All") {
      setFilterCountries(countriesData);
    } else {
      setFilterCountries(filterRegion);
    }
  };

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch(API_URL_DATA);

        // Check if the response is successful
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const countriesList = await response.json();

        setCountriesData(countriesList);
        setFilterCountries(countriesList);
      } catch (err) {
        console.error(err.stack);
      }
    };

    fetchCountries();
  }, [API_URL_DATA]);

  return (
    <DataContext.Provider
      value={{
        countriesData,
        filterCountries,
        handleFilterCountries,
        handleFilterByRegion,
        socialMediaIcons,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
