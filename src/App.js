import "./App.css";

function App() {
  const name = "Jothi";
  const year = new Date().getFullYear();

  return (
    <div>
      <h2>Created by {name}</h2>
      <p>Copyright {year}</p>
    </div>
  );
}

export default App;
