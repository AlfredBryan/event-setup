import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import ContextProviders from "./contexts/ContextProviders";

import { WizardMain } from "./pages";
import theme from "./theme";

function App() {
  return (
    <>
      <ContextProviders>
        <ChakraProvider theme={theme}>
          <WizardMain />
        </ChakraProvider>
      </ContextProviders>
    </>
  );
}

export default App;
