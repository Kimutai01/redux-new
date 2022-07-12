import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset, incrementByAmount } from "./counterSlice";
import { useState } from "react";

const Counter = () => {
  const count = useSelector((state) => state.counter.count);
  const [amount, setAmount] = useState(0);
  const dispatch = useDispatch();
  const addValue = Number(amount) || 0;
  const resetAll = () => {
    setAmount(0);
    dispatch(reset());
  };

  return (
    <div>
      <section>
        <p>{count}</p>
        <div>
          <button onClick={() => dispatch(increment())}>+</button>
          <button onClick={() => dispatch(decrement())}>-</button>
        </div>
        <input
          type="text"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <div>
          <button onClick={() => dispatch(incrementByAmount(addValue))}>
            Add amount
          </button>
          <button onClick={resetAll}>reset</button>
        </div>
      </section>
    </div>
  );
};

export default Counter;
