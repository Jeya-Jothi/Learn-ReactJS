import "./App.css";
import Heading from "./components/heading";
import Note from "./components/note";
import Footer from "./components/footer";

function App() {
  return (
    <>
      <Heading />
      <Note
        title="Welcome to keeper"
        content="This is the keeper app, where you can write your thoughts and save it"
      />
      <Footer />
    </>
  );
}

export default App;
