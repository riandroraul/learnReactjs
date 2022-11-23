import React from "react";
import "../../Assets/css/youtube.css";

const Youtube = (props) => {
  return (
    <div className="youtube-wrapper">
      <div className="img-thumb">
        <img src={props.image} alt="" />
        <p className="time">{props.time}</p>
      </div>
      <p className="title">{props.title}</p>
      <p className="desc">{props.desc}</p>
    </div>
  );
};

export default Youtube;
