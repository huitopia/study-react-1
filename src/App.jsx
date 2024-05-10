import React from "react";

function MyComponent(props) {
  return <div></div>;
}
function App(props) {
  // props 명명 규칙 lowerCamelCase 작성 ex) pageNumber
  // 예약어 사용 불가 ex) let, class -> className, for -> htmlFor ...
  return (
    <div>
      <p>Lorem ipsum dolor.</p>
      <MyComponent number={3} pageNumber={2} />
    </div>
  );
}

export default App;
