import "./App.css";
import Emojicard from "./components/emojiCard";
import emojipedia from "./utils/emojipedia";

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">
        {emojipedia.map((emoji) => {
          <Emojicard
            key={emoji.id}
            emoji={emoji.emoji}
            name={emoji.name}
            meaning={emoji.meaning}
          />;
        })}
      </dl>
    </div>
  );
}

export default App;
