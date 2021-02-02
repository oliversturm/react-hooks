const FunctionalCounter = ({ value, increaseCounter }) => (
  <div className="counter functional">
    <div>Current counter value is {value}.</div>
    <button onClick={increaseCounter}>Click here to increase value.</button>
  </div>
);

export default FunctionalCounter;
