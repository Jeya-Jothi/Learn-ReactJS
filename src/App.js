import { useState } from "react";
import "./App.css";

function App() {
  const [isMouseOver, setMouseOver] = useState(false);
  const [name, setName] = useState("");
  const [headingText, setHeadingText] = useState("");

  function handleOnChange(e) {
    setName(e.target.value);
  }
  function handleOnclick(e) {
    setHeadingText(name);
    e.preventDefault(); // Doesn't go to another route; Because it's a form.
  }
  return (
    <div className="container">
      <h1>Hello {headingText}</h1>
      <form>
        <input
          type="text"
          placeholder="What's your name?"
          onChange={handleOnChange}
          value={name}
        />
        <button
          style={{ backgroundColor: isMouseOver ? "black" : "white" }}
          onMouseOver={() => setMouseOver(true)}
          onMouseOut={() => setMouseOver(false)}
          onClick={handleOnclick}
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
