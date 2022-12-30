import axios from "axios";
import { base_url, online_url } from "./config";

const Delete = (path, root, id) => {
  const promise = new Promise((resolve, reject) => {
    axios.delete(`${root ? online_url : base_url}/${path}/${id}`).then(
      (res) => {
        resolve(res.data);
      },
      (err) => reject(err)
    );
  });
  return promise;
};

export default Delete;
