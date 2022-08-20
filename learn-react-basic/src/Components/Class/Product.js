import React, { Component } from "react";
import "../Assets/css/product.css";

class Product extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nama: this.props.nama,
      harga: this.props.harga,
      stock: this.props.stock,
      sub: "Beli",
      status: "Tersedia",
      disabled: false,
    };
  }

  btnBeli = () => {
    this.setState({ stock: this.state.stock - 1 });
    if (this.state.stock === 1) {
      this.setState({
        status: "Habis",
        disabled: true,
      });
    }
  };

  render() {
    return (
      <div className="box-stock">
        <h2>{this.props.nama}</h2>
        <img src={this.props.gambar} alt="Macbook Pro" />
        <p>{this.props.harga}</p>
        <p>{this.state.stock}</p>
        <button
          className="btn-beli"
          onClick={this.btnBeli}
          disabled={this.state.disabled}
        >
          {this.state.sub}
        </button>
        <p>{this.state.status}</p>
      </div>
    );
  }
}

export default Product;
