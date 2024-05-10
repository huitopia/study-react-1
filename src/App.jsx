import React from 'react';
function MyButton() {
  return (
    <button
      style={{
        padding: '10px',
        backgroundColor: 'green',
        color: 'white',
      }}
    >
      {props.name}
    </button>
  );
}

// props : properties
// <MyButton name="click3" />
// props: {name: "click3"}
function App(props) {
  return (
    <div>
      <button
        style={{
          padding: '10px',
          color: 'white',
          backgroundColor: 'blue',
        }}
      >
        click1
      </button>
      <br />
      <MyButton name="click2" />
      <br />
      <MyButton name="click3" />
    </div>
  );
}

export default App;
