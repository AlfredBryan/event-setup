import { Button, Flex } from "@chakra-ui/react";
import React from "react";

export const FooterButton = ({
  prevStep,
  nextStep,
  disabledBack,
  disabledNext,
}) => {

  return (
    <>
      <Flex justify={"flex-end"} mt="10rem" align={"center"} gap={"20px"}>
        <Button
          _focus={{ borderColor: "none" }}
          border="1px solid grey"
          w="10rem"
          h={"4rem"}
          bg="#fff"
          onClick={prevStep}
          isDisabled={disabledBack}
          _disabled={{ cursor: "not-allowed" }}
        >
          Back
        </Button>

        <Button
          _focus={{ borderColor: "none" }}
          w="10rem"
          h={"4rem"}
          bg="grey"
          color={"#fff"}
          onClick={nextStep}
          isDisabled={disabledNext}
          _hover={{ opacity: "0.8" }}
          _disabled={{ cursor: "not-allowed" }}
        >
          Next
        </Button>
      </Flex>
    </>
  );
};
