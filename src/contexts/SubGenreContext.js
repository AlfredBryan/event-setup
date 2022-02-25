import React, { createContext, useContext, useState } from "react";

const SubGenreContext = createContext([]);

const SubGenreProvider = ({ children }) => {
  const [subGenre, setSubGenre] = useState([]);

  return (
    <SubGenreContext.Provider value={{ subGenre, setSubGenre }}>{children}</SubGenreContext.Provider>
  );
};

export default SubGenreProvider;

export const useSubGenre = () => useContext(SubGenreContext);
