import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "./todosSlice";

export default function AddTodo() {
  const [todo, setTodo] = useState("");

  const dispatch = useDispatch();

  const onClicked = () => {
    if (todo.length > 0) {
      dispatch(addTodo(todo));
      setTodo("");
      // console.log(todo);
    } else {
      alert("add todo");
    }
  };

  return (
    <section>
      <h2>Todo List</h2>
      <input
        type="text"
        id="todo"
        name="todo"
        placeholder="add todo here"
        autoComplete="off"
        value={todo}
        onChange={(e) => {
          setTodo(e.target.value);
          // console.log(todo);
        }}
      />
      <button type="button" onClick={onClicked}>
        Add
      </button>
    </section>
  );
}
