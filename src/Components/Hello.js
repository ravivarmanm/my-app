import React from "react";
const Hello = ({ name }) => {
  //   return (
  //     <div>
  //       <h1>Hello World!</h1>
  //     </div>
  //   );
  return React.createElement(
    "div",
    { id: 1, className: "dummy" },
    React.createElement("h1", null, name)
  );
};
export default Hello;
