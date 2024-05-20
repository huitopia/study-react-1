import React from "react";
import { Box, Button, ChakraProvider } from "@chakra-ui/react";

function MyComp() {
  function handleButtonClick(e) {
    e.stopPropagation();
    console.log("button clicked!");
  }

  function handleBoxClick() {
    console.log("box clicked!");
  }

  return (
    <Box onClick={handleBoxClick} w={"100px"} h={"100px"} bgColor={"orange"}>
      <Button onClick={handleButtonClick}>click</Button>
    </Box>
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
