import React, { useState } from "react";

function MyBox({ message }) {
  return <div>{message}</div>;
}

function MySection({ message }) {
  return (
    <div>
      <MyBox message={message} />
    </div>
  );
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
