import React from "react";
import axios from "axios";

function App(props) {
  function handleClick1() {
    axios.get("/api/main42/sub1").then((res) => {
      console.log(res.data);
    });
  }

  function handleClick2() {
    axios.get("/api/main42/sub2").then((res) => {
      console.log(res.data);
    });
  }

  return (
    <div>
      <button onClick={handleClick1}>응답 받기</button>
      <br />
      <button onClick={handleClick2}>res</button>
    </div>
  );
}

export default App;
