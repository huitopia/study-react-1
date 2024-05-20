import React from "react";
import { Button, ButtonGroup, ChakraProvider } from "@chakra-ui/react";

function App(props) {
  return (
    <ChakraProvider>
      <div>
        <div>size="sm"</div>
        <ButtonGroup size="sm">
          <Button colorScheme={"yellow"}>Button</Button>
          <Button colorScheme={"red"}>Lorem.</Button>
          <Button colorScheme={"orange"}>Facilis.</Button>
          <Button colorScheme={"teal"}>Eum.</Button>
          <Button colorScheme={"blue"}>Officia.</Button>
          <Button colorScheme={"cyan"}>Eius.</Button>
          <Button colorScheme={"gray"}>Doloribus.</Button>
        </ButtonGroup>
        <hr />
        <Button colorScheme={"blue"} isLoading={true}>
          Lorem
        </Button>
        <hr />
        <Button variant="outline" colorScheme="blue">
          Save
        </Button>
      </div>
    </ChakraProvider>
  );
}

export default App;
