import React from "react";

function MyComp({ headColor, bodyColor }) {
  return (
    <div>
      <h1
        style={{
          color: headColor,
        }}
      >
        Lorem.
      </h1>
      <p
        style={{
          color: bodyColor,
        }}
      >
        Lorem ipsum dolor sit amet.
      </p>
    </div>
  );
}
function App(props) {
  return (
    <div>
      <MyComp headColor={"green"} bodyColor={"blue"} />
    </div>
  );
}

export default App;
