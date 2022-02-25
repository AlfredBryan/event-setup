import React, { createContext, useContext, useState } from "react";

const ActiveContext = createContext("");

const ActiveProvider = ({ children }) => {
  const [active, setActive] = useState("");

  return (
    <ActiveContext.Provider value={{ active, setActive }}>
      {children}
    </ActiveContext.Provider>
  );
};

export default ActiveProvider;

export const useActive = () => useContext(ActiveContext);
