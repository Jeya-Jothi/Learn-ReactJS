import { useState } from "react";
import "./App.css";

function App() {
  const [fullName, setFullName] = useState({
    fname: "",
    lname: "",
  });

  function handleChange(e) {
    const newValue = e.target.value;
    const inputName = e.target.name;
    console.log(newValue);
    console.log(inputName);

    setFullName((prevValue) => {
      if (inputName === "fName") {
        return {
          fname: newValue,
          lname: prevValue.lname,
        };
      } else if (inputName === "lName") {
        return {
          fname: prevValue.fname,
          lname: newValue,
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
