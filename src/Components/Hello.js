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
// const { name, heroname } = this.props;
export default Hello;
