import axios from "axios";
import { base_url, online_url } from "./config";

// put data
const Put = (path, root, data) => {
  const promise = new Promise((resolve, reject) => {
    axios.put(`${root ? online_url : base_url}/${path}`, data).then(
      (res) => {
        resolve(res.data);
      },
      (err) => reject(err)
    );
  });
  return promise;
  // axios
  //   .put(
  //     `http://localhost:3004/posts/${this.state.formSave.id}`,
  //     this.state.formSave
  //   )
  //   .then((res) => {
  //     console.log("berhasil diubah", res);
  //     this.getAllPosts();
  //   });
};

export default Put;
