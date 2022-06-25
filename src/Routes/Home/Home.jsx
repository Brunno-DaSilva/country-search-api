import React from "react";
import { Outlet } from "react-router-dom";
import FormContainer from "../../Components/Form/FormContainer";
import "./Home.css";

const Home = () => {
  return (
    <div className="home__container">
      <Outlet />
      <div>
        <FormContainer />
      </div>
    </div>
  );
};

export default Home;
