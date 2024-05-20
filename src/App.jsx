import React from "react";
import { Box, Center, ChakraProvider, Flex, Spacer } from "@chakra-ui/react";

function App(props) {
  return (
    <ChakraProvider>
      <Flex justify={"space-evenly"}>
        <Box bgColor={"blue.200"}>Lorem.</Box>
        <Box bgColor={"green.200"}>Lorem.</Box>
        <Box bgColor={"red.200"}>Lorem.</Box>
      </Flex>
      <hr />
      <Flex justify={"space-evenly"}>
        <Box bgColor={"blue.200"}>Lorem.</Box>
        <Box bgColor={"green.200"}>Lorem.</Box>
        <Spacer />
        <Box bgColor={"red.200"}>Lorem.</Box>
      </Flex>
      <hr />
      <Center>
        <Box bgColor={"blue.200"}>Lorem.</Box>
      </Center>
      <Center w={{ base: "100%", md: "500%" }}>
        <Box bgColor={"green.200"}>Lorem.</Box>
      </Center>
      <Box bgColor={"red.200"}>Lorem.</Box>
    </ChakraProvider>
  );
}

export default App;
