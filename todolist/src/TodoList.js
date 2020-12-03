import React, { Fragment, Component } from 'react'
import './TodoList.css'
import TodoItems from './TodoItems.js'

class TodoList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      list: ['react', 'vue', 'js', 'css', 'html'],
      inputValue: [],
    }
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleBtnClick = this.handleBtnClick.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
  }
  handleBtnClick() {
    this.setState({
      list: [...this.state.list, this.state.inputValue],
      inputValue: '',
    })
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
          <input
            value={this.state.inputValue}
            onChange={this.handleInputChange}
          />
          <button onClick={this.handleBtnClick}>add</button>
          <ul>{this.getTodoList()}</ul>
        </div>
      </Fragment>
    )
  }
}

export default TodoList
