import axios from "axios";
import { base_url, online_url } from "./config";

// get data
const Get = (path, root) => {
  const promise = new Promise((resolve, reject) => {
    axios.get(`${root ? online_url : base_url}/${path}`).then(
      (res) => {
        resolve(res.data);
      },
      (err) => {
        reject(err);
      }
    );
  });
  return promise;
};

export default Get;
