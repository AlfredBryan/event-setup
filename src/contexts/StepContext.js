import React, { createContext, useContext, useState } from "react";

const StepContext = createContext(1);

const StepProvider = ({ children }) => {
  const [step, setStep] = useState(1);

  return (
    <StepContext.Provider value={{ step, setStep }}>
      {children}
    </StepContext.Provider>
  );
};

export default StepProvider;

export const useStep = () => useContext(StepContext);
