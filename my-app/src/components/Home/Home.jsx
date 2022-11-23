import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import YoutubeWrapper from "../../pages/Youtube";
import Product from "../../pages/Product/Product";
import BlogPost from "../../pages/BlogPost";
import Navbar from "../Navbar";

const Home = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<BlogPost />} />
        <Route path="/youtube" element={<YoutubeWrapper />} />
        <Route path="/product" element={<Product />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Home;
