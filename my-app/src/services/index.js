import Get from "./Get";
import Post from "./Post";

// post
const postNewBlog = (data) => Post("posts", false, data);

// get
const getNewsBlog = () => Get("posts?_sort=id&_order=desc", false);
const getComments = () => Get("comments", true);

const API = {
  getNewsBlog,
  getComments,
  postNewBlog,
};

export default API;
