import React from "react";
import axios from "axios";

function App(props) {
  function handleClickButton1() {
    // get request
    axios.get("/api/someurl");
  }

  function handleClickButton2() {
    axios.post("/api/someurl");
  }

  function handleClickButton3() {
    axios.get("/api/someurl2");
  }

  function handleClickButton4() {
    axios.post("api/someurl2");
  }

  function handleClickButton5() {
    const params = new URLSearchParams();
    params.append("id", 3);
    params.append("name", "k");
    params.append("email", "k@k.com");
    axios.get(`/api/someurl3?${params}`);
  }

  function handleClickButton6() {
    const params = new URLSearchParams({
      name: "son",
      age: 2,
    });
    axios.post(`/api/someurl3?${params}`);
  }

  return (
    <div>
      <div>
        <button onClick={handleClickButton1}>get</button>
        <button onClick={handleClickButton2}>post</button>
      </div>
      <div>
        <button onClick={handleClickButton3}>get2</button>
        <button onClick={handleClickButton4}>post2</button>
      </div>
      <div>
        <button onClick={handleClickButton5}>get query string</button>
        <button onClick={handleClickButton6}>post data</button>
      </div>
    </div>
  );
}

export default App;
