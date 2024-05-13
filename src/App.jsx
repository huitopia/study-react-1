import React, { useState } from "react";

function App(props) {
  const [person, setPerson] = useState({
    name: "",
    address: "",
    city: "",
    email: "",
  });

  function handleUpdateName(e) {
    const { ...nextPerson } = person;
    nextPerson.name = e.target.value;
    setPerson(nextPerson);
  }

  function handleUpdateEmail(e) {
    const nextPerson = { ...person, city: e.target.value };
    setPerson(nextPerson);
  }
  function handleUpdateCity(e) {
    const { ...nextPerson } = person;
    nextPerson.city = e.target.value;
    setPerson(nextPerson);
  }
  function handleUpdateAddress(e) {
    const { ...nextPerson } = person;
    nextPerson.address = e.target.value;
    setPerson(nextPerson);
  }

  return (
    <div>
      <div>
        <input type="text" placeholder={"name"} onChange={handleUpdateName} />
      </div>
      <div>
        <input
          type="email"
          placeholder={"email"}
          onChange={handleUpdateEmail}
        />
      </div>
      <div>
        <input type="text" placeholder={"city"} onChange={handleUpdateCity} />
      </div>
      <div>
        <input
          type="text"
          placeholder={"address"}
          onChange={handleUpdateAddress}
        />
      </div>
      <ul>
        <li>name: {person.name}</li>
        <li>email: {person.email}</li>
        <li>city: {person.city}</li>
        <li>address: {person.address}</li>
      </ul>
    </div>
  );
}

export default App;
