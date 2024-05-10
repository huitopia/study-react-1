import React from "react";

function MyComp(props) {
  console.log("name> ", props.name);
  console.log("somProp> ", props.somProp); // props의 빈 값 true
  console.log("otherProp> ", props.otherProp); // props가 없으면 undefined
  return <div></div>;
}

function App(props) {
  return (
    <div>
      <MyComp name={"son"} age={30} somProp />
    </div>
  );
}
export default App;
