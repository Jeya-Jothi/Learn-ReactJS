import { useState } from "react";
import "./App.css";

function App() {
  const [isMouseOver, setMouseOver] = useState(false);

  return (
    <div className="container">
      <h1>Hello </h1>
      <input type="text" placeholder="What's your name?" />
      <button
        style={{ backgroundColor: isMouseOver ? "black" : "white" }}
        onMouseOver={() => setMouseOver(true)}
        onMouseOut={() => setMouseOver(false)}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
