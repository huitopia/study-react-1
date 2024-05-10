import React from "react";

function App(props) {
  // object({}, [])
  // 나머지 모두 (rest property)
  // ... 변수명

  const a = {
    name: "J",
    email: "j@example.com",
    password: 1234,
    address: "sinchon",
  };
  const { name, email, ...b } = a;
  console.log("name > ", name);
  console.log("email > ", email);
  // console.log("password > ", password); //password is not defined
  console.log("b.password > ", b.password);
  console.log("b.address > ", b.address);
  const c = {
    city: "seoul",
    country: "US",
    price: 500,
    category: "food",
  };
  const { price, ...d } = c;
  console.log("price > ", price);
  console.log("d.city > ", d.city);
  console.log("d.country > ", d.country);
  console.log("d.category > ", d.category);
  return <div></div>;
}

export default App;
