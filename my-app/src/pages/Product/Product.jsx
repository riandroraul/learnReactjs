import React, { Component, Fragment } from 'react'
import logo from '../../Assets/img/Product/Logo.jpg'
import '../../Assets/css/product.css'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import CardProduct from './CardProduct'

class Product extends Component {

  state = {
    order: 4,
    name: 'rian'
  }

  handleCounterChange = (newValue) => {
    this.setState({
      order: newValue
    })
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
        <CardProduct onCounterChange={(value) => this.handleCounterChange(value)} order={this.state.order} />
      </Fragment>
    )
  }
}

export default Product;