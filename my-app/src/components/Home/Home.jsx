import React, { Component, createContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import YoutubeWrapper from "../../pages/Youtube";
import Product from "../../pages/Product/Product";
import BlogPost from "../../pages/BlogPost";
import Navbar from "../Navbar";
import DetailPost from "../../pages/BlogPost/DetailPost";
import ProtectedRoute from "../../Routes/Protected";
import LifeCycleComp from "../LifeCycleComp";

export const RootContext = createContext();
const Provider = RootContext.Provider;

class Home extends Component {
  state = {
    totalOrder: 2,
  };

  dispatch = () => {
    this.setState({
      totalOrder: 5,
    });
  };

  render() {
    return (
      <BrowserRouter>
        <Navbar />
        <Provider value={this.state}>
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
          </Routes>
        </Provider>
      </BrowserRouter>
    );
  }
}

export default Home;
