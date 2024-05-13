import React, { useState } from "react";

function MyComp1() {
  const [val1, setVal1] = useState([]);

  function addItem() {
    val1.push("a");
    setVal1(val1);
  }

  return (
    <div>
      <div>{val1}</div>
      <div>
        <button onClick={addItem}>Add</button>
      </div>
    </div>
  );
}

function MyComp2() {
  const [val2, setVal2] = useState([]);
  function addItem() {
    // 상태가 객체면 새 객체로 복사하여 사용
    const [...newVal] = val2;
    newVal.push("b");
    setVal2(newVal);
  }
  return (
    <div>
      <div>{val2}</div>
      <div>
        <button onClick={addItem}>Add</button>
      </div>
    </div>
  );
}

function App(props) {
  return (
    <div>
      <MyComp1 />
      <MyComp2 />
    </div>
  );
}

export default App;
