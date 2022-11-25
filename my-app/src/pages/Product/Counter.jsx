import React, { Component } from "react";

class Counter extends Component {
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
    console.log(this.props);
    return (
      <div className="counter">
        <button className="minus" onClick={this.btnMinus}>
          -
        </button>
        <input type="text" readOnly={true} value={this.state.order} />
        <button className="plus" onClick={this.btnPlus}>
          +
        </button>
      </div>
    );
  }
}

export default Counter;
