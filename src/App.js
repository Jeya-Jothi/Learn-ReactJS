import { useState } from "react";
import "./App.css";

function App() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");

  function handleClick(e) {
    e.preventDefault();
  }

  return (
    <div className="container">
      <h1>
        Hello {fname} {lname}
      </h1>
      <form>
        <input
          name="fName"
          placeholder="First Name"
          value={fname}
          onChange={(e) => setFname(e.target.value)}
        />
        <input
          name="lName"
          placeholder="Last Name"
          value={lname}
          onChange={(e) => setLname(e.target.value)}
        />
        <button onClick={handleClick}>Submit</button>
      </form>
    </div>
  );
}

export default App;
