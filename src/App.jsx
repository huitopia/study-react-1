import React, { createContext, useContext, useState } from "react";
// step 1: create the context
const MessageContext = createContext("");

function MyBox() {
  // step 2: use the context
  const message = useContext(MessageContext);
  return <div>{message}</div>;
}

function MySection() {
  return <MyBox />;
}

function MyContainer() {
  return <MySection />;
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
      <MessageContext.Provider value={message}>
        <MyContainer />
      </MessageContext.Provider>
    </div>
  );
}

export default App;
