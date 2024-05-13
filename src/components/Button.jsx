import React from "react";

function Button({ onClick, label }) {
  return (
    <>
      <button
        onClick={onClick}
        className="rounded-md font-mono border bg-cyan-600 px-4 py-2 font-semibold text-cyan-50 hover:text-cyan-400  hover:bg-transparent transition-all"
      >
        {label}
      </button>
    </>
  );
}

export default Button;
