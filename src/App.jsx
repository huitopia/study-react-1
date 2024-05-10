import React from "react";

function MyComp({ name, age, team = "무소속" }) {
  return (
    <div>
      <ul>
        <li>이름 : {name}</li>
        <li>age : {age}</li>
        <li>team : {team}</li>
      </ul>
    </div>
  );
}
function App(props) {
  return (
    <div>
      <MyComp name="k" age={30} team="jj" />
    </div>
  );
}

export default App;
