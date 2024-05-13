import React, { useState } from "react";

function MyCounter() {
  const [count, setCount] = useState(0);
  function upCount() {
    setCount(count + 1);
  }
  return (
    <div>
      <div>
        <button onClick={upCount}>증가</button>
        {count}
      </div>
    </div>
  );
}

function App(props) {
  return (
    <div>
      <MyCounter />
    </div>
  );
}

export default App;
