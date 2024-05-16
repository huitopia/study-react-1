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

  function handleClick401() {
    axios
      .get("/api/main43/sub3")
      .then(() => {})
      .catch((err) => {
        if (err.response.status === 401) {
          console.log("401 요청");
        } else if (err.response.status === 403) {
          console.log("403 요청");
        } else if (err.response.status === 500) {
          console.log("서버 오류");
        }
      });
  }

  function handleClick403() {
    axios
      .get("/api/main43/sub4")
      .then(() => {})
      .catch((err) => {
        if (err.response.status === 401) {
          console.log("401 요청");
        } else if (err.response.status === 403) {
          console.log("403 요청");
        } else if (err.response.status === 500) {
          console.log("서버 오류");
        }
      });
  }
  const handle999 = () => {
    const r = Math.random();
    let path = "";
    if (r > 1 / 3) {
      path = "/api/main43/sub1";
    } else {
      path = "/api/main43/sub4";
    }
    axios
      .get(path)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        const code = err.response.status;
        switch (code) {
          case 401:
            console.log("401");
            break;
          case 403:
            console.log("403");
            break;
        }
      })
      .finally(() => {
        console.log("항상 실행");
      });
  };

  return (
    <div>
      <button onClick={handleClick200}>200</button>
      <button onClick={handleClick400}>400</button>
      <button onClick={handleClick500}>500</button>
      <hr />
      <button onClick={handle999}>응답 코드에 따라 다른 일 하기</button>
      <button onClick={handleClick200}>200</button>
      <button onClick={handleClick401}>401</button>
      <button onClick={handleClick403}>403</button>
    </div>
  );
}

export default App;
