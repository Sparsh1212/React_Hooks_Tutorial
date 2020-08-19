import React, { useState } from 'react';

const HookCounter = () => {
  const [count, setCount] = useState(0);

  const incrementCount = () => setCount(count + 1);

  return (
    <React.Fragment>
      <button onClick={incrementCount}>Count {count}</button>
    </React.Fragment>
  );
};

export default HookCounter;
