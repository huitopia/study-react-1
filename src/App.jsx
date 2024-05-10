import React from "react";

function App(props) {
  // destructuring assignment
  // (구조) 분해 할당

  // object({}, [])를 분해해서 할당
  const a = {
    name: "chae",
    age: 27,
  };
  // 기존 할당
  const aName = a.name;
  // 구조 분해 할당
  const { name: bName, age: bAge } = a;
  console.log("bName = ", bName);
  console.log("age = ", bAge);
  // 오른쪽항 객체의 프로퍼티명과 할당받는 변수명이 같으면 변수명 생략 가능
  const { name: name, age: age } = a;
  // const {name, age} = a
  console.log("name = ", name);
  console.log("age = ", age);
  return <div></div>;
}

export default App;
