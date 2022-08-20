import React, { Component } from "react";

class ChildComp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      disabled: false,
    };
  }

  jumlahBeli = 1;
  render() {
    return (
      <div>
        <h2>Child Component</h2>
        <h3>Stok Produk: {this.props.stock}</h3>
        <button
          disabled={this.props.disabled}
          onClick={() => this.props.fungsi(this.jumlahBeli)}
        >
          Beli
        </button>
      </div>
    );
  }
}

export default ChildComp;
