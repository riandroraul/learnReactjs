import React, { Component } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import YoutubeWrapper from "../../pages/Youtube";
import Product from "../../pages/Product/Product";
import BlogPost from "../../pages/BlogPost";
import Navbar from "../Navbar";
import DetailPost from "../../pages/BlogPost/DetailPost";
import ProtectedRoute from "../../Routes/Protected";
import LifeCycleComp from "../LifeCycleComp";
import GlobalProvider from "../../context/context";
import Hooks from "../../pages/Hooks";

class Home extends Component {
  render() {
    return (
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<BlogPost />} />
          <Route
            path="/youtube"
            element={
              <ProtectedRoute>
                <YoutubeWrapper />
              </ProtectedRoute>
            }
          />
          <Route path="/product" element={<Product />} />
          <Route path="/detail-post/:postId" element={<DetailPost />} />
          <Route path="/lifecycle" element={<LifeCycleComp />} />
          <Route path="/hooks" element={<Hooks />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default GlobalProvider(Home);
