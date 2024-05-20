import React from "react";
import { Box, ChakraProvider } from "@chakra-ui/react";

function MyBox() {
  return (
    <Box
      textTransform="uppercase"
      fontSize="xs"
      fontWeight="semibold"
      lineHeight="10"
      bg="blue.300"
      w="50%"
      h={"80px"}
      p={4}
      color="white"
      borderWidth="1px"
      mb="2"
    >
      This is the Box
    </Box>
  );
}

function App(props) {
  return (
    <ChakraProvider>
      <Box>
        <MyBox />
        <MyBox />
      </Box>
    </ChakraProvider>
  );
}

export default App;
