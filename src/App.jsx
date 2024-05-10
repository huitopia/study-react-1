import React from "react";

function App(props) {
  // destructuring assignment
  const person = {
    name: "J",
    email: "j@example.com",
    address: "127.0.0.1",
  };

  const { name, email } = person;
  console.log("name > ", name);
  console.log("email > ", email);

  const car = {
    model: "genesis",
    company: "hyundai",
    price: 500,
  };
  const { model, company, color } = car;
  console.log("model> ", model);
  console.log("color> ", color); // undefined

  const house = {
    city: "seoul",
    country: "us",
  };
  // 값이 undefined 면 기본 값 출력
  const { city, country, area = 987 } = house;
  console.log("city > ", city);
  console.log("area > ", area);
  return <div></div>;
}

export default App;
