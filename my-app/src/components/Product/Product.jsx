import React, { Component, Fragment } from 'react'
import keyboard from '../../Assets/img/Product/keyboard.jpg'
import logo from '../../Assets/img/Product/Logo.jpg'
import '../../Assets/css/product.css'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import CardProduct from './CardProduct'

class Product extends Component {

  state = {
    order: 4
  }

  btnPlus = () => {
    this.setState({order: this.state.order + 1})
  }

  btnMinus = () => {
    if(this.state.order > 0){
      this.setState({order: this.state.order - 1})
    }
  }
  render() {
    return (
      <Fragment>
        <div className="header">
          <div className="logo">
            <img src={logo} alt="" />
          </div>
          <div className="trolley">
             <FontAwesomeIcon icon={faShoppingCart} />
            <div className="count">{this.state.order}</div>
          </div>
        </div>
        <CardProduct keyboard={keyboard} order={this.state.order} />
      </Fragment>
    )
  }
}

export default Product;