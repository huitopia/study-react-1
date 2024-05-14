import React, { createContext, useContext, useState } from "react";
// step 1: create the context
const MessageContext = createContext("");

function MyBox({ message }) {
  // step 2: use the context
  const message = useContext(MessageContext);
  return <div>{message}</div>;
}

function MySection({ message }) {
  return <MyBox message={message} />;
}

function MyContainer({ message }) {
  return <MySection message={message} />;
}

function App(props) {
  const [message, setMessage] = useState();
  function handleMessage(event) {
    setMessage(event.target.value);
  }
  return (
    <div>
      <input type="text" onChange={handleMessage} />
      <p>{message}</p>
      <hr />
      <MyContainer message={message} />
    </div>
  );
}

export default App;
