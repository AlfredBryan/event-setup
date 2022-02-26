import { Box, Button, Flex } from "@chakra-ui/react";
import React from "react";

import { FooterButton } from "../components";
import { useSub } from "../contexts";

const StepTwo = ({
  subgenre,
  prevStep,
  setProgressNavItems,
  nextAvailableStep,
  addNew,
}) => {
  const { subtitle, setSubtitle } = useSub();

  return (
    <>
      <Flex w={"100%"} justify={"center"}>
        <Box w="56%">
          <Flex mt="10rem" flexWrap={"wrap"} gap={"5rem"}>
            {subgenre?.map((gen) => (
              <Button
                key={gen.id}
                w="16rem"
                h={"6rem"}
                _focus={{ borderColor: "none" }}
                fontSize={"16px"}
                color={subtitle === gen.name ? "#fff" : "black"}
                bg={subtitle === gen.name ? "grey" : "#fff"}
                border={"1px solid grey"}
                _hover={{ bg: "grey", color: "#fff" }}
                onClick={() => setSubtitle(gen.name)}
              >
                {gen.name}
              </Button>
            ))}
            <Button
              w="16rem"
              h={"6rem"}
              fontSize={"16px"}
              _focus={{ borderColor: "none" }}
              bg="#fff"
              border={"1px solid grey"}
              _hover={{ bg: "grey", color: "#fff" }}
              onClick={addNew}
            >
              Add new
            </Button>
          </Flex>
          <FooterButton
            prevStep={prevStep}
            nextStep={nextAvailableStep}
            disabledNext={subtitle === ""}
          />
        </Box>
      </Flex>
    </>
  );
};

export default StepTwo;
