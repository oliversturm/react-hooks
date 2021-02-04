import React, { useReducer } from 'react';

const counterReducer = (/* state */ { value }, /* action */ { type }) => {
  switch (type) {
    case 'up':
      return { value: value + 1 };
    case 'down':
      return { value: value - 1 };
    case 'fastup':
      return { value: value + 5 };
    case 'fastdown':
      return { value: value - 5 };
    default:
      throw new Error();
  }
};

const ReducerCounter = () => {
  const [state, dispatch] = useReducer(counterReducer, { value: 0 });

  return (
    <div className="counter reducer">
      <div>Current counter value is {state.value}.</div>
      <button onClick={() => dispatch({ type: 'fastdown' })}>&lt;&lt;</button>
      <button onClick={() => dispatch({ type: 'down' })}>&lt;</button>
      <button onClick={() => dispatch({ type: 'up' })}>&gt;</button>
      <button onClick={() => dispatch({ type: 'fastup' })}>&gt;&gt;</button>
    </div>
  );
};

export default ReducerCounter;
