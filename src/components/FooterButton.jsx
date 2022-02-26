import { Button, Flex } from "@chakra-ui/react";
import React from "react";

import { useStep } from "../contexts";

export const FooterButton = ({
  prevStep,
  nextStep,
  disabledBack,
  disabledNext,
  onClick,
  disabledAdd,
  isLoading,
}) => {
  const { step } = useStep();

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
        {step === 4 ? (
          <Button
            _focus={{ borderColor: "none" }}
            w="10rem"
            h={"4rem"}
            bg="grey"
            color={"#fff"}
            onClick={onClick}
            isLoading={isLoading}
            isDisabled={disabledAdd}
            _hover={{ opacity: "0.8" }}
            _disabled={{ cursor: "not-allowed" }}
          >
            Add
          </Button>
        ) : (
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
        )}
      </Flex>
    </>
  );
};
