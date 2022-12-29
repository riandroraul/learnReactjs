import axios from "axios";

const base_url = "http://localhost:3004";

const Get = (path) => {
  const promise = new Promise((resolve, reject) => {
    axios.get(`${base_url}/${path}`).then(
      (res) => {
        resolve(res.data);
      },
      (err) => {
        reject(err);
      }
    );
  });
};
