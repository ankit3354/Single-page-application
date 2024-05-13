import React from "react";

function Background() {
  return (
    <div className="fixed z-[1] inset-0 flex items-center justify-center ">
      <div className="absolute top-[5%] w-full h-screen py-10 font-bold text-zinc-700 flex justify-center ">
        Document
      </div>

      <h1 className="absolute text-[13vw] top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]  leading-none tracking-tighter text-zinc-800">
        Doc.
      </h1>
    </div>
  );
}

export default Background;
