import { useState } from 'react';
import './Counter.scss';

function Counter() {
  const [counterValue, setCounterValue] = useState(0);

  const handleIncrement = () => {
    setCounterValue((prevCounterValue) => prevCounterValue + 1);
  };

  const handleDecrement = () => {
    if (counterValue !== 0) {
      setCounterValue((prevCounterValue) => prevCounterValue - 1);
    }
  };

  return (
    <>
      <h1>Counter</h1>
      <div className="counter-container">
        <button
          type="button"
          onClick={handleDecrement}
          className="counter-button"
        >
          -
        </button>
        <span className="counter-value">{counterValue}</span>
        <button
          type="button"
          onClick={handleIncrement}
          className="counter-button"
        >
          +
        </button>
      </div>
    </>
  );
}

export default Counter;
