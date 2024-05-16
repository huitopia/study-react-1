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

  function handleClickBtn1() {
    axios.get("/api/someurl2");
  }

  function handleClickBtn2() {
    axios.post("api/someurl2");
  }

  return (
    <div>
      <div>
        <button onClick={handleClickButton1}>get</button>
        <button onClick={handleClickButton2}>post</button>
      </div>
      <div>
        <button onClick={handleClickBtn1}>get2</button>
        <button onClick={handleClickBtn2}>post2</button>
      </div>
    </div>
  );
}

export default App;
