import React, { useState } from "react";
import InputBox from "./InputBox";
import useCurrencyInfo from "./useCurrencyOptions";

function CurrencyConvertor() {
  const [to, setTo] = useState("inr");
  const [from, setfrom] = useState("usd");
  const [amount, setAmount] = useState(0);
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currnecyInfo = useCurrencyInfo(from);

  const options = Object.keys(currnecyInfo || {});

  const swap = () => {
    setTo(from);
    setfrom(to);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };

  const covert = () => {
    setConvertedAmount(amount * currnecyInfo[to] || 0);
  };

  return (
    <div className="relative flex min-h-screen w-full flex-col flex-wrap items-center justify-center overflow-hidden bg-gray-700">
      <img
        src="https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1s"
        alt=""
        className="absolute left-1/2 top-1/2 max-w-none -translate-x-1/2 -translate-y-1/2 w-full h-screen"
      />
      <div className="w-full">
        <div className="w-full max-w-md mx-auto  rounded-lg p-5 sm:bg-transparent bg-white/30  border-white border-2 backdrop-blur-sm"  >
          <form
            onSubmit={(e) => {
              e.preventDefault();
              covert();
            }}
            className="relative flex flex-col items-center justify-center border-white ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10"
          >
            <h2 className="text-white m-1 text-xl">Currency Converter</h2>
            <InputBox
              label={"From"}
              amount={amount}
              onAmountChange={(amount) => setAmount(amount)}
              onCurrencychange={(currency) => setfrom(currency)}
              CurrencyOptions={options}
              selectCurrency={from}
            />

            <div className="relative h-0.5 w-full">
              <button
                onClick={swap}
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg border-2 border-white bg-blue-600 hover:bg-blue-700 font-semibold px-2 py-0.5 text-white"
              >
                Swap
              </button>
            </div>

            <InputBox
              label={"To"}
              amount={convertedAmount}
              onCurrencychange={(currency) => setTo(currency)}
              CurrencyOptions={options}
              selectCurrency={to}
              amountdisabled
            />

            <div className="w-full mt-2 rounded-md shadow-lg ring-1 bg-blue-600 text-center hover:bg-blue-700">
              <button type="submit" className="py-2 text-white font-semibold">
                Convert {from.toUpperCase()} To {to.toUpperCase()} :{convertedAmount}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CurrencyConvertor;
