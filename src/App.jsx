function App() {
  const myTag = <h1>hello</h1>;
  const val1 = "채채";

  // {} : jsx 내에서 javascript 코드 사용 법
  // boolean, null, undefined 출력 불가능
  // array [2, 3] 은 값(23)만 출력
  // object 사용 시 property 명 작성하여 값만 출력
  return (
    <>
      <div>{myTag}</div>
      <div>{val1}</div>
    </>
  );
}

export default App;
