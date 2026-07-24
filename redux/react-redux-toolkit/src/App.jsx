import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementByAmount, reset } from "./features/counter/counterSlice";

const App = () => {
  const [amount, setAmount] = useState(0);

  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  const handleIncrementClick = () => {
    dispatch(increment());
  };
  const handleDecrementClick = () => {
    dispatch(decrement());
  };
  const handleResetClick = () => {
    dispatch(reset());
  };
  const handleIncAmountClick = () => {
    dispatch(incrementByAmount(amount));
  };

  return (
    <div className="flex flex-col gap-10 p-10 justify-center items-center">
      <button
        onClick={handleIncrementClick}
        className="rounded border-2 h-12.5 px-3 min-w-12.5 text-3xl text-center cursor-pointer"
      >
        +
      </button>
      <p>Count:{count}</p>
      <button
        onClick={handleDecrementClick}
        className="rounded border-2 h-12.5 px-3 min-w-12.5 text-3xl text-center cursor-pointer"
      >
        -
      </button>
      <button
        onClick={handleResetClick}
        className="rounded border-2 h-12.5 px-3 min-w-12.5 text-3xl text-center cursor-pointer"
      >
        Reset
      </button>

      <input
      className="border p-3"
        type="number"
        value={amount}
        placeholder="Enter Amount"
        onChange={(e) => setAmount(e.target.value)}
      />

      <button
        onClick={handleIncAmountClick}
        className="rounded border-2 h-12.5 px-3 min-w-12.5 text-3xl text-center cursor-pointer"
      >
        Increment by amount
      </button>
    </div>
  );
};

export default App;
