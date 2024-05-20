import React from "react";
import {
  Button,
  ChakraProvider,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";

function MyComp() {
  const { isOpen, onClose, onOpen } = useDisclosure();
  return (
    <div>
      <Button onClick={onOpen}>open</Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay>
          <ModalContent>
            <ModalHeader>title</ModalHeader>
            <ModalBody>Lorem ipsum dolor.</ModalBody>
            <ModalFooter>
              <Button onClick={onClose}>close</Button>
              <Button colorScheme={"blue"}>save</Button>
            </ModalFooter>
          </ModalContent>
        </ModalOverlay>
      </Modal>
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
