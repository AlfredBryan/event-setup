import { Flex } from "@chakra-ui/react";
import React from "react";

function CloseBtn(props) {
  const { closemodal, children, ...rest } = props;

  return (
    <Flex
      align="center"
      position="absolute"
      cursor="pointer"
      {...rest}
      onClick={closemodal}
    >
      {children}
    </Flex>
  );
}

export default CloseBtn;
