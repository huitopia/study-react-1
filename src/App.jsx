import React from "react";
import axios from "axios";

function App(props) {
  function handleClick1() {
    const obj1 = { name: "chae", age: 7 };
    // const json1 = JSON.stringify(obj1);
    // axios에서 직렬화 해줌
    axios.post("/api/main41/sub1", obj1);
  }

  return (
    <div>
      <button onClick={handleClick1}>json request</button>
    </div>
  );
}

export default App;
