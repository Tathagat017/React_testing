import React, { useState } from "react";
import Button from "./Button";
const Counter = () => {
  const [count, setCount] = useState(0);

  const handleAdd = () => {
    setCount((prev) => prev + 1);
  };
  return (
    <>
      <h2 data-testid="counter">Counter:{count}</h2>
      <Button size={"large"} color={"blue"} handleAdd={handleAdd}>
        ADD
      </Button>
    </>
  );
};

export default Counter;
