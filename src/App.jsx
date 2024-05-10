import React from "react";

function App(props) {
  const action1 = () => {
    alert("arrow function!");
  };
  function action2() {
    alert("function");
  }
  const action3 = function () {
    alert("anonymous function1");
  };
  return (
    <div>
      {/* action1() 함수명이 아닌 함수 자체를 기재 */}
      <button onClick={action1}>click!</button>
      <button onClick={action2}>click!</button>
      <button onClick={action3}>click!</button>
      <button
        onClick={function () {
          alert("anonymous function2");
        }}
      >
        click!
      </button>
    </div>
  );
}

export default App;
