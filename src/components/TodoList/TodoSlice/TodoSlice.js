import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todoList: [],
  sortCritiria: "ALL",
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    setTodo: (state, action) => {
      state.todoList = action.payload;
    },
    addTodo: (state, action) => {
      state.todoList.push({
        text: action.payload,
        id: action.payload,
        Completed: false,
      });
    },
    sorTodoList: (state, action) => {
      state.sortCritiria = action.payload;
    },

    updateTodoList: (state, action) => {
      const { id, text } = action.payload;
      const index = state.todoList.findIndex((todo) => todo.id === id);
      if (index !== -1) {
        state.todoList[index].text = text;
      } else {
        console.log(
          `Todo with ID ${text} : ${id.id} not found equal to ${index}.`
        );
        console.log("Todo Id : ", id);
      }
    },

    toggleCompleted: (state, action) => {
      const { id } = action.payload;
      const index = state.todoList.findIndex((todo) => todo.id.id === id.id);
      if (index !== -1) {
        state.todoList[index].Completed = !state.todoList[index].Completed;
      } else {
        console.log(`Todo with ID ${id.id} not found.`);
      }
      // state.todoList[index].Completed = !state.todoList[index].Completed;
    },
  },
});

export const {
  setTodo,
  addTodo,
  sorTodoList,
  updateTodoList,
  toggleCompleted,
} = todoSlice.actions;

export default todoSlice.reducer;
