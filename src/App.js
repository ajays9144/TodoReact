import React from 'react'
import './App.css';
import './index.css'
import TodoFormTwo from './components/TodoFormTwo';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="todo-app">
      <TodoFormTwo />
      {/* <TodoList /> */}
    </div>
  );
}

export default App;
