import "./App.css";

function App() {
  const citrus = ["Lime", "lemon", "Orange"];
  const fruits = ["Apple", "Banana", "Coconut"];

  console.log(citrus);
  console.log(fruits);

  const newFruits = ["Apple", "Banana", "Coconut", ...citrus];
  console.log(newFruits);

  const inMiddle = ["Apple", ...citrus, "Banana", "Coconut"];
  console.log(inMiddle);

  return <div></div>;
}

export default App;
