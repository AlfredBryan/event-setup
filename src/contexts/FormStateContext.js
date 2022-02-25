import React, { createContext, useContext, useState } from "react";

const initialState = {
  book_title: "",
  author: "",
  isbn: "",
  publisher: "",
  date_published: "",
  number_of_pages: "",
  format: "",
  edition: "",
  edition_language: "",
  description: "",
};

const FormContext = createContext(initialState);

const FormProvider = ({ children }) => {
  const [state, setState] = useState(initialState);

  return (
    <FormContext.Provider value={{ state, setState }}>
      {children}
    </FormContext.Provider>
  );
};

export default FormProvider;

export const useForm = () => useContext(FormContext);
