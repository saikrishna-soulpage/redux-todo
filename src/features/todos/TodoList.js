import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  todoDeleted,
  todoToggled,
  selectAllTodos,
  selectAllCompleted,
  selectAllActive,
  // selectCompleted,
  // selectTodoById,
} from "./todosSlice";
import "../../App.css";

export default function TodoList() {
  const todos = useSelector(selectAllTodos);
  const dispatch = useDispatch();
  const completed = useSelector(selectAllCompleted);
  const active = useSelector(selectAllActive);
  // const a = useSelector((state) => selectCompleted(state, 1));
  // console.log(a);

  return (
    <div className="grid-container1">
      <div className="grid-item1">
        <h2>Todo List</h2>
        <ul>
          {todos.map((todo) => {
            return (
              <li type="none" key={todo.id}>
                <div className="grid-container">
                  <div className="grid-item">
                    <input
                      type="checkbox"
                      checked={todo.completed}
                      onChange={() => dispatch(todoToggled(todo.id))}
                    />
                  </div>
                  <div className="grid-item">{todo.todo}</div>
                  <div className="grid-item">
                    <button onClick={() => dispatch(todoDeleted(todo.id))}>
                      delete
                    </button>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="grid-item1">
        <h2>Completed List</h2>
        <ul>
          {completed.map((todo) => {
            return (
              <li type="none" key={todo.id}>
                <div className="grid-container">
                  <div className="grid-item">
                    <input
                      type="checkbox"
                      checked={todo.completed}
                      onChange={() => dispatch(todoToggled(todo.id))}
                    />
                  </div>
                  <div className="grid-item">{todo.todo}</div>
                  <div className="grid-item">
                    <button onClick={() => dispatch(todoDeleted(todo.id))}>
                      delete
                    </button>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="grid-item1">
        <h2>Active List</h2>
        <ul>
          {active.map((todo) => {
            return (
              <li type="none" key={todo.id}>
                <div className="grid-container">
                  <div className="grid-item">
                    <input
                      type="checkbox"
                      checked={todo.completed}
                      onChange={() => dispatch(todoToggled(todo.id))}
                    />
                  </div>
                  <div className="grid-item">{todo.todo}</div>
                  <div className="grid-item">
                    <button onClick={() => dispatch(todoDeleted(todo.id))}>
                      delete
                    </button>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
