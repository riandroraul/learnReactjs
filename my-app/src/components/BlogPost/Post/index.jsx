import React from "react";

const Post = ({ data, image, remove, update }) => {
  // console.log(props);
  return (
    <div className="post">
      <div className="img-thumb">
        <img src={image} alt="" />
      </div>
      <div className="content">
        <p className="title">{data.title}</p>
        <div className="desc">{data.body}</div>
        <button className="btn-update" onClick={() => update(data)}>
          Update
        </button>
        <button className="btn-remove" onClick={() => remove(data.id)}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default Post;
