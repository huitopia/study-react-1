import React from "react";
import {
  ChakraProvider,
  Checkbox,
  Radio,
  RadioGroup,
  Switch,
  Textarea,
} from "@chakra-ui/react";

function MyComp() {
  return (
    <div>
      <Checkbox>Lorem.</Checkbox>
      <Checkbox>Lorem2</Checkbox>
      <Checkbox>Lorem3</Checkbox>
      <hr />
      <RadioGroup>
        <Radio value={"1"}>a1</Radio>
        <Radio value={"2"}>a2</Radio>
        <Radio value={"3"}>a3</Radio>
      </RadioGroup>
      <hr />
      <Switch>switch</Switch>
      <hr />
      <Textarea />
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
