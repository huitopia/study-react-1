import React from "react";
// import : 다른 파일에 있는 변수를 현재 파일에서 사용
import { value1, value2 } from "./MyValues.jsx";

function App(props) {
  return (
    <div>
      <p>{value1}</p>
      <p>{value2}</p>
    </div>
  );
}

export default App;
