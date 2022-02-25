import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";

import { CenterModal } from "../components";
import { useModal } from "../contexts";

export const SuccessModal = ({ handleAddAnother }) => {
  const { isOpen, setIsOpen } = useModal();
  return (
    <>
      <CenterModal showModal={isOpen} setShowModal={setIsOpen}>
        <Flex justify={"center"} w="100%">
          <Box textAlign={"center"}>
            <Image
              w={"20rem"}
              h={"20rem"}
              src="https://icons.veryicon.com/png/o/miscellaneous/cloud-call-center/success-24.png"
            />
            <Text fontSize={"16px"} fontWeight={"bold"}>
              Book added successfully
            </Text>
            <Button
              mt="3rem"
              mb="5rem"
              _focus={{ borderColor: "none" }}
              w="25rem"
              h={"4rem"}
              bg="grey"
              color={"#fff"}
              _hover={{ opacity: "0.8" }}
              onClick={handleAddAnother}
            >
              Add another book
            </Button>
          </Box>
        </Flex>
      </CenterModal>
    </>
  );
};
