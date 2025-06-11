import React, { useState } from 'react';
import TodoItem from './TodoItem';
import AddTodoForm from './AddToDoForm';

function App() {
  const [todos, setTodos] = useState([
    { text: 'Buy groceries' },
    { text: 'Walk the dog' },
  ]);

  const addTodo = (text) => {
    setTodos([...todos, { text }]);
  };

  return (
    <div className="App">
      <h1>My To-Do List</h1>
      <AddTodoForm onAdd={addTodo} />
      {todos.map((todo, index) => (
        <TodoItem key={index} text={todo.text} />
      ))}
    </div>
  );
}

export default App;
