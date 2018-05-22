import React, { Component } from 'react';
import './App.css';
import ToDo from './components/ToDo.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        {description: 'Walk the cat!   ', isCompleted: true },
        {description: 'Throw dishes away!!     ', isCompleted: false },
        {description: 'Buy new dishes!!!       ', isCompleted: false }
      ],
      newTodoDescription: ''
    };
    /* added line below 5/20/18... */
    // this.deleteToDo = this.deleteToDo.bind(this);
  }

  handleChange(e) {
    this.setState({ newTodoDescription: e.target.value })
  }

  handleSubmit(e) {
    e.preventDefault();
    if (!this.state.newTodoDescription) {return}
    const newTodo = {description: this.state.newTodoDescription, isCompleted:false };
    this.setState({ todos: [...this.state.todos, newTodo], newTodoDescription: '' });
  }
  toggleComplete(index) {
    const todos = this.state.todos.slice();
    const todo = todos[index];
    todo.isCompleted = todo.isCompleted ? false : true;
    this.setState({todos: todos});
  }

deleteToDo(index) {

  console.log(this.state.todos);

  //const {todos} = this.state;
  const todos = this.state.todos.slice();
  const todo = todos[index];

  console.log('todosIndex = '+todo.index);

  const newTodos = todos.filter(todo => todo.index !== index);
  this.setState({ todos: newTodos});

  console.log('!!deleteToDo executed!!');
  console.log('index =  '+index);
  console.log(this.state.todos);
}

  render() {
    return (
      <div className="App">
        <ul>
          { this.state.todos.map((todo, index)=>
            <ToDo key={ index }
            description={ todo.description }
            isCompleted={ todo.isCompleted }
            toggleComplete={ ()=>this.toggleComplete(index)}
            deleteToDo={ ()=>this.deleteToDo(index) }

            />
          )}
        </ul>

        <form onSubmit={ (e) => this.handleSubmit(e)}>
          <input type="text" value={ this.state.newTodoDescription } onChange={ (e) => this.handleChange(e)} />
          <input type="submit"/>
        </form>

      </div>
    );
  }
}

export default App;
