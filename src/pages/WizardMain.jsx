import React from "react";

import { useWizard } from "../hooks";
import { genres } from "../data";
import StepFour from "./StepFour";
import StepOne from "./StepOne";
import StepThree from "./StepThree";
import StepTwo from "./StepTwo";

export const WizardMain = () => {
  const {
    subGenre,
    selected,
    nextStep,
    prevStep,
    popSub,
    nextAvailableStep,
    step,
  } = useWizard();

  switch (true) {
    case step === 1:
      return (
        <StepOne step={0} genres={genres} popSub={popSub} nextStep={nextStep} />
      );
    case step === 2:
      return (
        <StepTwo
          nextStep={nextStep}
          subgenre={subGenre}
          prevStep={prevStep}
          nextAvailableStep={nextAvailableStep}
        />
      );
    case step === 3:
      return selected === "add_new" ? (
        <StepThree prevStep={prevStep} nextStep={nextStep} />
      ) : (
        <StepFour prevStep={prevStep} />
      );
    case step === 4:
      return <StepFour prevStep={prevStep} />;
    default:
      return step;
  }
};
