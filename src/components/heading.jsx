import React from "react";

function Heading() {
  const customStyle = {
    color: "orange",
    fontSize: "30px",
    border: "1px dashed black",
  };

  customStyle.color = "blue"; // if something happens, it will change it's color to blue.
  return (
    <>
      <h1 style={customStyle}>My Favourite Foods</h1>
    </>
  );
}
export default Heading;
