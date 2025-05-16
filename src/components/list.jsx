import React from "react";
import pi, { doublePi, triplePi } from "./math";

function List() {
  return (
    <>
      <ul>
        <li>{pi}</li>
        <li>{doublePi()}</li>
        <li>{triplePi()}</li>
      </ul>
    </>
  );
}
export default List;
