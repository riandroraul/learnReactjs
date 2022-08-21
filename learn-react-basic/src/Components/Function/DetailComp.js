import React from "react";
import NavbarComp from "./NavbarComp";
import { useLocation } from "react-router-dom";

const DetailComp = (props) => {
  const location = useLocation();
  console.log(props, " props");
  console.log(location, " useLocation Hook");
  return (
    <>
      <NavbarComp />
      <div className="container">
        <div className="card col-md-8 my-4">
          <div className="card-header">{props.location.state.title}</div>
          <div className="card-body">
            <h5 className="card-title"></h5>
            <p className="card-text"></p>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailComp;
