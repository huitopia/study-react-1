import React from "react";
import { Button, ChakraProvider } from "@chakra-ui/react";

function MyComp() {
  return (
    <div>
      <Button sx={{ color: "orange" }} colorScheme={"blue"}>
        click
      </Button>
    </div>
  );
}

function App(props) {
  return (
    <ChakraProvider>
      <MyComp />
    </ChakraProvider>
  );
}

export default App;
