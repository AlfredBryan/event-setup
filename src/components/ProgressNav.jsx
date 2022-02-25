import { Box, Flex } from "@chakra-ui/react";
import React from "react";

import { Step } from "./Step";
import { useStep, useSelected } from "../contexts";

const ProgressNav = () => {
  const { step } = useStep();
  const { selected } = useSelected();

  return (
    <Flex w={"100%"} justify={"center"}>
      <Box mt="3rem" w="60%">
        <Flex align={"center"}>
          <Step step={"1"} active={step === 1 ? true : false} name={"Genre"} />
          <Box mb="1.2rem" w={"150px"} borderBottom={"2px solid grey"} />
          <Step
            step={"2"}
            active={step === 2 ? true : false}
            name={"Subgenre"}
          />
          <Box mb="1.2rem" w={"150px"} borderBottom={"2px solid grey"} />
          <Step
            step={"3"}
            active={step === 3 ? true : false}
            name={"Add new subgenre"}
          />
          {selected === "add_new" && (
            <Flex justify={"space-between"} align={"center"}>
              <Box mb="1.2rem" w={"150px"} borderBottom={"2px solid grey"} />
              <Step
                step={"4"}
                active={step === 4 ? true : false}
                name={"Information"}
              />
            </Flex>
          )}
        </Flex>
      </Box>
    </Flex>
  );
};

export { ProgressNav };
