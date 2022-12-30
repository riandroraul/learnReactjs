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

const updateBlog = (data, id) => Put("posts", false, data, id);

// delete
const deleteBlog = (id) => Delete("posts", false, id);

const API = {
  getNewsBlog,
  getComments,
  postNewBlog,
  updateBlog,
  deleteBlog,
};

export default API;
