import { Box, Checkbox, Flex, Text } from "@chakra-ui/react";
import React from "react";

import { BaseInput, FooterButton, ProgressNav } from "../components";
import { useAddGenre } from "../hooks";

const StepThree = ({ nextStep, prevStep }) => {
  const { state, setState, handleUpdateSubgenre } = useAddGenre({ nextStep });
  return (
    <>
      <ProgressNav step={3} />
      <Flex w={"100%"} justify={"center"}>
        <Box w="56%" mt="4rem">
          <BaseInput
            placeholder={"Subgenre name"}
            onChange={(e) => setState({ name: e.target.value })}
          />
          <Flex mt="2rem" align={"center"} gap={"2rem"}>
            <Checkbox size={"lg"} />
            <Text>Description is required for this subgenre</Text>
          </Flex>
          <FooterButton
            nextStep={handleUpdateSubgenre}
            disabledNext={state.name === ""}
            prevStep={prevStep}
          />
        </Box>
      </Flex>
    </>
  );
};

export default StepThree;
