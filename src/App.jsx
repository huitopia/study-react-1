import React from "react";

function MyElem(props) {
  console.log(props);
  const { name, age } = props;
  console.log("name > ", name);
  console.log("age > ", age);
  return <div>{props.name}</div>;
}
function App(props) {
  return (
    <div>
      <MyElem name="k" age={20} />
    </div>
  );
}

export default App;
