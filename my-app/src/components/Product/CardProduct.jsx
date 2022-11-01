import React from 'react'

const CardProduct = ({keyboard, order}) => {
  return (
    <div className='card'>
        <div className="img-thumb-prod">
          <img src={keyboard} alt="" />
        </div>
        <p className="product-title">Keyboard Gaming</p>
        <p className="product-price">Rp. 30.000</p>
        <div className="counter">
          <button className="minus" onClick={this.btnMinus}>-</button>
          <input type="text" value={this.state.order} />
          <button className="plus" onClick={this.btnPlus}>+</button>
        </div>
      </div>
  )
}

export default CardProduct;