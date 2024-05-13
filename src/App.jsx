import React from "react";
// default export는 아무 이름으로 중괄호 없이 import 가능
import val, { v1 } from "./MyValues.jsx";
import someVal from "./MyComps.jsx";

function App(props) {
  return (
    <div>
      <div>{v1}</div>
      <div>{val}</div>
      <div>{someVal}</div>
    </div>
  );
}

export default App;
