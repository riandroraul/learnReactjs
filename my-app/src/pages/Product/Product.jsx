import React, { Component, Fragment } from "react";
import logo from "../../Assets/img/Product/Logo.jpg";
import "../../Assets/css/product.css";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CardProduct from "./CardProduct";
import { RootContext } from "../../components/Home/Home";
// import { connect } from "react-redux";

class Product extends Component {
  // state = {
  //   order: 4,
  //   name: "rian",
  // };

  // handleCounterChange = (newValue) => {
  //   this.setState({
  //     order: newValue,
  //   });
  // };

  render() {
    return (
      <RootContext.Consumer>
        {(value) => {
          return (
            <Fragment>
              <div className="header">
                <div className="logo">
                  <img src={logo} alt="" />
                </div>
                <div className="trolley">
                  <FontAwesomeIcon icon={faShoppingCart} />
                  <div className="count">{value.totalOrder}</div>
                </div>
              </div>
              <CardProduct />
            </Fragment>
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

// export default connect(mapStateToProps)(Product);
export default Product;
