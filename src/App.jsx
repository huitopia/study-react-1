import React, { useState } from "react";

function MyComp1() {
  const [val, setVal] = useState(0);

  function updateVal() {
    // react는 re render 시점을 적절한 순간으로 선택
    setVal(val + 1);
    setVal(val + 1);
    setVal(val + 1);
  }

  return (
    <div>
      <div>{val}</div>
      <div>
        <button onClick={updateVal}>click</button>
      </div>
    </div>
  );
}
function App(props) {
  return (
    <div>
      <MyComp1></MyComp1>
    </div>
  );
}

export default App;
