import React from "react";
import { Outlet } from "react-router-dom";

import "./Home.css";

const Home = () => {
  return (
    <div>
      <Outlet />
      <div>
        <h1>Home Components</h1>
      </div>
    </div>
  );
};

export default Home;
