import React, { Component, Fragment } from 'react'
import keyboard from '../../Assets/img/Product/keyboard.jpg'
import logo from '../../Assets/img/Product/Logo.jpg'
import '../../Assets/css/product.css'
import { faS, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Product extends Component {
  render() {
    return (
      <Fragment>
        <div className="header">
          <div className="logo">
            <img src={logo} alt="" />
          </div>
          <div className="trolley">
             <FontAwesomeIcon icon={faShoppingCart} />
            <div className="count">3</div>
          </div>
        </div>
      <div className='card'>
        <div className="img-thumb-prod">
          <img src={keyboard} alt="" />
        </div>
        <p className="product-title">Keyboard Gaming</p>
        <p className="product-price">Rp. 30.000</p>
        <div className="counter">
          <button className="minus">-</button>
          <input type="text" value={3} />
          <button className="plus">+</button>
        </div>
      </div>
      </Fragment>
    )
  }
}

export default Product;