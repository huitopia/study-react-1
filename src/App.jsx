import React from "react";

function App(props) {
  // object({}, [])
  const a = [6, 7, 8];
  const [x, y, z] = a;
  console.log("x>", x);
  console.log("y>", y);
  console.log("z>", z);

  // 나머지 모두 (...)
  const [s, ...t] = a;
  console.log("s>", s); // 6
  console.log("t>", t); // [7, 8]
  console.log("t[0]>", t[0]); // 7
  console.log("t[1]>", t[1]); // 8

  // 나머지 모두로 배열 복사 가능
  const [...b] = a; // 각 원소를 새 배열에 복사 (참조값 복사 X)
  console.log("b> ", b); // [6,7,8]
  return <div></div>;
}

export default App;
