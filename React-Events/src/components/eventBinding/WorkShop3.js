import { useState } from "react";

export const WorkShop3 = () => {
  const [count, setCount] = useState(1);
  const [name, setName] = useState("Philip");

  const handleClickIncrease = () => {
    setCount(count + 1);
  };
  const handleClickDecrease = () => {
    if (count > 0) setCount(count - 1);
  };
  const handleReset = () => {
    setCount(0);
  };

  const handleNameChange = () => {
    setName("Hakan");
  };

  return (
    <div>
      <button onClick={handleClickIncrease}>+</button>
      <h1>{count}</h1>
      <button onClick={handleClickDecrease}>-</button>
      <button onClick={handleReset}>RESET</button>
      <p>{name}</p>
      <button onClick={handleNameChange}>Name Change</button>
    </div>
  );
};
