import React, { setState } from "react";
function Goals() {
  const [message, setMessage] = setState("");
  let prevmessage = "goaaal";
  useEffect(() => {
   
  }, [])
  
  function Message() {
    setMessage((prevmessage) => prevmessage);
  }
  return (
    <div>
      <button onClick={message}>Shoot</button>
      {message}
    </div>
  );
}
export default Goals;
