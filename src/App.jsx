import React, { useEffect, useState } from "react";

function App(props) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("mount");
  }, []);

  useEffect(() => {
    console.log("count Change");
    // dependency 가 변경되지 않도록 주의
    // setCount(count+1)
  }, [count]);
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>click {count}</button>
    </div>
  );
}

export default App;
