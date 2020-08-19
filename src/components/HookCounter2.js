import React, { useState } from 'react';

const HookCounter2 = () => {
  const initialCount = 0;
  const [count, setCount] = useState(initialCount);
  const incrementByFive = () => {
    for (let i = 0; i < 5; i++) {
      setCount((prevCount) => prevCount + 1);
    }
  };
  return (
    <React.Fragment>
      <h1>Count {count}</h1>
      <button onClick={() => setCount(initialCount)}>Reset</button>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Increment
      </button>
      <button onClick={() => setCount((prevCount) => prevCount - 1)}>
        Decrement
      </button>
      <button onClick={incrementByFive}>Increment by 5</button>
    </React.Fragment>
  );
};

export default HookCounter2;
