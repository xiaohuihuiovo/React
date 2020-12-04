import React, { Fragment, Component } from 'react'
import './TodoList.css'
import TodoItems from './TodoItems.js'
import { Button, Input, message } from 'antd'
import 'antd/dist/antd.css'

class TodoList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      list: [],
      list: ['react', 'vue', 'js', 'css', 'html'],
      // inputValue: [],
      size: 'large',
    }
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleBtnClick = this.handleBtnClick.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
  }
  // 点击删除
  handleBtnClick() {
    if (this.state.inputValue.length <= 0) {
      message.error('请输入内容!!')
      return false
    }
    this.setState({
      list: [...this.state.list, this.state.inputValue],
      inputValue: '',
    })

    // console.log(this.state.inputValue.length)
  }
  handleInputChange(e) {
    this.setState({
      inputValue: e.target.value,
    })
  }
  handleDelete(index) {
    const list = [...this.state.list]
    list.splice(index, 1)
    this.setState({
      list,
    })
  }

  getTodoList() {
    return this.state.list.map((item, index) => {
      return (
        <TodoItems
          Delete={this.handleDelete}
          key={index}
          content={item}
          index={index}
        />
      )
    })
  }
  render() {
    return (
      <Fragment>
        <div className="TodoList">
          <Input
            allowClear
            size="large"
            placeholder="请输入内容"
            autoFocus
            style={{ width: 300, margin: '0px 2px 0 0' }}
            value={this.state.inputValue}
            onChange={this.handleInputChange}
          />
          <Button
            type="primary"
            onClick={this.handleBtnClick}
            style={{ width: 60, height: 41, margin: '-10px 0 0 0' }}
          >
            添加
          </Button>
          <ul>{this.getTodoList()}</ul>
        </div>
      </Fragment>
    )
  }
}

export default TodoList
