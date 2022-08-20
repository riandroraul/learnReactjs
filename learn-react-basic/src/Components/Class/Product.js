import React, { Component } from "react";

class Product extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="box-stock">
        <h2>Nama Produk</h2>
        <img src="" alt="" />
        <p>harga</p>
        <p>stok</p>
        <button className="btn-beli">beli</button>
        <p>status</p>
      </div>
    );
  }
}

export default Product;
