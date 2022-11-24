import React from "react";
import { useNavigate } from "react-router-dom";

const Post = ({ data, image, remove, update, goDetail }) => {
  // console.log(props);

  const navigate = useNavigate();
  const handleDetail = (id) => {
    navigate(`/detail-post/${id}`);
  };

  return (
    <div className="post">
      <div className="img-thumb">
        <img src={image} alt="" />
      </div>
      <div className="content">
        <p className="title" onClick={() => handleDetail(data.id)}>
          {data.title}
        </p>
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
