import React, { createContext, useContext, useState } from "react";

const SubContext = createContext("");

const SubProvider = ({ children }) => {
  const [subtitle, setSubtitle] = useState("");

  return (
    <SubContext.Provider value={{ subtitle, setSubtitle }}>
      {children}
    </SubContext.Provider>
  );
};

export default SubProvider;

export const useSub = () => useContext(SubContext);
