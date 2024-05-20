import React from "react";

function App(props) {
  function handleLinkClick(e) {
    e.preventDefault(); // 기본 이벤트 동작 막기
    //
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log("동작 코드");
  }

  return (
    <div>
      <a href="https://www.naver.com" onClick={handleLinkClick}>
        {" "}
        네이버{" "}
      </a>
      <hr />
      <form action="https://www.naver.com" onSubmit={handleSubmit}>
        <input type="text" />
        <button>go</button>
      </form>
    </div>
  );
}

export default App;
