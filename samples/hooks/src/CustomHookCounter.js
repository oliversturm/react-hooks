import React, { useCallback, useState } from 'react';

const useCounter = () => {
  const [value, setValue] = useState(0);
  // Not a recommendation to use useCallback here -
  // but it illustrates that the custom hook can do
  // more than just encapsulate one call.
  const increaseCounter = useCallback(() => setValue(value + 1), [
    value,
    setValue,
  ]);
  return { value, increaseCounter };
};

const CustomHookCounter = () => {
  const { value, increaseCounter } = useCounter();

  return (
    <div className="counter customhook">
      <div>Current counter value is {value}.</div>
      <button onClick={increaseCounter}>Click here to increase value.</button>
    </div>
  );
};

export default CustomHookCounter;
