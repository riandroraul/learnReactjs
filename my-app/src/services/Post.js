import axios from "axios";
import { base_url, online_url } from "./config";

// post data
const Post = (path, root, data) => {
  const promise = new Promise((resolve, reject) => {
    axios.post(`${root ? online_url : base_url}/${path}`, data).then(
      (res) => {
        resolve(res.data);
      },
      (err) => reject(err)
    );
  });
  return promise;
};

export default Post;
