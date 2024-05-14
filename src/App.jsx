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
// # context 과용하지 말 것
// 1. prop 전달 부터 시작할 것
// 2. 주로 theme, 현재 계정정보, routing 등에 사용됨
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
