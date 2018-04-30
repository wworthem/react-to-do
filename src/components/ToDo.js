import React, {Component} from 'react';

class ToDo extends Component {
  render() {
    return (
  //    <li>To Do list goes here!</li>
  //    <li>{this.props.description}</li>
  // <span><input type="button" value="Delete" onClick={()=>this.props.deleteToDo} /> </span>
  //<span><input type="button" value="Delete" onClick={(e)=>this.props.deleteToDo(this.props.todo.index)} /> </span>
      <li>
        <input type="checkbox" checked={ this.props.isCompleted } onChange={ this.props.toggleComplete } />
        <span>{this.props.description }</span>
        <span><input type="button" value="Delete" onClick={(e)=>this.props.deleteToDo(this.props.index)} /> </span>
      </li>
  );
  }
}

export default ToDo;
