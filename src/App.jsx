import React, { createContext, useContext, useState } from "react";

const TextContext = createContext("");
function MyInput() {
  const textHandler = useContext(TextContext);
  return (
    <div>
      <input type="text" onChange={textHandler.handleText} />
      <p>{textHandler.text}</p>
    </div>
  );
}

function MyText() {
  const textHandler = useContext(TextContext);
  return (
    <div>
      <p>{textHandler.text}</p>
    </div>
  );
}

function App(props) {
  const [text, setText] = useState();
  function handleText(e) {
    setText(e.target.value);
  }
  return (
    <div>
      <TextContext.Provider value={{ text, handleText }}>
        <MyInput />
        <MyText />
      </TextContext.Provider>
    </div>
  );
}

export default App;
