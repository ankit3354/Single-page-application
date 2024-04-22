import React, { useId } from "react";

function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencychange,
  selectCurrency = "usd",
  CurrencyOptions = [],
  amountdisabled = false,
  selectCurrencydisabled = false,
  className = "",
}) {
  let amountID = useId();
  return (
    <>
      <div
        className={`flex rounded-lg border p-3 text-sm bg-white ${className}`}
      >
        <div className="w-1/2">
          <label htmlFor={amountID} className="sm:opacity-45 mb-2 inline-block">
            {label}
          </label>
          <input
            type="number"
            value={amount}
            disabled={amountdisabled}
            id={amountID}
            className="outline-none w-full bg-transparent py-1.5"
            onChange={(e) =>
              onAmountChange && onAmountChange(Number(e.target.value))
            }
            placeholder="Amount"
          />
        </div>
        <div className="w-1/2 flex flex-wrap justify-end text-right">
          <label className="opacity-45 mb-2 w-full">Currency Type</label>
          <select
            value={selectCurrency}
            disabled={selectCurrencydisabled}
            className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
            onChange={(e) =>
              onCurrencychange && onCurrencychange(e.target.value)
            }
          >
            {CurrencyOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      </div>
    </>
  );
}

export default InputBox;
