import React from "react";
import { ChakraProvider } from "@chakra-ui/react";

function App(props) {
  // use... : hook
  // if / for 내에서 사용 X
  return (
    <ChakraProvider>
      <div></div>
    </ChakraProvider>
  );
}

export default App;
