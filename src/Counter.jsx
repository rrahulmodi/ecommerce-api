import { useState } from "react";
function Counter() {
  const [count, setCount] = useState(0);
  function incrementCounter() {
    setCount(count + 1);
  }
  function decrementCounter() {
    setCount(count - 1);
  }

  return (
    <div>
      <button onClick={incrementCounter}>Increment</button>
      <p>{count}</p>
      <button onClick={decrementCounter}>Decrement</button>
    </div>
  );
}
export default Counter;
