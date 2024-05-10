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

  // 연습 : 객체 복사
  const d = ["pizza", "son", 66];
  // 1. 참조값 복사
  const e = d;
  // 2. 각 원소를 복사해서 새 배열 생성
  const { ...f } = d;
  e[2] = 88;
  console.log("e[2]> ", e[2]); // 88
  console.log("f[2]> ", f[2]); // 66

  return <div></div>;
}

export default App;
