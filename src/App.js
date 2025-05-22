import "./App.css";
import Emojicard from "./components/emojiCard";
import emojipedia from "./utils/emojipedia";

function ecard(emoji) {
  return (
    <Emojicard
      key={emoji.id}
      emoji={emoji.emoji}
      name={emoji.name}
      meaning={emoji.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">{emojipedia.map(ecard)}</dl>
    </div>
  );
}

export default App;
