import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import { ProgressNav } from "./components";
import ContextProviders from "./contexts/ContextProviders";

import { WizardMain } from "./pages";
import theme from "./theme";

function App() {
  return (
    <>
      <ContextProviders>
        <ChakraProvider theme={theme}>
          <ProgressNav />
          <WizardMain />
        </ChakraProvider>
      </ContextProviders>
    </>
  );
}

export default App;
