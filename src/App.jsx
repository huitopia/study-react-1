import React from "react";
import axios from "axios";

function App(props) {
  function handleClick200() {
    axios.get("/api/main43/sub1").then((res) => {
      console.log(res);
    });
  }

  function handleClick400() {
    axios
      .get("/api/main43/sub2")
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        if (err.response.status === 400) {
          console.log("잘못된 요청");
        } else if (err.response.status === 404) {
          console.log("존재하지 않는 요청");
        } else if (err.response.status === 500) {
          console.log("서버 오류");
        }
      });
  }

  function handleClick500() {
    axios
      .get("/api/main43/sub6")
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        if (err.response.status === 400) {
          console.log("잘못된 요청");
        } else if (err.response.status === 404) {
          console.log("존재하지 않는 요청");
        } else if (err.response.status === 500) {
          console.log("서버 오류");
        }
      });
  }

  return (
    <div>
      <button onClick={handleClick200}>200</button>
      <button onClick={handleClick400}>400</button>
      <button onClick={handleClick500}>500</button>
    </div>
  );
}

export default App;
