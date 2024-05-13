import React from "react";
// import : 다른 파일에 있는 변수를 현재 파일에서 사용
//  다른 파일의 같은 변수를 import 할 때 as로 다른 별칭 부여 가능
import { value1, value2, value3 as v3 } from "./MyValues.jsx";
import { myAddress, myStr } from "./MyComps.jsx";

function App(props) {
  return (
    <div>
      <p>{value1}</p>
      <p>{value2}</p>
      <p>{v3}</p>
      <p>{myStr}</p>
      <p>{myAddress}</p>
    </div>
  );
}

export default App;
