import "./App.css";
import animals from "./utils/animals";

function App() {
  const [cat, dog] = animals;
  console.log(cat); // {name: 'cat', sound: 'meow'}
  console.log(dog);

  // Change variable name

  const { name: dogName, sound: dogSound } = dog;
  console.log(dogName); //Dog
  console.log(dogSound); //woof

  return (
    <div>
      <h1>Hello {cat.name}</h1>
      <h2>{cat.sound}</h2>
    </div>
  );
}

export default App;
