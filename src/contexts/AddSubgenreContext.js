import React, { createContext, useContext, useState } from "react";

const initialState = {
  id: "",
  name: "",
  isDescriptionRequired: true,
};

const AddSubgenreContext = createContext(initialState);

const AddSubgenreProvider = ({ children }) => {
  const [state, setState] = useState(initialState);

  return (
    <AddSubgenreContext.Provider value={{ state, setState }}>
      {children}
    </AddSubgenreContext.Provider>
  );
};

export default AddSubgenreProvider;

export const useAddSubgenre = () => useContext(AddSubgenreContext);
