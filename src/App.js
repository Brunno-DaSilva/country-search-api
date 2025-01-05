import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./Routes/Home/Home.jsx";
import Details from "./Routes/Details/Details.jsx";
import Error from "./Routes/Error/Error.jsx";
import NavBar from "./Routes/NavBar/NavBar.jsx";
import { DataProvider } from "./Context/DataContext.js";

import "./App.css";

function App() {
  return (
    <div className="app">
      <DataProvider>
        <Routes>
          <Route path="/" element={<NavBar />}>
            <Route index element={<Home />} />
            <Route path="details/:countryId" element={<Details />} />
            <Route path="*" element={<Error />} />
          </Route>
        </Routes>
      </DataProvider>
    </div>
  );
}

export default App;
