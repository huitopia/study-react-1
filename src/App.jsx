import React, { useState } from "react";

function MyButton({ count, onClick }) {
  return (
    <div>
      <button onClick={onClick}>Up {count}</button>
    </div>
  );
}

function MyBox({ count }) {
  return <div>{count}번 클릭됨</div>;
}

function App(props) {
  const [count, setCount] = useState(0);
  function handleUpCount() {
    setCount(count + 1);
  }
  return (
    <div>
      <MyButton count={count} onClick={handleUpCount} />
      <hr />
      <MyBox count={count} />
    </div>
  );
}

export default App;
