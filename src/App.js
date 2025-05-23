import "./App.css";
import Login from "./components/Login";
let isLoggedIn = false;

const currentHour = new Date().getHours();

function App() {
  return (
    <div className="container">
      {currentHour > 12 ? <h1>Why are you still working?</h1> : null}
    </div>
  );
}

export default App;
