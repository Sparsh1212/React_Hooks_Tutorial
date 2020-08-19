import React, { useState } from 'react';

const HookCounter3 = () => {
  const [name, setName] = useState({
    firstName: '',
    lastName: '',
  });
  return (
    <React.Fragment>
      <form>
        <input
          value={name.firstName}
          onChange={(e) =>
            setName({
              ...name,
              firstName: e.target.value,
            })
          }
          placeholder='First Name'
          type='text'
        />
        <input
          value={name.lastName}
          onChange={(e) =>
            setName({
              ...name,
              lastName: e.target.value,
            })
          }
          placeholder='Last Name'
          type='text'
        />
        <h2>Your first name is: {name.firstName}</h2>
        <h2>Your lastName name is: {name.lastName}</h2>
      </form>
    </React.Fragment>
  );
};

export default HookCounter3;
