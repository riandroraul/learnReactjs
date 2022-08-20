import React, { Component } from "react";
import ChildComp from "./ChildComp";

class ParentComp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      stock: 10,
      disabled: false,
    };
  }

  handleBuy = (jumlah) => {
    this.setState({
      stock: this.state.stock - jumlah,
    });
    if (this.state.stock === 1) {
      this.setState({
        disabled: true,
      });
    }
  };

  render() {
    return (
      <div>
        <ChildComp
          stock={this.state.stock}
          fungsi={this.handleBuy.bind(this)}
          disabled={this.state.disabled}
        />
      </div>
    );
  }
}

export default ParentComp;
