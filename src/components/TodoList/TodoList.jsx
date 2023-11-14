import React, { Component } from 'react';


class TodoList extends Component {
  // state = {
  //   todos,
  // };

  // deleteTodo = (delId) => {
	// this.setState(prevState => ({
	// 	todos: prevState.todos.filter(todo => todo.id !== delId)
	// }))
  // }

  render() {
    const { todos, deleteTodo, toggleTodo } = this.props;

	let completedTodos = todos.reduce((acc, todo) => (todo.completed ? acc + 1 : acc), 0);

    return (
      <>

	<div>
		<p>Общее кол-во:{todos.length}</p>
		<p>Кол-во выполненных:{completedTodos}</p>
	</div>

	  <ul>
        {todos.map(({ id, text, completed }) => (
          <li key={id}>
            <input type='checkbox' checked={completed} onChange={()=>{toggleTodo(id)}}></input>
            <p>{text}</p>
            <button type="button" onClick={()=> {deleteTodo(id)}}>Удалить</button>
          </li>
        ))}
      </ul>
	  </>
    );
  }
}

export default TodoList;
