import React, { Component } from 'react'
import './OrderList.css'
import OrderItem from '../OrderItem'

class OrderList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [],
    }
  }
  componentDidMount() {
    fetch('/mock/order.json')
      .then((res) => {
        if (res.ok) {
          res.json().then((data) => {
            this.setState({
              data,
            })
          })
        }
      })

      .catch()
  }
  render() {
    return (
      <div>
        {this.state.data.map((item) => {
          return (
            <OrderItem
              key={item.id}
              data={item}
              onSubmit={this.handleSubmitComment}
            />
          )
        })}
      </div>
    )
  }
  handleSubmitComment = (id, comment, stars) => {
    const newData = this.state.data.map((item) => {
      return item.id == id
        ? {
            ...item,
            comment,
            stars,
            ifCommented: true,
          }
        : item
    })
    this.setState({
      data: newData,
    })
  }
}

export default OrderList
