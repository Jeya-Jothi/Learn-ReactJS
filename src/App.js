import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  function increaseCount() {
    setCount(count + 1);
  }
  function decreseCount() {
    setCount(count - 1);
  }

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increaseCount}>⇧ Increase</button>
      <button onClick={decreseCount}>⇩ Decrese</button>
    </div>
  );
}

export default App;
