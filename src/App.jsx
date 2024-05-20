import React from "react";
import { Button, ChakraProvider } from "@chakra-ui/react";
import { SunIcon } from "@chakra-ui/icons";

function App(props) {
  return (
    <ChakraProvider>
      <div>
        <Button leftIcon={<SunIcon />}>hi</Button>
      </div>
    </ChakraProvider>
  );
}

export default App;
