import "./App.css";
import cars from "./utils/cars";
function App() {
  const [honda, tesla] = cars;

  const {
    speedStats: { topSpeed: hondaTopSpeed },
  } = honda;
  const {
    speedStats: { topSpeed: teslaTopSpeed },
  } = tesla;
  const {
    coloursByPopularity: [hondaTopColour],
  } = honda;

  const {
    coloursByPopularity: [teslaTopColour],
  } = tesla;

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Brand</th>
            <th>Top Speed</th>
            <th>Top Colors</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{honda.model}</td>
            <td>{hondaTopSpeed}</td>
            <td>{hondaTopColour}</td>
          </tr>
          <tr>
            <td>{tesla.model}</td>
            <td>{teslaTopSpeed}</td>
            <td>{teslaTopColour}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default App;
