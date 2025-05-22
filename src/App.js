import "./App.css";

let numbers = [3, 56, 2, 48, 5];

function map() {
  return numbers.map((n) => n * 2) + "";
}

function filter() {
  return numbers.filter((n) => n > 5) + "";
}

function find() {
  return numbers.find((n) => n > 5);
}

function reduce() {
  return numbers.reduce((sum, n) => sum + n);
}

function findIndex() {
  return numbers.findIndex((n) => n === 48);
}

function App() {
  return (
    <div>
      <ul>
        <li>map() - {map()}</li>
        <li>filter() - {filter()}</li>
        <li>find() - {find()}</li>
        <li>reduce() - {reduce()}</li>
        <li>findIndex() - {findIndex()}</li>
      </ul>
    </div>
  );
}

export default App;
