import React from "react";

// function Greet() {
//   return <h1>Hello World!</h1>;
// }
const children = "no children available!";
const Greet = ({ name, heroname, children   }) => {
  // console.log(props);
  return (
    <div>
      <h1>
        Greet {name} a.k.a {heroname} {children}
      </h1>
    </div>
  );
};

export default Greet;
