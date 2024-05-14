import React, { useEffect, useState } from "react";

function MyComp() {
  // 특정 순간에 실행되는 메소드를 파라미터로 받음
  //  ex) initial render(mount), re-render, state change, tree component unmount 때
  // 첫 번째 파라미터 : 실행되는 메소드
  // 두 번째 파라미터 : dependency(특정 순간)
  // 두 번째 파라미터가 존재하지 않을 때 : 렌더링 될 때 마다 실행
  useEffect(() => {
    console.log("re-render");
  });
  // 두 번째 파라미터에 빈 배열을 넣으면 initial rendering 때 실행
  useEffect(() => {
    console.log("first render");
  }, []);
  // 첫 번째 파라미터(함수)의 리턴은 unmount 될 때 실행
  useEffect(() => {
    return () => {
      console.log("start method when unmount ");
    };
  }, []);
  const [text1, setText1] = useState();
  const [text2, setText2] = useState();
  // 두번째 파라미터(배열의 원소)
  // 어떤 값(주로 state, dependency) 이 변경될 때
  useEffect(() => {
    console.log("text1 change");
  }, [text1]);
  useEffect(() => {
    console.log("text2 change");
  }, [text2]);
  useEffect(() => {
    console.log("text1, text2 change");
  }, [text1, text2]);
  const [count, setCount] = useState(0);
  return (
    <div>
      hello comp
      <button onClick={() => setCount(count + 1)}>click {count}</button>
      <div>
        <input type="text" onChange={(e) => setText1(e.target.value)} />
      </div>
      <div>
        <input type="text" onChange={(e) => setText2(e.target.value)} />
      </div>
    </div>
  );
}

function App(props) {
  const [show, setShow] = useState(true);
  return (
    <div>
      <input
        type="checkbox"
        checked={show}
        onChange={(e) => setShow(e.target.checked)}
      />
      {show && <MyComp />}
    </div>
  );
}

export default App;
