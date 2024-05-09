function App() {
  // object : {}
  //   {} 안에 property 명 : property 값 쌍들이 작성됨
  let a = {};
  let b = { name: "흥민" };
  let c = { address: "sinchon", city: "seoul", country: "korea" };
  a = { b, c };
  console.log(a);
  console.log(b);
  return <div></div>;
}
export default App;
