import React from "react";

import LinkedInIcon from "../../assets/social-media/linkedin.svg";
import GithubIcon from "../../assets/social-media/github.svg";
import MetaIcon from "../../assets/social-media/meta.svg";
import XIcon from "../../assets/social-media/x.svg";

import "./SocialMediaIcons.css";

const SocialMedia = () => {
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

  return (
    <div className="SocialMedia">
      <ul className="icons">
        {SOCIAL_MEDIA_DATA.map(({ id, name, url, icon }) => {
          return (
            <li key={id} id={id}>
              <a href={url} target="_blank">
                <img src={icon} alt={name} />
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SocialMedia;
