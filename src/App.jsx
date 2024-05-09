function App() {
  /*
  falsy(false 같은)
    false, 0, "", null, undefined, Nan
  */
  const a = 0;
  if (a) {
    console.log("a는 참이다");
  } else {
    console.log("a는 거짓이다");
  }
  /*
  truthy(true 같은)
    falsy 가 아니면 truthy
  */

  let b = 0;
  // 앞이 false 니까 false 로 결정
  let c = b && "값이 있음";
  console.log(c);

  let d = b || "값이 없음";
  console.log(d);

  return <></>;
}
export default App;
