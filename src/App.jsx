import React, { useState } from "react";
import axios from "axios";

function App(props) {
  const [result, setResult] = useState();
  function handleClick1() {
    axios.get("/api/main42/sub1").then((res) => {
      console.log(res.data);
    });
  }

  function handleClick2() {
    axios.get("/api/main42/sub2").then((res) => {
      setResult(res.data);
    });
  }

  function handleClick3() {
    axios.get("/api/main42/sub3").then((res) => {
      console.log(res.data.info);
    });
  }

  return (
    <div>
      <button onClick={handleClick1}>응답 받기</button>
      <br />
      <button onClick={handleClick2}>res : {result}</button>
      <br />
      <button onClick={handleClick3}>ResponseBody</button>
    </div>
  );
}

export default App;
