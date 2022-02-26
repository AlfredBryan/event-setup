import { Box, Flex, Text, Textarea } from "@chakra-ui/react";
import React from "react";

import {
  BaseDropdown,
  BaseInput,
  FinishButton,
  SuccessModal,
} from "../components";
import { useAddBooks } from "../hooks";

const StepFour = ({ prevStep }) => {
  const { isLoading, fetchMethod, handleAddAnother, state, handleChange } =
    useAddBooks();

  return (
    <>
      <Flex w={"100%"} justify={"center"}>
        <Box mt="2rem" ml="3%" w="57%">
          <BaseInput
            name="book_title"
            value={state.book_title}
            onChange={handleChange}
            label={"Book title"}
          />
          <BaseInput
            name="author"
            value={state.author}
            onChange={handleChange}
            label={"Author"}
          />
          <BaseInput
            name="isbn"
            value={state.isbn}
            onChange={handleChange}
            label={"ISBN"}
          />
          <BaseInput
            name="publisher"
            value={state.publisher}
            onChange={handleChange}
            label={"Publisher"}
          />
          <Box width={"25%"}>
            <BaseInput
              name="date_published"
              value={state.date_published}
              onChange={handleChange}
              label={"Date published"}
            />
          </Box>
          <Box width={"20%"}>
            <BaseInput
              name="number_of_pages"
              value={state.number_of_pages}
              onChange={handleChange}
              label={"Number of pages"}
            />
          </Box>
          <Box w="25%">
            <BaseDropdown
              value={state.format}
              onChange={(e) =>
                handleChange({ target: { name: "format", value: e.target } })
              }
              label={"Format"}
            />
          </Box>
          <Flex gap={"3rem"} align={"center"} justify={"space-between"} w="55%">
            <Box width={"100%"}>
              <BaseInput
                name="edition"
                value={state.edition}
                onChange={handleChange}
                label={"Edition"}
              />
            </Box>
            <Box w="100%">
              <BaseDropdown
                value={state.edition_language}
                onChange={(e) =>
                  handleChange({
                    target: { name: "edition_language", value: e.target },
                  })
                }
                label={"Edition language"}
              />
            </Box>
          </Flex>
          <Box>
            <Text fontSize={"1.2rem"}>Description</Text>
            <Textarea
              focusBorderColor="grey"
              fontSize="1.3rem"
              bg="#fff"
              border="1px solid grey"
              borderRadius="6px"
              h="3.5rem"
              w="100%"
              px="1.6rem"
              resize={"none"}
              name="description"
              value={state.description}
              onChange={handleChange}
            />
          </Box>
          <FinishButton
            isLoading={isLoading}
            onClick={fetchMethod}
            prevStep={prevStep}
          />
        </Box>
      </Flex>
      <SuccessModal handleAddAnother={handleAddAnother} />
    </>
  );
};

export default StepFour;
