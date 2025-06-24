import { useEffect } from "react";
import "./App.css";

function App() {
  useEffect(() => {
    console.log("Runs only once when component mounts");
  }, []); // mounts- Component appears on the screen for the first time.
  return (
    <div>
      <h1>useEffect()</h1>
      <p>
        useEffect is a React Hook that lets you run some code (a side effect)
        after your component renders.
      </p>
      <h2>Why do we use it?</h2>
      <p>We use useEffect for things like: </p>
      <ul>
        <li>Fetching data from an API </li>
        <li>Setting up timers or intervals </li>
        <li>Updating the DOM </li>
        <li>Listening for events (like keyboard or mouse)</li>
      </ul>
    </div>
  );
}

export default App;
