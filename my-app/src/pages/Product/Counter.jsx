// import { type } from "@testing-library/user-event/dist/type";
import React, { Component } from "react";
import { GlobalConsumer } from "../../context/context";
// import { connect } from "react-redux";
// import actionType from "../../redux/reducer/globalActionType";

class Counter extends Component {
  // handleCounterChange = (newValue) => {
  //   this.props.onCounterChange(newValue);
  // };

  // btnPlus = () => {
  //   this.setState({ order: this.state.order + 1 }, () => {
  //     this.handleCounterChange(this.state.order);
  //   });
  // };

  // btnMinus = () => {
  //   if (this.state.order > 0) {
  //     this.setState({ order: this.state.order - 1 }, () =>
  //       this.handleCounterChange(this.state.order)
  //     );
  //   }
  // };

  render() {
    // console.log(RootContext);
    // console.log(this.props);
    return (
      <div className="counter">
        <button
          className="minus"
          onClick={() => this.props.dispatch({ type: "MINUS_ORDER" })}
        >
          -
        </button>
        <input
          type="text"
          readOnly={true}
          value={this.props.state.totalOrder}
        />
        <button
          className="plus"
          onClick={() => this.props.dispatch({ type: "PLUS_ORDER" })}
        >
          +
        </button>
      </div>
    );
  }
}

// const mapStateToProps = (state) => {
//   return {
//     order: state.totalOrder,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     handlePlus: () => dispatch({ type: actionType.PLUS_ORDER }),
//     handleMinus: () => dispatch({ type: actionType.MINUS_ORDER }),
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Counter);
export default GlobalConsumer(Counter);
