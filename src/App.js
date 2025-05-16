import "./App.css";

function App() {
  let hours = new Date().getHours();
  // hours = 13;
  const correctHour = hours % 12 === 0 ? 12 : hours % 12;
  const minute = new Date().getMinutes();
  let meridiem = hours < 12 ? "AM" : "PM";
  const time =
    correctHour + ":" + (minute < 10 ? "0" + minute : minute) + "" + meridiem;
  let wish = {
    color: "",
    textAlign: "center",
  };
  function content() {
    if (hours < 12) {
      wish.color = "red";
      return "Good morning";
    }
    if (hours > 12 && hours < 18) {
      wish.color = "green";
      return "Good Afternoon";
    }
    if (hours > 18) {
      wish.color = "blue";
      return "Good Night";
    }
  }
  return (
    <div>
      <h1 style={wish}>
        {content()} - {time}
      </h1>
    </div>
  );
}

export default App;
