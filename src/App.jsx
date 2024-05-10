import React from "react";

function MyComp(props) {
  return <div></div>;
}

function App(props) {
  return (
    <div>
      {/* props의 값 타입은 js 값 타입이며 String만 중괄호 생략 가능 */}
      <MyComp
        name="son"
        age={3.14}
        address={{ city: "seoul", country: "USA" }}
        foods={["pizza", "coffee"]}
        married={true}
        action={function () {
          alert("hi");
        }}
        someAction={() => alert("hello")}
      />
    </div>
  );
}

export default App;
