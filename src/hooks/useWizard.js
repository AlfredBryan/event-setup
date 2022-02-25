import { useSubGenre, useStep, useActive, useSelected } from "../contexts";

export const useWizard = () => {
  const { step, setStep } = useStep();
  const { subGenre, setSubGenre } = useSubGenre();
  const { setActive } = useActive();
  const { selected, setSelected } = useSelected();

  const nextStep = () => {
    if (step >= 3) return;
    setStep(step + 1);
  };
  const prevStep = () => {
    if (step > 0) setStep(step - 1);
  };

  const popSub = (data) => {
    setSubGenre(data.subgenres);
    setActive(data.name);
  };

  const nextAvailableStep = () => {
    setSelected("add_new");
    setStep(3);
  };

  return {
    subGenre,
    selected,
    nextStep,
    prevStep,
    popSub,
    nextAvailableStep,
    step,
  };
};
