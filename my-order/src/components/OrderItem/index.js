import React, { Component } from 'react'
import './OrderItem.css'

class OrderItem extends Component {
  render() {
    const { product, shop, price, picture, ifCommented } = this.props.data
    return (
      <div className="OrderItem">
        <div className="OrderItem-picContent">
          <img className="OrderItem-pic" src={picture} />
        </div>
        <div className="OrderItem-content">
          <div className="OrderItem-product">{product}</div>
          <div className="OrderItem-shop">{shop}</div>
          <div className="OrderItem-detail">
            <div className="OrderItem-price">￥{price}</div>
            <div>
              {ifCommented ? (
                <button className="OrderItem-btn OrderItem-btn--gray ">
                  已评价
                </button>
              ) : (
                <button className="OrderItem-btn OrderItem-btn--red ">
                  评价
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default OrderItem
