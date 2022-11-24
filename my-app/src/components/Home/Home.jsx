import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import YoutubeWrapper from "../../pages/Youtube";
import Product from "../../pages/Product/Product";
import BlogPost from "../../pages/BlogPost";
import Navbar from "../Navbar";
import DetailPost from "../../pages/BlogPost/DetailPost";

const Home = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<BlogPost />} />
        <Route path="/youtube" element={<YoutubeWrapper />} />
        <Route path="/product" element={<Product />} />
        <Route path="/detail-post/:postId" element={<DetailPost />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Home;
