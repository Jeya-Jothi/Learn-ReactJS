import "./App.css";
import animals from "./utils/animals";

function App() {
  const [cat, dog] = animals;
  console.log(cat); // {name: 'cat', sound: 'meow'}
  console.log(dog);
  return (
    <div>
      <h1>Hello {cat.name}</h1>
      <h2>{cat.sound}</h2>
    </div>
  );
}

export default App;
