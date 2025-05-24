import { useState } from "react";
import "./App.css";

function App() {
  const [status, setStatus] = useState("NotBuyed");
  function task() {
    setStatus("Buyed");
  }
  const strikeThrough = { textDecoration: "line-through" };

  return (
    <div>
      <h1 style={status === "Buyed" ? strikeThrough : null}>Buy milk</h1>
      <button onClick={task}>StrikeThrough</button>
    </div>
  );
}

export default App;
