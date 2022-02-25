import React from "react";
import SubGenreProvider from "./SubGenreContext";
import StepProvider from "./StepContext";
import ActiveProvider from "./ActiveContext";
import SubProvider from "./SubContext";
import SelectedProvider from "./selectedContext";
import AddSubgenreProvider from "./AddSubgenreContext";
import LoadingProvider from "./LoadingContext";
import ModalProvider from "./ModalContext";
import FormProvider from "./FormStateContext";

const ContextProviders = ({ children }) => {
  return (
    <FormProvider>
      <ModalProvider>
        <LoadingProvider>
          <AddSubgenreProvider>
            <SelectedProvider>
              <SubProvider>
                <ActiveProvider>
                  <StepProvider>
                    <SubGenreProvider>{children}</SubGenreProvider>
                  </StepProvider>
                </ActiveProvider>
              </SubProvider>
            </SelectedProvider>
          </AddSubgenreProvider>
        </LoadingProvider>
      </ModalProvider>
    </FormProvider>
  );
};

export default ContextProviders;
