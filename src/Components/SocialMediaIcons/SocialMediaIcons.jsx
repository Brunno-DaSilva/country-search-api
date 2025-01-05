import React from "react";

import "./SocialMediaIcons.css";

const SocialMediaIcons = ({ id, name, url, icon }) => {
  return (
    <>
      <li key={id} id={id}>
        <a href={url} target="_blank" rel="noreferrer">
          <img src={icon} alt={name} />
        </a>
      </li>
    </>
  );
};

export default SocialMediaIcons;
