import './App.css';
import React, { Component } from 'react';
import { nanoid } from 'nanoid';

// import Counter from './components/Counter';
// import DropdownMenu from './components/DropdownMenu';
// import ColorPicker from './components/ColorPicker';
import TodoList from './components/TodoList';
import todos from './data/todos.json';
import TodoEditor from './components/TodoEditor';

// const colorPickerOptions = [
//   { label: 'red', color: '#F44336' },
//   { label: 'green', color: '#4CAF50' },
//   { label: 'blue', color: '#2196F3' },
//   { label: 'grey', color: '#607D8B' },
//   { label: 'pink', color: '#E91E63' },
//   { label: 'indigo', color: '#3F51B5' },
// ];

class App extends Component {
  state = {
    todos,
  };

  deleteTodo = delId => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== delId),
    }));
  };

  toggleTodo = todoId => {
    this.setState(({ todos }) => ({
      todos: todos.map(todo =>
        todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
      ),
    }));
  };

  addTodo = text => {
    const todo = { id: nanoid(), text, completed: false };

    this.setState(({ todos }) => ({
      todos: [...todos, todo],
    }));
  };

  render() {
    const { todos } = this.state;
    const { deleteTodo, addTodo, toggleTodo } = this;

    return (
      <div className="App">
        {/* <h1>React projects</h1>
        <p>counter</p>
        <Counter step={1} />
        <DropdownMenu />
        <ColorPicker colorPickerOptions={colorPickerOptions} /> */}

        <TodoList
          todos={todos}
          deleteTodo={deleteTodo}
          toggleTodo={toggleTodo}
        />
        <TodoEditor onSubmit={addTodo} />
      </div>
    );
  }
}

export default App;
