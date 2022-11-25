import React from "react";
function FunctionClick() {
  let message = "Not clicked";
  function clickHandler() {
    message = "clicked";
    console.log("button clicked ");
  }
  return (
    <div>
      <h1>FunctionClick</h1>
      {message}
      <button onClick={clickHandler}>Click</button>
    </div>
  );
}
export default FunctionClick;
