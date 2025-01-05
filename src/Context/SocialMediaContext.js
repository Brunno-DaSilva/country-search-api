import React, { createContext, useState } from "react";

// Create a new context
const SocialMediaIconsContext = createContext({});

// Create a provider component for the new context
export const SocialMediaIconsContextProvider = ({ children }) => {
  // Define your array of objects
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

  // State to manage the array of objects
  const [socialMediaIconsData, setSocialMediaIconsData] =
    useState(SOCIAL_MEDIA_DATA);

  // Function to update the array of objects
  const updateSocialMediaIconsData = (newData) => {
    setSocialMediaIconsData(newData);
  };

  return (
    <SocialMediaIconsContext.Provider
      value={{ socialMediaIconsData, updateSocialMediaIconsData }}
    >
      {children}
    </SocialMediaIconsContext.Provider>
  );
};

export default SocialMediaIconsContext;
