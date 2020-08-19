import React, { useState, useEffect } from 'react';

const HookCounter1 = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');

  const incrementCount = () => {
    setCount((prevCount) => prevCount + 1);
  };
  const titleUpdater = () => {
    console.log('useEffect called');
    document.title = `You clicked ${count} times`;

    return unmountingHandler;
  };

  useEffect(titleUpdater, []);

  const unmountingHandler = () => {
    console.log('Unmounting code done');
  };
  return (
    <React.Fragment>
      <input
        type='text'
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <button onClick={incrementCount}>You clicked {count} times</button>
    </React.Fragment>
  );
};

export default HookCounter1;

/////////////////////////////////////////////////////////useEffect as ComponentWillUnmount /////////////////////////////////////////////////

/* To use the useEffect hook as ComponentWillUnmount just return the function
name that you have to call during the unmounting phase
for ex:
1.
useEffect(() => {
    return () => {
        console.log('Unmounting code done');
    }
}, [])

2.

useEffect(() => {
    return unmountingHandler
}, [])
************************************************************************************************************************************************
*************Note: Do not forget to pass an empty array as the second parameter to useEffect while using it as ComponentWillUnmount*************
************************************************************************************************************************************************
const unmountingHandler = () => {
    console.log('Unmounting code done');
}
*/

/////////////////////////////////////////////////////////useEffect as ComponentWillUnmount /////////////////////////////////////////////////
