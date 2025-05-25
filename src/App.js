import { useState } from "react";
import "./App.css";

let time = new Date().toLocaleTimeString();

function App() {
  const [currentTime, setTime] = useState(time);
  function getTime() {
    setTime(new Date().toLocaleTimeString());
  }
  let intervalId;
  clearInterval(intervalId);
  intervalId = setInterval(() => {
    getTime();
  }, 1000);
  return (
    <div>
      <h1>{currentTime}</h1>
    </div>
  );
}

export default App;
