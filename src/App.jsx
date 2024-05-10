import React from "react";

function App(props) {
  // function : 함수

  // 1. 이름 있는 함수
  function action1(param1, param2) {
    // 명령문들...
    return 2;
  }
  // 2. 이름 없는 함수
  const v = function (param1, param2) {
    return 99;
  };
  // 3. arrow function
  // 타입 변수명 = 파라미터 목록 => {명령문};
  const a = () => {};
  // 3.1. 파라미터&명령문 1개 이상
  const b1 = (p1, p2, p3) => {
    // 명령문 1
    // 명령문 2
  };
  // 3.2 파라미터가 없고, 명령문이 1개 이상
  const b2 = () => {
    // 명령문...
  };
  // 3.3 파라미터가 1개, 명령문이 1개 이상
  //  파라미터가 1개일때 () 미사용 허용
  const b3 = (p1) => {
    // 명령문...
  };
  // 3.4 명령문 1개
  //  중괄호 생략 가능
  const c1 = () => {
    console.log("명령문이 1개");
  };
  const c2 = () => console.log("명령문이 1개");
  // 리턴문
  const d1 = () => "중괄호 생략시 값이 리턴됨";
  const d2 = () => {
    return "중괄호 생략시 값이 리턴됨";
  };
  return <div></div>;
}

export default App;
