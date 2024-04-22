import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import image from "../../assets/image.png";
import { addTodo, setTodo, updateTodoList } from "./TodoSlice/TodoSlice";
import TodoOutput from "./TodoOutput";

function TodoInput() {
  const dispatch = useDispatch();
  const todoList = useSelector((state) => state.todo.todoList);
  const [showModel, setShowModel] = useState(false);
  const [currentTodo, setCurrentTodo] = useState(null);
  const [newText, setNewText] = useState("");

  useEffect(() => {
    if (todoList.length > 0) {
      localStorage.setItem("todoList", JSON.stringify(todoList));
    }
  }, [todoList]);

  useEffect(() => {
    const localTodoList = JSON.parse(localStorage.getItem("todoList"));
    if (localTodoList) {
      dispatch(setTodo(localTodoList));
    }
  }, []);

  const hanldeTodoList = (text) => {
    if (text.trim().length === 0) {
      alert("Please Enter your todo");
    } else {
      dispatch(
        addTodo({
          text: text,
          id: nanoid(),
        })
      );
      setNewText("");
      setShowModel(false);
    }
  };

  const updateTodo = (text, id) => {
    dispatch(
      updateTodoList({
        text: text,
        id: id,
      })
    );
    setShowModel(false);
  };

  return (
    <div className="text center">
      {showModel && (
        <>
          <div className="fixed flex w-full h-full left-0 top-0  items-center justify-center backdrop-blur-md">
            <div className="bg-white px-14 py-10 border rounded-md shadow-md ">
              <input
                type="text"
                onChange={(e) => setNewText(e.target.value)}
                value={newText}
                className="border outline-none text-2xl px-2 my-6"
                placeholder={
                  currentTodo ? "update your todo" : "Enter your todo text"
                }
              />
              <div className="flex justify-between">
                {currentTodo ? (
                  <>
                    <button
                      onClick={() => {
                        setShowModel(false);
                        updateTodo(newText, currentTodo.id);
                      }}
                      className="bg-red-500 px-5 py-3 rounded-md text-white"
                    >
                      Save
                    </button>
                    <button
                      onClick={() => {
                        setShowModel(false);
                      }}
                      className=" bg-zinc-800  px-5 py-3 rounded-md text-white"
                    >
                      Cancel
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      onClick={() => setShowModel(false)}
                      className="bg-zinc-800 px-5 py-3 rounded-md text-white"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={() => {
                        setShowModel(false);
                        hanldeTodoList(newText);
                      }}
                      className="bg-red-500 px-5 py-4 rounded-md text-white"
                    >
                      Add
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        </>
      )}

      <div className="flex justify-ceSnter items-center">
        {todoList.length === 0 ? (
          <>
            <div className="flex justify-center items-center  w-full">
              <div className="sm:w-[500px] sm:h-[500px] min-w-[250px]">
                <img src={image} alt="" className="w-full" />
              </div>
              <p className=" text-cyan-300 font-sans font-bold uppercase ">
                "Nothing to show, ~ Enter your First Todo"
              </p>
            </div>
          </>
        ) : (
          <>
            <TodoOutput
              showModel={showModel}
              setShowModel={setShowModel}
              newText={newText}
              setNewText={setNewText}
              currentTodo={currentTodo}
              setCurrentTodo={setCurrentTodo}
            />
          </>
        )}
      </div>

      <button
        onClick={() => setShowModel(true)}
        className="bg-red-500 font-semibold px-4 py-3 rounded-md text-white text-center mt-6"
      >
        Add Todo
      </button>
    </div>
  );
}

export default TodoInput;
