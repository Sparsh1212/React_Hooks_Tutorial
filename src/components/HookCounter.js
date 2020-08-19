import React, { useState, useEffect } from 'react';

const HookCounter = () => {
  const [count, setCount] = useState(0);

  const incrementCount = () => setCount(count + 1);

  ///////////// Using useEffect as ComponentDidMount, ComponentDidUpdate for a particular state and ComponentWillUnmount//////////////
  useEffect(() => {
    console.log('mounting called');
  }, []);

  useEffect(() => {
    console.log('state changed');
  }, [count]);

  useEffect(() => {
    return () => {
      console.log('unmounting done');
    };
  }, []);

  return (
    <React.Fragment>
      <button onClick={incrementCount}>Count {count}</button>
    </React.Fragment>
  );
};

export default HookCounter;
