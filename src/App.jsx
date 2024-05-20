import React from "react";

function App(props) {
  const names = ["k", "m", "l", "n", "o"];

  // 배열을 map 메소드 사용해서 컴포넌트들을 만들 때
  // key prop을 사용해서 효율성을 높일 것
  // key prop의 값은 주로 primary key 가 사용됨
  return (
    <div>
      {names.map((name) => (
        <li key={1}>{name}</li>
      ))}
    </div>
  );
}

export default App;
