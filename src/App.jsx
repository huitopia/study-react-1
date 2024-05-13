import React from "react";
import { Badge, Button, ChakraProvider } from "@chakra-ui/react";

function App(props) {
  return (
    <ChakraProvider>
      <div>
        <Button colorScheme={"blue"}>click</Button>
        <Button colorScheme={"green"}>
          notice<Badge>new</Badge>
        </Button>
      </div>
    </ChakraProvider>
  );
}

export default App;
