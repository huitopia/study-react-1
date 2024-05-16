import React, { useState } from "react";
import axios from "axios";

function App(props) {
  const [name, setName] = useState();
  const [city, setCity] = useState();
  const [iphone, setIphone] = useState("");
  const [version, setVersion] = useState(0);

  function handleClick1() {
    const obj1 = { name: "chae", age: 7 };
    // const json1 = JSON.stringify(obj1);
    // axios에서 직렬화 해줌
    axios.post("/api/main41/sub1", obj1);
  }

  function handleClick2() {
    const obj2 = {
      name: "chaejjok",
      age: 7,
      apple: ["iPhone", "macBook", "airPod"],
    };
    axios.post("/api/main41/sub2", obj2);
  }

  function handleClick3() {
    const data = {
      // 변수명과 property명이 같을 때 생략 가능
      name,
      city,
    };
    axios.post("/api/main41/sub3", data);
  }

  function handleClick4() {
    const data = {
      iphone: iphone,
      version: version,
    };
    axios.post("/api/main41/sub4", data);
  }

  return (
    <div>
      <button onClick={handleClick1}>json request</button>
      <button onClick={handleClick2}>json request2</button>
      <div>
        <input type="text" onChange={(e) => setName(e.target.value)} />
        <br />
        <input type="text" onChange={(e) => setCity(e.target.value)} />
        <br />
        <button onClick={handleClick3}>input post</button>
      </div>
      <div>
        <input type="text" onChange={(e) => setIphone(e.target.value)} />
        <br />
        <input type="text" onChange={(e) => setVersion(e.target.value)} />
        <br />
        <button onClick={handleClick4}>create</button>
      </div>
    </div>
  );
}

export default App;
