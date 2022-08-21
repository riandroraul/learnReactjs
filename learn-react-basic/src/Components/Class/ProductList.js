import axios from "axios";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import NavbarComp from "../Function/NavbarComp";

class ProductList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
    };
  }

  componentDidMount() {
    axios.get("https://dummyjson.com/products").then((response) => {
      const { products } = response.data;
      this.setState({
        products: products,
      });
    });
  }
  render() {
    return (
      <>
        <NavbarComp />
        <div className="container my-3">
          {this.state.products.map((product, index) => {
            return (
              <div className="d-inline">
                <div
                  className="card d-inline-block mx-3 my-4"
                  style={{ width: "20rem" }}
                >
                  <img
                    src={product.thumbnail}
                    className="card-img-top"
                    alt=""
                  />
                  <div className="card-body">
                    <h5 className="card-title">{product.title}</h5>
                    <p className="card-text">{product.description}</p>
                    <p className="card-text">Price: ${product.price}</p>
                    <Link to="/detail" className="btn btn-primary">
                      detail
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </>
    );
  }
}

export default ProductList;
