import { useState } from "react";
import "./App.css";

function App() {
  const [fullName, setFullName] = useState({
    fname: "",
    lname: "",
  });

  function handleChange(e) {
    const { value, name } = e.target;
    console.log(value);
    console.log(name);

    setFullName((prevValue) => {
      if (name === "fName") {
        return {
          fname: value,
          lname: prevValue.lname,
        };
      } else if (name === "lName") {
        return {
          fname: prevValue.fname,
          lname: value,
        };
      }
    });
  }

  return (
    <div className="container">
      <h1>
        Hello {fullName.fname} {fullName.lname}
      </h1>
      <form>
        <input
          name="fName"
          placeholder="First Name"
          value={fullName.fname}
          onChange={handleChange}
        />
        <input
          name="lName"
          placeholder="Last Name"
          value={fullName.lname}
          onChange={handleChange}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
