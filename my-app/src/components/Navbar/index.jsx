import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Fragment>
      <div className="navigation">
        <Link to={"/"}>Home</Link>
        <Link to={"youtube"}>Youtube</Link>
        <Link to={"product"}>Product</Link>
        <Link to={"lifecycle"}>LifeCycleComp</Link>
        <Link to={"hooks"}>Hooks</Link>
      </div>
    </Fragment>
  );
};

export default Navbar;
