import React, { useState } from "react";
import TodoInput from "./TodoInput";

export default function TodoList() {
  return (
    <>
      <div className="text-center w-full h-screen p-10 justify-center items-center overflow-hidden bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-sky-600 to-90% ">
        <div>
          <h1 className="text-center text-3xl font-bold">Yaho TodoList</h1>
          <TodoInput />
        </div>
      </div>
    </>
  );
}
