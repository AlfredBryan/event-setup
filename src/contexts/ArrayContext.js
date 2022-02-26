import React, { createContext, useContext, useState } from "react";

import { navArray } from "../data";

const ArrayContext = createContext(navArray);

const ArrayProvider = ({ children }) => {
  const [data, setData] = useState(navArray);

  return (
    <ArrayContext.Provider value={{ data, setData }}>
      {children}
    </ArrayContext.Provider>
  );
};

export default ArrayProvider;

export const useArray = () => useContext(ArrayContext);
