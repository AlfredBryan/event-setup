import { Box, Input, Text } from "@chakra-ui/react";
import React from "react";

export const BaseInput = ({ placeholder, label, type, width, ...rest }) => {
  return (
    <Box mb="2rem">
      <Text fontSize="1.2rem" as="label">
        {label}
      </Text>
      <Input
        focusBorderColor="grey"
        fontSize="1.3rem"
        type={type}
        bg="#fff"
        border="1px solid grey"
        borderRadius="6px"
        h="3.5rem"
        w={width || "100%"}
        px="1.6rem"
        placeholder={placeholder}
        {...rest}
      />
    </Box>
  );
};
