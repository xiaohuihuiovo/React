import React, { Component } from 'react'
import './OrderItem.css'

class OrderItem extends Component {
  constructor(props) {
    super(props)
    this.state = {
      editing: false,
      check: false,
      stars: props.data.stars || 0,
      comment: props.data.comment || '',
    }
  }
  render() {
    const {
      product,
      shop,
      price,
      picture,
      ifCommented,
      content,
    } = this.props.data
    return (
      <div className="OrderItem">
        <div className="OrderItem-picContent">
          <img className="OrderItem-pic" src={picture} />
        </div>
        <div className="OrderItem-content">
          <div className="details">
            {ifCommented ? (
              <a onClick={this.handleDetail}>评价详情</a>
            ) : (
              <a></a>
            )}
          </div>
          {/* <div className="OrderItem-header"> */}
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
                <button
                  className="OrderItem-btn OrderItem-btn--red"
                  onClick={this.handleEditArea}
                >
                  评价
                </button>
              )}
            </div>
          </div>
        </div>
        {this.state.editing ? this.renderEditArea() : null}
        {this.state.check ? this.renderContent() : null}
      </div>
    )
  }

  renderEditArea() {
    return (
      <div className="OrderItem-commentContainer">
        <textarea
          onChange={this.handleCommentChange}
          value={this.state.comment}
          className="OrderItem-comment"
          autoFocus
        />
        {this.renderStars()}
        <button
          className="OrderItem-btns OrderItem-btn--red"
          onClick={this.handleSubmit}
        >
          提交
        </button>
        <button
          className="OrderItem-btns OrderItem-btn--gray"
          onClick={this.handleCancel}
        >
          取消
        </button>
      </div>
    )
  }
  renderStars() {
    const { stars } = this.state
    return (
      <div>
        {[1, 2, 3, 4, 5].map((item, index) => {
          const lightClass = stars >= item ? 'OrderItem-star-light' : ''
          return (
            <span
              key={index}
              className={'OrderItem-star' + lightClass}
              onClick={this.handleClickStars.bind(this, item)}
            >
              ★
            </span>
          )
        })}
      </div>
    )
  }
  // renderContent() {
  //   return (
  //     <div className="OrderItem-commentContainer">
  //       <textarea
  //         onChange={this.handleCommentChange}
  //         value={this.state.comment + this.props.data.content}
  //         className="OrderItem-comment"
  //       />
  //       {this.renderStars()}
  //     </div>
  //   )
  // }
  renderContent() {
    return (
      <div className="OrderItem-Container">
        {/* <textarea
          onChange={this.handleCommentChange}
          value={this.state.comment + this.props.data.content}
          className="OrderItem-comment"
        /> */}
        {/* {this.renderStars()} */}
        <h5>内容：{this.state.comment + this.props.data.content}</h5>
        <h6>您给予的评价是：{this.props.data.stars}颗星</h6>
        <button
          className="OrderItem-btn OrderItem-close "
          onClick={this.handleClose}
        >
          收起
        </button>
      </div>
    )
  }
  handleEditArea = () => {
    this.setState({
      editing: true,
    })
  }
  handleDetail = () => {
    this.setState({
      check: true,
    })
  }
  handleCommentChange = (e) => {
    this.setState({
      comment: e.target.value,
    })
  }
  handleClickStars = (stars) => {
    this.setState({
      stars: stars,
    })
  }
  handleCancel = () => {
    this.setState({
      editing: false,
      stars: this.props.data.stars || 0,
      comment: this.props.data.comment || '',
    })
  }
  handleSubmit = () => {
    const { id } = this.props.data
    const { comment, stars } = this.state
    this.setState({
      editing: false,
    })
    if (comment.length <= 0) {
      alert('请输入评价内容')
      return
    }
    this.props.onSubmit(id, comment, stars)
    console.log('您输入的内容是：' + comment)
    console.log('您给的星星是：' + stars + '颗')
  }
  handleClose = () => {
    this.setState({
      check: false,
    })
  }
}

export default OrderItem
