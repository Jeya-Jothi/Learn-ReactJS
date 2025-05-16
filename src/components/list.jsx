import React from "react";
import * as pi from "./math";

function List() {
  console.log(pi);
  return (
    <>
      <ul>
        <li>{pi.default}</li>
        <li>{pi.doublePi()}</li>
        <li>{pi.triplePi()}</li>
      </ul>
    </>
  );
}
export default List;
