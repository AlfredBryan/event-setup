import { Flex, Text } from "@chakra-ui/react";
import React from "react";

const Step = ({ active, step, name, children, ...rest }) => {
  return (
    <>
      <Flex direction={"column"} align={"center"} w="15%">
        <Flex
          align={"center"}
          justify={"center"}
          color={active ? "#fff" : "black"}
          {...rest}
          bg={active ? "grey" : "#b2caf3"}
          h={"4rem"}
          w={"4rem"}
          borderRadius={"100%"}
        >
          {step}
        </Flex>
        <Text fontFamily={"bold"} fontSize={"12px"}>
          {name}
        </Text>
      </Flex>
    </>
  );
};

export { Step };
