import React from "react";
import NavbarComp from "./Components/Function/NavbarComp";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Components/Function/HomePage";
import AboutComp from "./Components/Function/AboutComp";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/about" element={<AboutComp />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
