import React from "react";
import axios from "axios";

function App(props) {
  function handleClick200() {
    axios.get("/api/main43/sub1").then((response) => console.log("200응답"));
  }

  function handleClick400() {
    axios
      .get("/api/main43/sub2")
      .then((res) => console.log("400응답"))
      .catch(() => console.log("catch의 메소드, 400응답시"));
  }

  function handleClick404() {
    axios
      .get("/api/main43/sub5")
      .then(() => {
        console.log("404");
      })
      .catch(() => {
        console.log("catch method 400");
      });
  }

  function handleClick500() {
    axios
      .get("/api/main43/sub6")
      .then(() => {})
      .catch(() => {
        console.log("catch method 500");
      });
  }

  return (
    <div>
      <button onClick={handleClick200}>200</button>
      <button onClick={handleClick400}>400</button>
      <button onClick={handleClick404}>404</button>
      <button onClick={handleClick500}>500</button>
    </div>
  );
}

export default App;
