import React, {Component} from 'react';

class ToDo extends Component {
  render() {
    return (
  //    <li>To Do list goes here!</li>
      <li>{this.props.description}</li>
          );
  }
}

export default ToDo;
