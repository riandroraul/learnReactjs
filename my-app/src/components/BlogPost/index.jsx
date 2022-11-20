import axios from "axios";
import React, { Component, Fragment } from "react";
import "../../Assets/css/blogpost.css";
import Post from "./Post";

class BlogPost extends Component {
  state = {
    posts: [],
    formSave: {
      id: 1,
      title: "",
      userId: 1,
      body: "",
    },
    isUpdate: false,
  };

  handleDelete = (data) => {
    axios.delete(`http://localhost:3004/posts/${data}`).then((res) => {
      this.getAllPosts();
    });
  };

  getAllPosts = () => {
    axios
      .get("http://localhost:3004/posts?_sort=id&_order=desc")
      .then((res) => {
        this.setState({
          posts: res.data,
        });
      });
  };

  handleInputChange = (event) => {
    const newFormSave = { ...this.state.formSave };
    newFormSave[event.target.name] = event.target.value;
    let timestamp = new Date().getTime();
    if (!this.state.isUpdate) {
      newFormSave.id = timestamp;
    }
    // console.log(newFormSave);
    // console.log(this.state.formSave.event.target.name);
    this.setState(
      {
        formSave: newFormSave,
      }
      // () => {
      //   console.log("value object form save", this.state.formSave);
      // }
    );
  };

  handleUpdate = (data) => {
    console.log(data);
    this.setState({
      formSave: data,
      isUpdate: true,
    });
  };

  saveToApiPost = () => {
    axios
      .post("http://localhost:3004/posts", this.state.formSave)
      .then((res) => {
        console.log("berhasil disimpan", res);
      });
  };

  updateToApiPost = () => {
    axios
      .put(
        `http://localhost:3004/posts/${this.state.formSave.id}`,
        this.state.formSave
      )
      .then((res) => {
        console.log("berhasil diubah", res);
        this.getAllPosts();
      });
  };

  onSubmit = () => {
    if (this.state.isUpdate) {
      this.updateToApiPost();
    } else {
      this.saveToApiPost();
    }
    // console.log(this.state.formSave);
  };

  componentDidMount() {
    this.getAllPosts();
  }

  render() {
    return (
      <Fragment>
        <div className="section-title">Blog Post</div>
        <div className="form-add-post">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            value={this.state.formSave.title}
            onChange={this.handleInputChange}
            placeholder="add title"
          />
          <label htmlFor="body">Content</label>
          <textarea
            type="text"
            name="body"
            placeholder="add content"
            cols="30"
            rows="10"
            onChange={this.handleInputChange}
            value={this.state.formSave.body}
          ></textarea>
          <button className="btn-submit" onClick={this.onSubmit}>
            Save
          </button>
        </div>
        {this.state.posts.map((post) => {
          return (
            <Post
              key={post.id}
              data={post}
              remove={this.handleDelete}
              update={this.handleUpdate}
              image="https://placeimg.com/200/150/tech"
            />
          );
        })}
      </Fragment>
    );
  }
}

export default BlogPost;
