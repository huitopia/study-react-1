import React, { useState } from "react";

const foods = ["pizza", "pasta", "ramen", "taco", "coffee"];
function App(props) {
  const [index, setIndex] = useState(0);
  const food = foods[index];

  let count = 0;
  function beforeClick() {
    if (index <= 0) {
      count = 0;
    } else {
      count = 1;
    }
    setIndex(index - count);
  }
  function nextClick() {
    if (index == food.length) {
      count = 0;
    } else {
      count = 1;
    }
    setIndex(index + count);
  }
  return (
    <div>
      <button onClick={beforeClick}>이전</button>
      <button onClick={nextClick}>다음</button>
      <div>{food}</div>
    </div>
  );
}

export default App;
