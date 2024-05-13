import React from "react";
import { action1, action2, action3, MyComp } from "./MyComps.jsx";
import { HerComp } from "./HerComp.jsx";

function App(props) {
  action1();
  action2();
  action3();
  return (
    <div>
      <MyComp />
      <HerComp />
    </div>
  );
}

export default App;
