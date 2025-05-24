import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  // function increaseCount() {
  //   setCount(count + 1);
  // }
  // function decreseCount() {
  //   setCount(count - 1);
  // }

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>⇧ Increase</button>
      <button onClick={() => setCount(count - 1)}>⇩ Decrese</button>
    </div>
  );
}

export default App;
