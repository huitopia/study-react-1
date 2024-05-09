function App() {
  // Array
  const a = [];
  // push : 새 값을 배열 맨 뒤에 추가
  a.push(1);
  a.push(2);
  console.log("push: ", a); // [1, 2]
  // pop : 맨 뒤의 값을 제거 후 리턴
  a.pop();
  console.log("pop: ", a); // [1]
  // map : 각 원소를 다른 값으로 매핑
  const b = [5, 4, 3, 2, 1];
  console.log("b: ", b); // [5, 4, 3, 2, 1]

  const action = (param) => {
    return param * 2;
  };
  const c = b.map(action);
  console.log("b: ", b); // [5, 4, 3, 2, 1]
  console.log("c: ", c); // [10, 8, 6, 4, 2]

  const d = b.map(function (param) {
    return param * 3;
  });
  console.log("d: ", d); // [15, 12, 9, 6, 3]
  return <div></div>;
}

export default App;
