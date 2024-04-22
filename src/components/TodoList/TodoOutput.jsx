import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FaRegPenToSquare } from "react-icons/fa6";
import { FaTrash } from "react-icons/fa6";
import { setTodo, sorTodoList, toggleCompleted } from "./TodoSlice/TodoSlice";
function TodoOutput({
  showModel,
  setShowModel,
  newText,
  setNewText,
  currentTodo,
  setCurrentTodo,
}) {
  const dispatch = useDispatch();
  const todoList = useSelector((state) => state.todo.todoList);
  const sortCritiria = useSelector((state) => state.todo.sortCritiria);

  const hanldeSortTodo = (sortCritiria) => {
    dispatch(sorTodoList(sortCritiria));
  };

  const sortedTodos = todoList.filter((todo) => {
    if (sortCritiria === "ALL") return true;
    if (sortCritiria === "Completed" && todo.Completed) return true;
    if (sortCritiria === "Not Completed" && !todo.Completed) return true;
    return false;
  });

  const handleDeleteTodo = (id) => {
    const updatedTodo = todoList.filter((todo) => todo.id != id);
    dispatch(setTodo(updatedTodo));
    localStorage.setItem("todoList", JSON.stringify(updatedTodo));
  };
  const handleToggler = (id) => {
    dispatch(toggleCompleted({ id }));
  };

  return (
    <>
      <div className="container mx-auto mt-6">
        <div>
          <select
            className="px-4 py-2 mb-6 outline-none rounded-md hover:bg-zinc-300 focus:bg-zinc-200"
            onChange={(e) => hanldeSortTodo(e.target.value)}
          >
            <option value={"ALL"} className="outline-none px-2 py-2">
              ALL
            </option>
            <option value={"Completed"} className="outline-none px-2 py-2">
              Completed
            </option>
            <option value={"Not Completed"} className="outline-none px-2 py-2">
              Not Completed
            </option>
          </select>
        </div>
        <div>
          {sortedTodos.map((todo) => (
            <div
              key={todo.id.id}
              className="flex flex-wrap w-full text-white items-center mx-auto justify-between mb-6 bg-purple-800 py-4 rounded-md md:w-[75%] overflow-hidden"
            >
              <div
                className={`${
                  todo.Completed ? "line-through text-yellow-400" : ""
                }font-sans text-xl mx-auto cursor-pointer hover:text-yellow-400`}
                onClick={() => {
                  handleToggler(todo.id);
                }}
              >
                {todo.text.text}
              </div>
              <div className="flex mx-auto sm:gap-10 gap-1">
                <button
                  onClick={() => {
                    setShowModel(true);
                    setCurrentTodo(todo);
                    setNewText(todo.text.text);
                  }}
                  className="bg-blue-400 p-1 px-2 text-xl rounded-md ml-2"
                >
                  <FaRegPenToSquare />
                </button>
                <button
                  onClick={() => handleDeleteTodo(todo.id)}
                  className="bg-red-400 p-1 px-2 text-xl rounded-md"
                >
                  <FaTrash />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default TodoOutput;
