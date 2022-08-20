import React from "react";
import "../Assets/css/blog.css";

const Blog = (props) => {
  return (
    <div className="blog-wrap">
      <img src={props.image} alt="test" />
      <p>{props.tanggal}</p>
      <p>{props.judul}</p>
      <p>{props.summary}</p>
    </div>
  );
};

export default Blog;
