import React, { useState } from 'react';

const StandardHookCounter = () => {
  const [value, setValue] = useState(0);
  const increaseCounter = () => setValue(value + 1);

  return (
    <div className="counter standardhook">
      <div>Current counter value is {value}.</div>
      <button onClick={increaseCounter}>Click here to increase value.</button>
    </div>
  );
};

export default StandardHookCounter;
