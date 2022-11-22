import React, { Component } from "react";
import keyboard from "../../Assets/img/Product/keyboard.jpg";

class CardProduct extends Component {
  state = {
    order: 4,
    name: "rian",
  };

  handleCounterChange = (newValue) => {
    this.props.onCounterChange(newValue);
  };

  btnPlus = () => {
    this.setState({ order: this.state.order + 1 }, () => {
      this.handleCounterChange(this.state.order);
    });
  };

  btnMinus = () => {
    if (this.state.order > 0) {
      this.setState({ order: this.state.order - 1 }, () =>
        this.handleCounterChange(this.state.order)
      );
    }
  };
  render() {
    return (
      <div className="card">
        <div className="img-thumb-prod">
          <img src={keyboard} alt="" />
        </div>
        <p className="product-title">Keyboard Gaming</p>
        <p className="product-price">Rp. 200.000</p>
        <div className="counter">
          <button className="minus" onClick={this.btnMinus}>
            -
          </button>
          <input type="text" value={this.state.order} />
          <button className="plus" onClick={this.btnPlus}>
            +
          </button>
        </div>
      </div>
    );
  }
}

export default CardProduct;
