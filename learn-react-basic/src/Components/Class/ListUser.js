import axios from "axios";
import React, { Component } from "react";
import NavbarComp from "../Function/NavbarComp";

const api = "https://jsonplaceholder.typicode.com/posts";
class ListUser extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
      response: "",
      display: "none",
    };
  }

  componentDidMount() {
    axios.get(api).then((response) => {
      console.log(response.data);
      this.setState({
        users: response.data,
      });
    });
  }

  render() {
    console.log(this.state.users);
    return (
      <>
        <NavbarComp />
        <div className="container">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">No</th>
                <th scope="col">Title</th>
                <th scope="col">Body</th>
              </tr>
            </thead>
            <tbody>
              {this.state.users.map((user) => {
                return (
                  <tr>
                    <th scope="row">{user.id}</th>
                    <td>{user.title}</td>
                    <td>{user.body}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </>
    );
  }
}

export default ListUser;
