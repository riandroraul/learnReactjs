import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Fragment>
      <div className="navigation">
        <Link to={"/"}>Home</Link>
        <Link to={"youtube"}>Youtube</Link>
        <Link to={"product"}>Product</Link>
      </div>
    </Fragment>
  );
};

export default Navbar;
