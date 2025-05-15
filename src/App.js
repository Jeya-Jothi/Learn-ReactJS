import "./App.css";

function App() {
  const name = "Jothi";
  const randomNumber = Math.floor(Math.random() * 10); // 0-9
  return (
    <div>
      <h1>Hello {name}</h1>
      <p>Your luck number is {randomNumber}</p>
    </div>
  );
}

export default App;
