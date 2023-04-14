import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, incrementByAmount } from "../store/counterSlice";
import { RootState } from "../store/store";

export const DispEx = () => {
  const dispatch = useDispatch();
  const count = useSelector((state: RootState) => state.counter.value);
  const [incrementAmount, setIncrementAmount] = useState<number>(1);

  const handleIncrementByAmount = () => {
    dispatch(incrementByAmount(incrementAmount));
  };

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <div>
        <input
          type="number"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(Number(e.target.value))}
        />
        <button onClick={handleIncrementByAmount}>Increment by amount</button>
      </div>
    </div>
  );
};
