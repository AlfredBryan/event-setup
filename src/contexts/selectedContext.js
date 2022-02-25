import React, { createContext, useContext, useState } from "react";

const SelectedContext = createContext("");

const SelectedProvider = ({ children }) => {
  const [selected, setSelected] = useState("");

  return (
    <SelectedContext.Provider value={{ selected, setSelected }}>
      {children}
    </SelectedContext.Provider>
  );
};

export default SelectedProvider;

export const useSelected = () => useContext(SelectedContext);
