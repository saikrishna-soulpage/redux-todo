import React from "react";
import TodoList from "./features/todos/TodoList";
import AddTodo from "./features/todos/AddTodo";
import "./App.css";

function App() {
  return (
    <div className="App">
      <AddTodo />
      <TodoList />
    </div>
  );
}

export default App;
