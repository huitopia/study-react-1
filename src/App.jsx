import React from "react";
import { Box, ChakraProvider } from "@chakra-ui/react";

function MyBox1() {
  return (
    <Box bgColor={"tomato"} m={1}>
      Lorem ipsum dolor sit.
    </Box>
  );
}
function MyBox2() {
  return (
    <Box bgColor={"blue.300"} m={2}>
      Lorem ipsum dolor sit.
    </Box>
  );
}
function MyBox3() {
  return (
    <Box m={10} bgColor={"pink"}>
      Lorem ipsum dolor sit.
    </Box>
  );
}

function App(props) {
  return (
    <ChakraProvider>
      <MyBox1 />
      <MyBox2 />
      <MyBox3 />
    </ChakraProvider>
  );
}

export default App;
