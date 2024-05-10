import React from "react";
import { Button, ChakraProvider } from "@chakra-ui/react";

const App = () => {
  return (
    <ChakraProvider>
      <div>
        <Button variant="outline" colorScheme={"red"}>
          Click
        </Button>
        <Button colorScheme={"orange"}>Click</Button>
        <Button colorScheme={"yellow"}>Click</Button>
        <Button colorScheme={"green"}>Click</Button>
        <Button colorScheme={"cyan"}>Click</Button>
        <Button colorScheme={"blue"}>Click</Button>
        <Button colorScheme={"purple"}>Click</Button>
      </div>
    </ChakraProvider>
  );
};

export default App;
