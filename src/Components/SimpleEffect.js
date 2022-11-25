import React, { useEffect, useState } from "react";
function SimpleEffect() {
  const [text, nxtText] = useState("posts");
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${text}`)
      .then((response) => response.json())
      .then((json) => setItems(json));
  }, [text]);
  // const handleResize = () => {
  //   SetWindowWidth(window.innerWidth);
  // };
  // const [windowidth, SetWindowWidth] = useState(window.innerWidth);
  // useEffect(() => {
  //   window.addEventListener("resize", handleResize);
  // }, [windowidth]);

  return (
    <div>
      <button onClick={() => nxtText("posts")}>Posts</button>
      <button onClick={() => nxtText("Users")}>Users</button>
      <button onClick={() => nxtText("Comments")}>Comments</button>
      <div>
        <h3>{text}</h3>

        {items.map((item) => {
          return <pre>{JSON.stringify(items)}</pre>;
        })}
      </div>
      {/* {windowidth} */}
    </div>
  );
}
export default SimpleEffect;
