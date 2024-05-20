import React from "react";
import { Box, ChakraProvider } from "@chakra-ui/react";

function MyComp() {
  return (
    <Box
      fontSize={{ base: "11px", md: "15px", lg: "20px" }}
      bgColor={"blue.200"}
      w={"1200px"}
    >
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem earum
      maiores, odit quaerat quis quisquam.
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
