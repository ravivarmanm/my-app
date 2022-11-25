import React, { useState, useEffect } from "react";
function SimpleButton() {
  const [count, setCount] = useState(0);
  //   const [state, setState] = useState({ count: 4, color: "red" });
  //  const [counter, setCounter] = useState(5);
  //   const color = state.color;
  //   const count = state.count;
  function decrementCount() {
    // setState((prevState) => {
    //   return { ...prevState, count: count <= 0 ? 0 : count - 1 };
    // });

    setCount((prevcount) => prevcount - 1);
    // setCount((prevcount) => prevcount - 1);
  }
 

  function incrementCount() {
    setCount((prevcount) => prevcount + 1);
  }
  return (
    <div>
      <button onClick={decrementCount}>-</button>
      <span>{count}</span>
      {/* <span>{color}</span> */}
      <button onClick={incrementCount}>+</button>
    </div>
  );
}
export default SimpleButton;
