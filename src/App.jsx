import React, { useState } from "react";

function MyComponent() {
  return (
    <ul>
      <li>{list}</li>
    </ul>
  );
}

function App(props) {
  const [text, setText] = useState("");
  const [list, setList] = useState([]);

  function handleUpdateText(e) {
    setText(e.target.value);
  }

  function handleUpdateList() {
    const [...newList] = list;
    newList.push(text);
    setList(newList);
  }

  return (
    <div>
      <input type="text" onChange={handleUpdateText} value={text} />
      <button onClick={handleUpdateList}>Add</button>
      <ul>
        {list.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
