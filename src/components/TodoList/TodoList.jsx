import React, { Component } from 'react';
import todos from '../../data/todos.json';

class TodoList extends Component {
  state = {
    todos,
  };

  deleteTodo = (delId) => {
	this.setState(prevState => ({
		todos: prevState.todos.filter(todo => todo.id !== delId)
	}))
  }

  render() {
    const { todos } = this.state;

	let completedTodos = todos.reduce((acc, todo) => (todo.completed ? acc + 1 : acc), 0);

    return (
      <>

	<div>
		<p>Общее кол-во:{todos.length}</p>
		<p>Кол-во выполненных:{completedTodos}</p>
	</div>

	  <ul>
        {todos.map(({ id, text }) => (
          <li key={id}>
            <p>{text}</p>
            <button type="button" onClick={()=> {this.deleteTodo(id)}}>Удалить</button>
          </li>
        ))}
      </ul>
	  </>
    );
  }
}

export default TodoList;
