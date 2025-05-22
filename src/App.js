import "./App.css";
import Heading from "./components/heading";
import Note from "./components/note";
import Footer from "./components/footer";
import notes from "./utils/notes";

function App() {
  return (
    <>
      <Heading />
      {notes.map((note) => {
        return (
          <Note key={note.key} title={note.title} content={note.content} />
        );
      })}
      <Footer />
    </>
  );
}

export default App;
