import { useState } from "react";
import "./App.css";
import quotes from "./utils/quotes";
import Navbar from "./components/Navbar";

function App() {
  const [index, setIndex] = useState(0);
  const currentQuote = quotes[index].id + ". " + quotes[index].quote;

  function nextQuote() {
    console.log(index);
    const next = (index + 1) % quotes.length;
    setIndex(next);
  }

  function preQuote() {
    console.log(index);
    const next = index <= 0 ? 0 : (index - 1) % quotes.length;

    setIndex(next);
  }

  return (
    <div className="bg">
      <Navbar />
      <div className="container">
        <div className="card">
          <p>{currentQuote}</p>
        </div>
        <div className="buttons">
          <button onClick={preQuote}>Previous</button>
          <button onClick={nextQuote}>Next</button>
        </div>
      </div>
    </div>
  );
}

export default App;
