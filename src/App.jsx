function App() {
  const a = 7;
  const b = 3;

  // && : all true => true
  const c = a > 10 && b > 0; // false
  const d = a < 10 && b > 0; // true
  console.log("c = ", c, ", d = ", d);
  // || : all false => false
  const e = a > 10 || b > 0; // true
  const f = a < 5 || b > 10; // false
  console.log("e = ", e, ", f = ", f);
  // && (and) : 왼쪽 항이 true 면 오른쪽 항 반환
  const g = a < 10 && "hello";
  console.log("g = ", g); // "hello"
  const h = a > 10 && "hello";
  console.log("h = ", h); // false
  // || (or) : 왼쪽 항이 false 면 오른쪽 항 반환
  const i = a < 10 || "hi";
  const j = a < 5 || "hi";
  console.log("i = ", i);
  console.log("j = ", j);

  return (
    <>
      <p></p>
    </>
  );
}

export default App;
