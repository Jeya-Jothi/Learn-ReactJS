import React from "react";

let hours = new Date().getHours();
// hours = 1;
const correctHour = hours % 12 === 0 ? 12 : hours % 12;
const minute = new Date().getMinutes();
const meridiem = hours < 12 ? "AM" : "PM";
const time =
  correctHour + ":" + (minute < 10 ? "0" + minute : minute) + "" + meridiem;
let greetings;
let customStyle = {
  color: "",
};
if (hours < 12) {
  greetings = "Good Morning🌺🌼";
  customStyle.color = "red";
} else if (hours > 12 && hours < 18) {
  greetings = "Good Afternoon🌞🌻";
  customStyle.color = "green";
} else {
  greetings = "Good night🌝🌜";
  customStyle.color = "blue";
}
function Greetingtime() {
  return (
    <>
      <h1 style={customStyle}>
        {greetings} {time}
      </h1>
    </>
  );
}
export default Greetingtime;
