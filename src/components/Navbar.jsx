import { useEffect, useState } from "react";

function Navbar() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  function check() {
    const currnetHour = new Date().getHours();
    if (currnetHour < 12) {
      return "🌞 Good Morning";
    } else if (currnetHour > 12 && currnetHour < 18) {
      return "🌤️ Good Afternoon";
    } else return "🌜 Good Night";
  }

  return (
    <div className="navbar">
      <div>
        <p className="logo">
          Quotes<span>card.</span>
        </p>
      </div>
      <div className="right-bar">
        <div>
          <p className="wish">{check()}</p>
        </div>
        <div>
          <p className="time">{time}</p>
        </div>
      </div>
    </div>
  );
}
export default Navbar;
