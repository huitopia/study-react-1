import React from "react";
import { Box, ChakraProvider } from "@chakra-ui/react";

function MyComp() {
  return (
    <div>
      <Box
        bgColor={"blue.200"}
        w={"100px"}
        _hover={{
          bgColor: "pink.100",
        }}
      >
        Lorem ipsum dolor sit.
      </Box>
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
