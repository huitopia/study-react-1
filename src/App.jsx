import React from "react";

function MyComp({ name, age, children }) {
  return (
    <div>
      <ul>
        <li>{name}</li>
        <li>{age}</li>
      </ul>
      {children}
    </div>
  );
}
function App(props) {
  return (
    <div>
      <MyComp name={"son"} age={33}>
        {/* content는 children porp*/}
        <p>Lorem ipsum dolor.</p>
      </MyComp>
      <MyComp name={"lee"} age={22}>
        <ul>
          <li>Lorem.</li>
          <li>Quibusdam!</li>
        </ul>
      </MyComp>
    </div>
  );
}

export default App;
