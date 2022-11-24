import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../../../Assets/css/detailPost.css";

const DetailPost = () => {
  const [detail, setDetail] = useState({});
  const { postId } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:3004/posts/${postId}`).then((res) => {
      setDetail(res.data);
    });
  }, []);

  console.log(detail);
  return (
    <div>
      <p className="detail-title"> {detail.title} </p>
      <p className="detail-body"> {detail.body} </p>
    </div>
  );
};

export default DetailPost;
