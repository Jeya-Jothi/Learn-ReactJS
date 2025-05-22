import "./App.css";

let numbers = [3, 56, 2, 48, 5];

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
        <li>
          map() -{" "}
          {numbers.map((n) => {
            return n * 2 + " ";
          })}
        </li>
        <li>
          filter() -{" "}
          {numbers.find((n) => {
            return n > 5 + "";
          })}
        </li>
        {/* <li>find() - {find()}</li> */}
        <li>reduce() - {reduce()}</li>
        <li>findIndex() - {findIndex()}</li>
      </ul>
    </div>
  );
}

export default App;
