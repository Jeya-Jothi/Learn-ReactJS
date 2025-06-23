import "./App.css";

function App() {
  const fullName = {
    fName: "Jeya",
    lName: "Jothi",
  };

  const user = {
    ...fullName,
    age: 21,
    address: "Tenkasi",
  };

  console.log(user);

  return <div></div>;
}

export default App;
