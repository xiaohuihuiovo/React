import React, { Component } from 'react'
import { message } from 'antd'

import './TodoItems.css'
class TodoItems extends Component {
  constructor(props) {
    super(props)
    this.handleDel = this.handleDel.bind(this)
  }
  handleDel() {
    const { Delete, index } = this.props
    Delete(index)
    message.success('删除成功！')
    // this.props.Delete(index)
  }
  render() {
    const { content } = this.props
    return (
      <div className="liList" onClick={this.handleDel}>
        {content}
      </div>
    )
  }
}

export default TodoItems
