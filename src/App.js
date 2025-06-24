import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [newtext, setNewText] = useState("");
  const [content, setContent] = useState([]);

  function handleChange(e) {
    const newValue = e.target.value;
    setNewText(newValue);
  }
  function handleClick() {
    setContent((prevVlaue) => {
      return [newtext, ...prevVlaue];
    });
    setNewText("");
    // console.log(content); // It shows first, so we can use useEffect for correct content.
  }

  useEffect(() => {
    console.log("Updated content:", content);
  }, [content]);

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" onChange={handleChange} value={newtext} />
        <button onClick={handleClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {content.map((item, index) => {
            return <li key={index}>{item}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
