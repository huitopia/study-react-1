import React, { useState } from "react";

function MyComp() {
  const [val, setVal] = useState(0);
  console.log("re render");
  return (
    <div>
      <button onClick={() => setVal(val + 1)}>click</button>
    </div>
  );
}

function App(props) {
  return (
    <div>
      <MyComp />
    </div>
  );
}

export default App;
