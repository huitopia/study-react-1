import React from "react";
import {
  ChakraProvider,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";

function MyComp() {
  return (
    <div>
      <FormControl>
        <FormLabel>name</FormLabel>
        <Input />
      </FormControl>
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
