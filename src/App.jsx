import React from 'react';
function MyComp(props) {
  return (
    <div>
      <p>{props.name}</p>
      <p>{props.age}</p>
      <p>{props.address}</p>
      <p>{props.city}</p>
      <p>{props.country}</p>
    </div>
  );
}

function App(props) {
  return (
    <div>
      <MyComp name="k" age={33} address="seoul"></MyComp>
      <MyComp city="busan" country="USA"></MyComp>
    </div>
  );
}

export default App;
