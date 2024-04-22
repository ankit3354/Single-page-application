import React, { useState } from "react";
import { TbMathPi } from "react-icons/tb";
import calculation from "../../assets/calculation.png";
function Calculator() {
  const [number, setNumber] = useState("");

  const inputButton = (buttonvalue) => {
    try {
      if (buttonvalue === "AC") {
        setNumber("");
      } else if (buttonvalue === "CE") {
        setNumber(number.slice(0, -1));
      } else if (buttonvalue === "%") {
        let result = (parseFloat(number) / 100).toString();
        setNumber(result);
      } else if (buttonvalue === ".") {
        setNumber(number + ".");
      } else if (buttonvalue === "3.14") {
        setNumber(number + "3.14");
      } else if (buttonvalue === "0") {
        setNumber(number + "0");
      } else {
        setNumber(number + buttonvalue);
      }
    } catch (error) {
      setNumber("Enter right");
    }
  };

  const Calculation = () => {
    try {
      const result = eval(number);
      setNumber(result.toString());
    } catch (error) {
      setNumber("Invalid");
    }
  };

  return (
    <div className="relative flex flex-row min-h-screen justify-center overflow-hidden bg-pink-300 py-6 sm:py-40">
      <img
        src={calculation}
        alt=""
        className="absolute w-full top-1/2 left-1/2 max-w-none -translate-x-1/2 -translate-y-1/2"
        width="1308"
      />

      <div className="relative items-center justify-center flex-wrap bg-pink-300 px-6 pb-8 pt-8 shadow-md ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-2xl sm:rounded-lg sm:px-10  sm:shadow-neutral-600">
        <h1 className="text-2xl font-mono text-pink-200 text-left">
          Calculator
        </h1>

        <div className="text-center pb-2 overflow-hidden sm:w-full">
          <input
            type="text"
            placeholder="0"
            className="text-right px-2 py-2 text-xl border-none outline-none"
            value={number}
            readOnly
          />
        </div>
        <div className="grid grid-cols-4 border rounded-xl overflow-hidden">
          {["AC", "CE", "%", "/"].map((buttonvalue) => (
            <button
              className="py-3 px-3  border font-bold font-mono text-xl text-pink-100 bg-red-300"
              key={buttonvalue}
              onClick={() => inputButton(buttonvalue)}
            >
              {buttonvalue}
            </button>
          ))}
          {["7", "8", "9", "*"].map((buttonvalue) => (
            <button
              className="py-3 px-3  border font-bold font-mono text-xl text-pink-100"
              key={buttonvalue}
              onClick={() => inputButton(buttonvalue)}
            >
              {buttonvalue}
            </button>
          ))}
          {["4", "5", "6", "-"].map((buttonvalue) => (
            <button
              className="py-3 px-3  border font-bold font-mono text-xl text-pink-100"
              key={buttonvalue}
              onClick={() => inputButton(buttonvalue)}
            >
              {buttonvalue}
            </button>
          ))}
          {["1", "2", "3", "+"].map((buttonvalue) => (
            <button
              className="py-3 px-3  border font-bold font-mono text-xl text-pink-100"
              key={buttonvalue}
              onClick={() => inputButton(buttonvalue)}
            >
              {buttonvalue}
            </button>
          ))}

          <button
            onClick={() => inputButton(".")}
            className="py-3 px-3 border font-bold font-mono text-xl text-pink-100"
          >
            .
          </button>
          <button
            onClick={() => inputButton("0")}
            className="py-3 px-3  border font-bold font-mono text-xl text-pink-100"
          >
            0
          </button>
          <button
            onClick={() => inputButton("3.14")}
            className="py-3 px-3 border font-bold font-mono text-xl text-pink-100 flex items-center justify-center"
          >
            <TbMathPi />
          </button>
          <button
            onClick={Calculation}
            className="py-3 px-3 sm:border font-bold font-mono text-xl text-pink-100 bg-blue-400"
          >
            =
          </button>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
