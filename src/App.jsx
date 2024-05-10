import React from "react";

function App(props) {
  const a = {
    name: "J",
    age: 33,
    address: {
      street: "Lorem Ipsum",
      city: "seoul",
    },
  };
  const { ...b } = a;
  // 얕은 복사(shallow copy) : 상위 프로퍼티 복사
  b.age = 44;
  console.log("b.age> ", b.age); // 44
  console.log("a.age> ", a.age); // 33
  // address : 객체지만 참조 값을 가지고 있음
  // b로 복사를 해도 b와 a는 같은 address를 갖고 있음
  b.address.city = "busan";
  console.log("a.address.city > ", a.address.city); // busan
  console.log("b.address.city > ", b.address.city); // busan
  // 깊은 복사(deep copy)
  return <div></div>;
}

export default App;
