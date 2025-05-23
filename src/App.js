import "./App.css";
// let isLoggedIn = false;

const currentHour = new Date().getHours(); // 4 PM

function App() {
  return (
    <div className="container">
      {currentHour > 12 && <h1>Why are you still working?</h1>}
    </div>
  );
}

export default App;
