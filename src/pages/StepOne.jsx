import { Box, Button, Flex } from "@chakra-ui/react";
import React from "react";

import { FooterButton, ProgressNav } from "../components";
import { useActive } from "../contexts";

const StepOne = ({ genres, popSub, nextStep }) => {
  const { active } = useActive();

  return (
    <>
      <ProgressNav step={1} />
      <Flex w={"100%"} justify={"center"}>
        <Box w="56%">
          <Flex mt="10rem" flexWrap={"wrap"} gap={"5rem"}>
            {genres?.map((gen) => (
              <Button
                key={gen.id}
                _focus={{ borderColor: "none" }}
                w="16rem"
                h={"6rem"}
                color={gen.name === active ? "#fff" : "black"}
                fontSize={"16px"}
                bg={gen.name === active ? "grey" : "#fff"}
                border={"1px solid grey"}
                _hover={{ bg: "grey", color: "#fff" }}
                onClick={() => popSub(gen)}
              >
                {gen.name}
              </Button>
            ))}
          </Flex>
          <FooterButton
            nextStep={nextStep}
            disabledNext={active === ""}
            disabledBack={true}
          />
        </Box>
      </Flex>
    </>
  );
};

export default StepOne;
