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
import ArrayProvider from "./ArrayContext";

const ContextProviders = ({ children }) => {
  return (
    <SelectedProvider>
      <ArrayProvider>
        <FormProvider>
          <ModalProvider>
            <LoadingProvider>
              <AddSubgenreProvider>
                <SubProvider>
                  <ActiveProvider>
                    <StepProvider>
                      <SubGenreProvider>{children}</SubGenreProvider>
                    </StepProvider>
                  </ActiveProvider>
                </SubProvider>
              </AddSubgenreProvider>
            </LoadingProvider>
          </ModalProvider>
        </FormProvider>
      </ArrayProvider>
    </SelectedProvider>
  );
};

export default ContextProviders;
