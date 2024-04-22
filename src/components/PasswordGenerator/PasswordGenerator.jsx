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
    <div className="relative flex min-h-screen flex-col justify-normal overflow-hidden bg-gray-500 py-6 sm:pt-32">
      <div className="relative bg-gray-500 px-8 pb-10 pt-10 text-center shadow-2xl ring-1 ring-gray-900/10 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-14 ">
        <h1 className="pb-2 font-sans text-2xl sm:font-bold">
          Password Generator
        </h1>
        <div className="flex flex-wrap justify-center overflow-hidden rounded-lg border-t-4 border-gray-700 px-2 pt-7 pb-2">
          <input
            type="text"
            value={password}
            readOnly
            className="w-3/4 rounded-s-lg border-x-2 border-none px-2 font-serif font-bold outline-none sm:w-10/12"
            ref={passwordRef}
          />
          <button
            onClick={copyhanlder}
            className="rounded-e-xl bg-blue-500 p-1 font-bold sm:border-2 hover:bg-blue-700 hover:text-white"
          >
            copy
          </button>
        </div>
        <div className="flex flex-wrap justify-evenly gap-1 rounded-lg border-b-4 border-gray-700 px-2 pb-6 sm:gap-2">
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
  );
}

export default PasswordGenerator;
