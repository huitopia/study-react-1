import React from "react";
import axios from "axios";

function App(props) {
  return (
    <div>
      <button onClick={() => axios.get("/api/main43/sub1")}>200</button>
      <button onClick={() => axios.get("/api/main43/sub2")}>400</button>
      <button onClick={() => axios.get("/api/main43/sub3")}>403</button>
      <button onClick={() => axios.get("/api/main43/sub4")}>401</button>
      <button onClick={() => axios.get("/api/main43/sub5")}>404</button>
      <button onClick={() => axios.get("/api/main43/sub6")}>500</button>
    </div>
  );
}

export default App;
