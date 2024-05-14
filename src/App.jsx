import React from "react";
import axios from "axios";

function App(props) {
  const handleClick = () => {
    console.log("button click");
    // get request
    // first parameter : request path
    axios.get("/someurl");
    // post request
    // axios.post();
  };
  const handleClick2 = () => {
    const qs = "name=s&age22&city=서울";
    axios.get("/path?" + qs);
  };

  function handleClick3() {
    const qs = new URLSearchParams();
    qs.append("age", 33);
    qs.append("name", "ki");
    qs.append("city", "seoul");
    axios.get("path3?" + qs.toString());
  }

  return (
    <div>
      <div>
        <button onClick={handleClick}>get req</button>
      </div>
      <div>
        <button onClick={handleClick2}>get req query</button>
      </div>
      <div>
        <button onClick={handleClick3}>get req query</button>
      </div>
    </div>
  );
}

export default App;
