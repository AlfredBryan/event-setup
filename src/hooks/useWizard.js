/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";

import {
  useSubGenre,
  useStep,
  useActive,
  useArray,
  useSub,
  useSelected,
} from "../contexts";

export const useWizard = () => {
  const { step, setStep } = useStep();
  const { subGenre, setSubGenre } = useSubGenre();
  const { setActive } = useActive();
  const { selected, setSelected } = useSelected();
  const { data, setData } = useArray();
  const { subtitle } = useSub();

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

  const setProgressNavItems = () => {
    let items = [...data];
    if (selected === "add_new") {
      items[2].step = 3;
      items[2].name = "Add new subgenre";
      items.push({
        step: 4,
        name: "information",
      });
    } else {
      if (subtitle) {
        items[2].step = 3;
        items[2].name = "Information";
      }
    }
    setData(items);
  };

  const nextAvailableStep = () => {
    setSelected("add_new");
    setStep(3);
  };

  useEffect(() => {
    setProgressNavItems();
  }, [selected]);

  return {
    subGenre,
    selected,
    nextStep,
    prevStep,
    popSub,
    step,
    setProgressNavItems,
    nextAvailableStep,
  };
};
