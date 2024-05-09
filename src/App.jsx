import React from "react";

function App(props) {
  const a = ["L", "K", "J"];
  const b = a.map(function (item) {
    return item + "team";
  });
  const c = a.map(function (item) {
    return <li>{item}</li>;
  });
  return (
    <div>
      {b[0]},{c}
    </div>
  );
}

export default App;
