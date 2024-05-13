import React, { useState } from "react";

function App(props) {
  const [text, setText] = useState("");

  function handleUpdateText(event) {
    setText(event.target.value);
  }

  return (
    <div>
      <input type="text" onChange={handleUpdateText} />
      <p>{text}</p>
    </div>
  );
}

export default App;
