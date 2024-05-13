import React, { useCallback, useState, useEffect, useRef } from "react";

function PasswordGenerator() {
  const [length, setLenght] = useState(8);
  const [num, setNum] = useState(false);
  const [char, setChar] = useState(false);
  const [password, setPassword] = useState("");

  const passwordRef = useRef();

  const RandomPassGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (num) str += "0123456789";
    if (char) str += "!@#$%^&*()}{><";

    for (let i = 1; i <= length; i++) {
      let ans = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(ans);
    }
    setPassword(pass);
  }, [length, num, char, setPassword]);

  const copyhanlder = useCallback(() => {
    window.navigator.clipboard.writeText(password);
    passwordRef.current?.select();
  }, [password]);

  useEffect(() => {
    RandomPassGenerator();
  }, [num, length, char, RandomPassGenerator]);

  return (
    <div className="contanier flex justify-normal overflow-hidden bg-pink-950 ">
      <div className="password-wrapper flex flex-col w-full min-h-screen md:flex-row justify-center items-center flex-wrap bg-black/50 ">
        <div className="img-wrapper hidden md:flex justify-center items-center w-full sm:w-1/2">
          <img src="password-logo.svg" alt="password-logo" />
        </div>

        <div className="password-wrapper flex justify-center items-center w-full md:w-1/2">
          <div className=" bg-pink-900 text-center shadow-2xl ring-1 ring-red-900/10 sm:mx-auto sm:max-w-lg rounded-lg  px-8 pb-10 pt-10  sm:px-14 ">
            <h1 className="pb-2 font-sans text-white font-bold text-2xl sm:font-bold">
              Random Password Generator
            </h1>
            <div className="flex flex-wrap justify-center overflow-hidden rounded-lg border-t-4 border-pink-700/80 px-2 pt-10 py-3 gap-2 sm:gap-0">
              <input
                type="text"
                value={password}
                readOnly
                className="w-full text-zinc-950 sm:rounded-l-md sm:w-3/4 bg-slate-200/50 border-none px-2 py-2 font-serif font-bold outline-none "
                ref={passwordRef}
              />
              <button
                onClick={copyhanlder}
                className="w-full sm:rounded-r-md  sm:w-fit bg-blue-500 px-4 py-2 font-semibold hover:bg-blue-600 text-white ouline-none border-none transition-all"
              >
                copy
              </button>
            </div>
            <div className="flex flex-wrap justify-evenly gap-1 rounded-lg border-b-4 border-pink-700/80 px-2 pb-6 sm:gap-2">
              <input
                type="range"
                value={length}
                min={8}
                max={30}
                onChange={(e) => {
                  setLenght(e.target.value);
                }}
              />
              <label>Length:{length}</label>
              <input
                type="checkbox"
                defaultChecked={num}
                onChange={() => {
                  setNum((prev) => !prev);
                }}
              />
              <label>Num</label>
              <input
                type="checkbox"
                value={char}
                onChange={() => {
                  setChar((prev) => !prev);
                }}
              />
              <label>Char</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PasswordGenerator;
