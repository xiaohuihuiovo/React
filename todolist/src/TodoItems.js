import React, { Component } from 'react'

class TodoItems extends Component {
  constructor(props) {
    super(props)
    this.handleDel = this.handleDel.bind(this)
  }
  handleDel() {
    const { Delete, index } = this.props
    Delete(index)
    // this.props.Delete(index)
  }
  render() {
    const { content } = this.props
    return <div onClick={this.handleDel}>{content}</div>
  }
}

export default TodoItems
