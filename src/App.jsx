import React from "react";

function App(props) {
  /*
  JSON
    JavaScript 객체 작성법을 빌린 Text(문자열) 형식의 데이터
    String, Number, Boolean, Object, Array, null
    직렬화(stringify, encode) : 객체 -> JSON(문자열)
    역직렬화(parse, decode) : JSON(문자열) -> 객체
  */
  // encode
  const obj1 = {
    name: "chae",
    age: 27,
  };
  const json1 = `{
    "name": "chae",
    "age": 27,
  }`;

  const obj2 = { name: "chae", age: 7 };
  const json2 = JSON.stringify(obj2);
  console.log("json1: ", json1);
  console.log("json2: ", json2);
  return <div></div>;
}

export default App;
