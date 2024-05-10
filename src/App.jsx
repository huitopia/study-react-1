import React from "react";

function App(props) {
  // 배열 [] : 원소를 순서대로 저장한 객체
  const a = [6, 7, 8];
  // 배열 변수에 할당
  const v1 = a[0];
  const v2 = a[1];
  // 구조 분해 할당 : 프로퍼티가 존재하지 않아 순서대로 할당
  const [x, y, z] = a;
  console.log("x > ", x); // 6
  console.log("y > ", y); // 7
  console.log("z > ", z); // 8
  // 연습 1
  const b = ["pizza", 3.14, "lunch"];
  const [x1, x2, x3] = b;
  console.log("x1 > ", x1);
  console.log("x2 > ", x2);
  console.log("x3 > ", x3);
  // 연습 2
  const c = ["name", "email", "phone"];
  const [d1, d2, d3, d4 = "city"] = c;
  console.log("d1 > ", d1);
  console.log("d2 > ", d2);
  console.log("d3 > ", d3);
  console.log("d4 > ", d4);
  return <div></div>;
}

export default App;
