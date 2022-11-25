import React, { Component } from "react";
import keyboard from "../../Assets/img/Product/keyboard.jpg";
import Counter from "./Counter";

class CardProduct extends Component {
  render() {
    return (
      <div className="card">
        <div className="img-thumb-prod">
          <img src={keyboard} alt="" />
        </div>
        <p className="product-title">Keyboard Gaming</p>
        <p className="product-price">Rp. 200.000</p>
        <Counter
          onCounterChange={(value) => this.props.onCounterChange(value)}
        />
      </div>
    );
  }
}

export default CardProduct;
