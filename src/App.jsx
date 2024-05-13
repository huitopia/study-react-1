import React, { useState } from "react";

function MyComp() {
  const [val, setVal] = useState({ name: "son" });
  function updateVal() {
    // state 변경 시 rerender
    // 새 객체 생성하여 set
    val.name = "lee";
    setVal(val);
  }
  return (
    <div>
      {val.name}
      <button onClick={updateVal}>click</button>
    </div>
  );
}

function MyComp2() {
  const [val1, setVla1] = useState({ name: "s" });
  function updateVal2() {
    // object copy => new object
    const { ...newVal } = val1; // 얕은 복사
    newVal.name = "l";
    setVla1(newVal);
  }
  return (
    <div>
      {val1.name}
      <button onClick={updateVal2}>click</button>
    </div>
  );
}

function App(props) {
  return (
    <div>
      <MyComp />
      <MyComp2 />
    </div>
  );
}

export default App;
