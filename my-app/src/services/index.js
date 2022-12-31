import Delete from "./Delete";
import Get from "./Get";
import Post from "./Post";
import Put from "./Put";

// post
const postNewBlog = (data) => Post("posts", false, data);

// get
const getNewsBlog = () => Get("posts?_sort=id&_order=desc", false);
const getComments = () => Get("comments", true);

// update
const updateBlog = (data, id) => Put(`posts/${id}`, false, data);

// delete
const deleteBlog = (id) => Delete(`posts/${id}`, false);

const API = {
  getNewsBlog,
  getComments,
  postNewBlog,
  updateBlog,
  deleteBlog,
};

export default API;
