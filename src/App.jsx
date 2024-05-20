import React from "react";
import { Button, ChakraProvider, useToast } from "@chakra-ui/react";

function App(props) {
  const toast = useToast();
  return (
    <ChakraProvider>
      <Button
        onClick={() => {
          toast({
            title: "title",
            description: "desc",
            position: "top",
            status: "success",
            isClosable: true,
            duration: 1500,
          });
        }}
      ></Button>
    </ChakraProvider>
  );
}

export default App;
