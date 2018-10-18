import React, { Component } from 'react';
import './ItemForm.css';
// import { format } from 'path';

class ItemForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      task: null,
      description: null,
      type: 'Todo'
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addItem(this.state)
  }

  handleChange = (e) => {
    const target = e.target
    const value = target.value;
    const name = target.name;
    console.log('value', value)
    console.log('name', name)
    this.setState( {
      [name] : value
    }, () => {
      console.log('state', this.state)
    })
  }

  render() {
    return (
      <div className="ActionItem">
      <form onSubmit={this.handleSubmit}>
        <label> Task:
          <input onChange={this.handleChange} name="task" type="text"/>
        </label> 
        <label> Description:
          <input onChange={this.handleChange} name="description" type="text"/>
        </label>
        <label> Type:
          <select onChange={this.handleChange} name="type">
            <option value="Todo">To-do</option>
            <option value="Doing">Doing</option>
            <option value="Done">Done</option>
          </select>
        </label>
        <input type="submit" value="Submit"/>
      </form>
      </div>
    )
  }
}

export default ItemForm