import React, { Fragment } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import BlogPost from "../BlogPost";
import Product from "../Product/Product";
import YoutubeWrapper from "../Youtube";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <BlogPost />,
    },
    {
      path: "/youtube",
      element: <YoutubeWrapper />,
    },
    {
      path: "/product",
      element: <Product />,
    },
  ]
  // createRoutesFromElements(
  //   <Route path="/youtube" element={<YoutubeWrapper />} />
  // )
);

const Home = () => {
  return (
    <Fragment>
      <RouterProvider router={router} />
    </Fragment>
  );
};

export default Home;
