import "./App.css";
import emojipedia from "./utils/emojipedia";

function Meaninglist(props) {
  return <li>{props.meaning.slice(0, 100)}</li>;
}

function App() {
  return (
    <div>
      <ul>
        {emojipedia.map((n) => {
          return <Meaninglist meaning={n.meaning} key={n.id} />;
        })}
      </ul>
    </div>
  );
}

export default App;
