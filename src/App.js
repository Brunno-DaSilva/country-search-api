import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./Routes/Home/Home.jsx";
import Details from "./Routes/Details/Details.jsx";

import NavBar from "./Routes/NavBar/NavBar.jsx";

import "./App.css";

const URL_DATA = `https://restcountries.com/v3.1/all`;

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route index element={<Home />} />
          <Route path="details" element={<Details />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
