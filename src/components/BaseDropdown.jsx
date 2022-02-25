import { Box, Text } from "@chakra-ui/react";
import React from "react";
import Select from "react-select";

export const BaseDropdown = ({ label, options, onChange, w, ...rest }) => {
  const colourStyles = {
    control: (styles) => ({
      ...styles,
      backgroundColor: "#fff",
      width: w || "100%",
      height: "3.5rem",
      border: "1px solid grey",
    }),
  };

  return (
    <Box mb="2rem" {...rest} className="dropDown">
      <Text fontSize="1.2rem" as="label" mb="2rem">
        {label}
      </Text>
      <Select
        onChange={onChange}
        menuPosition="fixed"
        options={options}
        styles={colourStyles}
        name={rest.name}
      />
    </Box>
  );
};
