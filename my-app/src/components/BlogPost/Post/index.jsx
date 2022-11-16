import React from "react";

const Post = ({ data: { title, body, id }, image, remove }) => {
  // console.log(props);
  return (
    <div className="post">
      <div className="img-thumb">
        <img src={image} alt="" />
      </div>
      <div className="content">
        <p className="title">{title}</p>
        <div className="desc">{body}</div>
        <button className="btn-remove" onClick={() => remove(id)}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default Post;
