import React from "react";

function Heading() {
  const customStyle = {
    color: "orange",
    fontSize: "30px",
    border: "1px dashed black",
  };
  return (
    <>
      <h1 style={customStyle}>My Favourite Foods</h1>
    </>
  );
}
export default Heading;
