import React from "react";
import { add, subtract, multiply, divide } from "./calculator";
function List() {
  return (
    <>
      <ul>
        <li>{add(1, 2)}</li>
        <li>{subtract(8, 5)}</li>
        <li>{multiply(5, 5)}</li>
        <li>{divide(10, 2)}</li>
      </ul>
    </>
  );
}
export default List;
