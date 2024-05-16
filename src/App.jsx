import React from "react";
import axios from "axios";

function App(props) {
  // json data type
  function handleClick1() {
    const data = {
      name: "chae",
      age: 7,
      married: false,
      apple: {
        iphone: "pro",
        macBook: "pro",
      },
      food: ["마라탕", "엽떡", "술"],
      house: null,
    };
    axios.post("/api/main41/sub5", data);
  }

  function handleClick2() {
    axios.post("/api/main41/sub6", { name: "chae", age: 7 });
  }

  function handleClick3() {
    axios.post("/api/main41/sub7", { name: "chch", age: 27 });
  }

  return (
    <div>
      <button onClick={handleClick1}>json data request</button>
      <br />
      <button onClick={handleClick2}>json data request</button>
      <br />
      <button onClick={handleClick3}>json data request</button>
    </div>
  );
}

export default App;
