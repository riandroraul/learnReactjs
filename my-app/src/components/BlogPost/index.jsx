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
  };

  handleDelete = (data) => {
    axios.delete(`http://localhost:3004/posts/${data}`).then((res) => {
      this.getAllPosts();
    });
  };

  getAllPosts = () => {
    axios.get("http://localhost:3004/posts").then((res) => {
      this.setState({
        posts: res.data,
      });
    });
  };

  handleSave = (event) => {
    const newFormSave = { ...this.state.formSave };
    newFormSave[event.target.name] = event.target.value;
    let timestamp = new Date().getTime();
    newFormSave.id = timestamp;
    // console.log(newFormSave);
    // console.log(this.state.formSave.event.target.name);
    this.setState(
      {
        formSave: newFormSave,
      },
      () => {
        console.log("value object form save", this.state.formSave);
      }
    );
  };

  onSave = () => {
    console.log(this.state.formSave);
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
            onChange={this.handleSave}
            placeholder="add title"
          />
          <label htmlFor="body">Content</label>
          <textarea
            type="text"
            name="body"
            placeholder="add content"
            cols="30"
            rows="10"
            onChange={this.handleSave}
          ></textarea>
          <button className="btn-submit" onClick={this.onSave}>
            Save
          </button>
        </div>
        {this.state.posts.map((post) => {
          return (
            <Post
              key={post.id}
              data={post}
              remove={this.handleDelete}
              image="https://placeimg.com/200/150/tech"
            />
          );
        })}
      </Fragment>
    );
  }
}

export default BlogPost;
