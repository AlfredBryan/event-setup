import { Button, Flex } from "@chakra-ui/react";
import React from "react";

export const FinishButton = ({ prevStep, disabledAdd, onClick, isLoading }) => {
  return (
    <>
      <Flex
        mb="5rem"
        justify={"flex-end"}
        mt="10rem"
        align={"center"}
        gap={"20px"}
      >
        <Button
          _focus={{ borderColor: "none" }}
          border="1px solid grey"
          w="10rem"
          h={"4rem"}
          bg="#fff"
          onClick={prevStep}
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
          onClick={onClick}
          isLoading={isLoading}
          isDisabled={disabledAdd}
          _hover={{ opacity: "0.8" }}
          _disabled={{ cursor: "not-allowed" }}
        >
          Add
        </Button>
      </Flex>
    </>
  );
};
