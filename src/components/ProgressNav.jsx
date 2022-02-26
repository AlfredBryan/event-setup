import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";

import { Step } from "./Step";
import { useStep, useArray } from "../contexts";

const ProgressNav = () => {
  const { step } = useStep();
  const { data } = useArray();

  return (
    <Flex w={"100%"} justify={"center"}>
      <Box mt="3rem" w="60%">
        <Text ml="3rem" fontFamily={"bold"} fontSize={"16px"}>
          Add book - New book
        </Text>
        <Flex align={"center"}>
          {data?.map((nav, i, arrayData) => (
            <Flex align={"center"} key={i}>
              <Step
                step={nav?.step}
                active={step === i + 1 ? true : false}
                name={nav.name}
              />
              {i + 1 < arrayData.length && (
                <Box mb="1.2rem" w={"150px"} borderBottom={"2px solid grey"} />
              )}
            </Flex>
          ))}
        </Flex>
      </Box>
    </Flex>
  );
};

export { ProgressNav };
