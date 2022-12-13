import React, { Component } from "react";
import { RootContext } from "../../components/Home/Home";
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
    console.log(RootContext);
    return (
      <RootContext.Consumer>
        {(value) => {
          console.log(value);
          return (
            <div className="counter">
              <button className="minus" onClick={() => null}>
                -
              </button>
              <input type="text" readOnly={true} value={value.totalOrder} />
              <button className="plus" onClick={() => null}>
                +
              </button>
            </div>
          );
        }}
      </RootContext.Consumer>
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
export default Counter;
