import "./App.css";
import Form from "./components/Form";

let userIsRegistered = false;

function App() {
  return (
    <div className="container">
      <Form status={userIsRegistered} />
    </div>
  );
}

export default App;
