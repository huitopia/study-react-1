import React from "react";
import axios from "axios";

function App(props) {
  function handleClickButton1() {
    // get request
    axios.get("/api/someurl");
  }

  function handleClickButton2() {
    axios.post("/api/someurl");
  }

  return (
    <div>
      <button onClick={handleClickButton1}>get</button>
      <button onClick={handleClickButton2}>post</button>
    </div>
  );
}

export default App;
