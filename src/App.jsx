import React from "react";

function App(props) {
  return (
    <div>
      <form action="/path" method="POST" encType="multipart/form-data">
        name <input type="text" name={"name"} />
        <br />
        <input type="file" name={"file"} />
        <br />
        <input type="submit" />
      </form>
    </div>
  );
}

export default App;
