import React from "react";
import { Link } from "react-router-dom";

const CardComp = (props) => {
  return (
    <div className="card d-inline-block m-lg-4" style={{ width: "18rem" }}>
      <img
        src={props.image}
        className="card-img-top p-4"
        alt="..."
        style={{ width: "18rem", height: "300px" }}
      />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.desc}</p>
        <Link
          to={`/detail/${props.id}`}
          state={{
            title: props.title,
            desc: props.desc,
          }}
          className="btn btn-primary"
          disabled
        >
          Detail
        </Link>
      </div>
    </div>
  );
};

export default CardComp;
