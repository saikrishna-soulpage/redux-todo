import {
  createSlice,
  nanoid,
  // createSelector,
  // createEntityAdapter,
} from "@reduxjs/toolkit";

// const todosAdapter = createEntityAdapter();

// const initialState = todosAdapter.getInitialState([
//   {
//     id: "1",
//     todo: "First Todo!",
//     completed: true,
//   },
// ]);
const initialState = [
  {
    id: "1",
    todo: "First Todo!",
    completed: true,
  },
];

export const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    // addTodo: todosAdapter.addOne,
    addTodo: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(todo) {
        return {
          payload: {
            id: nanoid(),
            todo,
            completed: false,
          },
        };
      },
    },
    todoToggled(state, action) {
      const id = action.payload;
      const existingtodo = state.find((todo) => todo.id === id);
      if (existingtodo) {
        existingtodo.completed = !existingtodo.completed;
      }
    },
    todoDeleted(state, action) {
      const id = action.payload;
      return state.filter((todo) => todo.id !== id);
    },
  },
});

export const { addTodo, todoToggled, todoDeleted } = todosSlice.actions;

// export const selectTodoById = (state) =>
//   state.todos.find((todo) => todo.completed === true);

export const selectAllTodos = (state) => state.todos;
//
export const selectAllCompleted = (state) =>
  state.todos.filter((todo) => todo.completed === true);
export const selectAllActive = (state) =>
  state.todos.filter((todo) => todo.completed !== true);

export default todosSlice.reducer;
