import { CloseIcon } from "@chakra-ui/icons";
import { Box, Text } from "@chakra-ui/react";
import React from "react";

import CloseBtn from "./CloseBtn";

function CenterModal(props) {
  const { title, children, showModal, setShowModal } = props;

  function closemodal() {
    setShowModal(false);
  }

  return (
    <>
      {showModal && (
        <Box
          w="100vw"
          h="100vh"
          position="fixed"
          zIndex="100"
          top="0"
          left="0"
          background="rgba(255, 255, 255, .6)"
          style={{ backdropFilter: "blur(2px)" }}
        >
          <Box
            w="510px"
            p="10px 10px 10px"
            boxShadow="0px 4px 8px rgba(0, 0, 0, 0.1)"
            bg="#fff"
            position="absolute"
            top="40%"
            left="50%"
            border="1px solid grey"
            transform="translate(-50%, -50%)"
            zIndex=""
          >
            <CloseBtn right="15px" closemodal={closemodal}>
              <CloseIcon />
            </CloseBtn>
            <Text
              wordBreak="break-all"
              textTransform="capitalize"
              fontSize="2.4rem"
              mb="4rem"
              textAlign={props.align || "left"}
            >
              {title}
            </Text>
            <Box>{children}</Box>
          </Box>
        </Box>
      )}
    </>
  );
}

export { CenterModal };
