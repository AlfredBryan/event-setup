import { useSubGenre, useAddSubgenre, useStep } from "../contexts";

export const useAddGenre = ({ nextStep }) => {
  const { state, setState } = useAddSubgenre();
  const { subGenre, setSubGenre } = useSubGenre();
  const { setStep } = useStep();

  const handleAddSubgenre = (name) => {
    const newGenre = [
      ...subGenre,
      {
        id: "",
        name: name,
        isDescriptionRequired: true,
      },
    ];
    setSubGenre(newGenre);
  };

  const handleUpdateSubgenre = () => {
    handleAddSubgenre(state.name);
    setTimeout(() => {
      setStep(4);
    }, 1000);
  };
  return { state, setState, handleUpdateSubgenre };
};
