import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Components/Function/HomePage";
import AboutComp from "./Components/Function/AboutComp";
import WrapCard from "./Components/Function/WrapCard";
import DetailComp from "./Components/Function/DetailComp";
import ListUser from "./Components/Class/ListUser";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/about" element={<AboutComp />}></Route>
        <Route path="/card" element={<WrapCard />}></Route>
        <Route path="/detail/:id" element={<DetailComp />}></Route>
        <Route path="/user" element={<ListUser />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
