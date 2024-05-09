function App() {
  // {} 사용해서 간단한 js code 작성 가능
  const v1 = 5;
  const v2 = 10;
  function someAction() {
    return "chae";
  }
  function someAction2(p) {
    return p * p;
  }
  return (
    <>
      <p>{someAction()}</p>
      <p>{someAction2(5)}</p>
      <p>{v1 < 10 ? "small" : "big"}</p>
      <p>{v1 < 3 ? "small" : "big"}</p>
      <p>
        {v1} + {v2} = {v1 + v2}
      </p>
      <p>
        {v1} * {v2} = {v1 * v2}
      </p>
      <p>
        {v1} / {v2} = {v1 / v2}
      </p>
      <p>
        {v1} % {v2} = {v1 % v2}
      </p>
    </>
  );
}

export default App;
